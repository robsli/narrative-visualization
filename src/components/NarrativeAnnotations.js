import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';
import { annotationLabel, annotation } from 'd3-svg-annotation';

const NarrativeAnnotations = (props) => {
    const {
        gameData,
        scaleX,
        scaleY,
    } = props;

    const gRef = useRef();

    const annotations = gameData.map(game => {
        const { date, elo, title, label, dx, dy } = game;

        return {
            x: scaleX(new Date(date)),
            y: scaleY(elo),
            dx,
            dy,
            note: { label, title },
            color: 'black'
        }
    });

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

export default NarrativeAnnotations;
