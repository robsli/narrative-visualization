import React, { useState } from 'react';

import Line from './Line';

const Lines = (props) => {
    const {
        data,
        selectedTeam,
        dataLineFunc,
        updateSelectedTeam,
    } = props;

    return (
        <g className="w=full h-full" id="data-lines-wrapper">
            { data && data.map(({ team, games }) => (
                <Line
                    key={`line-${team}`}
                    pathData={dataLineFunc(games)}
                    selectedTeam={selectedTeam}
                    team={team}
                    updateSelectedTeam={updateSelectedTeam}
                />
            ))}
        </g>
    );
}

export default Lines;
