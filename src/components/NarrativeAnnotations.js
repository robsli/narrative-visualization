import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';
import { annotationLabel, annotation } from 'd3-svg-annotation';
import { getStatAttribute } from '../utils';

const NarrativeAnnotations = (props) => {
    const {
        gameData,
        scaleX,
        scaleY,
        stat,
    } = props;

    const gRef = useRef();

    const annotations = gameData.map(game => {
        const { date, title, label, dx, dy } = game;

        return {
            x: scaleX(new Date(date)),
            y: scaleY(getStatAttribute(stat, game)),
            dx,
            dy,
            note: { label, title, bgPadding: { top: 10, bottom: 10, left: 10, right: 10 } },
            color: 'black'
        }
    });

    const makeAnnotations = annotation()
        .editMode(true)
        .notePadding(15)
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

export default NarrativeAnnotations;
