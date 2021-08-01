import React from 'react';

import Line from './Line';

const Lines = (props) => {
    const {
        data,
        dataLineFunc,
        narrativeMode,
        selectedTeam,
        updateSelectedTeam,
    } = props;

    return (
        <g className="w-full h-full" id="data-lines-wrapper">
            { data && data.map(({ team, games }) => (
                games && games.length && (
                    <Line
                        key={`line-${team}`}
                        pathData={dataLineFunc(games)}
                        narrativeMode={narrativeMode}
                        selectedTeam={selectedTeam}
                        team={team}
                        updateSelectedTeam={updateSelectedTeam}
                    />
                )
            ))}
        </g>
    );
}

export default Lines;
