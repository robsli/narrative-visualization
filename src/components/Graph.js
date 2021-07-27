import React, { useEffect, useState } from 'react';

import Controls from './Controls';
import { teamNames } from '../constants';
import { getTeamMetricsForSeason } from '../utils';
import Chart from './Chart';

const Graph = (props) => {
    const { data } = props;

    // Controls State
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
        <div className="flex flex-col items-center w-full px-8 space-y-8">
            <Controls
                selectedStat={selectedStat}
                selectedTeam={selectedTeam}
                maxDate={maxDate}
                updateSelectedStat={setSelectedStat}
                updateSelectedTeam={setSelectedTeam}
                updateMaxDate={setMaxDate}
            />

            <Chart
                data={seasonByTeam}
                rawData={data}
                stat={selectedStat}
                selectedTeam={selectedTeam}
                updateSelectedTeam={(newTeam) => setSelectedTeam(newTeam)}
            />
        </div>
    );
}

export default Graph;
