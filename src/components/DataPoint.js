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
                    selectedData={gameData}
                />
            )}

            <circle
                className="text-blue-400 cursor-pointer fill-current"
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
                    className="animate-pulse text-blue-500 cursor-pointer fill-current"
                    cx={x}
                    cy={y}
                    r={2}
                ></circle>
            )}
        </g>
    )
}

export default DataPoint;
