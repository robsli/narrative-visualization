import { monthNames, playoffOrder } from './constants';

const getTeamMetricsForSeason = (
    data,
    teamAbbrev,
    endingMonth = null,
    showOnlyPlayoffs = false,
    playoffRound = null,
    season = '2021'
) => {
    return data.reduce((acc, game) => {
        if (game.season !== season) {
            return acc;
        }

        if (showOnlyPlayoffs
            && (!game.playoff
                || playoffOrder.indexOf(game.playoff) > playoffOrder.indexOf(playoffRound)
            )
        ) {
            return acc;
        }

        if (!showOnlyPlayoffs && endingMonth && !!endingMonth) {
            // ex. 2021-01
            const endDate = new Date(endingMonth);
            const gameDate = new Date(game.date);

            if (endDate < gameDate) {
                return acc;
            }
        }

        const lastGame = acc.length > 0
            ? acc[acc.length - 1]
            : { wins: 0, losses: 0 };

        if (game.team1 === teamAbbrev) {
            const teamScore = Number(game.score1);
            const opponentScore = Number(game.score2);

            const gameStats = {
                date: game.date,
                playoff: game.playoff,
                team: game.team1,
                teamScore,
                teamPreElo: game.elo1_pre,
                teamPostElo: game.elo1_post,
                teamPreRaptor: game.raptor1_pre,
                teamRaptorProb: game.raptor_prob1,
                opponent: game.team2,
                opponentScore,
                opponentPreElo: game.elo2_pre,
                opponentPostElo: game.elo2_post,
                opponentPreRaptor: game.raptor2_pre,
                opponentRaptorProb: game.raptor_prob2,
                wins: teamScore > opponentScore ? lastGame.wins + 1 : lastGame.wins,
                losses: teamScore < opponentScore ? lastGame.losses + 1 : lastGame.losses,
            }

            return acc.concat(gameStats);
        }

        if (game.team2 === teamAbbrev) {
            const teamScore = Number(game.score2);
            const opponentScore = Number(game.score1);

            const gameStats = {
                date: game.date,
                playoff: game.playoff,
                team: game.team2,
                teamScore,
                teamPreElo: game.elo2_pre,
                teamPostElo: game.elo2_post,
                teamPreRaptor: game.raptor2_pre,
                teamRaptorProb: game.raptor_prob2,
                opponent: game.team1,
                opponentScore,
                opponentPreElo: game.elo1_pre,
                opponentPostElo: game.elo1_post,
                opponentPreRaptor: game.raptor1_pre,
                opponentRaptorProb: game.raptor_prob1,
                wins: teamScore > opponentScore ? lastGame.wins + 1 : lastGame.wins,
                losses: teamScore < opponentScore ? lastGame.losses + 1 : lastGame.losses,
            }

            return acc.concat(gameStats);
        }

        return acc;
    }, [])
}

const getMetricBounds = (rawData) => {
    return rawData.reduce((acc, game) => {
        const {
            elo1_pre,
            elo2_pre,
            elo1_post,
            elo2_post,
            raptor1_pre,
            raptor2_pre,
            score1,
            score2
        } = game;

        return {
            eloMin: Math.min(acc.eloMin, elo1_pre, elo2_pre, elo1_post, elo2_post),
            eloMax: Math.max(acc.eloMax, elo1_pre, elo2_pre, elo1_post, elo2_post),
            raptorMin: Math.min(acc.raptorMin, raptor1_pre, raptor2_pre),
            raptorMax: Math.max(acc.raptorMax, raptor1_pre, raptor2_pre),
            scoreMin: Math.min(acc.scoreMin, score1, score2),
            scoreMax: Math.max(acc.scoreMax, score1, score2),
        }
    }, {
        eloMin: 99999,
        eloMax: 0,
        raptorMin: 99999,
        raptorMax: 0,
        scoreMin: 99999,
        scoreMax: 0,
    })
}

const getTeamMetricBounds = (rawData) => {
    return rawData.reduce((acc, game) => {
        const {
            teamPreElo,
            teamPostElo,
            teamPreRaptor,
            teamScore,
        } = game;

        return {
            eloMin: Math.min(acc.eloMin, teamPreElo, teamPostElo),
            eloMax: Math.max(acc.eloMax, teamPreElo, teamPostElo),
            raptorMin: Math.min(acc.raptorMin, teamPreRaptor),
            raptorMax: Math.max(acc.raptorMax, teamPreRaptor),
            scoreMin: Math.min(acc.scoreMin, teamScore),
            scoreMax: Math.max(acc.scoreMax, teamScore),
        }
    }, {
        eloMin: 99999,
        eloMax: 0,
        raptorMin: 99999,
        raptorMax: 0,
        scoreMin: 99999,
        scoreMax: 0,
    })
}

const getStatAttribute = (stat, datum) => {
    switch (stat) {
        case 'elo':
            return datum.teamPostElo;
        case 'raptor':
            return datum.teamPreRaptor;
        case 'score':
            return datum.teamScore;
        default:
            console.error('Unrecognized statistic category:', stat);
            return null
    }
}

const getMonthLabel = (date) => {
    const newDate = new Date(date);

    const year = newDate.getFullYear();
    const month = monthNames[newDate.getUTCMonth()];

    return `${month} ${year}`
}

export {
    getMetricBounds,
    getMonthLabel,
    getStatAttribute,
    getTeamMetricBounds,
    getTeamMetricsForSeason,
}
