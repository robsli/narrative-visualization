import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import { getMetricBounds, getStatAttribute } from '../utils';
import Lines from './Lines';
import DataPoints from './DataPoints';

const dimensions = {
    height: 800,
    margin: 64,
}

const getChartBounds = (stat, bounds) => {
    const getLower = val => 0.98 * Number(val);
    const getUpper = val => 1.02 * Number(val);

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

        setBounds(newBounds);
    }, [rawData]);

    useEffect(() => {
        const svgEl = d3.select(svgRef.current);

        // Get the root container
        const newSvg = svgEl.select('#chart-wrapper')
            .attr('transform', `translate(${margin}, ${margin})`);

        // Add X grid lines with labels
        const xDomain = d3.extent(rawData, d => new Date(d.date));
        const lastDate = xDomain[1].setDate(xDomain[1].getDate() + 10);
        const xScale = d3.scaleTime()
            .domain([xDomain[0], lastDate])
            .range([0, width - margin]);
        const xAxis = d3.axisBottom(xScale)
            .ticks(d3.timeWeek, '\'%y %b %d')
            .tickSize(-height + margin);
        newSvg.select('#x-axis').select('*').remove();
        const xAxisGroup = newSvg.select('#x-axis')
            .attr('transform', `translate(0, ${height - margin})`)
            .call(xAxis);
        xAxisGroup.select('.domain')
            .attr('class', '');
        xAxisGroup.selectAll('line')
            .attr('class', 'text-gray-200');
        xAxisGroup.selectAll('text')
            .attr('class', 'text-base text-gray-500 transform -rotate-90 text-right')
            .attr('y', -6)
            .attr('x', -margin + 10);

        // Add Y grid lines with labels
        const yScale = d3.scaleLinear()
            .domain(getChartBounds(stat, bounds))
            .range([height - margin , 0]);
        const yAxis = d3.axisLeft(yScale)
            .ticks(5)
            .tickPadding(20)
            .tickSize(-width + margin);
        newSvg.select('#y-axis').select('*').remove();
        const yAxisGroup = newSvg.select('#y-axis').call(yAxis);
        yAxisGroup.select('.domain').remove();
        yAxisGroup.selectAll('line')
            .attr('class', 'text-gray-200');
        yAxisGroup.selectAll('text')
            .attr('class', 'text-base text-gray-800');

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
        <svg
            className="w-full transition-all ease-in-out"
            ref={svgRef}
            width={width}
            height={height + (2 * margin)}
        >
            <g id="chart-wrapper">
                <g id="x-axis" className=""></g>
                <g id="y-axis" className=""></g>
                { displayData && (
                    <g className="w-full h-full">
                        <Lines
                            data={displayData}
                            selectedTeam={selectedTeam}
                            dataLineFunc={dataLineFunc}
                            updateSelectedTeam={updateSelectedTeam}
                        />

                        <DataPoints
                            data={selectedLineData.games}
                            scaleX={scaleX}
                            scaleY={scaleY}
                            stat={stat}
                        />
                    </g>
                )}
            </g>
        </svg>
    )
}

export default Chart;
