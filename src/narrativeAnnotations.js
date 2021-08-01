const regularSeasonAnnotations = [
    {
        // First: within first month of play, the LA Lakers are the dominant team in the league
        team: 'LAL',
        date: '2021-01-01',
        title: 'Lakers Continue Dominance',
        label: 'The LA Lakers picked off right where they left off after winning the championship last season.',
        dx: 50,
        dy: 200,
    },
    {
        team: 'LAC',
        date: '2021-01-31',
        title: 'Clippers Raising',
        label: 'The LA Clippers begins to show some promise, securing the best record in the league at 16-5.',
        dx: -50,
        dy: 50,
    },
    {
        team: 'PHI',
        date: '2021-02-03',
        title: 'Sixers Atop the East',
        label: 'After a 4 game winning stream, the Philadephia 76ers lead the Eastern Conference with a 16-6 record.',
        dx: 100,
        dy: 150,
    },
    {
        // Utah Jazz: 20-1 run, best record in the league at 24-5
        team: 'UTA',
        date: '2021-02-17',
        title: 'Utah Jazz Shine',
        label: 'The Utah Jazz go on a 20-1 run to become the undisputed best team in the NBA early on in the season.',
        dx: 20,
        dy: 50,
    },
    {
        team: 'DEN',
        date: '2021-04-01',
        title: 'Denver Rises to 4th in West',
        label: 'Behind a MVP-season performance from Nikola Jovic, the Denver Nuggets surge into 4th place in the West.',
        dx: -120,
        dy: 50,
    },
    {
        team: 'OKC',
        date: '2021-04-13',
        title: 'Thunder Continue Descent',
        label: 'The Oklahoma City Thunder go on a 14-game losing streak. They would go on to only win 2 of their last 25 games.',
        dx: -40,
        dy: -40,
    },
    {
        team: 'POR',
        date: '2021-05-16',
        title: 'Portland Bounces Back',
        label: 'After a sliding to 32-18 in April, Portland wins 10 of its last 12 games to secure the 6th spot in the West and narrowly avoid the play-in.',
        dx: -20,
        dy: 180,
    },
    {
        team: 'UTA',
        date: '2021-05-16',
        title: 'End of Regular Season',
        label: 'The Utah Jazz finish the regular season with the best record in the NBA (52 - 20) and the first seed in the Western Conference.',
        dx: -150,
        dy: 30,
    }
];

const playoffsAnnotations = [
    {
        // 2021-05-22: First play-in tournament, Memphis Grizzlies upset 8th seed GSW to get into playoffs
        team: 'MEM',
        date: '2021-05-21',
        playoffRound: 'p',
        title: 'Memphis Grizzlies Make Playoffs',
        label: 'In the first play-in tournament ever, the Memphis Grizzlies upset 8th seed Golden State Warriors and advance to the playoffs.',
        dx: 50,
        dy: 100,
    },
    {
        // 2021-06-01: Brooklyn defeats Boston 4-1, emerging as favorites in the east
        team: 'BRK',
        date: '2021-06-01',
        playoffRound: 'q',
        title: 'Brooklyn Nets Dominant',
        label: 'The Brooklyn Nets defeat Boston 4-1, emerging as the favorites in the East.',
        dx: 25,
        dy: 100,
    },
    {
        // 2021-06-18: Utah Jazz lose 4 straight to Clippers, exit early
        team: 'LAC',
        date: '2021-06-18',
        playoffRound: 's',
        title: 'Clippers Upset Jazz',
        label: "The West's 1 seed Utah Jazz lose 4 straight to the LA Clippers and exit early from the playoffs.",
        dx: -120,
        dy: 30,
    },
    {
        // 2021-06-19: Bucks win a pivotal game 7 against the high powered Nets
        team: 'MIL',
        date: '2021-06-19',
        playoffRound: 's',
        title: 'Bucks Best Nets',
        label: 'The Milwaukee Bucks overcome an injured Brooklyn Nets in 7 games.',
        dx: -100,
        dy: 250,
    },
    {
        // 2021-06-20: Atlanta upset first seed 76ers in game 7
        team: 'ATL',
        date: '2021-06-20',
        playoffRound: 's',
        title: 'Atlanta Upsets 76ers',
        label: 'The young Atlanta Hawks pull off a game 7 win against 1st seed Philadelphia 76ers.',
        dx: 40,
        dy: 280,
    },
    {
        // 2021: Suns beat Clippers,
        team: 'PHO',
        date: '2021-06-30',
        playoffRound: 'c',
        title: 'Phoenix Cruises to Finals',
        label: 'The Phoenix Suns take advantage of a key injury on the Clippers and deliver a convincing win to advance from the West.',
        dx: -20,
        dy: 150,
    },
    {
        // 2021: Bucks beat Alanta 4-2,
        team: 'MIL',
        date: '2021-07-03',
        playoffRound: 'c',
        title: 'Bucks Advance to Finals',
        label: 'The Milwaukee Bucks take care of business and beat the Hawks in 6 games.',
        dx: 80,
        dy: 100,
    },
    {
        // 2021-07-08: Phoenix on a roll, looks to be heavy favorites for championship
        team: 'PHO',
        date: '2021-07-08',
        playoffRound: 'f',
        title: 'Phoenix Starts Strong',
        label: 'The Phoenix Suns go up 2-0, taking a commanding lead in the NBA Finals.',
        dx: 140,
        dy: 200,
    },
    {
        // 2021-07-20: Bucks cap off 4-0 run to win championships over suns
        team: 'MIL',
        date: '2021-07-20',
        playoffRound: 'f',
        title: 'Milwaukee Wins Championship',
        label: 'The Milwaukee Bucks cap off a 4-0 run to win the 2021 NBA Championship over the Suns.',
        dx: 80,
        dy: 60,
    }
];

export {
    regularSeasonAnnotations,
    playoffsAnnotations,
}
