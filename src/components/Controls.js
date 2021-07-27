import React, { useEffect, useState } from'react';

import { statSelectOptions, teamSelectOptions, maxDateOptions } from '../constants';

import { getMonthLabel } from '../utils';

const Controls = (props) => {
    const {
        selectedStat,
        selectedTeam,
        maxDate,
        updateSelectedStat,
        updateSelectedTeam,
        updateMaxDate,
    } = props;

    const nextMonth = () => {
        const nextMonthIndex = maxDateOptions.indexOf(maxDate) + 1;

        updateMaxDate(maxDateOptions[nextMonthIndex]);
    }

    const prevMonth = () => {
        const prevMonthIndex = maxDateOptions.indexOf(maxDate) - 1;

        updateMaxDate(maxDateOptions[prevMonthIndex]);
    }

    return (
        <div className="flex-nowrap flex items-end mx-auto space-x-12">
            <div className="flex-nowrap flex space-x-4">
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
            </div>

            <div className="flex-nowrap flex items-end ml-8 space-x-2">
                <button
                    className="disabled:cursor-not-allowed disabled:text-gray-200 h-max-content px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                    disabled={maxDateOptions.indexOf(maxDate) <= 0}
                    onClick={prevMonth}
                >{`<`}</button>
                <label className="flex flex-col space-y-2">
                    <span className="text-sm font-medium text-gray-500 uppercase">Max Date</span>
                    <select
                        id="statistic-select"
                        className="px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                        onChange={({ target }) => updateMaxDate(target.value)}
                        value={maxDate}
                    >
                        <option key="all-option" value=''>All</option>
                        { maxDateOptions.map((option) => (
                            <option key={option} value={option}>{getMonthLabel(option)}</option>
                        ))}
                    </select>
                </label>
                <button
                    className="disabled:text-gray-200 disabled:cursor-not-allowed h-max-content px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                    disabled={!maxDate || maxDateOptions.indexOf(maxDate) >= maxDateOptions.length - 1}
                    onClick={nextMonth}
                >{`>`}</button>
            </div>
        </div>
    );
}

export default Controls;
