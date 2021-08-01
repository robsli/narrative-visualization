import React, { useEffect, useState } from 'react';

import { teamNames } from '../constants';
import { getTeamMetricsForSeason, getUniqueTeams } from '../utils';
import Chart from './Chart';
import Controls from './Controls';
import Legend from './Legend';

const Graph = (props) => {
    const { data } = props;

    // Controls State
    const [narrativeMode, setNarrativeMode] = useState(true);
    const [selectedStat, setSelectedStat] = useState('elo');
    const [selectedTeam, setSelectedTeam] = useState('MIL');
    const [maxDate, setMaxDate] = useState('2021-01');
    const [showOnlyPlayoffs, setShowOnlyPlayoffs] = useState(false);
    const [playoffRound, setPlayoffRound] = useState();

    const [seasonByTeam, setSeasonByTeam] = useState();
    const [regularSeasonGames, setRegularSeasonGames] = useState();
    const [playoffGames, setPlayoffGames] = useState();
    const [allTeams, setAllTeams] = useState([]);
    const [playoffTeams, setPlayoffTeams] = useState([]);

    useEffect(() => {
        const byTeam = Object.keys(teamNames).reduce((acc, team) => {
            const teamSeasonMetrics = getTeamMetricsForSeason(data, team, maxDate, showOnlyPlayoffs, playoffRound)
            acc[team] = teamSeasonMetrics;

            return acc;
        }, {});

        setSeasonByTeam(byTeam);
    }, [data, maxDate, showOnlyPlayoffs, playoffRound]);

    useEffect(() => {
        const { rGames, pGames } = data.reduce((acc, game) => {
            if (game.playoff) {
                return {
                    rGames: acc.rGames,
                    pGames: acc.pGames.concat(game),
                }
            } else {
                return {
                    rGames: acc.rGames.concat(game),
                    pGames: acc.pGames,
                }
            }
        }, { rGames: [], pGames: [] });

        setRegularSeasonGames(rGames);
        setPlayoffGames(pGames);
    }, [data]);

    useEffect(() => {
        if (regularSeasonGames) {
            const uniqueTeams = getUniqueTeams(regularSeasonGames);
            setAllTeams(uniqueTeams);
        }

        if (playoffGames) {
            const uniquePlayoffTeams = getUniqueTeams(playoffGames);
            setPlayoffTeams(uniquePlayoffTeams);
        }

    }, [regularSeasonGames, playoffGames]);

    const updatePlayoffControls = (showPlayoffs) => {
        setShowOnlyPlayoffs(showPlayoffs);
        if (showPlayoffs) {
            setPlayoffRound('p');
        } else {
            setPlayoffRound(null);
        }
    }

    const updateNarrativeMode = (narrativeMode) => {
        if (narrativeMode) {
            setSelectedStat('elo');
            setSelectedTeam('');
            setShowOnlyPlayoffs(false);
            setPlayoffRound(null);
        }

        setNarrativeMode(narrativeMode);
    }

    return (
        <div className="max-w-screen-2xl flex flex-col items-center w-full p-8 mx-auto space-y-4 border rounded shadow">
            <Controls
                maxDate={maxDate}
                narrativeMode={narrativeMode}
                playoffRound={playoffRound}
                selectedStat={selectedStat}
                selectedTeam={selectedTeam}
                showOnlyPlayoffs={showOnlyPlayoffs}
                teamOptions={showOnlyPlayoffs ? playoffTeams : allTeams}
                updateMaxDate={setMaxDate}
                updateNarrativeMode={updateNarrativeMode}
                updatePlayoffRound={setPlayoffRound}
                updateSelectedStat={setSelectedStat}
                updateSelectedTeam={setSelectedTeam}
                updateShowOnlyPlayoffs={updatePlayoffControls}
            />

            <Legend narrativeMode={narrativeMode} />

            <Chart
                rawData={data}
                seasonDataByTeam={seasonByTeam}
                regularSeasonGames={regularSeasonGames}
                playoffGames={playoffGames}

                showOnlyPlayoffs={showOnlyPlayoffs}
                playoffRound={playoffRound}
                maxDate={maxDate}
                narrativeMode={narrativeMode}
                stat={selectedStat}
                selectedTeam={selectedTeam}
                updateSelectedTeam={(newTeam) => setSelectedTeam(newTeam)}
            />
        </div>
    );
}

export default Graph;
