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
        <g className="w-full h-full" id="data-points-wrapper">
            {data && data.map((game) => (
                <g key={`game-data-${game.date}`}>
                    <circle
                        className="text-blue-400 cursor-pointer fill-current"
                        cx={scaleX(new Date(game.date))}
                        cy={scaleY(getStatAttribute(stat, game))}
                        r={7}
                    ></circle>

                    <circle
                        className="text-white cursor-pointer fill-current"
                        cx={scaleX(new Date(game.date))}
                        cy={scaleY(getStatAttribute(stat, game))}
                        r={5}
                    ></circle>

                    { game.teamScore > game.opponentScore && (
                        <circle
                            className="animate-pulse text-blue-500 cursor-pointer fill-current"
                            cx={scaleX(new Date(game.date))}
                            cy={scaleY(getStatAttribute(stat, game))}
                            r={2}
                        ></circle>
                    )}
                </g>
            ))}
        </g>
    )
}

export default DataPoints;
