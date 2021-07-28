import React, { useEffect, useState } from 'react';

import Controls from './Controls';
import { teamNames } from '../constants';
import { getTeamMetricsForSeason } from '../utils';
import Chart from './Chart';

const Graph = (props) => {
    const { data } = props;

    // Controls State
    const [narrationMode, setNarrationMode] = useState(true);
    const [selectedStat, setSelectedStat] = useState('elo');
    const [selectedTeam, setSelectedTeam] = useState('MIL');
    const [maxDate, setMaxDate] = useState('2021-01');

    const [seasonByTeam, setSeasonByTeam] = useState();

    useEffect(() => {
        const byTeam = Object.keys(teamNames).reduce((acc, team) => {
            const teamSeasonMetrics = getTeamMetricsForSeason(data, team, maxDate)
            acc[team] = teamSeasonMetrics;

            return acc;
        }, {});

        setSeasonByTeam(byTeam);
    }, [data, maxDate]);

    return (
        <div className="max-w-screen-2xl flex flex-col items-center w-full p-8 mx-auto space-y-4 border rounded shadow">
            {/* <h2 className="text-lg">Chart</h2> */}

            <Controls
                maxDate={maxDate}
                narrationMode={narrationMode}
                selectedStat={selectedStat}
                selectedTeam={selectedTeam}
                updateMaxDate={setMaxDate}
                updateNarrationMode={setNarrationMode}
                updateSelectedStat={setSelectedStat}
                updateSelectedTeam={setSelectedTeam}
            />

            <Chart
                data={seasonByTeam}
                narrationMode={narrationMode}
                rawData={data}
                stat={selectedStat}
                selectedTeam={selectedTeam}
                updateSelectedTeam={(newTeam) => setSelectedTeam(newTeam)}
            />
        </div>
    );
}

export default Graph;
