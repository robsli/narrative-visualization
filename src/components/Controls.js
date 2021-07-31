import React from 'react';

import { statSelectOptions, teamSelectOptions, maxDateOptions } from '../constants';

import { getMonthLabel } from '../utils';
import { playoffOrder, playoffIdentifiers } from '../constants';

const Controls = (props) => {
    const {
        maxDate,
        narrativeMode,
        playoffRound,
        selectedStat,
        selectedTeam,
        showOnlyPlayoffs,
        updateMaxDate,
        updateNarrativeMode,
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
        <div className="lg:flex-nowrap lg:space-x-12 lg:space-y-0 flex flex-wrap items-end justify-start w-full px-16 space-y-4">
            <label className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500 uppercase">Visualization Mode</span>
                <button
                    className="nowrap flex overflow-hidden leading-tight text-gray-800 border rounded-full shadow-sm"
                    onClick={() => updateNarrativeMode(!narrativeMode)}
                >
                    <span className={`block px-3 py-2 ${narrativeMode ? 'text-white bg-green-500 shadow' : 'bg-gray-100 text-gray-400 shadow-inner'}`}>Narrative</span>
                    <span className={`block px-3 py-2 ${narrativeMode ? 'bg-gray-100 text-gray-400 shadow-inner' : 'text-white bg-green-500 shadow'}`}>Exploratory</span>
                </button>
            </label>

            <label className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500 uppercase">Show Games From</span>
                <button
                    className="nowrap flex overflow-hidden leading-tight text-gray-800 border rounded-full shadow-sm"
                    onClick={() => updateShowOnlyPlayoffs(!showOnlyPlayoffs)}
                >
                    <span className={`block px-3 py-2 ${showOnlyPlayoffs ? 'bg-gray-100 text-gray-400 shadow-inner' : 'text-white bg-green-500 shadow'}`}>Regular Season</span>
                    <span className={`block px-3 py-2 ${showOnlyPlayoffs ? 'text-white bg-green-500 shadow' : 'bg-gray-100 text-gray-400 shadow-inner'}`}>Playoffs</span>
                </button>
            </label>

            {/* Normal Season Date Selector */}
            { !showOnlyPlayoffs && (
                <div className="flex-nowrap flex items-end ml-8 space-x-2">
                    <button
                        className="disabled:cursor-not-allowed disabled:text-gray-200 h-max-content px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                        disabled={maxDateOptions.indexOf(maxDate) <= 0}
                        onClick={prevMonth}
                    >{`<`}</button>
                    <label className="flex flex-col space-y-2">
                        <span className="text-sm font-medium text-gray-500 uppercase">Games Up To</span>
                        <select
                            id="statistic-select"
                            className="w-48 px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                            onChange={({ target }) => updateMaxDate(target.value)}
                            value={maxDate}
                        >
                            <option key="all-option" value={maxDateOptions[maxDateOptions.length - 1]}>Season</option>
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
                            className="w-48 px-3 py-2 leading-tight text-gray-800 border rounded shadow"
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

            <label className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500 uppercase">Statistic</span>
                <select
                    id="statistic-select"
                    className="disabled:cursor-not-allowed px-3 py-2 leading-tight text-gray-800 border rounded shadow cursor-pointer"
                    // disabled={narrativeMode}
                    onChange={({ target }) => updateSelectedStat(target.value)}
                    value={selectedStat}
                >
                    { statSelectOptions.map((team) => (
                        <option key={team.value} value={team.value}>{team.label}</option>
                    ))}
                </select>
            </label>

            {!narrativeMode && (
                <label className="flex flex-col space-y-2">
                    <span className="text-sm font-medium text-gray-500 uppercase">Team</span>
                    <select
                        id="team-select"
                        className="disabled:cursor-not-allowed px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                        onChange={({ target }) => updateSelectedTeam(target.value)}
                        value={selectedTeam}
                        disabled={narrativeMode}
                    >
                        <option value=''>All</option>
                        { teamSelectOptions.map((team) => (
                            <option key={team.value} value={team.value}>{team.label}</option>
                        ))}
                    </select>
                </label>
            )}
        </div>
    );
}

export default Controls;
