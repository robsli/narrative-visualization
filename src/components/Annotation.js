import React, { useEffect, useRef, useState } from 'react';

import * as d3 from 'd3';
import { annotationLabel, annotation } from 'd3-svg-annotation';

const Annotation = (props) => {
    const {
        chartHeight,
        chartWidth,
        x,
        y,
        selectedData,
    } = props;

    const gRef = useRef();

    const dx = (x + 200) < chartWidth
        ? 50
        : -50;
    const dy = y < (chartHeight / 2)
        ? Math.max(-100, - y + 40)
        : Math.min(100, chartHeight - y - 20);

    const annotations = [{
        note: {
            label: 'Some cool stuff',
            title: 'Annotation Title'
        },
        className: 'text-blue-500',
        x,
        y,
        dy,
        dx,
    }]

    const makeAnnotations = annotation()
        .editMode(true)
        .type(annotationLabel)
        .annotations(annotations);

    useEffect(() => {
        if (gRef && gRef.current) {
            d3.select(gRef.current).call(makeAnnotations);
        }
    }, [makeAnnotations, gRef]);

    return (
        <g
            id="annotations-wrapper" className="annotation-group"
            ref={gRef}
        />
    );
}

export default Annotation;
