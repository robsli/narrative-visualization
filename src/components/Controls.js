import React, { useEffect, useState } from'react';

import { statSelectOptions, teamSelectOptions } from '../constants';

const Controls = (props) => {
    const {
        selectedStat,
        selectedTeam,
        updateSelectedStat,
        updateSelectedTeam,
    } = props;

    return (
        <div className="flex-nowrap flex space-x-4">
            <label className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500 uppercase">Team</span>
                <select
                    id="team-select"
                    className="px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                    onChange={({ target }) => updateSelectedTeam(target.value)}
                    value={selectedTeam}
                >
                    <option value='all'>All</option>
                    { teamSelectOptions.map((team) => (
                        <option key={team.value} value={team.value}>{team.label}</option>
                    ))}
                </select>
            </label>

            <label className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500 uppercase">Statistic</span>
                <select
                    id="statistic-select"
                    className="px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                    onChange={({ target }) => updateSelectedStat(target.value)}
                    value={selectedStat}
                >
                    { statSelectOptions.map((team) => (
                        <option key={team.value} value={team.value}>{team.label}</option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default Controls;
