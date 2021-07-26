import React, { useEffect, useState } from 'react';

import Controls from './Controls';
import { teamNames } from '../constants';
import { getTeamMetricsForSeason } from '../utils';
import Chart from './Chart';

const Graph = (props) => {
    const { data } = props;

    const [selectedStat, setSelectedStat] = useState('elo');
    const [selectedTeam, setSelectedTeam] = useState('MIL');

    const [seasonByTeam, setSeasonByTeam] = useState();

    useEffect(() => {
        const byTeam = Object.keys(teamNames).reduce((acc, team) => {
            const teamSeasonMetrics = getTeamMetricsForSeason(data, team)
            acc[team] = teamSeasonMetrics;

            return acc;
        }, {});

        setSeasonByTeam(byTeam);
    }, [data]);

    return (
        <div className="flex flex-col items-center w-full px-8 space-y-8">
            <Controls
                selectedStat={selectedStat}
                selectedTeam={selectedTeam}
                updateSelectedStat={setSelectedStat}
                updateSelectedTeam={setSelectedTeam}
            />

            <Chart
                data={seasonByTeam}
                rawData={data}
                stat={selectedStat}
                selectedTeam={selectedTeam}
                updateSelectedTeam={setSelectedTeam}
            />
        </div>
    );
}

export default Graph;
