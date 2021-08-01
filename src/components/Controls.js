import React from 'react';

import { statSelectOptions, teamNames, maxDateOptions } from '../constants';

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
        teamOptions,
        updateMaxDate,
        updateNarrativeMode,
        updatePlayoffRound,
        updateSelectedStat,
        updateSelectedTeam,
        updateShowOnlyPlayoffs,
    } = props;

    const nextMonth = () => {
        if (maxDateOptions.indexOf(maxDate) >= maxDateOptions.length - 1) {
            updatePlayoffRound('p');
            updateShowOnlyPlayoffs(true);
        } else {
            const nextMonthIndex = maxDateOptions.indexOf(maxDate) + 1;

            updateMaxDate(maxDateOptions[nextMonthIndex]);
        }
    }

    const prevMonth = () => {
        const prevMonthIndex = maxDateOptions.indexOf(maxDate) - 1;

        updateMaxDate(maxDateOptions[prevMonthIndex]);
    }

    const prevRound = () => {
        if (playoffOrder.indexOf(playoffRound) === 0) {
            updateMaxDate(maxDateOptions[maxDateOptions.length - 1]);
            updateShowOnlyPlayoffs(false);
        } else {
            updatePlayoffRound(playoffOrder[playoffOrder.indexOf(playoffRound) - 1])
        }
    }

    const nextRound = () => {
        updatePlayoffRound(playoffOrder[playoffOrder.indexOf(playoffRound) + 1])
    }

    return (
        <section className="lg:flex-row border-b-300 lg:space-y-0 flex flex-col w-full pb-4 space-y-4 border-0 border-b">
            <div className="lg:border-r lg:border-b-0 lg:pb-0 flex flex-col pb-4 pr-4 space-y-4 border-0 border-b border-gray-200">
                <label className="flex flex-col space-y-2">
                    <span className="text-sm font-medium text-gray-500 uppercase">Visualization Mode</span>
                    <button
                        className="nowrap w-max-content flex overflow-hidden leading-tight text-gray-800 border rounded-full shadow-sm"
                        onClick={() => updateNarrativeMode(!narrativeMode)}
                    >
                        <span className={`block px-3 py-2 w-32 ${narrativeMode ? 'text-white bg-green-600 shadow' : 'bg-gray-100 text-gray-400 shadow-inner'}`}>Narrative</span>
                        <span className={`block px-3 py-2 w-32 ${narrativeMode ? 'bg-gray-100 text-gray-400 shadow-inner' : 'text-white bg-green-600 shadow'}`}>Exploration</span>
                    </button>
                </label>
                <dl className="flex flex-col space-y-4">
                    <div className="space-y-2">
                        <dt className="font-semibold">Narrative Mode</dt>
                        <dd className="">Narrative Mode walks you through the story of the 2021 NBA regular season or playoffs.</dd>
                    </div>
                    <div className="space-y-2">
                        <dt className="font-semibold">Exploration Mode</dt>
                        <dd className="">Exploration Mode allows you to explore the 2021 NBA season using Elo or Raptor statistics for any given team.</dd>
                    </div>
                </dl>

                { !narrativeMode && (
                    <>
                        <div className="flex-nowrap flex items-center space-x-10">
                            <div className="w-20 h-0.5 bg-gray-300 hover:bg-purple-500 hover:h-1.5 cursor-pointer"></div>
                            <span>Hover over lines to see that team, click on line to select.</span>
                        </div>
                        <div className="flex-nowrap flex items-center space-x-10">
                            <div className="flex justify-around w-20">
                                <div className="flex items-center justify-center w-3.5 h-3.5 border-2 border-green-500 rounded-full animate-pulse cursor-pointer">
                                    <div className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="flex items-center justify-center w-3.5 h-3.5 border-2 border-red-500 rounded-full cursor-pointer"></div>
                            </div>
                            <span>Hover over data points to see more information about the game.</span>
                        </div>
                    </>
                )}
            </div>

            <div className="w-96 md:text-sm lg:text-base flex flex-col flex-grow px-4 space-y-4 text-xs">
                <label className="flex flex-col space-y-2">
                    <span className="text-sm font-medium text-gray-500 uppercase">Show Games From</span>
                    <button
                        className="nowrap w-max-content flex overflow-hidden leading-tight text-gray-800 border rounded-full shadow-sm"
                        onClick={() => updateShowOnlyPlayoffs(!showOnlyPlayoffs)}
                    >
                        <span className={`block px-3 py-2 lg:w-40 ${showOnlyPlayoffs ? 'bg-gray-100 text-gray-400 shadow-inner' : 'text-white bg-green-600 shadow'}`}>Regular Season</span>
                        <span className={`block px-3 py-2 lg:w-40 ${showOnlyPlayoffs ? 'text-white bg-green-600 shadow' : 'bg-gray-100 text-gray-400 shadow-inner'}`}>Playoffs</span>
                    </button>
                </label>

                <label className="lg:max-w-xs flex flex-col space-y-2">
                    <span className="text-sm font-medium text-gray-500 uppercase">Statistic</span>
                    <select
                        id="statistic-select"
                        className="disabled:cursor-not-allowed px-3 py-2 leading-tight text-gray-800 border rounded shadow cursor-pointer"
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
                            { teamOptions.map((team) => (
                                <option key={team} value={team}>{teamNames[team]}</option>
                            ))}
                        </select>
                    </label>
                )}

                {/* Regular Season Date Selector */}
                { !showOnlyPlayoffs && (
                    <div className="lg:flex-nowrap lg:space-x-2 lg:space-y-0 lg:justify-start flex flex-wrap items-end justify-between space-y-2">
                        <button
                            className="lg:order-1 disabled:cursor-not-allowed whitespace-nowrap disabled:text-gray-200 w-min hover:bg-green-500 disabled:bg-gray-300 order-2 px-3 py-2 leading-tight text-white transition-colors duration-100 bg-green-600 border rounded shadow"
                            disabled={maxDateOptions.indexOf(maxDate) <= 0}
                            onClick={prevMonth}
                        >{`< Prev`}</button>
                        <label className="lg:order-2 lg:w-auto flex flex-col order-1 w-full space-y-2">
                            <span className="text-sm font-medium text-gray-500 uppercase">Games Up To</span>
                            <select
                                id="month-select"
                                className="px-3 py-2 leading-tight text-gray-800 border rounded shadow"
                                onChange={({ target }) => updateMaxDate(target.value)}
                                value={maxDate}
                            >
                                <option key="all-option" value={maxDateOptions[maxDateOptions.length - 1]}>Regular Season</option>
                                { maxDateOptions.map((option) => (
                                    <option key={option} value={option}>{getMonthLabel(option)}</option>
                                ))}
                            </select>
                        </label>
                        <button
                            className="disabled:cursor-not-allowed whitespace-nowrap disabled:text-gray-200 w-min hover:bg-green-500 disabled:bg-gray-300 order-3 px-3 py-2 leading-tight text-white transition-colors duration-100 bg-green-600 border rounded shadow"
                            disabled={!maxDate}
                            onClick={nextMonth}
                        >
                            {maxDateOptions.indexOf(maxDate) >= maxDateOptions.length - 1
                                ? 'Playoffs >'
                                : 'Next >'
                            }
                        </button>
                    </div>
                )}

                {/* Playoff Selector */}
                { showOnlyPlayoffs && (
                    <div className="flex-nowrap flex items-end space-x-2">
                        <button
                            className="disabled:cursor-not-allowed disabled:text-gray-200 w-max-content hover:bg-green-500 disabled:bg-gray-300 px-3 py-2 leading-tight text-white transition-colors duration-100 bg-green-600 border rounded shadow"
                            onClick={prevRound}
                        >
                            { playoffOrder.indexOf(playoffRound) === 0
                                ? '< Season'
                                : '< Prev'
                            }
                        </button>
                        <label className="flex flex-col space-y-2">
                            <span className="text-sm font-medium text-gray-500 uppercase">Playoff Round</span>
                            <select
                                id="playoff-round-select"
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
                            className="disabled:cursor-not-allowed disabled:text-gray-200 w-max-content hover:bg-green-500 disabled:bg-gray-300 px-3 py-2 leading-tight text-white transition-colors duration-100 bg-green-600 border rounded shadow"
                            disabled={playoffOrder.indexOf(playoffRound) >= playoffOrder.length - 1}
                            onClick={nextRound}
                        >{`Next >`}</button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Controls;
