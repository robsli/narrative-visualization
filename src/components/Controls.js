import React from 'react';

import { statSelectOptions, teamSelectOptions, maxDateOptions } from '../constants';

import { getMonthLabel } from '../utils';
import { playoffOrder, playoffIdentifiers } from '../constants';

const Controls = (props) => {
    const {
        maxDate,
        narrationMode,
        playoffRound,
        selectedStat,
        selectedTeam,
        showOnlyPlayoffs,
        updateMaxDate,
        updateNarrationMode,
        updatePlayoffRound,
        updateSelectedStat,
        updateSelectedTeam,
        updateShowOnlyPlayoffs,
    } = props;

    const nextMonth = () => {
        const nextMonthIndex = maxDateOptions.indexOf(maxDate) + 1;

        updateMaxDate(maxDateOptions[nextMonthIndex]);
    }

    const prevMonth = () => {
        const prevMonthIndex = maxDateOptions.indexOf(maxDate) - 1;

        updateMaxDate(maxDateOptions[prevMonthIndex]);
    }

    const prevRound = () => {
        updatePlayoffRound(playoffOrder[playoffOrder.indexOf(playoffRound) - 1])
    }

    const nextRound = () => {
        updatePlayoffRound(playoffOrder[playoffOrder.indexOf(playoffRound) + 1])
    }

    return (
        <div className="flex-nowrap flex items-end justify-start w-full px-16 space-x-12">
            <label className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500 uppercase">Visualization Mode</span>
                <button
                    className="nowrap flex overflow-hidden leading-tight text-gray-800 border rounded-full shadow"
                    onClick={() => updateNarrationMode(!narrationMode)}
                >
                    <span className={`block px-3 py-2 ${narrationMode ? 'text-white bg-green-500' : 'bg-gray-100 text-gray-400'}`}>Narrative</span>
                    <span className={`block px-3 py-2 ${narrationMode ? 'bg-gray-100 text-gray-400' : 'text-white bg-green-500'}`}>Exploratory</span>
                </button>
            </label>

            <label className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500 uppercase">Show Only Playoffs</span>
                <button
                    className={`
                        nowrap flex items-center w-16 p-1 overflow-hidden border rounded-full shadow-md
                        ${showOnlyPlayoffs ? 'bg-green-500' : 'bg-gray-100'}
                    `}
                    onClick={() => updateShowOnlyPlayoffs(!showOnlyPlayoffs)}
                >
                    <div className={`block w-7 h-7 rounded-full border-2
                        ${showOnlyPlayoffs ? 'ml-auto border-white bg-white' : 'mr-auto bg-gray-50 border-gray-400'}
                    `}></div>
                </button>
            </label>

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
                        <option value=''>All</option>
                        { teamSelectOptions.map((team) => (
                            <option key={team.value} value={team.value}>{team.label}</option>
                        ))}
                    </select>
                </label>
            </div>

            {/* Normal Season Date Selector */}
            { !showOnlyPlayoffs && (
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
                            <option key="all-option" value={maxDateOptions[maxDateOptions.length - 1]}>All</option>
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
            )}

            {/* Playoff Selector */}
            { showOnlyPlayoffs && (
                <div className="flex-nowrap flex items-end ml-8 space-x-2">
                    <button
                        className="disabled:cursor-not-allowed disabled:text-gray-200 h-max-content px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                        disabled={playoffOrder.indexOf(playoffRound) < 1}
                        onClick={prevRound}
                    >{`<`}</button>
                    <label className="flex flex-col space-y-2">
                        <span className="text-sm font-medium text-gray-500 uppercase">Playoff Round</span>
                        <select
                            id="statistic-select"
                            className="px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                            onChange={({ target }) => updatePlayoffRound(target.value)}
                            value={playoffRound}
                        >
                            { playoffOrder.map((option) => (
                                <option key={option} value={option}>{playoffIdentifiers[option]}</option>
                            ))}
                        </select>
                    </label>
                    <button
                        className="disabled:text-gray-200 disabled:cursor-not-allowed h-max-content px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                        disabled={playoffOrder.indexOf(playoffRound) >= playoffOrder.length - 1}
                        onClick={nextRound}
                    >{`>`}</button>
                </div>
            )}
        </div>
    );
}

export default Controls;
