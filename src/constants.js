const NBA_ELO_CSV = 'https://projects.fivethirtyeight.com/nba-model/nba_elo.csv';
const NBA_ELO_LATEST_CSV = 'https://projects.fivethirtyeight.com/nba-model/nba_elo_latest.csv';

const teamNames = {
    'ATL': 'Atlanta Hawks',
    'BRK': 'Brooklyn Nets',
    'BOS': 'Boston Celtics',
    'CHO': 'Charlotte Hornets',
    'CHI': 'Chicago Bulls',
    'CLE': 'Cleveland Cavaliers',
    'DAL': 'Dallas Mavericks',
    'DEN': 'Denver Nuggets',
    'DET': 'Detroit Pistons',
    'GSW': 'Golden State Warriors',
    'HOU': 'Houston Rockets',
    'IND': 'Indiana Pacers',
    'LAC': 'Los Angeles Clippers',
    'LAL': 'Los Angeles Lakers',
    'MEM': 'Memphis Grizzlies',
    'MIA': 'Miami Heat',
    'MIL': 'Milwaukee Bucks',
    'MIN': 'Minnesota Timberwolves',
    'NOP': 'New Orleans Pelicans',
    'NYK': 'New York Knicks',
    'OKC': 'Oklahoma City Thunder',
    'ORL': 'Orlando Magic',
    'PHI': 'Philadelphia 76ers',
    'PHO': 'Phoenix Suns',
    'POR': 'Portland Trail Blazers',
    'SAC': 'Sacramento Kings',
    'SAS': 'San Antonio Spurs',
    'TOR': 'Toronto Raptors',
    'UTA': 'Utah Jazz',
    'WAS': 'Washington Wizards',
};

const teamSelectOptions = Object.entries(teamNames).map(([id, fullName]) => (
    { value: id, label: fullName }
))

const statSelectOptions = [
    { value: 'elo', label: 'ELO' },
    { value: 'raptor', label: 'Raptor' },
    { value: 'score', label: 'Score' },
];

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const maxDateOptions = [
    '2021-01',
    '2021-02',
    '2021-03',
    '2021-04',
    '2021-05',
    '2021-06',
];

const playoffOrder = ['p', 'q', 's', 'c', 'f'];
const playoffIdentifiers = {
    'p': 'Play-In',
    'q': 'Quarter Finals',
    's': 'Semi Finals',
    'c': 'Conference Finals',
    'f': 'Finals'
}

export {
    monthNames,
    NBA_ELO_CSV,
    NBA_ELO_LATEST_CSV,
    playoffIdentifiers,
    playoffOrder,
    statSelectOptions,
    teamNames,
    teamSelectOptions,
    maxDateOptions,
}
