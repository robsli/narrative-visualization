import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import { getMetricBounds } from '../utils';

const dimensions = {
    width: 800,
    height: 800,
    margins: 64,
}

const getChartBounds = (stat, bounds) => {
    switch (stat) {
        case 'elo':
            return [bounds.eloMin, bounds.eloMax];
        case 'raptor':
            return [bounds.raptorMin, bounds.raptorMax];
        case 'score':
            return [bounds.scoreMin, bounds.scoreMax];
        default:
            console.error('No bounds found for stat:', stat);
            return [0, 0]
    }
}

const Chart = (props) => {
    const {
        data,
        rawData,
        stat,
    } = props;

    const svgRef = useRef();

    const [bounds, setBounds] = useState({});

    useEffect(() => {
        const newBounds = getMetricBounds(rawData);
        console.log('bounds:', newBounds);

        setBounds(newBounds);
    }, [rawData, stat])

    useEffect(() => {
        const { height, width, margins } = dimensions;

        const xScale = d3.scaleTime()
            .domain(d3.extent(rawData, d => new Date(d.date)))
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain(getChartBounds(stat, bounds))
            .range([height, 0]);

        console.log('xScale:', xScale);
        console.log('yScale:', yScale);

        const svgEl = d3.select(svgRef.current);
        svgEl.selectAll('*').remove();

        // Create root container
        const svg = svgEl
            .append('g')
            .attr('transform', `translate(${margins}, ${margins})`);

        // Add X grid lines with labels
        const xAxis = d3.axisBottom(xScale)
            .ticks(5)
            .tickSize(-height + margins);
        const xAxisGroup = svg.append('g')
            .attr('transform', `translate(0, ${height - margins})`)
            .call(xAxis);
        // xAxisGroup.select('.domain').remove();
        // xAxisGroup.selectAll('line').attr('stroke', 'rgba(255, 255, 255, 0.2)');
        // xAxisGroup.selectAll("text")
        //     .attr("opacity", 0.5)
        //     .attr("color", "black")
        //     .attr("font-size", "0.75rem");

        // Add Y grid lines with labels
        const yAxis = d3.axisLeft(yScale)
            .ticks(5)
            .tickSize(-width)
        const yAxisGroup = svg.append('g').call(yAxis);

    }, [bounds, data, rawData]);

    return (
        <div className="w-full max-w-6xl p-6 border rounded shadow">
            Chart

            <svg
                className=""
                ref={svgRef}
                width={dimensions.width + (2 * dimensions.margins)}
                height={dimensions.height + (2 * dimensions.margins)}
            ></svg>
        </div>
    )
}

export default Chart;
