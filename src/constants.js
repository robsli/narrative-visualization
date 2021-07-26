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

const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

export {
    months,
    NBA_ELO_CSV,
    NBA_ELO_LATEST_CSV,
    statSelectOptions,
    teamNames,
    teamSelectOptions,
}
