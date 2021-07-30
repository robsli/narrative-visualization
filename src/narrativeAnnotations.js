const regularSeasonAnnotations = [
    {
        // First: within first month of play, the LA Lakers are the dominant team in the league
        team: 'LAL',
        date: '2021-01-01',
        elo: 1648.13510045006,
        title: 'Lakers Continue Dominance',
        label: 'The LA Lakers picked off right where they left off after winning the championship last season with the ',
        dx: 100,
        dy: 100,
    },
    {
        // Utah Jazz: 20-1 run, best record in the league at 24-5
        team: 'UTA',
        date: '2021-02-17',
        elo: 1693.71843214995,
        title: 'Utah Jazz Shine',
        label: 'The Utah Jazz go on a 20-1 run to become the undisputed best team in the NBA early on in the season.',
        dx: 100,
        dy: 100,
    },
    {
        // 2021-05-16: playoffs start, Jazz are most dominant team in the league, with a record of 52-20
        team: 'UTA',
        date: '2021-05-16',
        elo: 1675.05489975847,
        title: 'End of Regular Season',
        label: 'The Utah Jazz finish the regular season with the best record in the NBA (52 - 20) and the first seed in the Western Conference.',
        dx: 100,
        dy: 100,
    }
]

const playoffsAnnotations = [
    {
        // 2021-05-22: First play-in tournament, Memphis Grizzlies upset 8th seed GSW to get into playoffs
    },
    {
        // 2021-06-01: Brooklyn defeats Boston 4-1, emerging as favorites in the east
    },
    {
        // 2021-06-01: Brooklyn defeats Boston 4-1, emerging as favorites in the east
    },
    {
        // 2021-06-18: Utah Jazz lose 4 straight to Clippers, exit early
    },
    {
        // 2021-06-19: Bucks win a pivotal game 7 against the high powered Nets
    },
    {
        // 2021-06-20: Atlanta upset first seed 76ers in game 7
    },
    {
        // 2021-07-08: Phoenix on a roll, looks to be heavy favorites for championship
    },
    {
        // 2021-07-20: Bucks cap off 4-0 run to win championships over suns
    }
];

export {
    regularSeasonAnnotations,
    playoffsAnnotations,
}