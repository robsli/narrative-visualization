import React from 'react';

import { getStatAttribute } from '../utils'

const DataPoints = (props) => {
    const {
        data,
        scaleX,
        scaleY,
        stat,
    } = props;

    return (
        <g className="w-full h-full">
            {data && data.map((game) => (
                <circle
                    className="text-red-200 cursor-pointer fill-current"
                    key={`game-${game.date}`}
                    cx={scaleX(new Date(game.date))}
                    cy={scaleY(getStatAttribute(stat, game))}
                    r={4}
                ></circle>
            ))}
        </g>
    )
}

export default DataPoints;
