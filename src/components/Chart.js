import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import { getMetricBounds, getStatAttribute } from '../utils';
import Line from './Line';
import DataPoints from './DataPoints';

const dimensions = {
    height: 800,
    margin: 64,
}

const getChartBounds = (stat, bounds) => {
    const getLower = val => 0.95 * Number(val);
    const getUpper = val => 1.05 * Number(val);

    switch (stat) {
        case 'elo':
            return [getLower(bounds.eloMin), getUpper(bounds.eloMax)];
        case 'raptor':
            return [getLower(bounds.raptorMin), getUpper(bounds.raptorMax)];
        case 'score':
            return [getLower(bounds.scoreMin), getUpper(bounds.scoreMax)];
        default:
            console.error('No bounds found for stat:', stat);
            return [0, 0]
    }
}

const Chart = (props) => {
    const {
        data,
        rawData,
        selectedTeam,
        stat,
        updateSelectedTeam,
    } = props;

    const { height, margin } = dimensions;

    const svgRef = useRef();

    const [bounds, setBounds] = useState({});
    const [width, setWidth] = useState();
    const [displayData, setDisplayData] = useState();

    const [scaleX, setScaleX] = useState(() => () => {});
    const [scaleY, setScaleY] = useState(() => () => {});
    const [dataLineFunc, setDataLineFunc] = useState(() => () => {});
    const [selectedLineData, setSelectedLineData] = useState([]);

    useEffect(() => {
        if (svgRef && svgRef.current) {
            setWidth(svgRef.current.parentElement.clientWidth - margin);
        }
    }, [svgRef, margin]);

    useEffect(() => {
        const newBounds = getMetricBounds(rawData);
        console.log('bounds:', newBounds);

        setBounds(newBounds);
    }, [rawData]);

    useEffect(() => {
        const svgEl = d3.select(svgRef.current);

        // Get the root container
        const newSvg = svgEl.select('#chart-wrapper')
            .attr('transform', `translate(${margin}, ${margin})`);

        // Add X grid lines with labels
        const xScale = d3.scaleTime()
            .domain(d3.extent(rawData, d => new Date(d.date)))
            .range([0, width]);
        const xAxis = d3.axisBottom(xScale)
            .ticks(12)
            .tickSize(-height);
        newSvg.select('#x-axis').select('*').remove();
        const xAxisGroup = newSvg.select('#x-axis')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis);
        xAxisGroup.select('.domain')
            .attr('class', '');
        xAxisGroup.selectAll('line')
            .attr('class', 'text-gray-200');
        xAxisGroup.selectAll('text')
            .attr('class', 'font-md text-blue-500');

        // Add Y grid lines with labels
        const yScale = d3.scaleLinear()
            .domain(getChartBounds(stat, bounds))
            .range([height, 0]);
        const yAxis = d3.axisLeft(yScale)
            .ticks(5)
            .tickSize(-width)
        newSvg.select('#y-axis').select('*').remove();
        const yAxisGroup = newSvg.select('#y-axis').call(yAxis);
        yAxisGroup.select('.domain').remove();
        yAxisGroup.selectAll('line')
            .attr('class', 'text-gray-200');
        yAxisGroup.selectAll('text')
            .attr('class', 'font-md text-gray-800');

        const newDataLineFunc = d3.line()
            .x(d => xScale(new Date(d.date)))
            .y(d => yScale(getStatAttribute(stat, d)));

        setScaleX(() => xScale);
        setScaleY(() => yScale);
        setDataLineFunc(() => newDataLineFunc);

    }, [bounds, height, width, margin, rawData, stat]);

    useEffect(() => {
        if (data) {
            const { orderedData, selectedTeamData } = Object.entries(data).reduce(({ selectedTeamData, orderedData }, teamData) => {
                const [teamId, teamGames] = teamData;

                if (teamId === selectedTeam) {
                    return { selectedTeamData: { team: teamId, games: teamGames }, orderedData }
                } else {
                    return { selectedTeamData, orderedData: orderedData.concat({ team: teamId, games: teamGames }) }
                }
            }, { selectedTeamData: null, orderedData: [] });

            setSelectedLineData(selectedTeamData);
            setDisplayData([...orderedData, selectedTeamData]);
        }
    }, [data, selectedTeam]);

    return (
        <div className="max-w-screen-2xl w-full p-6 border rounded shadow">
            <h2>Chart</h2>

            <svg
                className="w-full"
                ref={svgRef}
                width={width}
                height={height + (2 * margin)}
            >
                <g id="chart-wrapper">
                    <g id="x-axis"></g>
                    <g id="y-axis"></g>
                    <g className="w-full h-full">
                        { displayData && displayData.map(({ team, games }) => (
                            <Line
                                key={`line-${team}`}
                                isSelected={team === selectedTeam}
                                pathData={dataLineFunc(games)}
                                selectedTeam={selectedTeam}
                                updateSelectedTeam={updateSelectedTeam}
                            />
                        ))}

                        { displayData && (
                            <DataPoints
                                data={selectedLineData.games}
                                scaleX={scaleX}
                                scaleY={scaleY}
                                stat={stat}
                            />
                        )}
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Chart;
