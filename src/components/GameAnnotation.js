import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';
import { annotationLabel, annotation } from 'd3-svg-annotation';

const GameAnnotation = (props) => {
    const {
        chartHeight,
        chartWidth,
        gameData,
        stat,
        x,
        y,
    } = props;

    const gRef = useRef();

    const dx = (x + 200) < chartWidth
        ? 50
        : -50;
    const dy = y < (chartHeight / 2)
        ? Math.min(100, chartHeight - y - 40)
        : Math.max(-100, - y + 40);

    const { team, teamScore, opponent, opponentScore, wins, losses, teamPreElo, teamPostElo, teamPreRaptor, playoff } = gameData || {};
    const wonGame = teamScore > opponentScore;
    const winLoss = wonGame
        ? `${team} improves to ${wins} - ${losses}.`
        : `${team} slides to ${wins} - ${losses}.`
    const eloDif = Number(teamPostElo) - Number(teamPreElo);
    const statUpDown = stat === 'elo'
        ? `Elo ${eloDif > 0
            ? 'improves by ' + eloDif.toFixed(2)
            : 'decreases by ' + Math.abs(eloDif).toFixed(2)
         } to ${Number(teamPostElo).toFixed(2)}`
        : `RAPTOR performance at ${Number(teamPreRaptor).toFixed(2)}`;

    const label = `${winLoss}\n${statUpDown}`;

    const annotations = [{
        x, y, dy, dx,
        note: {
            label,
            title: `${wonGame ? 'WIN against' : 'LOSS to'} ${opponent}\n(${teamScore} - ${opponentScore})`,
            bgPadding: 20,
            wrapSplitter: /\n/,
        },
        color: wonGame ? '#047857' : '#B91C1C',
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

export default GameAnnotation;
