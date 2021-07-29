import React, { useEffect, useState } from 'react';

import { teamNames } from '../constants';
import { getTeamMetricsForSeason } from '../utils';
import Chart from './Chart';
import Controls from './Controls';
import Legend from './Legend';

const Graph = (props) => {
    const { data } = props;

    // Controls State
    const [narrationMode, setNarrationMode] = useState(true);
    const [selectedStat, setSelectedStat] = useState('elo');
    const [selectedTeam, setSelectedTeam] = useState('MIL');
    const [maxDate, setMaxDate] = useState('2021-01');
    const [showOnlyPlayoffs, setShowOnlyPlayoffs] = useState(false);
    const [playoffRound, setPlayoffRound] = useState();

    const [seasonByTeam, setSeasonByTeam] = useState();

    const updatePlayoffControls = (showPlayoffs) => {
        setShowOnlyPlayoffs(showPlayoffs);
        if (showPlayoffs) {
            setPlayoffRound('p');
        } else {
            setPlayoffRound(null);
        }
    }

    useEffect(() => {
        const byTeam = Object.keys(teamNames).reduce((acc, team) => {
            const teamSeasonMetrics = getTeamMetricsForSeason(data, team, maxDate, showOnlyPlayoffs, playoffRound)
            acc[team] = teamSeasonMetrics;

            return acc;
        }, {});

        setSeasonByTeam(byTeam);
    }, [data, maxDate, showOnlyPlayoffs, playoffRound]);

    return (
        <div className="max-w-screen-2xl flex flex-col items-center w-full p-8 mx-auto space-y-4 border rounded shadow">
            {/* <h2 className="text-lg">Chart</h2> */}

            <Controls
                maxDate={maxDate}
                narrationMode={narrationMode}
                playoffRound={playoffRound}
                selectedStat={selectedStat}
                selectedTeam={selectedTeam}
                showOnlyPlayoffs={showOnlyPlayoffs}
                updateMaxDate={setMaxDate}
                updateNarrationMode={setNarrationMode}
                updatePlayoffRound={setPlayoffRound}
                updateSelectedStat={setSelectedStat}
                updateSelectedTeam={setSelectedTeam}
                updateShowOnlyPlayoffs={updatePlayoffControls}
            />

            <Legend />

            <Chart
                data={seasonByTeam}
                narrationMode={narrationMode}
                rawData={data}
                showOnlyPlayoffs={showOnlyPlayoffs}
                stat={selectedStat}
                selectedTeam={selectedTeam}
                updateSelectedTeam={(newTeam) => setSelectedTeam(newTeam)}
            />
        </div>
    );
}

export default Graph;
