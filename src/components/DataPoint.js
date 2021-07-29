import React, { useState } from 'react';

import { getStatAttribute } from '../utils';
import Annotation from './Annotation';

const DataPoint = (props) => {
    const {
        chartHeight,
        chartWidth,
        gameData,
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
            {isHovering && (
                <Annotation
                    chartHeight={chartHeight}
                    chartWidth={chartWidth}
                    x={x}
                    y={y}
                    gameData={gameData}
                />
            )}

            <circle
                className={`${wonGame ? 'text-green-500' : 'text-red-500'} cursor-pointer fill-current animate-pulse`}
                cx={x}
                cy={y}
                r={7}
            ></circle>

            <circle
                className="text-white cursor-pointer fill-current"
                cx={x}
                cy={y}
                r={5}
            ></circle>

            { gameData.teamScore > gameData.opponentScore && (
                <circle
                    className={`${wonGame ? 'text-green-500' : 'text-red-500'} animate-pulse cursor-pointer fill-current`}
                    cx={x}
                    cy={y}
                    r={3}
                ></circle>
            )}
        </g>
    )
}

export default DataPoint;
