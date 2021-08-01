import React, { useState } from 'react';

import { getStatAttribute } from '../utils';
import GameAnnotation from './GameAnnotation';

const DataPoint = (props) => {
    const {
        chartHeight,
        chartWidth,
        gameData,
        narrativeMode,
        scaleX,
        scaleY,
        stat,
    } = props;

    const x = scaleX(new Date(gameData.date));
    const y = scaleY(getStatAttribute(stat, gameData));

    const [isHovering, setIsHovering] = useState(false);

    const wonGame = gameData.teamScore > gameData.opponentScore;

    return (
        <g
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {isHovering && !narrativeMode && (
                <GameAnnotation
                    chartHeight={chartHeight}
                    chartWidth={chartWidth}
                    gameData={gameData}
                    stat={stat}
                    x={x}
                    y={y}
                />
            )}

            <circle
                className={`${wonGame ? 'text-green-500' : 'text-red-500'} cursor-help fill-current animate-pulse`}
                cx={x}
                cy={y}
                r={7}
            ></circle>

            <circle
                className="cursor-help text-white fill-current"
                cx={x}
                cy={y}
                r={5}
            ></circle>

            { Number(gameData.teamScore) > Number(gameData.opponentScore) && (
                <circle
                    className={`${wonGame ? 'text-green-500' : 'text-red-500'} animate-pulse cursor-help fill-current`}
                    cx={x}
                    cy={y}
                    r={3}
                ></circle>
            )}
        </g>
    )
}

export default DataPoint;
