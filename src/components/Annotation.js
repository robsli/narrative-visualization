import React, { useEffect, useRef, useState } from 'react';

import * as d3 from 'd3';
import { annotationLabel, annotation } from 'd3-svg-annotation';

const Annotation = (props) => {
    const {
        chartHeight,
        chartWidth,
        x,
        y,
        gameData,
    } = props;

    const gRef = useRef();

    const dx = (x + 200) < chartWidth
        ? 50
        : -50;
    const dy = y < (chartHeight / 2)
        ? Math.max(-100, - y + 40)
        : Math.min(100, chartHeight - y - 20);

    const { team, teamScore, opponent, opponentScore, wins, losses } = gameData || {};
    const wonGame = teamScore > opponentScore;
    const label = wonGame
        ? `${team} improves to ${wins} - ${losses}`
        : `${team} slides to ${wins} - ${losses}`

    const annotations = [{
        x, y, dy, dx,
        note: {
            label,
            title: `${wonGame ? 'WIN against' : 'LOSS to'} ${opponent} (${teamScore} - ${opponentScore})`,
            bgPadding: 20,
        },
        color: wonGame ? '#10B981' : '#EF4444',
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
