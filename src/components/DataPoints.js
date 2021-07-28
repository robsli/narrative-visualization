import React from 'react';

import DataPoint from './DataPoint';

const DataPoints = (props) => {
    const {
        chartHeight,
        chartWidth,
        data,
        scaleX,
        scaleY,
        stat,
    } = props;

    return (
        <g className="w-full h-full" id="data-points-wrapper">
            {data && data.map((game) => (
                <DataPoint
                    key={`game-data-${game.date}`}
                    chartHeight={chartHeight}
                    chartWidth={chartWidth}
                    gameData={game}
                    scaleX={scaleX}
                    scaleY={scaleY}
                    stat={stat}
                />
            ))}
        </g>
    )
}

export default DataPoints;
