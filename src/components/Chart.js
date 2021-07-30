import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import { getMetricBounds, getStatAttribute } from '../utils';
import Lines from './Lines';
import DataPoints from './DataPoints';
import NarrativeAnnotations from './NarrativeAnnotations';

import { regularSeasonAnnotations, playoffsAnnotations } from '../narrativeAnnotations';

const dimensions = {
    maxHeight: 800,
    minWidth: 800,
    margin: 64,
}

const getChartBounds = (stat, bounds) => {
    const getLower = val => 0.99 * Number(val);
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
        maxDate,
        narrativeMode,
        rawData,
        selectedTeam,
        showOnlyPlayoffs,
        stat,
        updateSelectedTeam,
    } = props;

    const { maxHeight, minWidth, margin } = dimensions;

    const svgRef = useRef();

    const [bounds, setBounds] = useState({});
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [displayData, setDisplayData] = useState();
    const [narrativeAnnotationData, setNarrativeAnnotationData] = useState();

    const [scaleX, setScaleX] = useState(() => () => {});
    const [scaleY, setScaleY] = useState(() => () => {});
    const [dataLineFunc, setDataLineFunc] = useState(() => () => {});
    const [selectedLineData, setSelectedLineData] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            if (svgRef && svgRef.current) {
                const newWidth = Math.max(minWidth, svgRef.current.parentElement.clientWidth - margin)
                const newHeight = Math.min(maxHeight, newWidth * 1.2);
                setWidth(newWidth);
                setHeight(newHeight);
            }
        }

        if (!width && !height) {
            handleResize();
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [svgRef, margin, width, height, minWidth, maxHeight]);

    useEffect(() => {
        const newBounds = getMetricBounds(rawData);

        setBounds(newBounds);
    }, [rawData]);

    useEffect(() => {
        const svgEl = d3.select(svgRef.current);

        // Get the root container
        const newSvg = svgEl.select('#chart-wrapper')
            .attr('transform', `translate(${margin}, 0)`);

        // Add X grid lines with labels
        const dateRangeData = showOnlyPlayoffs
            ? rawData.filter(game => !!game.playoff)
            : rawData;
        const xDomain = d3.extent(dateRangeData, d => new Date(d.date));
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

    }, [bounds, height, width, margin, rawData, stat, showOnlyPlayoffs]);

    useEffect(() => {
        if (narrativeMode && data) {
            const gameWithHighestPostElo = Object.values(data).reduce((highestEloGame, games) => {
                const lastGame = games[games.length - 1];

                return Number(lastGame.teamPostElo) > Number(highestEloGame.teamPostElo)
                    ? lastGame
                    : highestEloGame;
            }, { teamPostElo: 0 });

            if (gameWithHighestPostElo && gameWithHighestPostElo.team) {
                updateSelectedTeam(gameWithHighestPostElo.team);
            }

            if (showOnlyPlayoffs) {
                // TODO
            } else {
                const annotations = regularSeasonAnnotations.filter(annotation => {
                    return (new Date(annotation.date)) <= (new Date(maxDate));
                })

                setNarrativeAnnotationData(annotations);
            }
        }
    }, [narrativeMode, data, updateSelectedTeam, maxDate, showOnlyPlayoffs])

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
            setDisplayData([...orderedData, selectedTeamData].filter(d => d));
        }
    }, [data, selectedTeam, narrativeMode]);

    return (
        <svg
            className="w-full h-full transition-all ease-in-out"
            ref={svgRef}
            width={width}
            height={height + margin}
        >
            {width && height && (
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

                            {selectedLineData && (
                                <DataPoints
                                    chartHeight={height}
                                    chartWidth={width}
                                    data={selectedLineData.games}
                                    narrativeMode={narrativeMode}
                                    scaleX={scaleX}
                                    scaleY={scaleY}
                                    stat={stat}
                                />
                            )}

                            {narrativeMode && narrativeAnnotationData && (
                                <NarrativeAnnotations
                                    scaleX={scaleX}
                                    scaleY={scaleY}
                                    gameData={narrativeAnnotationData}
                                />
                            )}
                        </g>
                    )}
                </g>
            )}
        </svg>
    )
}

export default Chart;
