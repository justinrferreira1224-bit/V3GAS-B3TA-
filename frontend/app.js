// NBA Teams data with logos, prefixes, and team colors (Updated 2025-26 Season)
        const nbaTeams = [
            { name: 'Hawks', wins: 31, losses: 31, conference: 'East', seed: 9, prefix: 'ATL', logo: 'https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2021/01/atlanta_hawks_2021-pres_w.png', color1: '#E03A3E', color2: '#C1D32F', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Celtics', wins: 40, losses: 20, conference: 'East', seed: 2, prefix: 'BOS', logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/boston_celtics_1977-pres_w.png', color1: '#007A33', color2: '#BA9653', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Nets', wins: 15, losses: 45, conference: 'East', seed: 14, prefix: 'BKN', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/brooklyn-nets_2013-pres_w.png', color1: '#000000', color2: '#FFFFFF', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Hornets', wins: 30, losses: 31, conference: 'East', seed: 10, prefix: 'CHA', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/charlotte_hornets_2014-pres_ww.png', color1: '#1D1160', color2: '#00788C', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Bulls', wins: 25, losses: 36, conference: 'East', seed: 12, prefix: 'CHI', logo: 'https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/chicago_bulls_1966-pres_w.png', color1: '#CE1141', color2: '#000000', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Cavaliers', wins: 38, losses: 24, conference: 'East', seed: 4, prefix: 'CLE', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cleveland_Cavaliers_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/cleveland_cavaliers_2017_w.png', color1: '#860038', color2: '#FDBB30', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Pistons', wins: 45, losses: 14, conference: 'East', seed: 1, prefix: 'DET', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Logo_of_the_Detroit_Pistons.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/detroit_pistons_2002-pres-aa.png', color1: '#C8102E', color2: '#1D42BA', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Pacers', wins: 15, losses: 46, conference: 'East', seed: 15, prefix: 'IND', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/indiana_pacers_2006-present_w.png', color1: '#002D62', color2: '#FDBB30', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Heat', wins: 32, losses: 29, conference: 'East', seed: 7, prefix: 'MIA', logo: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/miami_heat_2000-pres_w.png', color1: '#98002E', color2: '#F9A01B', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Bucks', wins: 26, losses: 33, conference: 'East', seed: 11, prefix: 'MIL', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/milwaukee_bucks_2016-present_w.png', color1: '#00471B', color2: '#EEE1C6', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Knicks', wins: 39, losses: 22, conference: 'East', seed: 3, prefix: 'NYK', logo: 'https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/new_york_knicks_1977-pres_w.png', color1: '#006BB6', color2: '#F58426', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Magic', wins: 31, losses: 28, conference: 'East', seed: 8, prefix: 'ORL', logo: 'https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/orlando_magic_2001-pres_w.png', color1: '#0077C0', color2: '#C4CED4', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: '76ers', wins: 33, losses: 27, conference: 'East', seed: 6, prefix: 'PHI', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/philadelphia_76ers_2016-pres_w.png', color1: '#006BB6', color2: '#ED174C', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Raptors', wins: 35, losses: 25, conference: 'East', seed: 5, prefix: 'TOR', logo: 'https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/toronto_raptors_wordmark_2016.png', color1: '#CE1141', color2: '#000000', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Wizards', wins: 16, losses: 43, conference: 'East', seed: 13, prefix: 'WSH', logo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/washington_wizard_2012-pres_w.png', color1: '#002B5C', color2: '#E31837', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Mavericks', wins: 21, losses: 39, conference: 'West', seed: 12, prefix: 'DAL', logo: 'https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/dallas_mavericks_2002-pres_w.png', color1: '#00538C', color2: '#002B5E', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Nuggets', wins: 37, losses: 24, conference: 'West', seed: 5, prefix: 'DEN', logo: 'https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/06/denver_nuggets_2019-pres_w.png', color1: '#0E2240', color2: '#FEC524', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Warriors', wins: 31, losses: 29, conference: 'West', seed: 8, prefix: 'GSW', logo: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/golden_state_warriors_1997-2009-ww.png', color1: '#1D428A', color2: '#FFC72C', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Rockets', wins: 37, losses: 22, conference: 'West', seed: 4, prefix: 'HOU', logo: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/houston_rockets_2003-pres_w.png', color1: '#CE1141', color2: '#000000', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Clippers', wins: 28, losses: 31, conference: 'West', seed: 9, prefix: 'LAC', logo: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Los_Angeles_Clippers_%282024%29.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2025/09/los_angeles_clippers_2025-pres^w.png', color1: '#C8102E', color2: '#1D428A', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Lakers', wins: 36, losses: 24, conference: 'West', seed: 6, prefix: 'LAL', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/los_angeles_lakers_2002-pres_w.png', color1: '#552583', color2: '#FDB927', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Grizzlies', wins: 23, losses: 36, conference: 'West', seed: 11, prefix: 'MEM', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2024/03/memphis_grizzlies_2018-pres_w.png', color1: '#5D76A9', color2: '#12173F', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Wolves', wins: 38, losses: 23, conference: 'West', seed: 3, prefix: 'MIN', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/minnesota_timberwolves_1997_pres_w.png', color1: '#0C2340', color2: '#236192', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Pelicans', wins: 19, losses: 43, conference: 'West', seed: 13, prefix: 'NOP', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/new_orleans_pelicans_2015-pres_ww.png', color1: '#0C2340', color2: '#C8102E', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Thunder', wins: 47, losses: 15, conference: 'West', seed: 1, prefix: 'OKC', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/oklahoma_city_thunder_2009-pres.png', color1: '#007AC1', color2: '#EF3B24', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Suns', wins: 34, losses: 26, conference: 'West', seed: 7, prefix: 'PHX', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/phoenix_suns_2014-pres_w.png', color1: '#1D1160', color2: '#E56020', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Blazers', wins: 29, losses: 33, conference: 'West', seed: 10, prefix: 'POR', logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/portland_trailblazers_2003-pres-w.png', color1: '#E03A3E', color2: '#000000', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Kings', wins: 14, losses: 48, conference: 'West', seed: 15, prefix: 'SAC', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/sacramento_kings_2017-pres_w.png', color1: '#5A2D81', color2: '#63727A', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Spurs', wins: 43, losses: 17, conference: 'West', seed: 2, prefix: 'SAS', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2018/04/san_antonio-spurs_1989-pres_w.png', color1: '#C4CED4', color2: '#000000', last10Results: ['W','W','W','W','W','W','W','W','W','W'] },
            { name: 'Jazz', wins: 18, losses: 42, conference: 'West', seed: 14, prefix: 'UTA', logo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg', wordmark: 'https://sportslogohistory.com/wp-content/uploads/2022/09/utah_jazz_2023-pres-w.png', color1: '#5D2E8C', color2: '#FFFFFF', last10Results: ['W','W','W','W','W','W','W','W','W','W'] }
        ];
        
        // College Basketball Teams (Top March Madness Schools)
        const ncaabTeams = [
            { name: 'Duke', prefix: 'DUKE', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/150.png' },
            { name: 'North Carolina', prefix: 'UNC', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/153.png' },
            { name: 'Kansas', prefix: 'KU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2305.png' },
            { name: 'Kentucky', prefix: 'UK', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/96.png' },
            { name: 'Villanova', prefix: 'NOVA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/222.png' },
            { name: 'Gonzaga', prefix: 'GONZ', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2250.png' },
            { name: 'UCLA', prefix: 'UCLA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/26.png' },
            { name: 'Michigan State', prefix: 'MSU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/127.png' },
            { name: 'Arizona', prefix: 'ARIZ', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/12.png' },
            { name: 'Connecticut', prefix: 'UCONN', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/41.png' },
            { name: 'Virginia', prefix: 'UVA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/258.png' },
            { name: 'Baylor', prefix: 'BAY', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/239.png' },
            { name: 'Texas', prefix: 'TEX', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/251.png' },
            { name: 'Houston', prefix: 'HOU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/248.png' },
            { name: 'Purdue', prefix: 'PUR', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2509.png' },
            { name: 'Auburn', prefix: 'AUB', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2.png' },
            { name: 'Tennessee', prefix: 'TENN', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png' },
            { name: 'Alabama', prefix: 'ALA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/333.png' },
            { name: 'Illinois', prefix: 'ILL', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/356.png' },
            { name: 'Wisconsin', prefix: 'WIS', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/275.png' },
            { name: 'Maryland', prefix: 'MD', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/120.png' },
            { name: 'Iowa', prefix: 'IOWA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png' },
            { name: 'Arkansas', prefix: 'ARK', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/8.png' },
            { name: 'Florida', prefix: 'FLA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/57.png' },
            { name: 'Marquette', prefix: 'MARQ', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/269.png' },
            { name: 'Creighton', prefix: 'CREI', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/156.png' },
            { name: 'San Diego State', prefix: 'SDSU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/21.png' },
            { name: 'Xavier', prefix: 'XAV', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2752.png' },
            { name: 'St Johns', prefix: 'SJU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2599.png' },
            { name: 'Memphis', prefix: 'MEM', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/235.png' }
        ];
        
        // NFL Teams
        const nflTeams = [
            { name: 'Cardinals', color1: '#C41E3A', color2: '#0C2340', prefix: 'ARI', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ari.png' },
            { name: 'Falcons', prefix: 'ATL', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png' },
            { name: 'Ravens', prefix: 'BAL', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png' },
            { name: 'Bills', prefix: 'BUF', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png' },
            { name: 'Panthers', prefix: 'CAR', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png' },
            { name: 'Bears', prefix: 'CHI', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png' },
            { name: 'Bengals', prefix: 'CIN', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png' },
            { name: 'Browns', prefix: 'CLE', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png' },
            { name: 'Cowboys', prefix: 'DAL', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/dal.png' },
            { name: 'Broncos', prefix: 'DEN', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png' },
            { name: 'Lions', prefix: 'DET', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/det.png' },
            { name: 'Packers', prefix: 'GB', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png' },
            { name: 'Texans', prefix: 'HOU', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png' },
            { name: 'Colts', prefix: 'IND', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png' },
            { name: 'Jaguars', prefix: 'JAX', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/jax.png' },
            { name: 'Chiefs', prefix: 'KC', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png' },
            { name: 'Raiders', prefix: 'LV', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png' },
            { name: 'Chargers', prefix: 'LAC', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png' },
            { name: 'Rams', prefix: 'LAR', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png' },
            { name: 'Dolphins', prefix: 'MIA', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/mia.png' },
            { name: 'Vikings', prefix: 'MIN', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png' },
            { name: 'Patriots', prefix: 'NE', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png' },
            { name: 'Saints', prefix: 'NO', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png' },
            { name: 'Giants', color1: '#FD5A1E', color2: '#27251F', prefix: 'NYG', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png' },
            { name: 'Jets', prefix: 'NYJ', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png' },
            { name: 'Eagles', prefix: 'PHI', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png' },
            { name: 'Steelers', prefix: 'PIT', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/pit.png' },
            { name: '49ers', prefix: 'SF', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png' },
            { name: 'Seahawks', prefix: 'SEA', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png' },
            { name: 'Buccaneers', prefix: 'TB', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png' },
            { name: 'Titans', prefix: 'TEN', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png' },
            { name: 'Commanders', prefix: 'WAS', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png' }
        ];
        
        // College Football Teams (Top Programs)
        const cfbTeams = [
            { name: 'Alabama', prefix: 'ALA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/333.png' },
            { name: 'Georgia', prefix: 'UGA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/61.png' },
            { name: 'Ohio State', prefix: 'OSU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/194.png' },
            { name: 'Michigan', prefix: 'MICH', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/130.png' },
            { name: 'Clemson', prefix: 'CLEM', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/228.png' },
            { name: 'Texas', prefix: 'TEX', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/251.png' },
            { name: 'Oklahoma', prefix: 'OU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/201.png' },
            { name: 'USC', prefix: 'USC', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/30.png' },
            { name: 'LSU', prefix: 'LSU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/99.png' },
            { name: 'Penn State', prefix: 'PSU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/213.png' },
            { name: 'Notre Dame', prefix: 'ND', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/87.png' },
            { name: 'Florida State', prefix: 'FSU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/52.png' },
            { name: 'Florida', prefix: 'FLA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/57.png' },
            { name: 'Oregon', prefix: 'ORE', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png' },
            { name: 'Auburn', prefix: 'AUB', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2.png' },
            { name: 'Tennessee', prefix: 'TENN', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png' },
            { name: 'Oklahoma State', prefix: 'OKST', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/197.png' },
            { name: 'Texas A&M', prefix: 'TAMU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/245.png' },
            { name: 'Wisconsin', prefix: 'WIS', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/275.png' },
            { name: 'Miami', prefix: 'MIA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png' },
            { name: 'Washington', prefix: 'WASH', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/264.png' },
            { name: 'Utah', prefix: 'UTAH', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/254.png' },
            { name: 'Ole Miss', prefix: 'MISS', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/145.png' },
            { name: 'Arkansas', prefix: 'ARK', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/8.png' },
            { name: 'Kentucky', prefix: 'UK', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/96.png' },
            { name: 'Iowa', prefix: 'IOWA', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png' },
            { name: 'Michigan State', prefix: 'MSU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/127.png' },
            { name: 'North Carolina', prefix: 'UNC', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/153.png' },
            { name: 'Baylor', prefix: 'BAY', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/239.png' },
            { name: 'TCU', prefix: 'TCU', logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2628.png' }
        ];
        
        // MLB Teams
        const mlbTeams = [
            { name: 'Diamondbacks', color1: '#A71930', color2: '#E3D4AD', prefix: 'ARI', espn: 'ari',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/ari.png', park: 'Chase Field' },
            { name: 'Braves', color1: '#CE1141', color2: '#13274F',       prefix: 'ATL', espn: 'atl',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/atl.png', park: 'Truist Park' },
            { name: 'Orioles', color1: '#DF4601', color2: '#000000',      prefix: 'BAL', espn: 'bal',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/bal.png', park: 'Camden Yards' },
            { name: 'Red Sox', color1: '#BD3039', color2: '#0C2340',      prefix: 'BOS', espn: 'bos',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/bos.png', park: 'Fenway Park' },
            { name: 'Cubs', color1: '#0E3386', color2: '#CC3433',         prefix: 'CHC', espn: 'chc',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/chc.png', park: 'Wrigley Field' },
            { name: 'White Sox', color1: '#27251F', color2: '#C4CED4',    prefix: 'CHW', espn: 'chw',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/chw.png', park: 'Rate Field' },
            { name: 'Reds', color1: '#C6011F', color2: '#000000',         prefix: 'CIN', espn: 'cin',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/cin.png', park: 'Great American Ball Park' },
            { name: 'Guardians', color1: '#00385D', color2: '#CC0000',    prefix: 'CLE', espn: 'cle',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/cle.png', park: 'Progressive Field' },
            { name: 'Rockies', color1: '#33006F', color2: '#C4CED4',      prefix: 'COL', espn: 'col',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/col.png', park: 'Coors Field' },
            { name: 'Tigers', color1: '#0C2340', color2: '#FA4616',       prefix: 'DET', espn: 'det',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/det.png', park: 'Comerica Park' },
            { name: 'Astros', color1: '#002D62', color2: '#EB6E1F',       prefix: 'HOU', espn: 'hou',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/hou.png', park: 'Daikin Park' },
            { name: 'Royals', color1: '#004687', color2: '#BD9B60',       prefix: 'KC',  espn: 'kc',   logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/kc.png',  park: 'Kauffman Stadium' },
            { name: 'Angels', color1: '#BA0021', color2: '#003263',       prefix: 'LAA', espn: 'laa',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/laa.png', park: 'Angel Stadium' },
            { name: 'Dodgers', color1: '#005A9C', color2: '#EF3E42',      prefix: 'LAD', espn: 'lad',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/lad.png', park: 'Dodger Stadium' },
            { name: 'Marlins', color1: '#00A3E0', color2: '#EF3340',      prefix: 'MIA', espn: 'mia',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/mia.png', park: 'loanDepot Park' },
            { name: 'Brewers', color1: '#12284B', color2: '#FFC52F',      prefix: 'MIL', espn: 'mil',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/mil.png', park: 'American Family Field' },
            { name: 'Twins', color1: '#002B5C', color2: '#D31145',        prefix: 'MIN', espn: 'min',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/min.png', park: 'Target Field' },
            { name: 'Mets', color1: '#002D72', color2: '#FF5910',         prefix: 'NYM', espn: 'nym',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/nym.png', park: 'Citi Field' },
            { name: 'Yankees', color1: '#003087', color2: '#C4CED4',      prefix: 'NYY', espn: 'nyy',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/nyy.png', park: 'Yankee Stadium' },
            { name: 'Athletics', color1: '#003831', color2: '#EFB21E',    prefix: 'ATH', espn: 'ath',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/ath.png', park: 'Sutter Health Park' },
            { name: 'Phillies', color1: '#E81828', color2: '#002D72',     prefix: 'PHI', espn: 'phi',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/phi.png', park: 'Citizens Bank Park' },
            { name: 'Pirates', color1: '#27251F', color2: '#FDB827',      prefix: 'PIT', espn: 'pit',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/pit.png', park: 'PNC Park' },
            { name: 'Padres', color1: '#2F241D', color2: '#FFC425',       prefix: 'SD',  espn: 'sd',   logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/sd.png',  park: 'Petco Park' },
            { name: 'Giants', color1: '#FD5A1E', color2: '#27251F',       prefix: 'SF',  espn: 'sf',   logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/sf.png',  park: 'Oracle Park' },
            { name: 'Mariners', color1: '#0C2C56', color2: '#005C5C',     prefix: 'SEA', espn: 'sea',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/sea.png', park: 'T-Mobile Park' },
            { name: 'Cardinals', color1: '#C41E3A', color2: '#0C2340',    prefix: 'STL', espn: 'stl',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/stl.png', park: 'Busch Stadium' },
            { name: 'Rays', color1: '#092C5C', color2: '#8FBCE6',         prefix: 'TB',  espn: 'tb',   logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/tb.png',  park: 'Tropicana Field' },
            { name: 'Rangers', color1: '#003278', color2: '#C0111F',      prefix: 'TEX', espn: 'tex',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/tex.png', park: 'Globe Life Field' },
            { name: 'Blue Jays', color1: '#134A8E', color2: '#E8291C',    prefix: 'TOR', espn: 'tor',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/tor.png', park: 'Rogers Centre' },
            { name: 'Nationals', color1: '#AB0003', color2: '#14225A',    prefix: 'WSH', espn: 'wsh',  logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/wsh.png', park: 'Nationals Park' }
        ];
        
        // NHL Teams
        const nhlTeams = [
            { name: 'Bruins', prefix: 'BOS', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/bos.png' },
            { name: 'Sabres', prefix: 'BUF', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/buf.png' },
            { name: 'Red Wings', prefix: 'DET', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/det.png' },
            { name: 'Panthers', prefix: 'FLA', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/fla.png' },
            { name: 'Canadiens', prefix: 'MTL', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/mtl.png' },
            { name: 'Senators', prefix: 'OTT', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/ott.png' },
            { name: 'Lightning', prefix: 'TB', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/tb.png' },
            { name: 'Maple Leafs', prefix: 'TOR', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/tor.png' },
            { name: 'Hurricanes', prefix: 'CAR', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/car.png' },
            { name: 'Blue Jackets', prefix: 'CBJ', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/cbj.png' },
            { name: 'Devils', prefix: 'NJ', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nj.png' },
            { name: 'Islanders', prefix: 'NYI', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nyi.png' },
            { name: 'Rangers', color1: '#003278', color2: '#C0111F', prefix: 'NYR', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nyr.png' },
            { name: 'Flyers', prefix: 'PHI', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/phi.png' },
            { name: 'Penguins', prefix: 'PIT', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/pit.png' },
            { name: 'Capitals', prefix: 'WSH', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/wsh.png' },
            { name: 'Blackhawks', prefix: 'CHI', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/chi.png' },
            { name: 'Avalanche', prefix: 'COL', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/col.png' },
            { name: 'Stars', prefix: 'DAL', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/dal.png' },
            { name: 'Wild', prefix: 'MIN', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/min.png' },
            { name: 'Predators', prefix: 'NSH', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/nsh.png' },
            { name: 'Blues', prefix: 'STL', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/stl.png' },
            { name: 'Jets', prefix: 'WPG', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/wpg.png' },
            { name: 'Ducks', prefix: 'ANA', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/ana.png' },
            { name: 'Coyotes', prefix: 'ARI', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/ari.png' },
            { name: 'Flames', prefix: 'CGY', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/cgy.png' },
            { name: 'Oilers', prefix: 'EDM', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/edm.png' },
            { name: 'Kings', wins: 12, losses: 46, conference: 'West', seed: 15, prefix: 'LA', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/la.png' },
            { name: 'Sharks', prefix: 'SJ', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/sj.png' },
            { name: 'Kraken', prefix: 'SEA', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/sea.png' },
            { name: 'Canucks', prefix: 'VAN', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/van.png' },
            { name: 'Golden Knights', prefix: 'VGK', logo: 'https://a.espncdn.com/i/teamlogos/nhl/500/vgk.png' }
        ];
        
        // Soccer Teams - ALL MAJOR LEAGUES
        const soccerTeams = [
            // PREMIER LEAGUE
            { name: 'Arsenal', prefix: 'ARS', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/359.png' },
            { name: 'Aston Villa', prefix: 'AVL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/362.png' },
            { name: 'Bournemouth', prefix: 'BOU', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/349.png' },
            { name: 'Brentford', prefix: 'BRE', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/337.png' },
            { name: 'Brighton', prefix: 'BHA', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/331.png' },
            { name: 'Chelsea', prefix: 'CHE', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/363.png' },
            { name: 'Crystal Palace', prefix: 'CRY', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/384.png' },
            { name: 'Everton', prefix: 'EVE', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/368.png' },
            { name: 'Fulham', prefix: 'FUL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/370.png' },
            { name: 'Ipswich Town', prefix: 'IPS', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/373.png' },
            { name: 'Leicester City', prefix: 'LEI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/375.png' },
            { name: 'Liverpool', prefix: 'LIV', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/364.png' },
            { name: 'Man City', prefix: 'MCI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/382.png' },
            { name: 'Man United', prefix: 'MUN', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/360.png' },
            { name: 'Newcastle', prefix: 'NEW', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/361.png' },
            { name: 'Nottingham Forest', prefix: 'NFO', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/393.png' },
            { name: 'Southampton', prefix: 'SOU', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/376.png' },
            { name: 'Tottenham', prefix: 'TOT', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/367.png' },
            { name: 'West Ham', prefix: 'WHU', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/371.png' },
            { name: 'Wolves', wins: 35, losses: 23, conference: 'West', seed: 6, prefix: 'WOL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/380.png' },
            
            // LA LIGA
            { name: 'Athletic Bilbao', prefix: 'ATH', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/244.png' },
            { name: 'Atletico Madrid', prefix: 'ATM', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/1068.png' },
            { name: 'Barcelona', prefix: 'BAR', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/83.png' },
            { name: 'Real Betis', prefix: 'BET', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/244.png' },
            { name: 'Celta Vigo', prefix: 'CEL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/428.png' },
            { name: 'Getafe', prefix: 'GET', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/3711.png' },
            { name: 'Girona', prefix: 'GIR', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/4256.png' },
            { name: 'Las Palmas', prefix: 'LAS', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/275.png' },
            { name: 'Leganes', prefix: 'LEG', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/3709.png' },
            { name: 'Mallorca', prefix: 'MAL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/261.png' },
            { name: 'Osasuna', prefix: 'OSA', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/727.png' },
            { name: 'Rayo Vallecano', prefix: 'RAY', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/243.png' },
            { name: 'Real Madrid', prefix: 'RMA', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/86.png' },
            { name: 'Real Sociedad', prefix: 'RSO', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/243.png' },
            { name: 'Sevilla', prefix: 'SEV', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/243.png' },
            { name: 'Valencia', prefix: 'VAL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/94.png' },
            { name: 'Valladolid', prefix: 'VLL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/95.png' },
            { name: 'Villarreal', prefix: 'VIL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/94.png' },
            
            // SERIE A
            { name: 'Atalanta', prefix: 'ATA', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/104.png' },
            { name: 'Bologna', prefix: 'BOL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/105.png' },
            { name: 'Cagliari', prefix: 'CAG', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/106.png' },
            { name: 'Como', prefix: 'COM', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/107.png' },
            { name: 'Empoli', prefix: 'EMP', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/108.png' },
            { name: 'Fiorentina', prefix: 'FIO', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/109.png' },
            { name: 'Genoa', prefix: 'GEN', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/111.png' },
            { name: 'Inter Milan', prefix: 'INT', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/110.png' },
            { name: 'Juventus', prefix: 'JUV', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/111.png' },
            { name: 'Lazio', prefix: 'LAZ', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/112.png' },
            { name: 'Lecce', prefix: 'LEC', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/4874.png' },
            { name: 'AC Milan', prefix: 'MIL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/103.png' },
            { name: 'Monza', prefix: 'MON', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/5453.png' },
            { name: 'Napoli', prefix: 'NAP', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/114.png' },
            { name: 'Parma', prefix: 'PAR', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/115.png' },
            { name: 'Roma', prefix: 'ROM', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/104.png' },
            { name: 'Torino', prefix: 'TOR', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/110.png' },
            { name: 'Udinese', prefix: 'UDI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/114.png' },
            { name: 'Venezia', prefix: 'VEN', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/7511.png' },
            { name: 'Verona', prefix: 'VER', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/113.png' },
            
            // BUNDESLIGA
            { name: 'Augsburg', prefix: 'AUG', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/131.png' },
            { name: 'Bayern Munich', prefix: 'BAY', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/132.png' },
            { name: 'Bochum', prefix: 'BOC', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/133.png' },
            { name: 'Borussia Dortmund', prefix: 'DOR', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/124.png' },
            { name: "Monchengladbach", prefix: 'MGB', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/127.png' },
            { name: 'Eintracht Frankfurt', prefix: 'FRA', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/125.png' },
            { name: 'Freiburg', prefix: 'FRE', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/126.png' },
            { name: 'Heidenheim', prefix: 'HEI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/3005.png' },
            { name: 'Hoffenheim', prefix: 'HOF', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/2035.png' },
            { name: 'Holstein Kiel', prefix: 'KIE', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/3857.png' },
            { name: 'RB Leipzig', prefix: 'LEI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/11420.png' },
            { name: 'Leverkusen', prefix: 'LEV', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/131.png' },
            { name: 'Mainz', prefix: 'MAI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/129.png' },
            { name: 'St. Pauli', prefix: 'STP', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/135.png' },
            { name: 'Union Berlin', prefix: 'UNI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/2277.png' },
            { name: 'VfB Stuttgart', prefix: 'STU', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/134.png' },
            { name: 'Werder Bremen', prefix: 'BRE', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/134.png' },
            { name: 'Wolfsburg', prefix: 'WOL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/146.png' },
            
            // LIGUE 1
            { name: 'Angers', prefix: 'ANG', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/169.png' },
            { name: 'Auxerre', prefix: 'AUX', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/171.png' },
            { name: 'Brest', prefix: 'BRE', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/6997.png' },
            { name: 'Le Havre', prefix: 'HAV', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/3243.png' },
            { name: 'Lens', prefix: 'LEN', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/175.png' },
            { name: 'Lille', prefix: 'LIL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/166.png' },
            { name: 'Lyon', prefix: 'LYO', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/167.png' },
            { name: 'Marseille', prefix: 'MAR', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/176.png' },
            { name: 'Monaco', prefix: 'MON', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/174.png' },
            { name: 'Montpellier', prefix: 'MTP', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/273.png' },
            { name: 'Nantes', prefix: 'NAN', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/165.png' },
            { name: 'Nice', prefix: 'NIC', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/178.png' },
            { name: 'PSG', prefix: 'PSG', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/160.png' },
            { name: 'Reims', prefix: 'REI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/3243.png' },
            { name: 'Rennes', prefix: 'REN', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/169.png' },
            { name: 'Saint-Etienne', prefix: 'STE', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/168.png' },
            { name: 'Strasbourg', prefix: 'STR', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/3502.png' },
            { name: 'Toulouse', prefix: 'TOU', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/179.png' },
            
            // MLS
            { name: 'Atlanta United', prefix: 'ATL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/10226.png' },
            { name: 'Austin FC', prefix: 'ATX', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/14284.png' },
            { name: 'Charlotte FC', prefix: 'CLT', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/15242.png' },
            { name: 'Chicago Fire', prefix: 'CHI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9613.png' },
            { name: 'FC Cincinnati', prefix: 'CIN', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/12594.png' },
            { name: 'Colorado Rapids', prefix: 'COL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9823.png' },
            { name: 'Columbus Crew', prefix: 'CLB', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9660.png' },
            { name: 'DC United', prefix: 'DC', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9654.png' },
            { name: 'FC Dallas', prefix: 'DAL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9789.png' },
            { name: 'Houston Dynamo', prefix: 'HOU', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9748.png' },
            { name: 'LA Galaxy', prefix: 'LA', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9776.png' },
            { name: 'LAFC', prefix: 'LAFC', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/11694.png' },
            { name: 'Inter Miami', prefix: 'MIA', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/13796.png' },
            { name: 'Minnesota United', prefix: 'MIN', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/11267.png' },
            { name: 'CF Montreal', prefix: 'MTL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9732.png' },
            { name: 'Nashville SC', prefix: 'NSH', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/13698.png' },
            { name: 'New England Revolution', prefix: 'NE', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9782.png' },
            { name: 'New York Red Bulls', prefix: 'NYRB', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9783.png' },
            { name: 'New York City FC', prefix: 'NYC', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/10397.png' },
            { name: 'Orlando City', prefix: 'ORL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/10521.png' },
            { name: 'Philadelphia Union', prefix: 'PHI', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9809.png' },
            { name: 'Portland Timbers', prefix: 'POR', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9811.png' },
            { name: 'Real Salt Lake', prefix: 'RSL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9791.png' },
            { name: 'San Jose Earthquakes', prefix: 'SJ', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9622.png' },
            { name: 'Seattle Sounders', prefix: 'SEA', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9726.png' },
            { name: 'Sporting Kansas City', prefix: 'SKC', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9779.png' },
            { name: 'St. Louis City SC', prefix: 'STL', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/16226.png' },
            { name: 'Toronto FC', prefix: 'TOR', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9784.png' },
            { name: 'Vancouver Whitecaps', prefix: 'VAN', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/9869.png' }
        ];
        
        // State
        let quarter = 1;
        let clockSeconds = 300; // Initial value, will update based on sport
        let teamAScore = 0;
        let teamBScore = 0;
        let teamAName = 'points';
        let teamBName = 'points';
        let ouLine = 0; // Start blank
        let isRunning = false;
        let timerInterval = null;
        let selectedTeam = null;
        let selectedPoints = null;
        let betType = null; // 'over' or 'under'
        
        // Baseball-specific state
        let inningHalf = 'top'; // 'top' or 'bottom'
        let outsRecorded = [false, false, false]; // 3 outs
        let basesOccupied = [false, false, false]; // 1st, 2nd, 3rd base
        let pitchCount = 0;

        // DOM Elements
        const qBox = document.getElementById('qBox');
        const timeDisplay = document.getElementById('timeDisplay');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const resetBtn = document.getElementById('resetBtn');
        const saveBetBtn = document.getElementById('saveBetBtn');
        const scoreLeft = document.getElementById('scoreLeft');
        const scoreRight = document.getElementById('scoreRight');
        
        let currentBetId = null; // Track if we're editing an existing bet
        const pointButtons = document.querySelectorAll('.control-btn');
        const teamLabelLeft = document.querySelector('.team-label.team-left');
        const teamLabelRight = document.querySelector('.team-label.team-right');

        // Stats
        const gamePaceEl = document.getElementById('gamePace');
        const ouPaceEl = document.getElementById('ouPace');
        const totalPointsEl = document.getElementById('totalPoints');
        const timeWeightEl = document.getElementById('timeWeight');
        const ouLineEl = document.getElementById('ouLine');
        const edgeEl = document.getElementById('edge');
        const ouProjectionEl = document.getElementById('ouProjection');
        const betTypeEl = document.getElementById('betType');
        const betTypeBox = document.getElementById('betTypeBox');
        const confidenceEl = document.getElementById('confidence');
        const confidenceBox = document.getElementById('confidenceBox');

        // Format time
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        // Clean number display - round to 3 sig figs or 2 decimals
        function cleanNumber(num) {
            if (num === 0) return '0';
            
            // Get the magnitude of the number
            const magnitude = Math.floor(Math.log10(Math.abs(num)));
            
            // For numbers >= 10, use 1 decimal place (e.g., 55.3, 45.5)
            if (magnitude >= 1) {
                return num.toFixed(1);
            }
            // For numbers >= 1 but < 10, use 2 decimal places (e.g., 9.82)
            else if (magnitude >= 0) {
                return num.toFixed(2);
            }
            // For numbers < 1, use 3 significant figures
            else {
                const decimals = -magnitude + 2;
                return num.toFixed(decimals);
            }
        }

        // Update clock display
        function updateClockDisplay() {
            timeDisplay.textContent = formatTime(clockSeconds);
            timeDisplay.classList.remove('paused', 'running', 'endgame');
            
            if (isRunning) {
                if (quarter === 4 && clockSeconds <= 120) {
                    timeDisplay.classList.add('running', 'endgame');
                } else {
                    timeDisplay.classList.add('running');
                }
            } else {
                timeDisplay.classList.add('paused');
            }
        }

        // ===== PLAYOFF SERIES STATE MODEL =====
        // ONLY applies to NBA playoffs (day >= 71). Regular season logic untouched.

        // Series state storage (persists across games)
        let playoffSeriesData = {}; // Format: { "Celtics-Heat": { awayTeam: "Celtics", awayWins: 2, homeTeam: "Heat", homeWins: 1, homeCourtTeam: "Celtics" } }

        function getSeriesKey(awayTeam, homeTeam) {
            // Create consistent key regardless of which team is home/away in current game
            // Normalize to lowercase to avoid case sensitivity issues
            const teams = [awayTeam.toLowerCase(), homeTeam.toLowerCase()].sort();
            return teams.join('-');
        }

        function getPlayoffSeriesState() {
            if (!selectedAwayTeam || !selectedHomeTeam) return null;

            const awayTeamName = selectedAwayTeam.name;
            const homeTeamName = selectedHomeTeam.name;
            const seriesKey = getSeriesKey(awayTeamName, homeTeamName);

            // Calculate series wins from bet log
            let awayTeamWins = 0;
            let homeTeamWins = 0;

            betLog.forEach(day => {
                if (day.day >= 71 && day.day <= 133) {
                    day.games.forEach(game => {
                        if (game.res === 'W' || game.res === 'L') {
                            const gameTeams = [game.t1, game.t2].map(t => t.toLowerCase()).sort();
                            const seriesTeams = [awayTeamName, homeTeamName].map(t => t.toLowerCase()).sort();

                            if (gameTeams[0] === seriesTeams[0] && gameTeams[1] === seriesTeams[1]) {
                                const pickWon = game.res === 'W';
                                const opponent = game.pick === game.t1 ? game.t2 : game.t1;
                                const actualWinner = pickWon ? game.pick : opponent;

                                if (actualWinner.toLowerCase() === awayTeamName.toLowerCase()) {
                                    awayTeamWins++;
                                } else if (actualWinner.toLowerCase() === homeTeamName.toLowerCase()) {
                                    homeTeamWins++;
                                }
                            }
                        }
                    });
                }
            });

            const totalGames = awayTeamWins + homeTeamWins;
            const gameNumber = totalGames + 1;

            // Determine home court advantage based on regular season record
            const awayRecord = selectedAwayTeam.displayWins !== undefined ? selectedAwayTeam.displayWins : selectedAwayTeam.wins;
            const awayLosses = selectedAwayTeam.displayLosses !== undefined ? selectedAwayTeam.displayLosses : selectedAwayTeam.losses;
            const homeRecord = selectedHomeTeam.displayWins !== undefined ? selectedHomeTeam.displayWins : selectedHomeTeam.wins;
            const homeLosses = selectedHomeTeam.displayLosses !== undefined ? selectedHomeTeam.displayLosses : selectedHomeTeam.losses;

            const awayWinPct = awayRecord / (awayRecord + awayLosses);
            const homeWinPct = homeRecord / (homeRecord + homeLosses);

            // Team with better record has home court advantage for the SERIES
            const homeCourtTeam = homeWinPct > awayWinPct ? homeTeamName : awayTeamName;

            return {
                awayTeam: awayTeamName,
                awayWins: awayTeamWins,
                homeTeam: homeTeamName,
                homeWins: homeTeamWins,
                gameNumber,
                homeCourtTeam,
                seriesKey
            };
        }

        function whoIsHomeThisGame(gameNumber, homeCourtTeam, awayTeam, homeTeam) {
            // 2-2-1-1-1 format: determine who plays at home for this specific game
            // Games 1,2,5,7: home court team's arena
            // Games 3,4,6: other team's arena
            const HOME_COURT_GAMES = [1, 2, 5, 7];
            const isHomeCourtGame = HOME_COURT_GAMES.includes(gameNumber);

            if (isHomeCourtGame) {
                return homeCourtTeam; // Home court team plays at their arena
            } else {
                return homeCourtTeam === homeTeam ? awayTeam : homeTeam; // Other team's arena
            }
        }

        function getSeriesStateProbability(seriesState) {
            // Returns probability for the team expected to win
            // Returns {team: "Celtics", probability: 76}
            const { awayTeam, awayWins, homeTeam, homeWins, gameNumber, homeCourtTeam } = seriesState;

            // Determine who's home for THIS game
            const gameHomeTeam = whoIsHomeThisGame(gameNumber, homeCourtTeam, awayTeam, homeTeam);
            const gameAwayTeam = gameHomeTeam === homeTeam ? awayTeam : homeTeam;

            // Determine series leader
            let leaderTeam, leaderWins, trailerWins;
            if (awayWins > homeWins) {
                leaderTeam = awayTeam;
                leaderWins = awayWins;
                trailerWins = homeWins;
            } else if (homeWins > awayWins) {
                leaderTeam = homeTeam;
                leaderWins = homeWins;
                trailerWins = awayWins;
            } else {
                leaderTeam = null; // Tied series
                leaderWins = awayWins;
                trailerWins = homeWins;
            }

            // Sweep protection: 3-0
            if (leaderWins === 3 && trailerWins === 0) {
                const trailingTeam = leaderTeam === awayTeam ? homeTeam : awayTeam;
                return { team: trailingTeam, probability: 95 }; // Sweep almost impossible
            }

            // Series tied states
            if (awayWins === homeWins) {
                if (awayWins === 0) {
                    // 0-0: Home court team favored 60%
                    return { team: homeCourtTeam, probability: 60 };
                } else if (awayWins === 1) {
                    // 1-1: Game home team favored 73%
                    return { team: gameHomeTeam, probability: 73 };
                } else if (awayWins === 2) {
                    // 2-2: Game 5 home team 83%
                    return { team: gameHomeTeam, probability: 83 };
                } else if (awayWins === 3) {
                    // 3-3: Game 7 home team 74%
                    return { team: gameHomeTeam, probability: 74 };
                }
            }

            // Series leader favored states
            if (leaderWins === 1 && trailerWins === 0) {
                return { team: leaderTeam, probability: 76 };
            } else if (leaderWins === 2 && trailerWins === 0) {
                return { team: leaderTeam, probability: 93 };
            } else if (leaderWins === 2 && trailerWins === 1) {
                return { team: leaderTeam, probability: 68 };
            } else if (leaderWins === 3 && trailerWins === 1) {
                return { team: leaderTeam, probability: 92 };
            } else if (leaderWins === 3 && trailerWins === 2) {
                return { team: leaderTeam, probability: 68 };
            }

            // Default: slight edge to game home team
            return { team: gameHomeTeam, probability: 55 };
        }

        function applyPlayoffModel(regularSeasonPercent) {
            // Check if this is a playoff game (NBA days 71-133: 4/18 - 6/19)
            const currentDay = activeBetDay || 1;
            if (currentSport !== 'nba' || currentDay < 71 || currentDay > 133) {
                return null; // Not a playoff game, use regular logic
            }

            const seriesState = getPlayoffSeriesState();
            if (!seriesState) {
                return null; // No series state available
            }

            const { awayTeam, awayWins, homeTeam, homeWins, gameNumber, homeCourtTeam } = seriesState;

            // Get base series prediction
            let prediction = getSeriesStateProbability(seriesState);
            let predictedTeam = prediction.team;
            let predictedProb = prediction.probability;

            // Apply snap-back logic: if home court team lost G1 at home, boost them +15% in G2
            const homeCourtTeamWins = homeCourtTeam === homeTeam ? homeWins : awayWins;
            const otherTeamWins = homeCourtTeam === homeTeam ? awayWins : homeWins;

            if (gameNumber === 2 && homeCourtTeamWins === 0 && otherTeamWins === 1) {
                console.log('📊 SNAP-BACK: Home court team', homeCourtTeam, 'lost G1, boosting G2 by 15%');
                predictedTeam = homeCourtTeam;
                predictedProb = Math.min(95, 60 + 15); // Base 60% + 15% boost = 75%
            }

            // Apply flip logic: if home court team lost both G1 AND G2 at home, flip the model
            let flipped = false;
            if (gameNumber >= 3 && homeCourtTeamWins === 0 && otherTeamWins === 2) {
                console.log('🔄 FLIP: Home court team', homeCourtTeam, 'lost G1 & G2, flipping model');
                flipped = true;
                const otherTeam = homeCourtTeam === homeTeam ? awayTeam : homeTeam;
                predictedTeam = otherTeam;
                // When flipped, other team becomes the favorite
            }

            // Convert predicted team probability to HOME team probability (for current game)
            let homeTeamProb;
            if (predictedTeam === homeTeam) {
                homeTeamProb = predictedProb;
            } else {
                homeTeamProb = 100 - predictedProb;
            }

            // Combine: 70% series model + 30% regular season
            const combinedPercent = (homeTeamProb * 0.70) + (regularSeasonPercent * 0.30);

            console.log('=== PLAYOFF MODEL ===');
            console.log('Series:', `${awayTeam} ${awayWins}-${homeWins} ${homeTeam}`, '| Game', gameNumber);
            console.log('Home Court Advantage:', homeCourtTeam);
            console.log('Prediction:', predictedTeam, predictedProb + '%');
            console.log('Home Team Prob:', homeTeamProb.toFixed(2) + '%');
            console.log('Regular Season:', regularSeasonPercent.toFixed(2) + '%');
            console.log('Combined (70/30):', combinedPercent.toFixed(2) + '%');
            if (flipped) console.log('⚠️ Model FLIPPED');
            console.log('====================');

            return combinedPercent;
        }

        // Update playoff series UI visibility and game number display
        function updatePlayoffSeriesUI() {
            // Playoff series info now shown inline with team names
            // This function kept for backward compatibility but does nothing
        }

        // Load series state from storage OR calculate from bet log
        async function loadSeriesState(awayTeam, homeTeam) {
            if (!awayTeam || !homeTeam) return;

            const seriesKey = getSeriesKey(awayTeam, homeTeam);
            const currentDay = activeBetDay || 1;
            const isPlayoffs = currentSport === 'nba' && currentDay >= 71 && currentDay <= 133;

            if (!isPlayoffs) {
                // Not playoffs, just calculate edge
                calculateGameWinnerEdge();
                return;
            }

            // SCAN BET LOG for all completed games in this series (playoff days 71-133)
            let awayWins = 0;
            let homeWins = 0;

            betLog.forEach(day => {
                if (day.day >= 71 && day.day <= 133) {
                    day.games.forEach(game => {
                        if (game.res === 'W' || game.res === 'L') {
                            // Check if this game is between our two teams (case-insensitive)
                            const gameTeams = [game.t1, game.t2].map(t => t.toLowerCase()).sort();
                            const seriesTeams = [awayTeam, homeTeam].map(t => t.toLowerCase()).sort();

                            if (gameTeams[0] === seriesTeams[0] && gameTeams[1] === seriesTeams[1]) {
                                // This is a game in our series - determine actual winner
                                const pickWon = game.res === 'W';
                                const opponent = game.pick === game.t1 ? game.t2 : game.t1;
                                const actualWinner = pickWon ? game.pick : opponent;

                                // Increment the correct team's wins
                                if (actualWinner.toLowerCase() === awayTeam.toLowerCase()) {
                                    awayWins++;
                                } else if (actualWinner.toLowerCase() === homeTeam.toLowerCase()) {
                                    homeWins++;
                                }
                            }
                        }
                    });
                }
            });

            // Calculate losses for each team
            const awayLosses = homeWins;
            const homeLosses = awayWins;

            console.log('📊 Calculated series state from bet log:', seriesKey, {
                awayTeam,
                awayRecord: `${awayWins}-${awayLosses}`,
                homeTeam,
                homeRecord: `${homeWins}-${homeLosses}`
            });

            // Update team name displays with series records
            updateTeamNamesWithSeries(awayTeam, awayWins, awayLosses, homeTeam, homeWins, homeLosses);

            // Save to backend for future reference
            const seriesState = {
                seriesKey,
                awayTeam,
                awayWins: Math.min(4, awayWins),
                homeTeam,
                homeWins: Math.min(4, homeWins),
                homeCourtTeam: awayTeam // Will be determined by regular season record
            };
            await saveSeriesState(seriesState);

            calculateGameWinnerEdge();
        }

        // Update team name displays with series records
        function updateTeamNamesWithSeries(awayTeam, awayWins, awayLosses, homeTeam, homeWins, homeLosses) {
            const awayTeamNameContent = document.getElementById('awayTeamNameContent');
            const homeTeamNameContent = document.getElementById('homeTeamNameContent');

            if (awayTeamNameContent && selectedAwayTeam) {
                awayTeamNameContent.innerHTML = `
                    <img src="${selectedAwayTeam.logo}" class="winner-team-logo" alt="${selectedAwayTeam.name}">
                    <span>${selectedAwayTeam.name} <span style="color:#888;font-size:11px;">(${awayWins}-${awayLosses})</span></span>
                `;
            }

            if (homeTeamNameContent && selectedHomeTeam) {
                homeTeamNameContent.innerHTML = `
                    <img src="${selectedHomeTeam.logo}" class="winner-team-logo" alt="${selectedHomeTeam.name}">
                    <span>${selectedHomeTeam.name} <span style="color:#888;font-size:11px;">(${homeWins}-${homeLosses})</span></span>
                `;
            }
        }

        // Save series state to storage
        async function saveSeriesState(seriesState) {
            if (!seriesState) return;

            const { seriesKey, awayTeam, awayWins, homeTeam, homeWins, homeCourtTeam } = seriesState;

            const payload = {
                awayTeam,
                awayWins,
                homeTeam,
                homeWins,
                homeCourtTeam,
                lastUpdated: new Date().toISOString()
            };

            try {
                await fetch(`${BACKEND_URL}/api/nba/playoffSeries/${encodeURIComponent(seriesKey)}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                console.log('✅ Saved series state:', seriesKey, payload);
            } catch (e) {
                console.error('Failed to save series state:', e);
            }
        }

        // Function to calculate game winner edge
        function calculateGameWinnerEdge() {
            const awayTeamSeedInput = document.getElementById('awayTeamSeed');
            const homeTeamSeedInput = document.getElementById('homeTeamSeed');
            const awayOddsInput = document.getElementById('awayTeamOdds');
            const homeOddsInput = document.getElementById('homeTeamOdds');
            const finalEdgeValueEl = document.getElementById('finalEdgeValue');
            
            if (!awayTeamSeedInput || !homeTeamSeedInput || !awayOddsInput || !homeOddsInput || !finalEdgeValueEl) return;
            
            // Get inputs
            const awaySeed = parseFloat(awayTeamSeedInput.value) || 0;
            const homeSeed = parseFloat(homeTeamSeedInput.value) || 0;
            const awayOddsStr = awayOddsInput.value.trim();
            const homeOddsStr = homeOddsInput.value.trim();
            
            // If any input missing, show dash
            if (!awaySeed || !homeSeed || !awayOddsStr || !homeOddsStr) {
                finalEdgeValueEl.textContent = '—';
                
                // Reset bet size box
                const winnerExtraBox = document.getElementById('winnerExtraBox');
                if (winnerExtraBox) {
                    winnerExtraBox.innerHTML = `<div class="winner-extra-text">—</div>`;
                }
                
                updateWinnerDisplay();
                return;
            }
            
            // Parse odds
            const awayOdds = parseFloat(awayOddsStr.replace(/[+\-]/g, ''));
            const homeOdds = parseFloat(homeOddsStr.replace(/[+\-]/g, ''));
            const awayIsNegative = awayOddsStr.includes('-');
            const homeIsNegative = homeOddsStr.includes('-');
            
            // Get win-loss records from selected teams
            // Use displayWins/displayLosses if user edited them, otherwise use backend data
            const awayWins = selectedAwayTeam ? (selectedAwayTeam.displayWins !== undefined ? selectedAwayTeam.displayWins : selectedAwayTeam.wins) : 0;
            const awayLosses = selectedAwayTeam ? (selectedAwayTeam.displayLosses !== undefined ? selectedAwayTeam.displayLosses : selectedAwayTeam.losses) : 0;
            const homeWins = selectedHomeTeam ? (selectedHomeTeam.displayWins !== undefined ? selectedHomeTeam.displayWins : selectedHomeTeam.wins) : 0;
            const homeLosses = selectedHomeTeam ? (selectedHomeTeam.displayLosses !== undefined ? selectedHomeTeam.displayLosses : selectedHomeTeam.losses) : 0;
            
            // ===== DATA-DRIVEN 4-CORE MATH =====
            
            // CORE 1: SEED TO TABLE % (with home court baked in)
            const awayBaseValue = 100 - ((awaySeed - 1) / 15) * 70;
            const homeBaseValue = 100 - ((homeSeed - 1) / 15) * 70;
            const totalBaseValue = awayBaseValue + homeBaseValue;
            let awayTablePercent = (awayBaseValue / totalBaseValue) * 100;
            let homeTablePercent = (homeBaseValue / totalBaseValue) * 100;
            
            // FIX #1: Apply home court advantage directly to Core 1
            // Data shows 64% home win rate - use asymmetric adjustment
            awayTablePercent = awayTablePercent - 2.5; // Away penalty
            homeTablePercent = homeTablePercent + 3.0; // Home boost
            
            // Round to 2 decimals
            awayTablePercent = Math.round(awayTablePercent * 100) / 100;
            homeTablePercent = Math.round(homeTablePercent * 100) / 100;
            
            // CORE 2: TEAM STRENGTH % (table % - injuries with location-based weighting)
            // FIX #3: Weight injuries more heavily for home teams (data shows home teams with less injuries = 64% win rate)
            const AWAY_INJURY_PENALTY = 3.0;
            const HOME_INJURY_PENALTY = 4.0; // Home teams suffer more from injuries
            let awayTeamStrength = awayTablePercent - (awayInjuries * AWAY_INJURY_PENALTY);
            let homeTeamStrength = homeTablePercent - (homeInjuries * HOME_INJURY_PENALTY);
            // Round to 2 decimals
            awayTeamStrength = Math.round(awayTeamStrength * 100) / 100;
            homeTeamStrength = Math.round(homeTeamStrength * 100) / 100;
            
            // CORE 3: MARKET ODDS TO NO VIG % (with away favorite penalty)
            let awayImplied, homeImplied;
            if (awayIsNegative) {
                awayImplied = awayOdds / (awayOdds + 100);
            } else {
                awayImplied = 100 / (awayOdds + 100);
            }
            if (homeIsNegative) {
                homeImplied = homeOdds / (homeOdds + 100);
            } else {
                homeImplied = 100 / (homeOdds + 100);
            }
            const totalImplied = awayImplied + homeImplied;
            let awayNoVigOddsPercent = (awayImplied / totalImplied) * 100;
            let homeNoVigOddsPercent = (homeImplied / totalImplied) * 100;
            
            // Round to 2 decimals
            awayNoVigOddsPercent = Math.round(awayNoVigOddsPercent * 100) / 100;
            homeNoVigOddsPercent = Math.round(homeNoVigOddsPercent * 100) / 100;
            
            // CORE 4: WIN % FROM LAST 10 GAMES
            const awayLast10 = selectedAwayTeam?.last10Results || [];
            const homeLast10 = selectedHomeTeam?.last10Results || [];
            const awayLast10Wins = awayLast10.filter(r => r === 'W').length;
            const homeLast10Wins = homeLast10.filter(r => r === 'W').length;
            let awayWinPercent = awayLast10.length > 0 ? (awayLast10Wins / awayLast10.length) * 100 : 50;
            let homeWinPercent = homeLast10.length > 0 ? (homeLast10Wins / homeLast10.length) * 100 : 50;
            // Round to 2 decimals
            awayWinPercent = Math.round(awayWinPercent * 100) / 100;
            homeWinPercent = Math.round(homeWinPercent * 100) / 100;
            
            console.log("=== CALCULATION DEBUG ===");
            console.log("Seeds:", awaySeed, homeSeed);
            console.log("Injuries:", awayInjuries, homeInjuries);
            console.log("Last 10 Records:", awayLast10Wins + "-" + (awayLast10.length - awayLast10Wins), homeLast10Wins + "-" + (homeLast10.length - homeLast10Wins));
            console.log("Core 1 - Table %:", awayTablePercent.toFixed(2), homeTablePercent.toFixed(2));
            console.log("Core 2 - Team Strength %:", awayTeamStrength.toFixed(2), homeTeamStrength.toFixed(2));
            console.log("Core 3 - No Vig Odds %:", awayNoVigOddsPercent.toFixed(2), homeNoVigOddsPercent.toFixed(2));
            console.log("Core 4 - Last 10 Win %:", awayWinPercent.toFixed(2), homeWinPercent.toFixed(2));
            
            // STEP 1: Add up 4 cores
            let awayTotalValue = awayTablePercent + awayTeamStrength + awayNoVigOddsPercent + awayWinPercent;
            let homeTotalValue = homeTablePercent + homeTeamStrength + homeNoVigOddsPercent + homeWinPercent;
            
            // OPTIMIZED: Apply seed gap multiplier (data shows seeds are strongest predictor at 68-77%)
            const seedGap = Math.abs(awaySeed - homeSeed);
            if (seedGap >= 4) {
                // Large talent gap - amplify the difference MORE (increased from 0.2 to 0.3)
                const talentDiff = homeTotalValue - awayTotalValue;
                if (homeSeed < awaySeed) {
                    // Home has better seed - boost home more
                    homeTotalValue = homeTotalValue + (talentDiff * 0.3);
                } else {
                    // Away has better seed - boost away more
                    awayTotalValue = awayTotalValue + (Math.abs(talentDiff) * 0.3);
                }
            } else if (seedGap >= 2) {
                // 2-3 seed gap — 91.1% win rate, nearly as strong as 4+. Half amplifier (0.15x).
                const talentDiff = homeTotalValue - awayTotalValue;
                if (homeSeed < awaySeed) {
                    homeTotalValue = homeTotalValue + (talentDiff * 0.15);
                } else {
                    awayTotalValue = awayTotalValue + (Math.abs(talentDiff) * 0.15);
                }
            }
            
            // Round to 2 decimals
            awayTotalValue = Math.round(awayTotalValue * 100) / 100;
            homeTotalValue = Math.round(homeTotalValue * 100) / 100;
            
            // STEP 2: Divide by 4 (average the cores)
            let awayAverage = awayTotalValue / 4;
            let homeAverage = homeTotalValue / 4;
            // Round to 2 decimals
            awayAverage = Math.round(awayAverage * 100) / 100;
            homeAverage = Math.round(homeAverage * 100) / 100;

            // IF AVERAGE EXCEEDS 100, THAT TEAM IS THE OBVIOUS WINNER - PICK THEM
            if (homeAverage > 100 || awayAverage > 100) {
                let overWinner = homeAverage > awayAverage ? (selectedHomeTeam ? selectedHomeTeam.name : 'HOME') : (selectedAwayTeam ? selectedAwayTeam.name : 'AWAY');
                let overPercent = Math.min(Math.max(homeAverage, awayAverage), 99.99);
                finalEdgeValueEl.innerHTML = overPercent.toFixed(2) + '%';
                finalEdgeValueEl.dataset.winner = overWinner;
                updateWinnerDisplay();
                return;
            }

            // STEP 3: Convert to American odds
            function percentToOdds(percent) {
                if (percent >= 50) {
                    // Favorite
                    return -(percent / (100 - percent)) * 100;
                } else {
                    // Underdog
                    return ((100 - percent) / percent) * 100;
                }
            }
            const awayOddsCalculated = percentToOdds(awayAverage);
            const homeOddsCalculated = percentToOdds(homeAverage);
            
            // STEP 4: Convert back to no-vig percentages
            function oddsToImplied(odds) {
                if (odds < 0) {
                    return Math.abs(odds) / (Math.abs(odds) + 100);
                } else {
                    return 100 / (odds + 100);
                }
            }
            const awayImpliedFinal = oddsToImplied(awayOddsCalculated);
            const homeImpliedFinal = oddsToImplied(homeOddsCalculated);
            const totalImpliedFinal = awayImpliedFinal + homeImpliedFinal;
            let awayFinalPercent = (awayImpliedFinal / totalImpliedFinal) * 100;
            let homeFinalPercent = (homeImpliedFinal / totalImpliedFinal) * 100;

            console.log("REGULAR SEASON PERCENTS:", awayFinalPercent.toFixed(4), homeFinalPercent.toFixed(4));

            // ===== PLAYOFF MODEL OVERRIDE (NBA playoffs only, day >= 71) =====
            const playoffHomePercent = applyPlayoffModel(homeFinalPercent);
            if (playoffHomePercent !== null) {
                homeFinalPercent = playoffHomePercent;
                awayFinalPercent = 100 - homeFinalPercent; // Ensure they sum to 100
                console.log("PLAYOFF ADJUSTED:", awayFinalPercent.toFixed(4), homeFinalPercent.toFixed(4));
            }

            console.log("FINAL PERCENTS:", awayFinalPercent.toFixed(4), homeFinalPercent.toFixed(4));
            console.log("======================");
            
            // STEP 5: Determine winner (pick the higher percentage)
            let winnerTeam, winnerPercent;
            if (awayFinalPercent > homeFinalPercent) {
                winnerTeam = selectedAwayTeam ? selectedAwayTeam.name : 'AWAY';
                winnerPercent = awayFinalPercent;
            } else {
                winnerTeam = selectedHomeTeam ? selectedHomeTeam.name : 'HOME';
                winnerPercent = homeFinalPercent;
            }
            
            // Display in final edge box (just percentage, but store winner in data attribute)
            finalEdgeValueEl.innerHTML = `${winnerPercent.toFixed(2)}%`;
            finalEdgeValueEl.dataset.winner = winnerTeam; // Store for Game Winner box
            
            // ===== BET RECOMMENDATION SYSTEM =====
            const winnerExtraBox = document.getElementById('winnerExtraBox');
            if (winnerExtraBox) {
                // Determine who is favorite based on odds
                const awayIsFavorite = awayIsNegative;
                const homeIsFavorite = homeIsNegative;
                
                // Determine who won the pick
                const awayWon = awayFinalPercent > homeFinalPercent;
                const homeWon = !awayWon;
                
                // Calculate key metrics
                const seedGap = Math.abs(awaySeed - homeSeed);
                const injuryGap = Math.abs(awayInjuries - homeInjuries);
                
                // Get last-10 stats
                const awayLast10 = selectedAwayTeam?.last10Results || [];
                const homeLast10 = selectedHomeTeam?.last10Results || [];
                const awayLast10WinPct = awayLast10.length > 0 ? (awayLast10.filter(r => r === 'W').length / awayLast10.length) * 100 : 50;
                const homeLast10WinPct = homeLast10.length > 0 ? (homeLast10.filter(r => r === 'W').length / homeLast10.length) * 100 : 50;
                
                let recommendation = 'CAREFUL';
                let reason = 'Standard Matchup';
                
                // ===== HARD OVERRIDE: Slight Fav + 1 Seed Gap = INSTANT SKIP =====
                // Data: 25% win rate — single worst pattern in 183 picks. No exceptions.
                const favOdds = homeIsFavorite ? homeOdds : (awayIsFavorite ? awayOdds : 0);
                const isSlightFav = favOdds >= 100 && favOdds <= 149;
                if (isSlightFav && seedGap === 1) {
                    recommendation = 'SKIP';
                    reason = 'Slight Fav + 1 Seed Gap — 25% TRAP';
                    // Hard override — skip all further logic
                    let recColor = '#ef4444';
                    winnerExtraBox.innerHTML = `
                        <div class="winner-extra-text" style="color: ${recColor}; font-weight: 700; font-size: 16px;">
                            ${recommendation}
                        </div>
                        <div class="winner-extra-text" style="color: #888; font-size: 12px; margin-top: 4px;">
                            ${reason}
                        </div>
                    `;
                    updateWinnerDisplay();
                    return;
                }
                // ===== END HARD OVERRIDE =====
                
                // Check for BET scenarios (80-90% confidence)
                if (homeWon && homeIsFavorite && homeSeed < awaySeed) {
                    recommendation = 'BET';
                    reason = 'Home Fav + Better Seed';
                }
                else if (homeWon && homeIsFavorite && homeInjuries <= awayInjuries - 2) {
                    recommendation = 'BET';
                    reason = 'Home Fav + Injury Advantage';
                }
                else if (seedGap >= 5 && ((homeWon && homeSeed < awaySeed) || (awayWon && awaySeed < homeSeed))) {
                    recommendation = 'BET';
                    reason = 'Huge Seed Mismatch';
                }
                else if (homeWon && homeSeed <= 3 && homeIsFavorite) {
                    recommendation = 'BET';
                    reason = 'Top Seed Home Favorite';
                }
                else if (homeWon && homeIsNegative && homeOdds >= 300) {
                    recommendation = 'BET';
                    reason = 'Heavy Home Favorite';
                }
                else if (homeWon && awayInjuries >= homeInjuries + 4) {
                    recommendation = 'BET';
                    reason = 'Clean Injury Advantage';
                }
                else if (awayWon && awayIsFavorite && awaySeed < homeSeed) {
                    recommendation = 'BET';
                    reason = 'Away Fav + Better Seed';
                }
                else if ((awayWon && awayLast10WinPct >= 80 && homeLast10WinPct <= 30) || 
                         (homeWon && homeLast10WinPct >= 80 && awayLast10WinPct <= 30)) {
                    recommendation = 'BET';
                    reason = 'Last-10 Dominance';
                }
                
                // Check for CAREFUL scenarios (70-75% confidence)
                else if (homeWon && !homeIsFavorite && homeSeed < awaySeed) {
                    recommendation = 'CAREFUL';
                    reason = 'UPSET - Home Dog Better Seed';
                }
                else if (awayWon && awayIsFavorite && seedGap >= 4) {
                    recommendation = 'CAREFUL';
                    reason = 'Away Fav Big Seed Gap';
                }
                else if (seedGap >= 3 && seedGap <= 4) {
                    recommendation = 'CAREFUL';
                    reason = 'Moderate Seed Gap';
                }
                else if (homeWon && homeIsFavorite && awaySeed === homeSeed) {
                    recommendation = 'CAREFUL';
                    reason = 'Home Fav Equal Seeds';
                }
                else if ((homeWon && !homeIsFavorite && homeInjuries <= awayInjuries - 2) ||
                         (awayWon && !awayIsFavorite && awayInjuries <= homeInjuries - 2)) {
                    recommendation = 'CAREFUL';
                    reason = 'UPSET - Injury Advantage';
                }
                else if ((awayWon && awayLast10WinPct >= 70) || (homeWon && homeLast10WinPct >= 70)) {
                    recommendation = 'CAREFUL';
                    reason = 'Hot Streak Last-10';
                }
                else if (awayWon && !awayIsFavorite && awaySeed < homeSeed && awayInjuries <= homeInjuries) {
                    recommendation = 'CAREFUL';
                    reason = 'UPSET - Away Dog Advantages';
                }
                
                // Check for SKIP scenarios (40-60% confidence)
                else if (awaySeed === homeSeed && Math.abs(awayInjuries - homeInjuries) <= 1) {
                    recommendation = 'SKIP';
                    reason = 'Coin Flip - Too Close';
                }
                else if (awayWon && awayIsFavorite && awayOdds <= 150) {
                    recommendation = 'SKIP';
                    reason = 'Away Fav Small Odds';
                }
                else if (awayWon && awayIsFavorite && awaySeed > homeSeed) {
                    // CHANGE #3: Split by line size. Slight fav = SKIP. -150+ = CAREFUL (75% win rate).
                    if (awayOdds <= 149) {
                        recommendation = 'SKIP';
                        reason = 'Away Fav Worse Seed (Slight) — Odds Too Thin';
                    } else {
                        recommendation = 'CAREFUL';
                        reason = 'Away Fav vs Better Seed — 75% Historical, Proceed With Caution';
                    }
                }
                else if (awayInjuries >= 5 && homeInjuries >= 5) {
                    recommendation = 'SKIP';
                    reason = 'Both Teams Injured';
                }
                else if (awayWon && awayIsFavorite && seedGap <= 1) {
                    recommendation = 'SKIP';
                    reason = 'Away Fav Close Seeds';
                }
                else if (awayLast10WinPct <= 30 && homeLast10WinPct <= 30) {
                    recommendation = 'SKIP';
                    reason = 'Both Teams Struggling';
                }
                
                // ===== CONFIDENCE SCORE =====
                // SEED GAP — 35pts max
                const seedGapScore = (() => {
                    if (seedGap >= 10) return 35;
                    if (seedGap >= 7)  return 27;
                    if (seedGap >= 4)  return 18;
                    if (seedGap >= 1)  return 9;
                    return 0;
                })();

                // W-L RECORD — 25pts max
                const pickedTeam    = homeWon ? selectedHomeTeam : selectedAwayTeam;
                const oppTeam       = homeWon ? selectedAwayTeam : selectedHomeTeam;
                const pickedWinPct  = pickedTeam ? pickedTeam.wins / (pickedTeam.wins + pickedTeam.losses) : 0.5;
                const oppWinPct     = oppTeam    ? oppTeam.wins    / (oppTeam.wins    + oppTeam.losses)    : 0.5;
                const recordGap     = pickedWinPct - oppWinPct;
                const recordScore   = recordGap >= 0.20 ? 25
                                    : recordGap >= 0.12 ? 19
                                    : recordGap >= 0.06 ? 13
                                    : recordGap >= 0    ?  7
                                    : recordGap >= -0.1 ?  2
                                    :                      0;

                // LAST 10 — 20pts max
                const pickedL10 = homeWon ? homeLast10WinPct : awayLast10WinPct;
                const oppL10    = homeWon ? awayLast10WinPct : homeLast10WinPct;
                const l10Score  = (pickedL10 >= 70 && oppL10 <= 40) ? 20
                                : (pickedL10 >= 70)                  ? 14
                                : (pickedL10 >= 50 && oppL10 <= 30)  ? 11
                                : (pickedL10 >= 50)                  ?  7
                                : 0;

                // ODDS — 12pts max
                const pickedIsFav   = homeWon ? homeIsFavorite : awayIsFavorite;
                const pickedOddsAbs = homeWon ? homeOdds : awayOdds;
                const oddsScore = pickedIsFav
                    ? (pickedOddsAbs >= 500 ? 12
                     : pickedOddsAbs >= 300 ? 10
                     : pickedOddsAbs >= 200 ?  7
                     : 4)
                    : 1;

                // INJURIES — 8pts max
                const pickedInj = homeWon ? homeInjuries : awayInjuries;
                const oppInj    = homeWon ? awayInjuries : homeInjuries;
                const injGapVal = oppInj - pickedInj;
                const injScore  = injGapVal >= 4  ?  8
                                : injGapVal >= 1  ?  5
                                : injGapVal === 0 ?  1
                                : injGapVal >= -2 ? -3
                                :                  -6;

                const confidenceScore = Math.max(0, Math.min(100, seedGapScore + recordScore + l10Score + oddsScore + injScore));
                if (winnerExtraBox) winnerExtraBox.dataset.confidenceScore = confidenceScore;

                // Set colors based on recommendation
                let recColor = '';
                if (recommendation === 'BET') recColor = '#22c55e';
                else if (recommendation === 'CAREFUL') recColor = '#fbbf24';
                else if (recommendation === 'SKIP') recColor = '#ef4444';

                const lockLabel = confidenceScore >= 60 ? '🔒 LOCK' : '';
                winnerExtraBox.innerHTML = `
                    <div class="winner-extra-text" style="color: ${recColor}; font-weight: 700; font-size: 16px;">
                        ${recommendation}${lockLabel ? `&nbsp;<span style="color:#f59e0b;font-size:13px;">${lockLabel}</span>` : ''}
                    </div>
                    <div class="winner-extra-text" style="color: #888; font-size: 12px; margin-top: 4px;">
                        ${reason}
                    </div>
                    <div class="winner-extra-text" style="color: #555; font-size: 11px; margin-top: 3px; letter-spacing:1px;">
                        CONF <span style="color:${confidenceScore >= 60 ? '#f59e0b' : confidenceScore >= 45 ? '#22c55e' : '#888'}; font-weight:700;">${confidenceScore}</span>
                    </div>
                `;
            }
            
            // Update winner display
            updateWinnerDisplay();
        }

        // e-NBA Game Winner Edge Calculation (NBA 2K Esports)
        function calculateENBAGameWinnerEdge() {
            // Parse H2H inputs as direct percentages (e.g., "75" = 75%)
            const awayH2HStr = document.getElementById('awayTeamH2HInput')?.value.trim() || '';
            const homeH2HStr = document.getElementById('homeTeamH2HInput')?.value.trim() || '';

            // Parse as raw percentages
            const awayH2HPct = parseFloat(awayH2HStr) || 0;
            const homeH2HPct = parseFloat(homeH2HStr) || 0;

            const awayOddsStr = document.getElementById('awayTeamOdds')?.value.trim() || '';
            const homeOddsStr = document.getElementById('homeTeamOdds')?.value.trim() || '';

            const finalEdgeValueEl = document.getElementById('finalEdgeValue');
            if (!finalEdgeValueEl) return;

            // Validate inputs
            if (!awayOddsStr || !homeOddsStr || !awayH2HStr || !homeH2HStr) {
                finalEdgeValueEl.textContent = '—';
                const winnerExtraBox = document.getElementById('winnerExtraBox');
                if (winnerExtraBox) winnerExtraBox.innerHTML = `<div class="winner-extra-text">—</div>`;
                updateWinnerDisplay();
                return;
            }

            // Get team names from selected teams
            const awayTeamName = selectedAwayTeam?.name || '';
            const homeTeamName = selectedHomeTeam?.name || '';

            if (!awayTeamName || !homeTeamName) {
                finalEdgeValueEl.textContent = '—';
                updateWinnerDisplay();
                return;
            }

            // ===== CORE 1: H2H % (32% weight) =====
            // Use the percentages directly (e.g., 75 = 75%)
            let awayCore1 = awayH2HPct > 0 ? awayH2HPct : 50;
            let homeCore1 = homeH2HPct > 0 ? homeH2HPct : 50;

            // Normalize so they add up to 100%
            const core1Total = awayCore1 + homeCore1;
            if (core1Total > 0) {
                awayCore1 = (awayCore1 / core1Total) * 100;
                homeCore1 = (homeCore1 / core1Total) * 100;
            }

            // ===== CORE 2: Team Ability % (32% weight) =====
            // Part A: Real NBA standings (win-loss %)
            const awayWins = selectedAwayTeam?.displayWins !== undefined ? selectedAwayTeam.displayWins : selectedAwayTeam?.wins || 0;
            const awayLosses = selectedAwayTeam?.displayLosses !== undefined ? selectedAwayTeam.displayLosses : selectedAwayTeam?.losses || 0;
            const homeWins = selectedHomeTeam?.displayWins !== undefined ? selectedHomeTeam.displayWins : selectedHomeTeam?.wins || 0;
            const homeLosses = selectedHomeTeam?.displayLosses !== undefined ? selectedHomeTeam.displayLosses : selectedHomeTeam?.losses || 0;

            const awayRealWLPct = awayWins + awayLosses > 0 ? (awayWins / (awayWins + awayLosses)) * 100 : 50;
            const homeRealWLPct = homeWins + homeLosses > 0 ? (homeWins / (homeWins + homeLosses)) * 100 : 50;

            // Part B: 2K Overall matchup %
            const away2KOVR = NBA_2K26_OVERALLS[awayTeamName] || 80;
            const home2KOVR = NBA_2K26_OVERALLS[homeTeamName] || 80;

            // Normalize OVR to score (range: 77-85)
            const away2KScore = ((away2KOVR - 77) / 8) * 100 + 50;
            const home2KScore = ((home2KOVR - 77) / 8) * 100 + 50;

            // 2K matchup %
            const k2Total = away2KScore + home2KScore;
            const away2KPct = (away2KScore / k2Total) * 100;
            const home2KPct = (home2KScore / k2Total) * 100;

            // Blend real WL + 2K (50/50)
            const awayAbility = (awayRealWLPct + away2KPct) / 2;
            const homeAbility = (homeRealWLPct + home2KPct) / 2;

            // Normalize
            const abilityTotal = awayAbility + homeAbility;
            let awayCore2 = (awayAbility / abilityTotal) * 100;
            let homeCore2 = (homeAbility / abilityTotal) * 100;

            // ===== CORE 3: No-Vig Odds % (21% weight) =====
            const awayOdds = parseFloat(awayOddsStr.replace(/[+\-]/g, ''));
            const homeOdds = parseFloat(homeOddsStr.replace(/[+\-]/g, ''));
            const awayIsNegative = awayOddsStr.includes('-');
            const homeIsNegative = homeOddsStr.includes('-');

            let awayImplied, homeImplied;
            if (awayIsNegative) {
                awayImplied = awayOdds / (awayOdds + 100);
            } else {
                awayImplied = 100 / (awayOdds + 100);
            }
            if (homeIsNegative) {
                homeImplied = homeOdds / (homeOdds + 100);
            } else {
                homeImplied = 100 / (homeOdds + 100);
            }

            // Remove vig
            const impliedTotal = awayImplied + homeImplied;
            let awayCore3 = (awayImplied / impliedTotal) * 100;
            let homeCore3 = (homeImplied / impliedTotal) * 100;

            // ===== CORE 4: Full NBA Playbook Output (15% weight) =====
            // Call the existing NBA playbook and extract the result
            // Store current final edge, call NBA calc, read result, restore if needed
            const currentEdgeText = finalEdgeValueEl.textContent;
            calculateGameWinnerEdge();
            const nbaPlaybookText = finalEdgeValueEl.textContent;

            // Parse the NBA playbook result (format: "TEAM 65%")
            let awayCore4 = 50, homeCore4 = 50;
            if (nbaPlaybookText && nbaPlaybookText !== '—') {
                const match = nbaPlaybookText.match(/(\d+)%/);
                if (match) {
                    const winnerPct = parseFloat(match[1]);
                    // Determine which team won in NBA playbook
                    if (nbaPlaybookText.includes(awayTeamName.toUpperCase())) {
                        awayCore4 = winnerPct;
                        homeCore4 = 100 - winnerPct;
                    } else if (nbaPlaybookText.includes(homeTeamName.toUpperCase())) {
                        homeCore4 = winnerPct;
                        awayCore4 = 100 - winnerPct;
                    }
                }
            }

            // ===== WEIGHTED AVERAGE =====
            const awayFinal = (awayCore1 * 0.32) + (awayCore2 * 0.32) + (awayCore3 * 0.21) + (awayCore4 * 0.15);
            const homeFinal = (homeCore1 * 0.32) + (homeCore2 * 0.32) + (homeCore3 * 0.21) + (homeCore4 * 0.15);

            // Determine winner
            const winner = awayFinal > homeFinal ? awayTeamName.toUpperCase() : homeTeamName.toUpperCase();
            const winnerPct = Math.max(awayFinal, homeFinal).toFixed(2);

            // Update display
            finalEdgeValueEl.innerHTML = `${winner} ${winnerPct}%`;
            finalEdgeValueEl.dataset.winner = awayFinal > homeFinal ? awayTeamName : homeTeamName;

            // Update extra box with breakdown
            const winnerExtraBox = document.getElementById('winnerExtraBox');
            if (winnerExtraBox) {
                winnerExtraBox.innerHTML = `
                    <div class="winner-extra-text" style="font-size:9px;line-height:1.3;">
                        <div style="margin-bottom:4px;font-weight:700;color:#fff;">e-NBA CORE 4</div>
                        <div>H2H: ${awayTeamName} ${awayCore1.toFixed(1)}% - ${homeCore1.toFixed(1)}% ${homeTeamName}</div>
                        <div>Ability: ${awayCore2.toFixed(1)}% - ${homeCore2.toFixed(1)}%</div>
                        <div>Odds: ${awayCore3.toFixed(1)}% - ${homeCore3.toFixed(1)}%</div>
                        <div>NBA: ${awayCore4.toFixed(1)}% - ${homeCore4.toFixed(1)}%</div>
                    </div>
                `;
            }

            updateWinnerDisplay();
        }

        // Wrapper to call appropriate game winner calculation based on sport
        function recalculateGameWinner() {
            if (currentSport === 'enba') {
                calculateENBAGameWinnerEdge();
            } else {
                calculateGameWinnerEdge();
            }
        }

        // Toggle game winner UI between NBA and e-NBA mode
        function updateGameWinnerMode() {
            const rightColumnLabel = document.getElementById('rightColumnLabel');
            const awayInjDisplay = document.getElementById('awayTeamInjDisplay');
            const homeInjDisplay = document.getElementById('homeTeamInjDisplay');
            const awayH2HInput = document.getElementById('awayTeamH2HInput');
            const homeH2HInput = document.getElementById('homeTeamH2HInput');

            if (currentSport === 'enba') {
                // e-NBA mode: show H2H inputs, hide injuries
                if (rightColumnLabel) rightColumnLabel.textContent = 'h2h';
                if (awayInjDisplay) awayInjDisplay.style.display = 'none';
                if (homeInjDisplay) homeInjDisplay.style.display = 'none';
                if (awayH2HInput) awayH2HInput.style.display = 'block';
                if (homeH2HInput) homeH2HInput.style.display = 'block';
            } else {
                // NBA mode: show injuries, hide H2H inputs
                if (rightColumnLabel) rightColumnLabel.textContent = 'inj';
                if (awayInjDisplay) awayInjDisplay.style.display = 'flex';
                if (homeInjDisplay) homeInjDisplay.style.display = 'flex';
                if (awayH2HInput) awayH2HInput.style.display = 'none';
                if (homeH2HInput) homeH2HInput.style.display = 'none';
            }

            // Recalculate with new mode
            recalculateGameWinner();
        }

        // Function to update winner display based on team names and scores
        function updateWinnerDisplay() {
            const awayTeamNameLabel = document.getElementById('awayTeamNameLabel');
            const homeTeamNameLabel = document.getElementById('homeTeamNameLabel');
            const winnerResultBox = document.getElementById('winnerResultBox');
            const finalEdgeValueEl = document.getElementById('finalEdgeValue');
            
            if (!awayTeamNameLabel || !homeTeamNameLabel || !winnerResultBox || !finalEdgeValueEl) return;
            
            const awayName = selectedAwayTeam ? selectedAwayTeam.name : 'AWAY';
            const homeName = selectedHomeTeam ? selectedHomeTeam.name : 'HOME';
            const awayColor1 = selectedAwayTeam ? selectedAwayTeam.color1 : '#22c55e';
            const awayColor2 = selectedAwayTeam ? selectedAwayTeam.color2 : '#16a34a';
            const homeColor1 = selectedHomeTeam ? selectedHomeTeam.color1 : '#22c55e';
            const homeColor2 = selectedHomeTeam ? selectedHomeTeam.color2 : '#16a34a';
            
            // Get winner from finalEdgeValueEl data attribute
            const finalEdgeHTML = finalEdgeValueEl.innerHTML;
            const winnerTeam = finalEdgeValueEl.dataset.winner || '';
            
            let winnerHTML = '';
            if (finalEdgeHTML === '—' || finalEdgeHTML.includes('—') || !winnerTeam) {
                winnerHTML = '—';
                winnerResultBox.classList.remove('highlight-winner');
                winnerResultBox.style.background = 'rgba(60, 60, 70, 0.95)';
            } else {
                // Determine if it's away or home
                const isAwayWinner = winnerTeam === awayName;
                const isHomeWinner = winnerTeam === homeName;
                
                if (isAwayWinner || isHomeWinner) {
                    const winnerColor1 = isAwayWinner ? awayColor1 : homeColor1;
                    const winnerColor2 = isAwayWinner ? awayColor2 : homeColor2;
                    const displayName = isAwayWinner ? awayName.toUpperCase() : homeName.toUpperCase();
                    const winnerLogo = isAwayWinner ? (selectedAwayTeam?.logo || '') : (selectedHomeTeam?.logo || '');
                    
                    winnerHTML = `
                        <img src="${winnerLogo}" style="width: 60px; height: 60px; margin-bottom: 8px; object-fit: contain;">
                        <div>${displayName}</div>
                    `;
                    winnerResultBox.classList.add('highlight-winner');
                    winnerResultBox.style.background = `linear-gradient(135deg, ${winnerColor1} 0%, ${winnerColor2} 100%)`;
                } else {
                    winnerHTML = '—';
                    winnerResultBox.classList.remove('highlight-winner');
                    winnerResultBox.style.background = 'rgba(60, 60, 70, 0.95)';
                }
            }
            
            const resultTextEl = winnerResultBox.querySelector('.winner-result-text');
            if (resultTextEl) {
                resultTextEl.innerHTML = winnerHTML;
            }
        }

        // ===== PITCHING TOGGLE =====
        let pitchViewVerbose = true;
        let batViewVerbose = true;
        let abilityViewVerbose = true;
        let factorsViewVerbose = true;
        function toggleFactorsView() {
            factorsViewVerbose = !factorsViewVerbose;
            const ids = ['bbAwayParkPct','bbAwaySeriesCountPct','bbAwayBasePct',
                         'bbHomeParkPct','bbHomeSeriesCountPct','bbHomeBasePct',
                         'bbSeriesCount','bbSeriesCount2','bbSeriesGames','bbSeriesGames2',
                         'bbParkAway','bbParkHome'];
            const btn = document.getElementById('factorsToggleBtn');
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = factorsViewVerbose ? '' : 'none';
            });
            if (btn) btn.textContent = factorsViewVerbose ? 'stats' : '%';
        }
        function toggleAbilityView() {
            abilityViewVerbose = !abilityViewVerbose;
            const awayV = document.getElementById('bbAwayAbilityVerbose');
            const homeV = document.getElementById('bbHomeAbilityVerbose');
            const btn   = document.getElementById('abilityToggleBtn');
            if (abilityViewVerbose) {
                if (awayV) awayV.style.display = 'flex';
                if (homeV) homeV.style.display = 'flex';
                if (btn)   btn.textContent = 'stats';
            } else {
                if (awayV) awayV.style.display = 'none';
                if (homeV) homeV.style.display = 'none';
                if (btn)   btn.textContent = '%';
            }
        }
        function toggleBatView() {
            batViewVerbose = !batViewVerbose;
            const awayV = document.getElementById('bbAwayBatVerbose');
            const homeV = document.getElementById('bbHomeBatVerbose');
            const btn   = document.getElementById('batToggleBtn');
            if (batViewVerbose) {
                if (awayV) awayV.style.display = 'flex';
                if (homeV) homeV.style.display = 'flex';
                if (btn)   btn.textContent = 'stats';
            } else {
                if (awayV) awayV.style.display = 'none';
                if (homeV) homeV.style.display = 'none';
                if (btn)   btn.textContent = '%';
            }
        }
        function togglePitchView() {
            pitchViewVerbose = !pitchViewVerbose;
            const awayV = document.getElementById('bbAwayPitchVerbose');
            const homeV = document.getElementById('bbHomePitchVerbose');
            const btn   = document.getElementById('pitchToggleBtn');
            if (pitchViewVerbose) {
                if (awayV) awayV.style.display = 'flex';
                if (homeV) homeV.style.display = 'flex';
                if (btn)   btn.textContent = 'stats';
            } else {
                if (awayV) awayV.style.display = 'none';
                if (homeV) homeV.style.display = 'none';
                if (btn)   btn.textContent = '%';
            }
        }

        let mlbDetailVisible = false;
        function toggleMLBDetailView() {
            mlbDetailVisible = !mlbDetailVisible;
            const rows  = document.getElementById('mlbDetailRows');
            const track = document.getElementById('mlbToggleTrack');
            const thumb = document.getElementById('mlbToggleThumb');
            if (mlbDetailVisible) {
                rows.style.display = 'flex';
                track.style.background = 'rgba(34,197,94,0.6)';
                thumb.style.left = '18px';
            } else {
                rows.style.display = 'none';
                track.style.background = 'rgba(255,255,255,0.15)';
                thumb.style.left = '2px';
            }
        }

        // ===== BASEBALL GAME WINNER EDGE =====
        function calculateBaseballEdge() {

            // ── grab UI inputs ──────────────────────────────────────────
            const awayStarterERA    = parseFloat(document.getElementById('bbAwayStarterERA')?.value)   || 0;
            const awayStarterIP     = parseFloat(document.getElementById('bbAwayStarterIP')?.value)    || 0;
            const awayBullpenERA    = parseFloat(document.getElementById('bbAwayBullpenERA')?.value)   || 0;
            const homeStarterERA    = parseFloat(document.getElementById('bbHomeStarterERA')?.value)   || 0;
            const homeStarterIP     = parseFloat(document.getElementById('bbHomeStarterIP')?.value)    || 0;
            const homeBullpenERA    = parseFloat(document.getElementById('bbHomeBullpenERA')?.value)   || 0;

            const awayAvg  = parseFloat(document.getElementById('bbAwayAvg')?.value)  || 0;
            const awayOBP  = parseFloat(document.getElementById('bbAwayOBP')?.value)  || 0;
            const awaySLG  = parseFloat(document.getElementById('bbAwaySLG')?.value)  || 0;
            const homeAvg  = parseFloat(document.getElementById('bbHomeAvg')?.value)  || 0;
            const homeOBP  = parseFloat(document.getElementById('bbHomeOBP')?.value)  || 0;
            const homeSLG  = parseFloat(document.getElementById('bbHomeSLG')?.value)  || 0;

            const awayOddsStr  = document.getElementById('bbAwayOdds')?.value.trim()  || '';
            const homeOddsStr  = document.getElementById('bbHomeOdds')?.value.trim()  || '';
            const awayInjEl = document.getElementById('bbAwayInjDisplay');
            const homeInjEl = document.getElementById('bbHomeInjDisplay');
            const awayInjCount = parseInt((awayInjEl?.textContent || '').replace(/[^0-9]/g,'')) || 0;
            const homeInjCount = parseInt((homeInjEl?.textContent || '').replace(/[^0-9]/g,'')) || 0;
            const seriesCount  = document.getElementById('bbSeriesCount')?.value || '0-0';
            const seriesGames  = parseInt(document.getElementById('bbSeriesGames')?.value) || 4;
            const parkHome     = document.getElementById('bbParkHome')?.value || '';
            const parkAway     = document.getElementById('bbParkAway')?.value || '';

            // require at least a team to be selected to run
            if (!selectedBBAwayTeam && !selectedBBHomeTeam && !awayOddsStr && !homeOddsStr && !awayStarterERA && !homeStarterERA) {
                return;
            }
            const hasPitching = awayStarterERA && homeStarterERA;
            const hasBatting  = awayAvg && homeAvg;
            const hasOdds     = awayOddsStr && homeOddsStr;

            // ── CORE 1: PITCHING MATCHUP ─────────────────────────────────
            let awayPitch = 50, homePitch = 50;
            if (hasPitching) {
                const totalInnings = 9;
                const awayBullpenIP  = Math.max(0, totalInnings - awayStarterIP);
                const homeBullpenIP  = Math.max(0, totalInnings - homeStarterIP);
                const awayStarterRuns  = (awayStarterERA / 9) * awayStarterIP;
                const awayBullpenRuns  = (awayBullpenERA / 9) * awayBullpenIP;
                const awayTotalRuns    = awayStarterRuns + awayBullpenRuns;
                const homeStarterRuns  = (homeStarterERA / 9) * homeStarterIP;
                const homeBullpenRuns  = (homeBullpenERA / 9) * homeBullpenIP;
                const homeTotalRuns    = homeStarterRuns + homeBullpenRuns;
                const pitchTotal = awayTotalRuns + homeTotalRuns;
                awayPitch = pitchTotal > 0 ? (homeTotalRuns / pitchTotal) * 100 : 50;
                homePitch = pitchTotal > 0 ? (awayTotalRuns / pitchTotal) * 100 : 50;
                const awayPitchEl = document.getElementById('bbAwayPitchPct');
                const homePitchEl = document.getElementById('bbHomePitchPct');
                if (awayPitchEl) awayPitchEl.textContent = Math.round(awayPitch) + '%';
                if (homePitchEl) homePitchEl.textContent = Math.round(homePitch) + '%';
            }

            // ── CORE 2: BATTING OUTPUT ───────────────────────────────────
            let awayBat = 50, homeBat = 50;
            if (hasBatting) {
                const awayContact  = (awayAvg + awayOBP) / 2;
                const awayBatting  = (awayContact + awaySLG) / 2;
                const homeContact  = (homeAvg + homeOBP) / 2;
                const homeBatting  = (homeContact + homeSLG) / 2;
                const batTotal = awayBatting + homeBatting;
                awayBat = batTotal > 0 ? (awayBatting / batTotal) * 100 : 50;
                homeBat = batTotal > 0 ? (homeBatting / batTotal) * 100 : 50;
                const awayBatEl = document.getElementById('bbAwayBatPct');
                const homeBatEl = document.getElementById('bbHomeBatPct');
                if (awayBatEl) awayBatEl.textContent = Math.round(awayBat) + '%';
                if (homeBatEl) homeBatEl.textContent = Math.round(homeBat) + '%';
            }

            // ── CORE 3: ABILITY TO WIN ───────────────────────────────────
            // 3a. Seeding from mlbStandings — find each team's rank
            const awayTeamName = selectedBBAwayTeam ? selectedBBAwayTeam.name : '';
            const homeTeamName = selectedBBHomeTeam ? selectedBBHomeTeam.name : '';
            const awayAbbr = selectedBBAwayTeam ? selectedBBAwayTeam.prefix : '';
            const homeAbbr = selectedBBHomeTeam ? selectedBBHomeTeam.prefix : '';
            const allMLB = [...(mlbStandings.al || []), ...(mlbStandings.nl || [])];
            const awayStanding = allMLB.find(t => t.abbr === awayAbbr) || allMLB.find(t => t.name === awayTeamName);
            const homeStanding = allMLB.find(t => t.abbr === homeAbbr) || allMLB.find(t => t.name === homeTeamName);
            const awaySeed = awayStanding ? awayStanding.rank : 8;
            const homeSeed = homeStanding ? homeStanding.rank : 8;

            // seed % — seed 1=65%, seed 15=23%, drop ~3% per seed
            const awayBaseVal = 65 - ((awaySeed - 1) * 3);
            const homeBaseVal = 65 - ((homeSeed - 1) * 3);
            const seedSum = awayBaseVal + homeBaseVal;
            let awaySeedPct = (awayBaseVal / seedSum) * 100;
            let homeSeedPct  = (homeBaseVal / seedSum) * 100;
            // home +3% away -2.5%
            awaySeedPct -= 2.5;
            homeSeedPct  += 3.0;

            // 3b. Team strength = seeding % - (injuries * 3%)
            let awayStrength = awaySeedPct - (awayInjCount * 3);
            let homeStrength = homeSeedPct  - (homeInjCount * 3);

            // 3c. Last 10
            const awayLast10 = (awayStanding && Array.isArray(awayStanding.last10) && awayStanding.last10.length > 0) ? awayStanding.last10 : null;
            const homeLast10 = (homeStanding && Array.isArray(homeStanding.last10) && homeStanding.last10.length > 0) ? homeStanding.last10 : null;
            const awayL10W   = awayLast10 ? awayLast10.filter(r => r === 'W').length : null;
            const homeL10W   = homeLast10 ? homeLast10.filter(r => r === 'W').length : null;
            const awayLast10Pct = awayL10W !== null ? (awayL10W / 10) * 100 : 50;
            const homeLast10Pct = homeL10W !== null ? (homeL10W / 10) * 100 : 50;

            // 3d. Win-Loss %
            const awayWins   = awayStanding ? awayStanding.wins   : 0;
            const awayLosses = awayStanding ? awayStanding.losses : 0;
            const homeWins   = homeStanding ? homeStanding.wins   : 0;
            const homeLosses = homeStanding ? homeStanding.losses : 0;
            const awayWLPct  = (awayWins + awayLosses) > 0 ? (awayWins / (awayWins + awayLosses)) * 100 : 50;
            const homeWLPct  = (homeWins + homeLosses) > 0 ? (homeWins / (homeWins + homeLosses)) * 100 : 50;

            // 3e. Last 5 series % — user inputs series wins (0-5)
            // Last 5 series — auto from bet log
            const awaySeriesRecord = selectedBBAwayTeam ? calcMLBLast5Series(selectedBBAwayTeam.prefix) : { wins: 0, losses: 0 };
            const homeSeriesRecord = selectedBBHomeTeam ? calcMLBLast5Series(selectedBBHomeTeam.prefix) : { wins: 0, losses: 0 };
            const awaySeriesWins = awaySeriesRecord.wins;
            const homeSeriesWins = homeSeriesRecord.wins;

            // Update display
            const awaySwEl = document.getElementById('bbAwaySeriesWins');
            const homeSwEl = document.getElementById('bbHomeSeriesWins');
            if (awaySwEl) awaySwEl.textContent = `last 5 series: ${awaySeriesRecord.wins}-${awaySeriesRecord.losses}`;
            if (homeSwEl) homeSwEl.textContent = `last 5 series: ${homeSeriesRecord.wins}-${homeSeriesRecord.losses}`;
            const awaySeriesPct  = awaySeriesWins * 20;
            const homeSeriesPct  = homeSeriesWins * 20;

            // 3f. Market odds no-vig
            let awayNoVig = 50, homeNoVig = 50;
            if (hasOdds) {
                const awayOddsNum = parseFloat(awayOddsStr.replace(/[^0-9.]/g,''));
                const homeOddsNum = parseFloat(homeOddsStr.replace(/[^0-9.]/g,''));
                const awayIsNeg   = awayOddsStr.includes('-');
                const homeIsNeg   = homeOddsStr.includes('-');
                const awayImpl    = awayIsNeg ? awayOddsNum / (awayOddsNum + 100) : 100 / (awayOddsNum + 100);
                const homeImpl    = homeIsNeg ? homeOddsNum / (homeOddsNum + 100) : 100 / (homeOddsNum + 100);
                const implTotal   = awayImpl + homeImpl;
                awayNoVig   = (awayImpl / implTotal) * 100;
                homeNoVig   = (homeImpl / implTotal) * 100;
            }

            // average all 6 → ability to win
            const awayAbility = (awaySeedPct + awayStrength + awayLast10Pct + awayWLPct + awaySeriesPct + awayNoVig) / 6;
            const homeAbility = (homeSeedPct  + homeStrength + homeLast10Pct + homeWLPct + homeSeriesPct + homeNoVig)  / 6;
            const abilityTotal = awayAbility + homeAbility;
            let awayAbilityPct = (awayAbility / abilityTotal) * 100;
            let homeAbilityPct = (homeAbility / abilityTotal) * 100;

            // ── CORE 4: GAME FACTORS ─────────────────────────────────────
            // 4a. Park factors — look up both parks
            const parkData = {
                'T-Mobile Park':           {pitcher:85.0, hitter:15.0},
                'Oracle Park':             {pitcher:82.6, hitter:17.4},
                'Wrigley Field':           {pitcher:80.2, hitter:19.8},
                'Petco Park':              {pitcher:77.9, hitter:22.1},
                'Citi Field':              {pitcher:75.5, hitter:24.5},
                'Chase Field':             {pitcher:73.1, hitter:26.9},
                'PNC Park':                {pitcher:70.7, hitter:29.3},
                'Dodger Stadium':          {pitcher:68.3, hitter:31.7},
                'Busch Stadium':           {pitcher:65.9, hitter:34.1},
                'Camden Yards':            {pitcher:63.6, hitter:36.4},
                'Progressive Field':       {pitcher:61.2, hitter:38.8},
                'Nationals Park':          {pitcher:58.8, hitter:41.2},
                'Truist Park':             {pitcher:56.4, hitter:43.6},
                'Daikin Park':             {pitcher:54.0, hitter:46.0},
                'Target Field':            {pitcher:51.7, hitter:48.3},
                'Globe Life Field':        {pitcher:49.3, hitter:50.7},
                'Comerica Park':           {pitcher:46.9, hitter:53.1},
                'Rogers Centre':           {pitcher:44.5, hitter:55.5},
                'Rate Field':              {pitcher:42.1, hitter:57.9},
                'Citizens Bank Park':      {pitcher:39.8, hitter:60.2},
                'Angel Stadium':           {pitcher:37.4, hitter:62.6},
                'American Family Field':   {pitcher:35.0, hitter:65.0},
                'Yankee Stadium':          {pitcher:32.6, hitter:67.4},
                'loanDepot Park':          {pitcher:30.2, hitter:69.8},
                'Fenway Park':             {pitcher:27.9, hitter:72.1},
                'Kauffman Stadium':        {pitcher:25.5, hitter:74.5},
                'Great American Ball Park':{pitcher:23.1, hitter:76.9},
                'Sutter Health Park':      {pitcher:20.7, hitter:79.3},
                'Tropicana Field':         {pitcher:18.3, hitter:81.7},
                'Coors Field':             {pitcher:15.0, hitter:85.0}
            };

            const homePark = parkData[parkHome] || {pitcher:50, hitter:50};
            const awayPark = parkData[parkAway] || {pitcher:50, hitter:50};

            // normalize pitcher %
            const pitcherSum  = homePark.pitcher + awayPark.pitcher;
            const homePitchPk = (homePark.pitcher / pitcherSum) * 100;
            const awayPitchPk = (awayPark.pitcher / pitcherSum) * 100;

            // normalize hitter %
            const hitterSum   = homePark.hitter + awayPark.hitter;
            const homHitPk    = (homePark.hitter / hitterSum) * 100;
            const awyHitPk    = (awayPark.hitter / hitterSum) * 100;

            // combine + normalize
            const homePkRaw   = homePitchPk + homHitPk;
            const awayPkRaw   = awayPitchPk + awyHitPk;
            const pkTotal     = homePkRaw + awayPkRaw;
            let homeParkPct   = (homePkRaw / pkTotal) * 100;
            let awayParkPct   = (awayPkRaw / pkTotal) * 100;

            // home +5% away -4.5%
            homeParkPct += 5.0;
            awayParkPct -= 4.5;
            const pkFinalTotal = homeParkPct + awayParkPct;
            homeParkPct = (homeParkPct / pkFinalTotal) * 100;
            awayParkPct = (awayParkPct / pkFinalTotal) * 100;

            // 4b. Series count %
            // parse seriesCount e.g. "1-0" means home leads 1-0
            const [hSW, aSW] = seriesCount.split('-').map(Number);
            let awaySeriesCountPct = 50, homeSeriesCountPct = 50;
            if (seriesGames === 4) {
                if (hSW===1 && aSW===0) { homeSeriesCountPct=58; awaySeriesCountPct=42; }
                else if (hSW===2 && aSW===0) { homeSeriesCountPct=72; awaySeriesCountPct=28; }
                else if (hSW===3 && aSW===0) { homeSeriesCountPct=90; awaySeriesCountPct=10; }
                else if (hSW===2 && aSW===1) { homeSeriesCountPct=65; awaySeriesCountPct=35; }
                else if (hSW===1 && aSW===2) { awaySeriesCountPct=65; homeSeriesCountPct=35; }
                else if (hSW===0 && aSW===1) { awaySeriesCountPct=58; homeSeriesCountPct=42; }
                else if (hSW===0 && aSW===2) { awaySeriesCountPct=72; homeSeriesCountPct=28; }
                else if (hSW===0 && aSW===3) { awaySeriesCountPct=90; homeSeriesCountPct=10; }
            } else if (seriesGames === 3) {
                if (hSW===1 && aSW===0) { homeSeriesCountPct=60; awaySeriesCountPct=40; }
                else if (hSW===2 && aSW===0) { homeSeriesCountPct=80; awaySeriesCountPct=20; }
                else if (hSW===0 && aSW===1) { awaySeriesCountPct=60; homeSeriesCountPct=40; }
                else if (hSW===0 && aSW===2) { awaySeriesCountPct=80; homeSeriesCountPct=20; }
            } else if (seriesGames === 2) {
                if (hSW===1 && aSW===0) { homeSeriesCountPct=70; awaySeriesCountPct=30; }
                else if (hSW===0 && aSW===1) { awaySeriesCountPct=70; homeSeriesCountPct=30; }
            }

            // 4c. Base score = (no-vig % + win-loss %) / 2 + home/away
            let awayBase = (awayNoVig + awayWLPct) / 2;
            let homeBase  = (homeNoVig + homeWLPct)  / 2;
            awayBase -= 2.5;
            homeBase  += 3.0;
            // normalize
            const baseSum = awayBase + homeBase;
            let awayBasePct = (awayBase / baseSum) * 100;
            let homeBasePct = (homeBase / baseSum) * 100;

            // series count shifts base
            awayBasePct = (awayBasePct + awaySeriesCountPct) / 2;
            homeBasePct = (homeBasePct + homeSeriesCountPct) / 2;

            // Game factors = avg of park + base shift + series count / 3
            const awayGameFactors = (awayParkPct + awayBasePct + awaySeriesCountPct) / 3;
            const homeGameFactors = (homeParkPct + homeBasePct + homeSeriesCountPct) / 3;
            const gfTotal = awayGameFactors + homeGameFactors;
            let awayGF = (awayGameFactors / gfTotal) * 100;
            let homeGF = (homeGameFactors / gfTotal) * 100;

            // ── FINAL: AVERAGE ALL 4 CORES ───────────────────────────────
            const awayFinal = (awayPitch + awayBat + awayAbilityPct + awayGF) / 4;
            const homeFinal  = (homePitch  + homeBat  + homeAbilityPct  + homeGF)  / 4;
            const finalTotal = awayFinal + homeFinal;
            const awayWinPct = Math.round((awayFinal / finalTotal) * 100);
            const homeWinPct = Math.round((homeFinal  / finalTotal) * 100);

            console.log('=== BASEBALL CORE 4 ===');
            console.log('Core 1 Pitching - Away:', awayPitch.toFixed(1), 'Home:', homePitch.toFixed(1));
            console.log('Core 2 Batting  - Away:', awayBat.toFixed(1),   'Home:', homeBat.toFixed(1));
            console.log('Core 3 Ability  - Away:', awayAbilityPct.toFixed(1), 'Home:', homeAbilityPct.toFixed(1));
            console.log('Core 4 GameFact - Away:', awayGF.toFixed(1),    'Home:', homeGF.toFixed(1));
            console.log('FINAL           - Away:', awayWinPct, 'Home:', homeWinPct);

            // ── UPDATE UI ────────────────────────────────────────────────
            const finalEdgeEl = document.getElementById('bbFinalEdge');
            const winnerBoxEl = document.getElementById('bbWinnerBox');

            // ability to win breakdowns
            const r = (n) => Math.round(n * 10) / 10;
            const setEl = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };

            // display real readable data
            setEl('bbAwaySeedPct',     awayStanding ? 'seed #' + awayStanding.rank : 'seed: —');
            setEl('bbHomeSeedPct',     homeStanding ? 'seed #' + homeStanding.rank : 'seed: —');
            setEl('bbAwayStrengthPct', awayStanding ? 'strength: #' + awayStanding.rank + ' - ' + awayInjCount + ' inj' : 'strength: —');
            setEl('bbHomeStrengthPct', homeStanding ? 'strength: #' + homeStanding.rank + ' - ' + homeInjCount + ' inj' : 'strength: —');
            // inj display handled by fetchMLBInjuries
            // inj display handled by fetchMLBInjuries
            setEl('bbAwayL10Pct',      awayL10W !== null ? 'last 10: ' + awayL10W + '-' + (10-awayL10W) : 'last 10: —');
            setEl('bbHomeL10Pct',      homeL10W !== null ? 'last 10: ' + homeL10W + '-' + (10-homeL10W) : 'last 10: —');
            setEl('bbAwayWLPct',       awayStanding ? 'W-L: ' + awayStanding.wins + '-' + awayStanding.losses : 'W-L: —');
            setEl('bbHomeWLPct',       homeStanding ? 'W-L: ' + homeStanding.wins + '-' + homeStanding.losses : 'W-L: —');
            setEl('bbAwayOddsPct',    hasOdds ? 'odds: ' + r(awayNoVig) + '%' : 'odds: —');
            setEl('bbHomeOddsPct',    hasOdds ? 'odds: ' + r(homeNoVig) + '%' : 'odds: —');
            setEl('bbAwayAbilityPct',  r(awayAbilityPct) + '%');
            setEl('bbHomeAbilityPct',  r(homeAbilityPct) + '%');

            // game factors breakdowns
            setEl('bbAwayParkPct',        'park: '   + r(awayParkPct)        + '%');
            setEl('bbHomeParkPct',        'park: '   + r(homeParkPct)        + '%');
            setEl('bbAwaySeriesCountPct', 'series: ' + r(awaySeriesCountPct) + '%');
            setEl('bbHomeSeriesCountPct', 'series: ' + r(homeSeriesCountPct) + '%');
            setEl('bbAwayBasePct',        'base: '   + r(awayBasePct)        + '%');
            setEl('bbHomeBasePct',        'base: '   + r(homeBasePct)        + '%');
            setEl('bbAwayGFPct',          r(awayGF) + '%');
            setEl('bbHomeGFPct',          r(homeGF) + '%');

            const winner = homeWinPct > awayWinPct ? (homeTeamName || 'Home') : (awayTeamName || 'Away');
            const winPct = Math.max(homeWinPct, awayWinPct);
            const edge   = Math.abs(homeWinPct - awayWinPct);

            if (finalEdgeEl) finalEdgeEl.textContent = winPct.toFixed(2) + '%';
            if (winnerBoxEl) winnerBoxEl.textContent  = winner + ' ' + winPct + '%';

            const resultBox = document.getElementById('bbWinnerResultBox');
            if (resultBox) {
                const isHomeWinner = homeWinPct > awayWinPct;
                const winnerTeamObj = isHomeWinner ? selectedBBHomeTeam : selectedBBAwayTeam;
                const resultTextEl = resultBox.querySelector('.winner-result-text');

                if (winnerTeamObj) {
                    const color1 = winnerTeamObj.color1 || '#22c55e';
                    const color2 = winnerTeamObj.color2 || '#16a34a';
                    const logo   = winnerTeamObj.logo   || '';
                    const name   = (isHomeWinner ? homeTeamName : awayTeamName).toUpperCase();

                    resultBox.classList.remove('highlight-home', 'highlight-away');
                    resultBox.classList.add('highlight-winner');
                    if (isHomeWinner) resultBox.classList.add('highlight-home');
                    else resultBox.classList.add('highlight-away');
                    resultBox.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
                    if (resultTextEl) resultTextEl.innerHTML = `
                        <img src="${logo}" style="width:60px;height:60px;margin-bottom:8px;object-fit:contain;">
                        <div>${name}</div>
                    `;
                } else {
                    resultBox.classList.remove('highlight-winner');
                    resultBox.style.background = 'rgba(60,60,70,0.95)';
                    if (resultTextEl) resultTextEl.textContent = winner + ' ' + winPct + '%';
                }
            }
        }

        // Calculate stats
        function calculateStats() {
            const totalPoints = teamAScore + teamBScore;
            const config = getSportConfig();
            const totalGameMinutes = config.totalGameMinutes;
            const quarterMinutes = config.quarterMinutes;
            
            totalPointsEl.textContent = totalPoints;
            
            // Baseball uses outs instead of time
            if (currentSport === 'mlb') {
                // Count active outs
                const activeOuts = outsRecorded.filter(o => o).length;
                
                // Calculate total innings played (completed half-innings)
                const completedHalfInnings = (quarter - 1) * 2 + (inningHalf === 'bottom' ? 1 : 0);
                const totalOuts = completedHalfInnings * 3 + activeOuts;
                
                // Check if there's ANY game activity (INCLUDING BALLS/STRIKES)
                const hasRunners = basesOccupied.some(b => b);
                const ballStrikeCountCheck = document.getElementById('ballStrikeCount')?.textContent || '0-0';
                const hasPitches = ballStrikeCountCheck !== '0-0';
                const hasActivity = totalOuts > 0 || totalPoints > 0 || hasRunners || hasPitches;
                
                // Calculate innings played
                const inningsPlayed = completedHalfInnings / 2;
                
                if (!hasActivity) {
                    // No game activity yet - show O/U Pace if line is set, otherwise dashes
                    gamePaceEl.textContent = '—';
                    timeWeightEl.textContent = '0%';
                    ouProjectionEl.textContent = '—';
                    confidenceEl.textContent = '—';
                    
                    if (ouLine > 0) {
                        // Show O/U Pace even without activity
                        const inningsRemaining = 9 - inningsPlayed;
                        const runsNeeded = ouLine - totalPoints;
                        const ouPace = inningsRemaining > 0 ? (runsNeeded / inningsRemaining) : 0;
                        
                        ouPaceEl.textContent = cleanNumber(ouPace);
                        edgeEl.textContent = '—'; // No edge without game pace
                    } else {
                        ouPaceEl.textContent = '—';
                        edgeEl.textContent = '—';
                    }
                    return;
                }
                
                // --- HISTORICAL GAME PACE (actual runs per inning so far) ---
                const historicalPace = inningsPlayed > 0 ? (totalPoints / inningsPlayed) : 0.5; // Default ~0.5 runs/inning per team
                
                // --- CURRENT INNING RUN EXPECTANCY (bounded, realistic values) ---
                // Base run expectancy by base state and outs (MLB data)
                const first = basesOccupied[0];
                const second = basesOccupied[1];
                const third = basesOccupied[2];
                
                let baseRunExpectancy = 0;
                
                // Run expectancy matrix (outs, base state)
                if (activeOuts === 0) {
                    if (!first && !second && !third) baseRunExpectancy = 0.46;
                    else if (first && !second && !third) baseRunExpectancy = 0.83;
                    else if (!first && second && !third) baseRunExpectancy = 1.07;
                    else if (!first && !second && third) baseRunExpectancy = 1.36;
                    else if (first && second && !third) baseRunExpectancy = 1.43;
                    else if (first && !second && third) baseRunExpectancy = 1.75;
                    else if (!first && second && third) baseRunExpectancy = 1.94;
                    else if (first && second && third) baseRunExpectancy = 2.25;
                } else if (activeOuts === 1) {
                    if (!first && !second && !third) baseRunExpectancy = 0.25;
                    else if (first && !second && !third) baseRunExpectancy = 0.50;
                    else if (!first && second && !third) baseRunExpectancy = 0.65;
                    else if (!first && !second && third) baseRunExpectancy = 0.93;
                    else if (first && second && !third) baseRunExpectancy = 0.86;
                    else if (first && !second && third) baseRunExpectancy = 1.15;
                    else if (!first && second && third) baseRunExpectancy = 1.35;
                    else if (first && second && third) baseRunExpectancy = 1.55;
                } else if (activeOuts === 2) {
                    if (!first && !second && !third) baseRunExpectancy = 0.10;
                    else if (first && !second && !third) baseRunExpectancy = 0.22;
                    else if (!first && second && !third) baseRunExpectancy = 0.30;
                    else if (!first && !second && third) baseRunExpectancy = 0.35;
                    else if (first && second && !third) baseRunExpectancy = 0.42;
                    else if (first && !second && third) baseRunExpectancy = 0.52;
                    else if (!first && second && third) baseRunExpectancy = 0.60;
                    else if (first && second && third) baseRunExpectancy = 0.75;
                }
                
                // Count adjustment (BIGGER impact so you can actually see it)
                let countAdjustment = 0;
                const ballStrikeCount = document.getElementById('ballStrikeCount')?.textContent || '0-0';
                const [balls, strikes] = ballStrikeCount.split('-').map(n => parseInt(n) || 0);
                
                if (balls === 3 && strikes === 2) countAdjustment = 0.50; // Full count adds leverage
                else if (balls === 3) countAdjustment = 0.40; // 3 balls
                else if (balls === 2 && strikes === 0) countAdjustment = 0.35; // Hitter's count
                else if (balls === 2 && strikes === 1) countAdjustment = 0.25; // Hitter's count
                else if (strikes === 2 && balls === 0) countAdjustment = -0.35; // Pitcher's count
                else if (strikes === 2 && balls === 1) countAdjustment = -0.25; // Pitcher's count
                else if (strikes === 2) countAdjustment = -0.30; // Pitcher's count
                else if (balls === 0 && strikes === 2) countAdjustment = -0.35;
                
                // Current inning expectancy (bounded)
                const currentInningExpectancy = Math.max(0, baseRunExpectancy + countAdjustment);
                
                // --- GAME PACE (blended: historical + current situation) ---
                // Early game: rely on current situation (no history yet)
                // Late game: blend history with current situation
                const historyReliability = Math.min(inningsPlayed / 3, 1.0); // How much we trust history (0-100%)
                const situationWeight = 1 - (historyReliability * 0.5); // Situation weight: 100% → 50%
                const historicalWeight = historyReliability * 0.5; // Historical weight: 0% → 50%
                
                const gamePace = (historicalPace * historicalWeight) + (currentInningExpectancy * situationWeight);
                
                // Progress weight: innings completed / 9
                const progressWeight = (inningsPlayed / 9) * 100;
                
                // --- O/U PACE (Required Runs Per Inning) ---
                let ouPace = 0;
                if (ouLine > 0) {
                    const inningsRemaining = 9 - inningsPlayed;
                    const runsNeeded = ouLine - totalPoints;
                    ouPace = inningsRemaining > 0 ? (runsNeeded / inningsRemaining) : 0;
                }
                
                // PROJECTION (expected final total)
                const inningsRemaining = 9 - inningsPlayed;
                const projection = (gamePace * inningsRemaining) + totalPoints;
                
                // Display Game Pace and Projection (always show these)
                gamePaceEl.textContent = cleanNumber(gamePace);
                ouProjectionEl.textContent = cleanNumber(projection);
                timeWeightEl.textContent = cleanNumber(progressWeight) + '%';
                
                // O/U Pace and Edge only show if O/U line is set
                if (ouLine > 0) {
                    const edge = gamePace - ouPace; // Both in RUNS PER INNING
                    
                    ouPaceEl.textContent = cleanNumber(ouPace);
                    edgeEl.textContent = cleanNumber(edge);
                    
                    // Confidence calculation
                    let confidence = 0;
                    if (inningsPlayed > 0) {
                        const paceRatio = Math.min(gamePace / ouPace, 2); // Cap at 2x
                        const progressScore = (inningsPlayed / 9) * 50;
                        const paceScore = Math.min(paceRatio * 30, 50);
                        confidence = Math.round(progressScore + paceScore);
                        confidence = Math.min(Math.max(confidence, 0), 100);
                    }
                    confidenceEl.textContent = confidence > 0 ? confidence : '—';
                } else {
                    // No O/U line set
                    ouPaceEl.textContent = '—';
                    edgeEl.textContent = '—';
                    confidenceEl.textContent = '—';
                }
                
                // Color coding (only if O/U line is set)
                const edgeBox = document.getElementById('edgeBox');
                const ouLineBox = document.getElementById('ouLineBox');
                const gamePaceBox = document.getElementById('gamePaceBox');
                const confidenceBox = document.getElementById('confidenceBox');
                
                edgeBox.classList.remove('positive', 'negative', 'neutral');
                ouLineBox.classList.remove('positive', 'negative', 'neutral');
                gamePaceBox.classList.remove('positive', 'negative', 'neutral');
                confidenceBox.classList.remove('positive', 'warning', 'negative');
                
                if (ouLine > 0) {
                    const edge = gamePace - ouPace; // Use same calculation as above
                    
                    if (edge > 0) {
                        edgeBox.classList.add('positive');
                        ouLineBox.classList.add('positive');
                    } else if (edge < 0) {
                        edgeBox.classList.add('negative');
                        ouLineBox.classList.add('negative');
                    } else {
                        edgeBox.classList.add('neutral');
                        ouLineBox.classList.add('neutral');
                    }
                    
                    if (gamePace > ouPace) {
                        gamePaceBox.classList.add('positive');
                    } else if (gamePace < ouPace) {
                        gamePaceBox.classList.add('negative');
                    } else {
                        gamePaceBox.classList.add('neutral');
                    }
                }
                
                return;
            }
            
            // Time-based sports (basketball, football, hockey, soccer)
            const completedQuarterMinutes = (quarter - 1) * quarterMinutes;
            const quarterSeconds = quarterMinutes * 60;
            const currentQuarterElapsed = (quarterSeconds - clockSeconds) / 60;
            const minutesPlayed = completedQuarterMinutes + currentQuarterElapsed;
            const minutesRemaining = totalGameMinutes - minutesPlayed;
            
            // ALWAYS show O/U Pace if line is set
            if (ouLine > 0) {
                const ouPace = ouLine / totalGameMinutes;
                ouPaceEl.textContent = cleanNumber(ouPace);
            } else {
                ouPaceEl.textContent = '—';
            }
            
            if (minutesPlayed > 0 && totalPoints > 0) {
                // gamePace = totalPoints / minutesPlayed
                const gamePace = totalPoints / minutesPlayed;
                
                // ouPace = ouLine / totalMinutes
                const ouPace = ouLine / totalGameMinutes;
                
                // edge = gamePace - ouPace
                const edge = gamePace - ouPace;
                
                // timeWeight = percentage of game elapsed (0-100)
                const timeWeight = (minutesPlayed / totalGameMinutes) * 100;
                
                // O/U Projection: game pace × minutes remaining + current points
                const ouProjection = (gamePace * minutesRemaining) + totalPoints;
                
                // Confidence calculation (0-100)
                let confidence = 0;
                if (ouLine > 0) {
                    const currentPace = totalPoints / minutesPlayed;
                    const requiredPace = ouLine / totalGameMinutes;
                    
                    const paceScore = Math.min((currentPace / requiredPace) * 40, 40);
                    const timeScore = (minutesPlayed / totalGameMinutes) * 30;
                    const progressScore = Math.min((totalPoints / ouLine) * 30, 30);
                    
                    confidence = Math.round(paceScore + timeScore + progressScore);
                }
                
                gamePaceEl.textContent = cleanNumber(gamePace);
                timeWeightEl.textContent = cleanNumber(timeWeight);
                edgeEl.textContent = cleanNumber(edge);
                ouProjectionEl.textContent = cleanNumber(ouProjection);
                confidenceEl.textContent = confidence > 0 ? confidence : '—';
                
                // Color code confidence
                confidenceBox.classList.remove('positive', 'warning', 'negative');
                if (confidence >= 80) {
                    confidenceBox.classList.add('positive'); // GREEN
                } else if (confidence >= 60) {
                    confidenceBox.classList.add('warning'); // YELLOW
                } else if (confidence > 0) {
                    confidenceBox.classList.add('negative'); // RED
                }
                
                // Color code edge and sync O/U line color
                const edgeBox = document.getElementById('edgeBox');
                const ouLineBox = document.getElementById('ouLineBox');
                const gamePaceBox = document.getElementById('gamePaceBox');
                
                edgeBox.classList.remove('positive', 'negative', 'neutral');
                ouLineBox.classList.remove('positive', 'negative', 'neutral');
                gamePaceBox.classList.remove('positive', 'negative', 'neutral');
                
                if (ouLine > 0) {
                    if (edge > 0) {
                        edgeBox.classList.add('positive');
                        ouLineBox.classList.add('positive');
                    } else if (edge < 0) {
                        edgeBox.classList.add('negative');
                        ouLineBox.classList.add('negative');
                    } else {
                        edgeBox.classList.add('neutral');
                        ouLineBox.classList.add('neutral');
                    }
                    
                    // Color code game pace based on comparison with O/U pace
                    if (gamePace > ouPace) {
                        gamePaceBox.classList.add('positive');
                    } else if (gamePace < ouPace) {
                        gamePaceBox.classList.add('negative');
                    } else {
                        gamePaceBox.classList.add('neutral');
                    }
                }
            } else if (minutesPlayed > 0 && totalPoints === 0) {
                // Time has passed but no points yet
                gamePaceEl.textContent = '0.0';
                timeWeightEl.textContent = cleanNumber((minutesPlayed / totalGameMinutes) * 100);
                edgeEl.textContent = ouLine > 0 ? cleanNumber(0 - (ouLine / totalGameMinutes)) : '—';
                ouProjectionEl.textContent = '0.0';
                confidenceEl.textContent = '—';
                
                const edgeBox = document.getElementById('edgeBox');
                const ouLineBox = document.getElementById('ouLineBox');
                const gamePaceBox = document.getElementById('gamePaceBox');
                
                edgeBox.classList.remove('positive', 'negative', 'neutral');
                ouLineBox.classList.remove('positive', 'negative', 'neutral');
                gamePaceBox.classList.remove('positive', 'negative', 'neutral');
                
                if (ouLine > 0) {
                    edgeBox.classList.add('negative');
                    ouLineBox.classList.add('negative');
                    gamePaceBox.classList.add('negative');
                }
            } else {
                // No time has passed yet
                gamePaceEl.textContent = '—';
                timeWeightEl.textContent = '0%';
                edgeEl.textContent = '—';
                ouProjectionEl.textContent = '—';
                confidenceEl.textContent = '—';
                
                const edgeBox = document.getElementById('edgeBox');
                const ouLineBox = document.getElementById('ouLineBox');
                const gamePaceBox = document.getElementById('gamePaceBox');
                
                edgeBox.classList.remove('positive', 'negative');
                edgeBox.classList.add('neutral');
                ouLineBox.classList.remove('positive', 'negative');
                ouLineBox.classList.add('neutral');
                gamePaceBox.classList.remove('positive', 'negative');
                gamePaceBox.classList.add('neutral');
            }
            
            // Update winner display if it exists
            if (typeof updateWinnerDisplay === 'function') {
                updateWinnerDisplay();
            }
        }

        // Timer functions
        function startTimer() {
            if (!isRunning && clockSeconds > 0) {
                isRunning = true;
                timerInterval = setInterval(() => {
                    if (clockSeconds > 0) {
                        clockSeconds--;
                        updateClockDisplay();
                        calculateStats();
                    } else {
                        // Clock hit zero - auto advance quarter and reset
                        pauseTimer();
                        
                        const config = getSportConfig();
                        if (quarter < config.maxPeriods) {
                            // Advance to next period
                            quarter++;
                            clockSeconds = config.quarterMinutes * 60; // Reset to sport-specific quarter
                            qBox.textContent = quarter + config.label;
                            updateClockDisplay();
                            calculateStats();
                            
                            // Wait 15 seconds then auto-start
                            setTimeout(() => {
                                startTimer();
                            }, 15000);
                        } else {
                            // Game over - stay at final period with 0:00
                            updateClockDisplay();
                        }
                    }
                }, 1000);
                updateClockDisplay();
            }
        }

        function pauseTimer() {
            isRunning = false;
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            updateClockDisplay();
        }

        function resetTimer() {
            pauseTimer();
            const config = getSportConfig();
            clockSeconds = config.quarterMinutes * 60; // Reset to sport-specific quarter length
            currentBetId = null;
            saveBetBtn.textContent = '+';
            betType = null;
            betTypeEl.textContent = '—';
            betTypeBox.style.background = '#b39ddb'; // Reset to default purple
            updateClockDisplay();
            calculateStats();
        }

        // Add score with animation
        function addScore(team, points) {
            const scoreBox = team === 'left' ? scoreLeft : scoreRight;
            
            if (team === 'left') {
                teamAScore += points;
                scoreLeft.textContent = teamAScore;
            } else {
                teamBScore += points;
                scoreRight.textContent = teamBScore;
            }
            
            // Flash animation
            scoreBox.classList.remove('flash-one', 'flash-two', 'flash-three');
            void scoreBox.offsetWidth; // Force reflow
            if (points === 1) scoreBox.classList.add('flash-one');
            else if (points === 2) scoreBox.classList.add('flash-two');
            else if (points === 3) scoreBox.classList.add('flash-three');
            
            // Float animation
            const floatEl = document.createElement('div');
            floatEl.className = 'points-float';
            floatEl.textContent = `+${points}`;
            scoreBox.appendChild(floatEl);
            setTimeout(() => floatEl.remove(), 1000);
            
            calculateStats();
        }

        // Apply score logic
        function applyScore() {
            if (selectedTeam && selectedPoints) {
                addScore(selectedTeam, selectedPoints);
                
                // Deselect
                scoreLeft.classList.remove('selected');
                scoreRight.classList.remove('selected');
                pointButtons.forEach(btn => btn.classList.remove('selected'));
                selectedTeam = null;
                selectedPoints = null;
            }
        }

        // Event Listeners
        playPauseBtn.addEventListener('click', () => {
            if (isRunning) {
                pauseTimer();
                playPauseBtn.classList.remove('playing');
            } else {
                startTimer();
                playPauseBtn.classList.add('playing');
            }
        });
        if (resetBtn) {
            resetBtn.addEventListener('click', resetTimer);
        }
        saveBetBtn.addEventListener('click', async () => {
            // MLB Game Winner mode — save differently
            if (currentSport === 'mlb' && currentBetType === 'winner') {
                try {
                if (!selectedBBAwayTeam || !selectedBBHomeTeam) {
                    alert('Please select both teams first!');
                    return;
                }
                const winnerEl = document.getElementById('bbWinnerBox');
                const edgeEl   = document.getElementById('bbFinalEdge');
                const awayOdds = document.getElementById('bbAwayOdds')?.value || '';
                const homeOdds = document.getElementById('bbHomeOdds')?.value || '';
                const winner   = winnerEl?.textContent || '—';
                const edge     = edgeEl?.textContent || '—';

                // Determine pick — whoever the winner box shows
                const pickTeam = winner.includes(selectedBBHomeTeam.name) ? selectedBBHomeTeam.name : selectedBBAwayTeam.name;
                const pickOdds = winner.includes(selectedBBHomeTeam.name) ? homeOdds : awayOdds;

                const targetDay = betLog.find(d => d.day === activeBetDay) || betLog[betLog.length-1];
                if (targetDay) {
                    const gameId = Date.now();

                    const _awayInjCount = parseInt((document.getElementById('bbAwayInjDisplay')?.textContent || '').replace(/[^0-9]/g,'')) || 0;
                    const _homeInjCount = parseInt((document.getElementById('bbHomeInjDisplay')?.textContent || '').replace(/[^0-9]/g,'')) || 0;
                    const _awayWL = selectedBBAwayTeam ? (selectedBBAwayTeam.wins + '-' + selectedBBAwayTeam.losses) : '';
                    const _homeWL = selectedBBHomeTeam ? (selectedBBHomeTeam.wins + '-' + selectedBBHomeTeam.losses) : '';
                    const _awayL10 = selectedBBAwayTeam?.last10Results ? selectedBBAwayTeam.last10Results.filter(r=>r==='W').length + '-' + selectedBBAwayTeam.last10Results.filter(r=>r==='L').length : '';
                    const _homeL10 = selectedBBHomeTeam?.last10Results ? selectedBBHomeTeam.last10Results.filter(r=>r==='W').length + '-' + selectedBBHomeTeam.last10Results.filter(r=>r==='L').length : '';

                    const newGame = {
                        t1: selectedBBAwayTeam.name,
                        o1: awayOdds,
                        s1: selectedBBAwayTeam.rank || 0,
                        i1: _awayInjCount,
                        wl1: _awayWL,
                        l1: _awayL10,
                        t2: selectedBBHomeTeam.name,
                        o2: homeOdds,
                        s2: selectedBBHomeTeam.rank || 0,
                        i2: _homeInjCount,
                        wl2: _homeWL,
                        l2: _homeL10,
                        pick: pickTeam,
                        res: null,
                        edge: edge,
                        sport: 'mlb',
                        _id: gameId,
                        testField: 'STATS_CODE_RUNNING',
                        awayERA: parseFloat(document.getElementById('bbAwayStarterERA')?.value) || 0,
                        awayIP: parseFloat(document.getElementById('bbAwayStarterIP')?.value) || 0,
                        awayBullERA: parseFloat(document.getElementById('bbAwayBullpenERA')?.value) || 0,
                        homeERA: parseFloat(document.getElementById('bbHomeStarterERA')?.value) || 0,
                        homeIP: parseFloat(document.getElementById('bbHomeStarterIP')?.value) || 0,
                        homeBullERA: parseFloat(document.getElementById('bbHomeBullpenERA')?.value) || 0,
                        awayAvg: parseFloat(document.getElementById('bbAwayAvg')?.value) || 0,
                        awayOBP: parseFloat(document.getElementById('bbAwayOBP')?.value) || 0,
                        awaySLG: parseFloat(document.getElementById('bbAwaySLG')?.value) || 0,
                        homeAvg: parseFloat(document.getElementById('bbHomeAvg')?.value) || 0,
                        homeOBP: parseFloat(document.getElementById('bbHomeOBP')?.value) || 0,
                        homeSLG: parseFloat(document.getElementById('bbHomeSLG')?.value) || 0,
                        awayStarter: document.getElementById('bbAwayPitcherBox')?.textContent?.trim() || '',
                        homeStarter: document.getElementById('bbHomePitcherBox')?.textContent?.trim() || '',
                        parkAway: document.getElementById('bbParkAway')?.value || '',
                        parkHome: document.getElementById('bbParkHome')?.value || '',
                        series: document.getElementById('bbSeriesCount')?.value || '0-0',
                        seriesGames: parseInt(document.getElementById('bbSeriesGames')?.value) || 4
                    };

                    targetDay.games.push(newGame);
                    saveAppState();
                    if (activeBetDay === targetDay.day) renderBetDayCards();

                    // Save full stats to Firebase backup
                    fetch(BACKEND_URL + '/api/mlb/gameStats', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            gameId: gameId,
                            stats: {
                                savedAt: new Date().toISOString(),
                                awayTeam: selectedBBAwayTeam.name,
                                homeTeam: selectedBBHomeTeam.name,
                                odds: { away: awayOdds, home: homeOdds },
                                standings: {
                                    awaySeed: selectedBBAwayTeam.rank || 0,
                                    awayWins: selectedBBAwayTeam.wins || 0,
                                    awayLosses: selectedBBAwayTeam.losses || 0,
                                    homeSeed: selectedBBHomeTeam.rank || 0,
                                    homeWins: selectedBBHomeTeam.wins || 0,
                                    homeLosses: selectedBBHomeTeam.losses || 0
                                },
                                pitching: {
                                    awayStarter: newGame.awayStarter,
                                    awayERA: newGame.awayERA,
                                    awayIP: newGame.awayIP,
                                    awayBullERA: newGame.awayBullERA,
                                    homeStarter: newGame.homeStarter,
                                    homeERA: newGame.homeERA,
                                    homeIP: newGame.homeIP,
                                    homeBullERA: newGame.homeBullERA
                                },
                                batting: {
                                    awayAvg: newGame.awayAvg,
                                    awayOBP: newGame.awayOBP,
                                    awaySLG: newGame.awaySLG,
                                    homeAvg: newGame.homeAvg,
                                    homeOBP: newGame.homeOBP,
                                    homeSLG: newGame.homeSLG
                                },
                                injuries: { awayCount: _awayInjCount, homeCount: _homeInjCount },
                                series: { count: newGame.series, games: newGame.seriesGames },
                                park: { away: newGame.parkAway, home: newGame.parkHome }
                            }
                        })
                    })
                    .then(r => r.json())
                    .then(data => console.log('✅ MLB stats backed up:', gameId))
                    .catch(err => console.error('❌ Failed to backup MLB stats:', err));

                    // Flash button
                    saveBetBtn.style.transform = 'scale(1.2)';
                    setTimeout(() => saveBetBtn.style.transform = 'scale(1)', 200);
                    console.log('✅ MLB game saved');
                }
                } catch(e) {
                    console.error('❌ MLB save failed:', e);
                    alert('Save failed: ' + e.message);
                }
                return;
            }

            const config = getSportConfig();
            const betData = {
                id: currentBetId || Date.now(),
                savedAt: Date.now(),
                sport: currentSport,
                sportLabel: config.label,
                teamA: teamAName,
                teamB: teamBName,
                scoreA: teamAScore,
                scoreB: teamBScore,
                quarter: quarter,
                clockSeconds: clockSeconds,
                isRunning: isRunning,
                ouLine: ouLine,
                totalPoints: teamAScore + teamBScore,
                betType: betType // 'over', 'under', or null
            };
            
            let betHistory = JSON.parse(localStorage.getItem('betHistory') || '[]');
            
            if (currentBetId) {
                // Update existing bet
                const index = betHistory.findIndex(b => b.id === currentBetId);
                if (index !== -1) {
                    betHistory[index] = betData;
                }
            } else {
                // Create new bet
                betHistory.unshift(betData);
            }
            
            localStorage.setItem('betHistory', JSON.stringify(betHistory));
            updateBetHistoryDisplay();
            saveAppState();
            
            // Auto-append to bet log on newest unlocked day
            const unlockedDay = betLog.slice().reverse().find(d => d.unlocked || d.games.length > 0 && d.day <= 28);
            const targetDay = betLog.find(d => d.day === (unlockedDay ? unlockedDay.day : 28));
            if (targetDay) {
                const newGame = {
                    t1: betData.teamA || 'Team A',
                    o1: '',
                    s1: 0, i1: 0,
                    wl1: '', l1: '',
                    t2: betData.teamB || 'Team B',
                    o2: '',
                    s2: 0, i2: 0,
                    wl2: '', l2: '',
                    pick: betData.teamA || 'Team A',
                    res: null, // pending W/L
                    _id: betData.id,
                    sport: currentSport
                };
                targetDay.games.push(newGame);
                // if bet log is open on this day, re-render
                if (activeBetDay === targetDay.day) renderBetDayCards();
            }
            
            // Flash the button
            saveBetBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                saveBetBtn.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Display bet history
        function updateBetHistoryDisplay() {
            const betHistory = JSON.parse(localStorage.getItem('betHistory') || '[]');
            const betHistoryContent = document.getElementById('betHistoryContent');
            
            const now = Date.now();
            
            let html = `
                <div class="create-new-bet-btn" id="createNewBetBtn">
                    <span class="create-new-icon">+</span>
                    <span class="create-new-text">create new bet</span>
                </div>
            `;
            
            if (betHistory.length === 0) {
                html += `
                    <div class="empty-state">
                        <div class="empty-state-icon">💰</div>
                        <div>no bets yet</div>
                        <div style="font-size: 12px; margin-top: 8px;">start tracking your wins!</div>
                    </div>
                `;
            } else {
                html += betHistory.map(bet => {
                    // Calculate current time
                    let currentTime;
                    if (bet.isRunning) {
                        const elapsed = Math.floor((now - bet.savedAt) / 1000);
                        currentTime = Math.max(0, bet.clockSeconds - elapsed);
                    } else {
                        currentTime = bet.clockSeconds;
                    }
                    
                    // Determine box color based on bet type
                    let betItemClass = 'bet-item';
                    if (bet.betType === 'over') {
                        betItemClass += ' bet-over';
                    } else if (bet.betType === 'under') {
                        betItemClass += ' bet-under';
                    }
                    
                    return `
                        <div class="${betItemClass}" data-bet-id="${bet.id}">
                            <div class="bet-header-row">
                                <div class="bet-teams">${bet.teamA} vs ${bet.teamB}</div>
                                <div class="bet-time-info">
                                    <span class="live-clock" data-bet-id="${bet.id}">${formatTime(currentTime)}</span>
                                    ${bet.isRunning ? ' ⏱️' : ''} · ${bet.quarter}Q
                                </div>
                            </div>
                            <div class="bet-details-row">
                                <div class="bet-detail">
                                    <span class="detail-label">o/u line</span>
                                    <span class="detail-value">${bet.ouLine || '—'}</span>
                                </div>
                                <div class="bet-detail">
                                    <span class="detail-label">total</span>
                                    <span class="detail-value">${bet.totalPoints}</span>
                                </div>
                                <div class="bet-detail">
                                    <span class="detail-label">bet</span>
                                    <span class="detail-value">${bet.betType ? bet.betType.toUpperCase() : '—'}</span>
                                </div>
                            </div>
                            <div class="delete-zone" data-bet-id="${bet.id}">🗑️</div>
                        </div>
                    `;
                }).join('');
            }
            
            betHistoryContent.innerHTML = html;
            
            // Add click handler for create new bet button
            const createNewBetBtn = document.getElementById('createNewBetBtn');
            if (createNewBetBtn) {
                createNewBetBtn.addEventListener('click', () => {
                    // Full reset to start fresh
                    quarter = 1;
                    const config = getSportConfig();
                    clockSeconds = config.quarterMinutes * 60;
                    teamAScore = 0;
                    teamBScore = 0;
                    teamAName = 'points';
                    teamBName = 'points';
                    ouLine = 0;
                    isRunning = false;
                    currentBetId = null;
                    saveBetBtn.textContent = '+';
                    if (timerInterval) {
                        clearInterval(timerInterval);
                        timerInterval = null;
                    }
                    selectedTeam = null;
                    selectedPoints = null;
                    
                    // Update UI
                    const resetConfig = getSportConfig();
                    qBox.textContent = '1' + resetConfig.label;
                    scoreLeft.textContent = '0';
                    scoreRight.textContent = '0';
                    teamLabelLeft.textContent = 'points';
                    teamLabelRight.textContent = 'points';
                    ouLineEl.textContent = '—';
                    scoreLeft.classList.remove('selected');
                    scoreRight.classList.remove('selected');
                    pointButtons.forEach(btn => btn.classList.remove('selected'));
                    
                    updateClockDisplay();
                    calculateStats();
                    
                    // Close panel
                    sidePanel.classList.remove('open');
                    panelOverlay.classList.remove('open');
                    
                    // Stop live clock updates
                    stopLiveClockUpdates();
                });
            }
            
            // Add swipe and click handlers
            document.querySelectorAll('.bet-item').forEach(item => {
                let startX = 0;
                let isDragging = false;
                let hasShownPopup = false;
                
                // Touch events for mobile
                item.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                    isDragging = true;
                    hasShownPopup = false;
                });
                
                item.addEventListener('touchmove', (e) => {
                    if (!isDragging) return;
                    
                    const currentX = e.touches[0].clientX;
                    const diff = startX - currentX;
                    
                    if (diff > 100 && !hasShownPopup) {
                        // Fully swiped - show delete confirmation
                        item.classList.add('swiped');
                        hasShownPopup = true;
                        const betId = parseInt(item.dataset.betId);
                        showDeleteConfirmation(betId);
                        setTimeout(() => {
                            item.classList.remove('swiped');
                        }, 300);
                        e.preventDefault();
                    } else if (diff > 50) {
                        item.classList.add('swiped');
                        e.preventDefault();
                    } else if (diff < -30) {
                        item.classList.remove('swiped');
                    }
                });
                
                item.addEventListener('touchend', () => {
                    isDragging = false;
                });
                
                // Mouse events for desktop/Mac
                item.addEventListener('mousedown', (e) => {
                    startX = e.clientX;
                    isDragging = true;
                    hasShownPopup = false;
                    e.preventDefault();
                });
                
                document.addEventListener('mousemove', (e) => {
                    if (!isDragging) return;
                    
                    const currentX = e.clientX;
                    const diff = startX - currentX;
                    
                    if (diff > 100 && !hasShownPopup) {
                        // Fully swiped - show delete confirmation
                        item.classList.add('swiped');
                        hasShownPopup = true;
                        isDragging = false;
                        const betId = parseInt(item.dataset.betId);
                        showDeleteConfirmation(betId);
                        setTimeout(() => {
                            item.classList.remove('swiped');
                        }, 300);
                    } else if (diff > 50) {
                        item.classList.add('swiped');
                    } else if (diff < -30) {
                        item.classList.remove('swiped');
                    }
                });
                
                document.addEventListener('mouseup', () => {
                    isDragging = false;
                });
                
                item.addEventListener('click', (e) => {
                    // Prevent click if we just finished dragging
                    if (hasShownPopup) {
                        hasShownPopup = false;
                        return;
                    }
                    
                    // If clicking trash, show delete confirmation
                    if (e.target.classList.contains('delete-zone') || e.target.textContent === '🗑️') {
                        e.stopPropagation();
                        const betId = parseInt(e.target.dataset.betId || item.dataset.betId);
                        showDeleteConfirmation(betId);
                        item.classList.remove('swiped');
                        return;
                    }
                    // If swiped, just close it
                    if (item.classList.contains('swiped')) {
                        item.classList.remove('swiped');
                        return;
                    }
                    // Otherwise load the bet
                    const betId = parseInt(item.dataset.betId);
                    loadBet(betId);
                });
            });
        }
        
        // Load bet from history
        function loadBet(betId) {
            const betHistory = JSON.parse(localStorage.getItem('betHistory') || '[]');
            const bet = betHistory.find(b => b.id === betId);
            
            if (!bet) return;
            
            // Set current bet ID (we're now editing this bet)
            currentBetId = betId;
            saveBetBtn.textContent = '💾';
            
            // Calculate current time
            const now = Date.now();
            let currentTime;
            if (bet.isRunning) {
                const elapsed = Math.floor((now - bet.savedAt) / 1000);
                currentTime = Math.max(0, bet.clockSeconds - elapsed);
            } else {
                currentTime = bet.clockSeconds;
            }
            
            // Load all game state
            teamAName = bet.teamA;
            teamBName = bet.teamB;
            teamAScore = bet.scoreA;
            teamBScore = bet.scoreB;
            quarter = bet.quarter;
            clockSeconds = currentTime;
            ouLine = bet.ouLine || 0;
            
            // Restore timer
            if (bet.isRunning && currentTime > 0) {
                startTimer();
            } else {
                pauseTimer();
            }
            
            // Update UI
            teamLabelLeft.textContent = teamAName;
            teamLabelRight.textContent = teamBName;
            scoreLeft.textContent = teamAScore;
            scoreRight.textContent = teamBScore;
            const config = getSportConfig();
            qBox.textContent = quarter + config.label;
            ouLineEl.textContent = ouLine || '—';
            
            updateClockDisplay();
            calculateStats();
            
            // Close panel
            sidePanel.classList.remove('open');
            panelOverlay.classList.remove('open');
            
            // Stop live clock updates
            stopLiveClockUpdates();
        }
        
        // Delete confirmation
        let betToDelete = null;
        
        function showDeleteConfirmation(betId) {
            betToDelete = betId;
            
            // Create custom popup
            const popup = document.createElement('div');
            popup.className = 'delete-popup';
            popup.innerHTML = `
                <div class="delete-popup-content">
                    <div class="delete-popup-title">Delete Bet?</div>
                    <div class="delete-popup-text">This action cannot be undone</div>
                    <div class="delete-popup-buttons">
                        <button class="delete-popup-btn cancel">Cancel</button>
                        <button class="delete-popup-btn delete">Delete</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(popup);
            
            // Animate in
            setTimeout(() => popup.classList.add('show'), 10);
            
            // Cancel button
            popup.querySelector('.cancel').addEventListener('click', () => {
                popup.classList.remove('show');
                setTimeout(() => popup.remove(), 300);
                betToDelete = null;
            });
            
            // Delete button
            popup.querySelector('.delete').addEventListener('click', () => {
                if (betToDelete !== null) {
                    popup.classList.remove('show');
                    setTimeout(() => {
                        popup.remove();
                        showOutcomeSelection(betToDelete);
                    }, 300);
                }
            });
            
            // Click outside to cancel
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    popup.classList.remove('show');
                    setTimeout(() => popup.remove(), 300);
                    betToDelete = null;
                }
            });
        }
        
        function showOutcomeSelection(betId) {
            const messages = [
                "did scared money make money? 💸",
                "we counting bands or counting losses? 🤔",
                "did the bag come through? 💰",
                "profit or pain? 📊",
                "money talks, what's it saying? 🗣️",
                "did you eat or get ate? 🍽️",
                "bankroll blessed or bankroll stressed? 😅",
                "winning szn or learning szn? 📚",
                "cash out or tap out? 💵",
                "green light or red light? 🚦",
                "did the math work? 🧮",
                "vibes immaculate or wallet devastated? ✨",
                "profit gang or loss gang? 🎭",
                "money printer go brrr? 🖨️",
                "did you cook or get cooked? 👨‍🍳",
                "W or L in the books? 📖",
                "bankroll happy or bankroll sad? 😊",
                "did the odds respect you? 🎲",
                "cashing checks or taking L's? ✅",
                "profit szn activated? 🚀",
                "money dance or sad dance? 💃",
                "did you see the vision? 👁️",
                "big brain or big pain? 🧠",
                "bankroll going up or going ghost? 👻",
                "you eating good or starving? 🍔",
                "did the bet hit different? 💥",
                "wallet fat or wallet flat? 👛",
                "winning streak or learning streak? 🔥",
                "money moves or money blues? 🎵",
                "profit prophet or loss prophet? 🔮",
                "did you beat the book? 📕",
                "cash flow or cash slow? 🐌",
                "are we rich or are we sick? 🤒",
                "money up or money down? ⬆️",
                "winning mindset or coping mindset? 🧘",
                "did the universe provide? 🌌",
                "profit locked or profit blocked? 🔒",
                "bankroll boosted or bankroll busted? 💥",
                "we celebrating or we coping? 🎉",
                "did you trust the process? ⚙️",
                "money good or money hood? 🏘️",
                "are we printing or are we hurting? 🖨️",
                "cash king or broke king? 👑",
                "did the bag secure? 🎒",
                "profit mode or cope mode? 🤖",
                "winning ways or losing days? 📅",
                "bankroll thriving or barely surviving? 🌱",
                "did you call it? 📞",
                "money different or same old story? 📖",
                "we flexing or we stressing? 💪",
                "profit party or pity party? 🎊",
                "did the stars align? ⭐",
                "cash crazy or crash crazy? 🚗",
                "are we winners or are we sinners? 😇",
                "bankroll lit or bankroll quit? 🔥",
                "did the numbers add up? ➕",
                "money motivated or money devastated? 💔",
                "winning energy or losing energy? ⚡",
                "profit mode activated? 🎮",
                "we getting bread or getting fed? 🍞",
                "did you see it coming? 👀",
                "cash flow positive or cash flow negative? ➖",
                "are we blessed or are we stressed? 🙏",
                "bankroll healthy or bankroll sketchy? 💊",
                "did the bet bang? 💥",
                "money printer broken? 🔧",
                "winning formula or losing formula? 🧪",
                "profit secured or profit curved? 🏃",
                "we rich or we coping? 🤷",
                "did the play work? ⚽",
                "money made or money played? 🎰"
            ];
            
            // 0.5% chance for ultra rare message
            const isUltraRare = Math.random() < 0.005;
            const message = isUltraRare ? 
                "you're destined for greatness 🌟✨" : 
                messages[Math.floor(Math.random() * messages.length)];
            
            const popup = document.createElement('div');
            popup.className = 'delete-popup';
            if (isUltraRare) popup.classList.add('ultra-rare');
            
            popup.innerHTML = `
                <div class="delete-popup-content ${isUltraRare ? 'ultra-rare-content' : ''}">
                    <div class="delete-popup-title">How'd it go?</div>
                    <div class="delete-popup-text">${message}</div>
                    <div class="outcome-buttons">
                        <button class="outcome-btn won" data-outcome="won">
                            <div class="outcome-emoji">💰</div>
                            <div class="outcome-label">won</div>
                        </button>
                        <button class="outcome-btn lost" data-outcome="lost">
                            <div class="outcome-emoji">😭</div>
                            <div class="outcome-label">lost</div>
                        </button>
                        <button class="outcome-btn mistake" data-outcome="mistake">
                            <div class="outcome-emoji">❌</div>
                            <div class="outcome-label">mistake</div>
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(popup);
            
            // Animate in
            setTimeout(() => popup.classList.add('show'), 10);
            
            // Outcome buttons
            popup.querySelectorAll('.outcome-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const outcome = btn.dataset.outcome;
                    deleteBet(betId, outcome);
                    popup.classList.remove('show');
                    setTimeout(() => popup.remove(), 300);
                    betToDelete = null;
                });
            });
            
            // Click outside to skip (just delete without tracking)
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    deleteBet(betId, null);
                    popup.classList.remove('show');
                    setTimeout(() => popup.remove(), 300);
                    betToDelete = null;
                }
            });
        }
        
        function deleteBet(betId, outcome) {
            let betHistory = JSON.parse(localStorage.getItem('betHistory') || '[]');
            betHistory = betHistory.filter(b => b.id !== betId);
            localStorage.setItem('betHistory', JSON.stringify(betHistory));
            
            // Track outcome if provided
            if (outcome && outcome !== 'mistake') {
                let record = JSON.parse(localStorage.getItem('betRecord') || '{"won": 0, "lost": 0}');
                record[outcome] = (record[outcome] || 0) + 1;
                localStorage.setItem('betRecord', JSON.stringify(record));
                updateRecordDisplay(); // Update the display
            }
            
            updateBetHistoryDisplay();
            saveAppState();
        }
        
        // Update live clocks every second - ONLY if side panel is open
        let liveClockInterval = null;
        
        function startLiveClockUpdates() {
            if (liveClockInterval) return; // Already running
            
            liveClockInterval = setInterval(() => {
                const liveClocks = document.querySelectorAll('.live-clock');
                if (liveClocks.length === 0) {
                    stopLiveClockUpdates();
                    return;
                }
                
                const betHistory = JSON.parse(localStorage.getItem('betHistory') || '[]');
                const now = Date.now();
                
                liveClocks.forEach(clock => {
                    const betId = parseInt(clock.dataset.betId);
                    const bet = betHistory.find(b => b.id === betId);
                    
                    if (bet && bet.isRunning) {
                        const elapsed = Math.floor((now - bet.savedAt) / 1000);
                        const currentTime = Math.max(0, bet.clockSeconds - elapsed);
                        clock.textContent = formatTime(currentTime);
                    }
                });
            }, 1000);
        }
        
        function stopLiveClockUpdates() {
            if (liveClockInterval) {
                clearInterval(liveClockInterval);
                liveClockInterval = null;
            }
        }
        
        // Load on startup
        updateBetHistoryDisplay();
        
        // Update W/L record display
        function updateRecordDisplay() {
            const record = JSON.parse(localStorage.getItem('betRecord') || '{"won": 0, "lost": 0}');
            document.getElementById('recordWins').textContent = record.won || 0;
            document.getElementById('recordLosses').textContent = record.lost || 0;
        }
        
        // Load bankroll from storage
        function loadBankroll() {
            const bankroll = localStorage.getItem('bankroll') || '$25';
            const goal = localStorage.getItem('bankrollGoal') || '$0';
            const previousBankroll = localStorage.getItem('previousBankroll') || '$25';
            
            document.getElementById('bankrollAmount').textContent = bankroll;
            document.getElementById('goalAmount').textContent = goal;
            
            // Check if bankroll is declining
            const currentValue = parseFloat(bankroll.replace('$', '').replace(',', ''));
            const previousValue = parseFloat(previousBankroll.replace('$', '').replace(',', ''));
            
            const bankrollEl = document.getElementById('bankrollAmount');
            if (currentValue < previousValue) {
                bankrollEl.style.color = '#ef4444'; // RED if declining
            } else {
                bankrollEl.style.color = '#22c55e'; // GREEN if rising/same
            }
        }
        
        // Save bankroll on edit
        const bankrollAmount = document.getElementById('bankrollAmount');
        const goalAmount = document.getElementById('goalAmount');
        
        bankrollAmount.addEventListener('blur', () => {
            const previousBankroll = localStorage.getItem('bankroll') || '$25';
            const newValue = bankrollAmount.textContent.trim();
            
            localStorage.setItem('previousBankroll', previousBankroll);
            localStorage.setItem('bankroll', newValue);
            loadBankroll(); // Update color
            saveAppState();
        });
        
        goalAmount.addEventListener('blur', () => {
            const value = goalAmount.textContent.trim();
            localStorage.setItem('bankrollGoal', value);
            saveAppState();
        });
        
        bankrollAmount.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                bankrollAmount.blur();
            }
        });
        
        goalAmount.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                goalAmount.blur();
            }
        });
        
        // Initialize
        updateRecordDisplay();
        loadBankroll();

        // Team selection
        scoreLeft.addEventListener('click', () => {
            if (selectedTeam === 'left') {
                scoreLeft.classList.remove('selected');
                selectedTeam = null;
            } else {
                scoreLeft.classList.add('selected');
                scoreRight.classList.remove('selected');
                selectedTeam = 'left';
            }
            applyScore();
        });

        scoreRight.addEventListener('click', () => {
            if (selectedTeam === 'right') {
                scoreRight.classList.remove('selected');
                selectedTeam = null;
            } else {
                scoreRight.classList.add('selected');
                scoreLeft.classList.remove('selected');
                selectedTeam = 'right';
            }
            applyScore();
        });

        // Score editing - double click to type score directly
        scoreLeft.addEventListener('dblclick', () => {
            const input = document.createElement('input');
            input.type = 'number';
            input.inputMode = 'numeric';
            input.pattern = '[0-9]*';
            input.className = 'score-edit';
            input.style.fontSize = '72px';
            input.style.width = '100%';
            input.style.background = 'rgba(255,255,255,0.3)';
            input.style.color = '#000';
            input.style.textAlign = 'center';
            input.value = teamAScore;
            scoreLeft.replaceWith(input);
            input.focus();
            input.select();
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    input.blur();
                }
            });
            
            input.addEventListener('blur', () => {
                const val = parseInt(input.value);
                if (!isNaN(val) && val >= 0) {
                    teamAScore = val;
                }
                input.replaceWith(scoreLeft);
                scoreLeft.textContent = teamAScore;
                calculateStats();
            });
        });

        scoreRight.addEventListener('dblclick', () => {
            const input = document.createElement('input');
            input.type = 'number';
            input.inputMode = 'numeric';
            input.pattern = '[0-9]*';
            input.className = 'score-edit';
            input.style.fontSize = '72px';
            input.style.width = '100%';
            input.style.background = 'rgba(255,255,255,0.3)';
            input.style.color = '#000';
            input.style.textAlign = 'center';
            input.value = teamBScore;
            scoreRight.replaceWith(input);
            input.focus();
            input.select();
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    input.blur();
                }
            });
            
            input.addEventListener('blur', () => {
                const val = parseInt(input.value);
                if (!isNaN(val) && val >= 0) {
                    teamBScore = val;
                }
                input.replaceWith(scoreRight);
                scoreRight.textContent = teamBScore;
                calculateStats();
            });
        });

        // O/U line swipe/drag detection with limited visual feedback
        let ouLineStartY = 0;
        let ouLineIsDragging = false;
        const ouLineBoxElement = document.getElementById('ouLineBox');
        const maxDragDistance = 20; // Max pixels to move
        
        // Touch events
        ouLineBoxElement.addEventListener('touchstart', (e) => {
            ouLineStartY = e.touches[0].clientY;
            ouLineBoxElement.style.transition = 'none';
        }, { passive: true });
        
        ouLineBoxElement.addEventListener('touchmove', (e) => {
            const currentY = e.touches[0].clientY;
            let deltaY = currentY - ouLineStartY;
            // Limit movement
            deltaY = Math.max(-maxDragDistance, Math.min(maxDragDistance, deltaY));
            ouLineBoxElement.style.transform = `translateY(${deltaY}px)`;
        }, { passive: true });
        
        ouLineBoxElement.addEventListener('touchend', (e) => {
            const ouLineEndY = e.changedTouches[0].clientY;
            const deltaY = ouLineStartY - ouLineEndY;
            
            // Snap back
            ouLineBoxElement.style.transition = 'transform 0.3s ease';
            ouLineBoxElement.style.transform = 'translateY(0)';
            
            // Swipe up = OVER, Swipe down = UNDER
            if (Math.abs(deltaY) > 30) {
                if (deltaY > 0) {
                    // Swiped UP = OVER
                    betType = 'over';
                    betTypeEl.textContent = 'OVER';
                    betTypeBox.style.background = '#22c55e';
                } else {
                    // Swiped DOWN = UNDER
                    betType = 'under';
                    betTypeEl.textContent = 'UNDER';
                    betTypeBox.style.background = '#ef4444';
                }
            }
        }, { passive: true });
        
        // Mouse events
        ouLineBoxElement.addEventListener('mousedown', (e) => {
            ouLineStartY = e.clientY;
            ouLineIsDragging = true;
            ouLineBoxElement.style.transition = 'none';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!ouLineIsDragging) return;
            const currentY = e.clientY;
            let deltaY = currentY - ouLineStartY;
            // Limit movement
            deltaY = Math.max(-maxDragDistance, Math.min(maxDragDistance, deltaY));
            ouLineBoxElement.style.transform = `translateY(${deltaY}px)`;
        });
        
        document.addEventListener('mouseup', (e) => {
            if (!ouLineIsDragging) return;
            ouLineIsDragging = false;
            
            const ouLineEndY = e.clientY;
            const deltaY = ouLineStartY - ouLineEndY;
            
            // Snap back
            ouLineBoxElement.style.transition = 'transform 0.3s ease';
            ouLineBoxElement.style.transform = 'translateY(0)';
            
            // Drag up = OVER, Drag down = UNDER
            if (Math.abs(deltaY) > 20) {
                if (deltaY > 0) {
                    // Dragged UP = OVER
                    betType = 'over';
                    betTypeEl.textContent = 'OVER';
                    betTypeBox.style.background = '#22c55e';
                } else {
                    // Dragged DOWN = UNDER
                    betType = 'under';
                    betTypeEl.textContent = 'UNDER';
                    betTypeBox.style.background = '#ef4444';
                }
            }
        });

        // Point button selection
        pointButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const points = parseInt(btn.dataset.points);
                
                if (selectedPoints === points) {
                    btn.classList.remove('selected');
                    selectedPoints = null;
                } else {
                    pointButtons.forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    selectedPoints = points;
                }
                applyScore();
            });
        });

        // Quarter switching
        qBox.addEventListener('click', () => {
            const config = getSportConfig();
            
            // Baseball handles innings differently
            if (currentSport === 'mlb') {
                advanceBaseballInning();
                return;
            }
            
            // If currently on last period, do full reset when cycling to 1
            if (quarter === config.maxPeriods) {
                quarter = 1;
                clockSeconds = config.quarterMinutes * 60;
                teamAScore = 0;
                teamBScore = 0;
                teamAName = 'points';
                teamBName = 'points';
                ouLine = 0;
                isRunning = false;
                currentBetId = null;
                saveBetBtn.textContent = '+';
                if (timerInterval) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                }
                selectedTeam = null;
                selectedPoints = null;
                
                // Update UI
                qBox.textContent = '1' + config.label;
                scoreLeft.textContent = '0';
                scoreRight.textContent = '0';
                teamLabelLeft.textContent = 'points';
                teamLabelRight.textContent = 'points';
                ouLineEl.textContent = '—';
                scoreLeft.classList.remove('selected');
                scoreRight.classList.remove('selected');
                pointButtons.forEach(btn => btn.classList.remove('selected'));
                
                updateClockDisplay();
                calculateStats();
            } else {
                // Normal quarter advancement
                quarter++;
                // Safety check - wrap around if exceeds max
                if (quarter > config.maxPeriods) {
                    quarter = 1;
                }
                qBox.textContent = quarter + config.label;
                calculateStats();
            }
        });

        // Clock editing
        timeDisplay.addEventListener('dblclick', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'clock-edit';
            input.value = formatTime(clockSeconds);
            timeDisplay.replaceWith(input);
            input.focus();
            input.select();
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    input.blur();
                }
            });
            
            input.addEventListener('blur', () => {
                const parts = input.value.split(':');
                if (parts.length === 2) {
                    const mins = parseInt(parts[0]) || 0;
                    const secs = parseInt(parts[1]) || 0;
                    clockSeconds = mins * 60 + secs;
                }
                input.replaceWith(timeDisplay);
                updateClockDisplay();
                calculateStats();
            });
        });

        // Quarter editing
        qBox.addEventListener('dblclick', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'quarter-edit';
            input.value = quarter + 'Q';
            qBox.replaceWith(input);
            input.focus();
            input.select();
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    input.blur();
                }
            });
            
            input.addEventListener('blur', () => {
                const val = parseInt(input.value);
                if (val >= 1 && val <= 4) quarter = val;
                input.replaceWith(qBox);
                qBox.textContent = quarter + 'Q';
                calculateStats();
            });
        });

        // Team name editing
        teamLabelLeft.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'stat-edit';
            input.style.fontSize = '20px';
            input.style.background = 'rgba(255,255,255,0.3)';
            input.style.color = '#fff';
            input.value = teamAName;
            input.placeholder = 'Team A';
            teamLabelLeft.replaceWith(input);
            input.focus();
            input.select();
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    input.blur();
                } else if ((e.metaKey || e.ctrlKey) && (e.key === 'Backspace' || e.key === 'Delete')) {
                    e.preventDefault();
                    e.stopPropagation();
                    input.value = '';
                }
            });
            
            input.addEventListener('blur', () => {
                teamAName = input.value.trim() || 'points';
                input.replaceWith(teamLabelLeft);
                teamLabelLeft.textContent = teamAName;
            });
        });
        
        teamLabelRight.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'stat-edit';
            input.style.fontSize = '20px';
            input.style.background = 'rgba(255,255,255,0.3)';
            input.style.color = '#000';
            input.value = teamBName;
            input.placeholder = 'Team B';
            teamLabelRight.replaceWith(input);
            input.focus();
            input.select();
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    input.blur();
                } else if ((e.metaKey || e.ctrlKey) && (e.key === 'Backspace' || e.key === 'Delete')) {
                    e.preventDefault();
                    e.stopPropagation();
                    input.value = '';
                }
            });
            
            input.addEventListener('blur', () => {
                teamBName = input.value.trim() || 'points';
                input.replaceWith(teamLabelRight);
                teamLabelRight.textContent = teamBName;
            });
        });

        // O/U Line editing
        ouLineEl.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'number';
            input.inputMode = 'decimal';
            input.step = '0.5';
            input.className = 'stat-edit';
            input.value = ouLine > 0 ? ouLine : '';
            input.placeholder = 'Enter O/U';
            ouLineEl.replaceWith(input);
            input.focus();
            input.select();
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    input.blur();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (ouLine === 0) ouLine = 0.5;
                    else ouLine += 0.5;
                    input.value = ouLine;
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    ouLine = Math.max(0, ouLine - 0.5);
                    input.value = ouLine > 0 ? ouLine : '';
                }
            });
            
            input.addEventListener('blur', () => {
                const val = parseFloat(input.value);
                if (!isNaN(val) && val > 0) {
                    ouLine = val;
                    ouLineEl.textContent = ouLine;
                } else {
                    ouLine = 0;
                    ouLineEl.textContent = '—';
                }
                input.replaceWith(ouLineEl);
                calculateStats();
            });
        });

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            // Skip keyboard shortcuts if typing in an input
            if (e.target.tagName === 'INPUT') return;
            
            if (e.key === ' ') {
                e.preventDefault();
                if (isRunning) pauseTimer();
                else startTimer();
            } else if (e.key === 'r' || e.key === 'R') {
                e.preventDefault();
                resetTimer();
            } else if (e.key === 'Backspace') {
                // If a team is selected, remove points
                if (selectedTeam === 'left' && teamAScore > 0) {
                    e.preventDefault();
                    teamAScore--;
                    scoreLeft.textContent = teamAScore;
                    calculateStats();
                } else if (selectedTeam === 'right' && teamBScore > 0) {
                    e.preventDefault();
                    teamBScore--;
                    scoreRight.textContent = teamBScore;
                    calculateStats();
                }
            } else if (e.key === 'Delete') {
                // Delete key - clear selected team's score completely
                e.preventDefault();
                if (selectedTeam === 'left') {
                    teamAScore = 0;
                    scoreLeft.textContent = teamAScore;
                    calculateStats();
                } else if (selectedTeam === 'right') {
                    teamBScore = 0;
                    scoreRight.textContent = teamBScore;
                    calculateStats();
                }
            } else if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
                // Command+Z or Ctrl+Z - Full reset
                e.preventDefault();
                quarter = 1;
                const config = getSportConfig();
                clockSeconds = config.quarterMinutes * 60;
                teamAScore = 0;
                teamBScore = 0;
                teamAName = 'points';
                teamBName = 'points';
                ouLine = 0;
                isRunning = false;
                currentBetId = null;
                saveBetBtn.textContent = '+';
                if (timerInterval) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                }
                selectedTeam = null;
                selectedPoints = null;
                
                // Update UI
                const resetConfig = getSportConfig(); qBox.textContent = '1' + resetConfig.label;
                scoreLeft.textContent = '0';
                scoreRight.textContent = '0';
                teamLabelLeft.textContent = 'points';
                teamLabelRight.textContent = 'points';
                ouLineEl.textContent = '—';
                scoreLeft.classList.remove('selected');
                scoreRight.classList.remove('selected');
                pointButtons.forEach(btn => btn.classList.remove('selected'));
                
                updateClockDisplay();
                calculateStats();
            }
        });

        // Prevent spacebar scrolling
        window.addEventListener('keydown', (e) => {
            if (e.key === ' ' && e.target === document.body) {
                e.preventDefault();
            }
        });

        // Sparkle effect and bet type selector for home button
        const navHome = document.getElementById('navHome');
        const betTypePopup = document.getElementById('betTypePopup');
        const betTypeOverlay = document.getElementById('betTypeOverlay');
        const betTypeButtons = document.querySelectorAll('.bet-type-btn');
        let currentBetType = 'winner';
        
        navHome.addEventListener('click', (e) => {
            const rect = navHome.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Create 8 sparkles
            for (let i = 0; i < 8; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                
                // Random angle and distance
                const angle = (Math.PI * 2 * i) / 8;
                const distance = 30 + Math.random() * 20;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                sparkle.style.cssText = `
                    left: ${centerX}px;
                    top: ${centerY}px;
                    --tx: ${tx}px;
                    --ty: ${ty}px;
                `;
                
                document.body.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 600);
            }
            
            // Toggle bet type popup
            betTypePopup.classList.toggle('open');
            betTypeOverlay.classList.toggle('open');
        });
        
        // Bet type selection
        const statsMain = document.querySelector('.stats-main');
        const statsSub = document.querySelector('.stats-sub');
        const statsProjection = document.querySelector('.stats-projection');
        const statsExtra = document.querySelector('.stats-extra');
        const statsContainer = document.querySelector('.stats-container');
        const container = document.querySelector('.container');
        const scoreboard = document.querySelector('.scoreboard');
        const controls = document.querySelector('.controls');
        const playerPropsContainer = document.getElementById('playerPropsContainer');
        const gameWinnerContainer = document.getElementById('gameWinnerContainer');
        
        betTypeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                currentBetType = btn.dataset.type;
                betTypeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update nav icon to show current mode
                const icon = btn.querySelector('.bet-type-icon').textContent;
                navHome.textContent = icon;
                
                // Handle different bet types
                if (currentBetType === 'ou') {
                    // Show O/U interface
                    scoreboard.style.display = 'grid';
                    controls.style.display = 'flex';
                    statsContainer.style.display = 'block';
                    statsMain.style.display = 'grid';
                    statsSub.style.display = 'grid';
                    statsProjection.style.display = 'grid';
                    statsExtra.style.display = 'grid';
                    playerPropsContainer.style.display = 'none';
                    gameWinnerContainer.style.display = 'none';
                    
                    document.querySelector('.header').style.display = 'flex';
                    document.getElementById('gwHeader').style.display = 'none';
                } else if (currentBetType === 'player') {
                    // Show empty Player Props container
                    scoreboard.style.display = 'none';
                    controls.style.display = 'none';
                    statsContainer.style.display = 'none';
                    statsMain.style.display = 'none';
                    statsSub.style.display = 'none';
                    statsProjection.style.display = 'none';
                    statsExtra.style.display = 'none';
                    playerPropsContainer.style.display = 'flex';
                    gameWinnerContainer.style.display = 'none';
                    
                    document.querySelector('.header').style.display = 'flex';
                    document.getElementById('gwHeader').style.display = 'none';
                } else if (currentBetType === 'winner') {
                    // Show empty Game Winner container
                    scoreboard.style.display = 'none';
                    controls.style.display = 'none';
                    statsContainer.style.display = 'none';
                    statsMain.style.display = 'none';
                    statsSub.style.display = 'none';
                    statsProjection.style.display = 'none';
                    statsExtra.style.display = 'none';
                    playerPropsContainer.style.display = 'none';
                    
                    const mlbGWContainer = document.getElementById('mlbGameWinnerContainer');
                    if (currentSport === 'mlb') {
                        gameWinnerContainer.style.display = 'none';
                        if (mlbGWContainer) mlbGWContainer.style.display = 'flex';
                    } else {
                        gameWinnerContainer.style.display = 'flex';
                        if (mlbGWContainer) mlbGWContainer.style.display = 'none';
                    }

                    document.querySelector('.header').style.display = 'none';
                    document.getElementById('gwHeader').style.display = 'flex';

                    // Update playoff series UI when opening game winner modal
                    updatePlayoffSeriesUI();
                }
                
                // Close popup after selection
                setTimeout(() => {
                    betTypePopup.classList.remove('open');
                    betTypeOverlay.classList.remove('open');
                }, 300);
                
                console.log('Selected bet type:', currentBetType);
            });
        });
        
        // Close bet type popup when clicking overlay
        betTypeOverlay.addEventListener('click', () => {
            betTypePopup.classList.remove('open');
            betTypeOverlay.classList.remove('open');
        });

        // Money rain and side panel for dollar bill button
        const navMenu = document.getElementById('navMenu');
        const navSports = document.getElementById('navSports');
        const sidePanel = document.getElementById('sidePanel');
        const panelOverlay = document.getElementById('panelOverlay');
        const sportsPopup = document.getElementById('sportsPopup');
        const sportsOverlay = document.getElementById('sportsOverlay');
        const sportButtons = document.querySelectorAll('.sport-btn');
        let currentSport = 'nba';
        
        // Sport configurations
        const sportConfigs = {
            'enba': { quarterMinutes: 5, totalGameMinutes: 20, label: 'Q', scoreButtons: [1, 2, 3], maxPeriods: 4, hasTimer: true },
            'nba': { quarterMinutes: 12, totalGameMinutes: 48, label: 'Q', scoreButtons: [1, 2, 3], maxPeriods: 4, hasTimer: true },
            'cbb': { quarterMinutes: 20, totalGameMinutes: 40, label: 'H', scoreButtons: [1, 2, 3], maxPeriods: 2, hasTimer: true },
            'nfl': { quarterMinutes: 15, totalGameMinutes: 60, label: 'Q', scoreButtons: [1, 2, 3, 6], maxPeriods: 4, hasTimer: true },
            'cfb': { quarterMinutes: 15, totalGameMinutes: 60, label: 'Q', scoreButtons: [1, 2, 3, 6], maxPeriods: 4, hasTimer: true },
            'mlb': { quarterMinutes: 0, totalGameMinutes: 9, label: 'I', scoreButtons: [1, 2, 3], maxPeriods: 9, hasTimer: false },
            'nhl': { quarterMinutes: 20, totalGameMinutes: 60, label: 'P', scoreButtons: [1, 2, 3], maxPeriods: 3, hasTimer: true },
            'soccer': { quarterMinutes: 45, totalGameMinutes: 90, label: 'H', scoreButtons: [1, 2, 3], maxPeriods: 2, hasTimer: true }
        };
        
        function getSportConfig() {
            return sportConfigs[currentSport] || sportConfigs['enba'];
        }
        
        function updateSportSettings() {
            const config = getSportConfig();
            
            // FRESH START - Reset everything when switching sports
            quarter = 1;
            clockSeconds = config.quarterMinutes * 60;
            teamAScore = 0;
            teamBScore = 0;
            teamAName = 'points';
            teamBName = 'points';
            ouLine = 0;
            isRunning = false;
            selectedPoints = null;
            betType = null;
            
            // Reset baseball-specific state
            inningHalf = 'top';
            outsRecorded = [false, false, false];
            basesOccupied = [false, false, false];
            
            // Clear timer
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            
            // Reset UI
            scoreLeft.textContent = '0';
            scoreRight.textContent = '0';
            ouLineEl.textContent = '—';
            betTypeEl.textContent = '—';
            
            // Reset team labels
            const teamLeftLabel = document.getElementById('teamLeftLabel');
            const teamRightLabel = document.getElementById('teamRightLabel');
            if (teamLeftLabel) teamLeftLabel.textContent = 'team name';
            if (teamRightLabel) teamRightLabel.textContent = 'team name';
            
            // Clear selected classes
            document.querySelectorAll('.score-box.selected').forEach(el => el.classList.remove('selected'));
            document.querySelectorAll('.control-btn.selected').forEach(el => el.classList.remove('selected'));
            
            // Update play/pause button
            const playPauseBtn = document.getElementById('playPauseBtn');
            if (playPauseBtn) playPauseBtn.classList.remove('playing');
            
            updateInningDisplay();
            updateScoreButtons(config.scoreButtons);
            
            const headerSection = document.querySelector('.header');
            const baseballHeader = document.getElementById('baseballHeader');
            const gwHeader = document.getElementById('gwHeader');
            const container = document.querySelector('.container');
            
            const mlbGWContainer = document.getElementById('mlbGameWinnerContainer');
            const nbaGWContainer = document.getElementById('gameWinnerContainer');
            if (currentSport === 'mlb') {
                if (currentBetType === 'winner') {
                    if (headerSection) headerSection.style.display = 'none';
                    if (baseballHeader) baseballHeader.style.display = 'none';
                    if (gwHeader) gwHeader.style.display = 'flex';
                    if (mlbGWContainer) mlbGWContainer.style.display = 'flex';
                    if (nbaGWContainer) nbaGWContainer.style.display = 'none';
                } else {
                    if (headerSection) headerSection.style.display = 'none';
                    if (baseballHeader) baseballHeader.style.display = 'flex';
                    if (gwHeader) gwHeader.style.display = 'none';
                    if (mlbGWContainer) mlbGWContainer.style.display = 'none';
                }
                if (container) container.classList.add('baseball-mode');
            } else {
                if (mlbGWContainer) mlbGWContainer.style.display = 'none';
                // Show the appropriate header based on current bet type
                if (currentBetType === 'winner') {
                    if (headerSection) headerSection.style.display = 'none';
                    if (gwHeader) gwHeader.style.display = 'flex';
                    if (nbaGWContainer) nbaGWContainer.style.display = 'flex';
                } else {
                    if (headerSection) headerSection.style.display = 'flex';
                    if (gwHeader) gwHeader.style.display = 'none';
                    if (nbaGWContainer) nbaGWContainer.style.display = 'none';
                }
                if (baseballHeader) baseballHeader.style.display = 'none';
                if (container) container.classList.remove('baseball-mode');
            }
            
            updateClockDisplay();
            calculateStats();
        }
        
        function updateInningDisplay() {
            const config = getSportConfig();
            if (currentSport === 'mlb') {
                const inningBox = document.getElementById('inningBox');
                if (inningBox) {
                    const arrow = inningHalf === 'top' ? '▲' : '▼';
                    inningBox.textContent = quarter + arrow;
                }
            } else {
                qBox.textContent = quarter + config.label;
            }
        }
        
        // Game Winner - Variable declarations (MUST BE BEFORE TEAM POPUP SETUP)
        let awayInjuries = 0;
        let homeInjuries = 0;
        let selectedAwayTeam = null;  // Store selected away team
        let selectedHomeTeam = null;  // Store selected home team
        let selectedBBAwayTeam = null; // MLB away team
        let selectedBBHomeTeam = null; // MLB home team
        
        const awayInjDisplay = document.getElementById('awayTeamInjDisplay');
        const homeInjDisplay = document.getElementById('homeTeamInjDisplay');
        const awayOddsInput = document.getElementById('awayTeamOdds');
        const homeOddsInput = document.getElementById('homeTeamOdds');
        const awayTeamNameLabel = document.getElementById('awayTeamNameLabel');
        const homeTeamNameLabel = document.getElementById('homeTeamNameLabel');
        const winnerResultBox = document.getElementById('winnerResultBox');
        const injMinusBtn = document.getElementById('injMinusBtn') || {addEventListener:()=>{},style:{}};
        const injPlusBtn = document.getElementById('injPlusBtn') || {addEventListener:()=>{},style:{}};
        
        // GW Bankroll handling
        const gwBankroll = document.getElementById('gwBankroll');
        if (gwBankroll) {
            const saved = localStorage.getItem('gwBankroll');
            if (saved) gwBankroll.textContent = saved;
            
            gwBankroll.addEventListener('blur', () => {
                let val = gwBankroll.textContent.trim();
                if (!val.startsWith('$')) val = '$' + val.replace(/[^0-9.]/g, '');
                gwBankroll.textContent = val;
                localStorage.setItem('gwBankroll', val);
                saveAppState();
            });
            
            gwBankroll.addEventListener('input', () => {
                let val = gwBankroll.textContent;
                let clean = val.replace(/[^0-9.$]/g, '');
                if (clean !== val) {
                    gwBankroll.textContent = clean;
                    const range = document.createRange();
                    const sel = window.getSelection();
                    range.selectNodeContents(gwBankroll);
                    range.collapse(false);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            });
        }
        
        // Matrix scramble text effect
        function scrambleText(element, finalText, duration = 500) {
            const chars = 'abcdefghijklmnopqrstuvwxyz ';
            const startTime = Date.now();
            
            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Calculate how many letters should be revealed
                const revealedCount = Math.floor(progress * finalText.length);
                
                let result = '';
                for (let i = 0; i < finalText.length; i++) {
                    if (i < revealedCount) {
                        // Letters that have been revealed - show in red with transition
                        result += `<span class="scramble-char" style="color: #ef4444; transition: color 2.5s ease;">${finalText[i]}</span>`;
                    } else {
                        // Letters still scrambling
                        result += chars[Math.floor(Math.random() * chars.length)];
                    }
                }
                
                element.innerHTML = result;
                
                if (progress === 1) {
                    clearInterval(interval);
                    
                    // Fade from red to white after scramble finishes
                    setTimeout(() => {
                        const spans = element.querySelectorAll('.scramble-char');
                        spans.forEach(span => {
                            span.style.color = '#fff';
                        });
                    }, 100);
                }
            }, 30);
        }
        
        // Log panel toggle - open overlay panel
        const gwLogbook = document.getElementById('gwLogbook');
        const logPanel = document.getElementById('logPanel');
        const logOverlay = document.getElementById('logOverlay');
        const logTitle = document.getElementById('logTitle');
        
        if (gwLogbook && logPanel && logOverlay) {
            gwLogbook.addEventListener('click', () => {
                const isOpening = !logPanel.classList.contains('open');
                
                logPanel.classList.toggle('open');
                logOverlay.classList.toggle('open');
                
                if (isOpening) {
                    // always reset to logbook view on open
                    goToLogbook();
                    scrambleText(gwLogbook, 'game log', 1200);
                    // Sync bankroll
                    const logBankroll = document.getElementById('logBankroll');
                    if (logBankroll && gwBankroll) logBankroll.textContent = gwBankroll.textContent;
                    calculateBetAmounts();
                } else {
                    scrambleText(gwLogbook, 'log book', 1200);
                }
            });
        }

        // logTitle tap = close panel (same as X)
        if (logTitle) {
            logTitle.addEventListener('click', () => {
                if (logPanel.classList.contains('open')) {
                    logPanel.classList.remove('open');
                    logOverlay.classList.remove('open');
                    if (gwLogbook) scrambleText(gwLogbook, 'log book', 1200);
                }
            });
        }
        
        // Close button handler
        const logCloseBtn = document.getElementById('logCloseBtn');
        if (logCloseBtn && logPanel && logOverlay) {
            logCloseBtn.addEventListener('click', () => {
                logPanel.classList.remove('open');
                logOverlay.classList.remove('open');
                
                // Scramble back to "log book"
                if (gwLogbook) {
                    scrambleText(gwLogbook, 'log book', 1200);
                }
            });
        }

        // Refresh button — resort by CONF and recalculate
        const logRefreshBtn = document.getElementById('logRefreshBtn');
        if (logRefreshBtn) {
            logRefreshBtn.addEventListener('click', () => {
                sortLogByConfidence();
                calculateBetAmounts();
                logRefreshBtn.style.transform = 'rotate(360deg)';
                logRefreshBtn.style.transition = 'transform 0.4s ease';
                setTimeout(() => { logRefreshBtn.style.transform = ''; }, 400);
            });
        }

        // Log panel nav buttons — mirror main nav behavior
        const logNavMenu = document.getElementById('logNavMenu');
        const logNavSports = document.getElementById('logNavSports');
        const logNavHome = document.getElementById('logNavHome');
        if (logNavMenu) logNavMenu.addEventListener('click', () => { document.getElementById('navMenu')?.click(); logPanel.classList.remove('open'); logOverlay?.classList.remove('open'); });
        if (logNavSports) logNavSports.addEventListener('click', () => { document.getElementById('navSports')?.click(); logPanel.classList.remove('open'); logOverlay?.classList.remove('open'); });
        if (logNavHome) logNavHome.addEventListener('click', () => { logPanel.classList.remove('open'); logOverlay?.classList.remove('open'); });
        
        if (logOverlay) {
            logOverlay.addEventListener('click', () => {
                if (logPanel) logPanel.classList.remove('open');
                logOverlay.classList.remove('open');
                
                // Scramble back to "log book"
                if (gwLogbook) {
                    scrambleText(gwLogbook, 'log book', 1200);
                }
            });
        }
        
        // Sync bankroll in log panel
        const logBankroll = document.getElementById('logBankroll');
        if (logBankroll && gwBankroll) {
            // Keep them in sync when editing
            logBankroll.addEventListener('blur', () => {
                let val = logBankroll.textContent.trim();
                if (!val.startsWith('$')) val = '$' + val.replace(/[^0-9.]/g, '');
                logBankroll.textContent = val;
                gwBankroll.textContent = val;
                localStorage.setItem('gwBankroll', val);
                saveAppState();
            });
            
            logBankroll.addEventListener('input', () => {
                let val = logBankroll.textContent;
                let clean = val.replace(/[^0-9.$]/g, '');
                if (clean !== val) {
                    logBankroll.textContent = clean;
                    const range = document.createRange();
                    const sel = window.getSelection();
                    range.selectNodeContents(logBankroll);
                    range.collapse(false);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            });
        }
        
        // Inning box click handler
        document.addEventListener('DOMContentLoaded', () => {
            console.log('🚀 APP STARTING - DOMContentLoaded fired');
            // Clear old localStorage to force fresh load from Firebase
            localStorage.removeItem('appState');
            localStorage.removeItem('appState_nba');
            localStorage.removeItem('appState_mlb');
            console.log('🗑️ localStorage cleared');
            // Populate log book with Celtics and Pistons examples
            const logContent = document.getElementById('logContent');
            if (logContent) {
                // Celtics
                const celticsEntry = document.createElement('div');
                celticsEntry.className = 'log-entry permanent-example';
                celticsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #BA9653 0%, #9A7E45 50%, #7A6637 100%);
                    border: 3px solid #007A33;
                    outline: 2px solid rgba(255, 255, 255, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(186, 150, 83, 0.8),
                        inset 0 -1px 2px rgba(0, 122, 51, 0.3),
                        0 0 0 1px rgba(255, 255, 255, 0.3),
                        0 4px 12px rgba(0, 122, 51, 0.5),
                        0 0 20px rgba(0, 122, 51, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                celticsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(0, 122, 51, 0.7); border-right: 2px solid rgba(0, 122, 51, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,122,51,0.05) 0%, transparent 10%, transparent 90%, rgba(0,122,51,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #007A33; text-shadow: 0 1px 2px rgba(186,150,83,0.5);">Celtics</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(0, 122, 51, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,122,51,0.05) 0%, transparent 10%, transparent 90%, rgba(0,122,51,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #007A33; text-shadow: 0 1px 2px rgba(186,150,83,0.5);">+200</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(0, 122, 51, 0.15); border: 1px solid rgba(0, 122, 51, 0.4); border-radius: 6px; padding: 6px 8px; color: #007A33; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(186,150,83,0.3);">
                    </div>
                `;
                
                celticsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(celticsEntry);
                
                // Pistons
                const pistonsEntry = document.createElement('div');
                pistonsEntry.className = 'log-entry permanent-example';
                pistonsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FFFFFF 0%, #E8E8E8 50%, #D0D0D0 100%);
                    border: 3px solid #1D42BA;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(29, 66, 186, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(29, 66, 186, 0.5),
                        0 0 20px rgba(29, 66, 186, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                pistonsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Logo_of_the_Detroit_Pistons.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(200, 16, 46, 0.7); border-right: 2px solid rgba(200, 16, 46, 0.7); position: relative; background: linear-gradient(90deg, rgba(200,16,46,0.05) 0%, transparent 10%, transparent 90%, rgba(200,16,46,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #C8102E; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">Pistons</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(200, 16, 46, 0.7); position: relative; background: linear-gradient(90deg, rgba(200,16,46,0.05) 0%, transparent 10%, transparent 90%, rgba(200,16,46,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #C8102E; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">+225</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(200, 16, 46, 0.15); border: 1px solid rgba(200, 16, 46, 0.4); border-radius: 6px; padding: 6px 8px; color: #C8102E; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.3);">
                    </div>
                `;
                
                pistonsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(pistonsEntry);
                
                // Knicks
                const knicksEntry = document.createElement('div');
                knicksEntry.className = 'log-entry permanent-example';
                knicksEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #006BB6 0%, #005A99 50%, #00477A 100%);
                    border: 3px solid #F58426;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(0, 107, 182, 0.8),
                        inset 0 -1px 2px rgba(245, 132, 38, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(245, 132, 38, 0.5),
                        0 0 20px rgba(245, 132, 38, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                knicksEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(255, 255, 255, 0.7); border-right: 2px solid rgba(255, 255, 255, 0.7); position: relative; background: linear-gradient(90deg, rgba(255,255,255,0.05) 0%, transparent 10%, transparent 90%, rgba(255,255,255,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #FFFFFF; text-shadow: 0 1px 2px rgba(0,107,182,0.5);">Knicks</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(255, 255, 255, 0.7); position: relative; background: linear-gradient(90deg, rgba(255,255,255,0.05) 0%, transparent 10%, transparent 90%, rgba(255,255,255,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #FFFFFF; text-shadow: 0 1px 2px rgba(0,107,182,0.5);">-140</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 6px; padding: 6px 8px; color: #FFFFFF; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(0,107,182,0.3);">
                    </div>
                `;
                
                knicksEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(knicksEntry);
                
                // Cavaliers
                const cavsEntry = document.createElement('div');
                cavsEntry.className = 'log-entry permanent-example';
                cavsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FDBB30 0%, #E0A82E 50%, #C4952A 100%);
                    border: 3px solid #860038;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(253, 187, 48, 0.8),
                        inset 0 -1px 2px rgba(134, 0, 56, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(134, 0, 56, 0.5),
                        0 0 20px rgba(134, 0, 56, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                cavsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Cleveland_Cavaliers_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(134, 0, 56, 0.7); border-right: 2px solid rgba(134, 0, 56, 0.7); position: relative; background: linear-gradient(90deg, rgba(134,0,56,0.05) 0%, transparent 10%, transparent 90%, rgba(134,0,56,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #860038; text-shadow: 0 1px 2px rgba(253,187,48,0.5);">Cavaliers</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(134, 0, 56, 0.7); position: relative; background: linear-gradient(90deg, rgba(134,0,56,0.05) 0%, transparent 10%, transparent 90%, rgba(134,0,56,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #860038; text-shadow: 0 1px 2px rgba(253,187,48,0.5);">-105</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(134, 0, 56, 0.15); border: 1px solid rgba(134, 0, 56, 0.4); border-radius: 6px; padding: 6px 8px; color: #860038; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(253,187,48,0.3);">
                    </div>
                `;
                
                cavsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(cavsEntry);
                
                // Raptors
                const raptorsEntry = document.createElement('div');
                raptorsEntry.className = 'log-entry permanent-example';
                raptorsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #1A1A1A 0%, #000000 50%, #0D0D0D 100%);
                    border: 3px solid #CE1141;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(50, 50, 50, 0.8),
                        inset 0 -1px 2px rgba(206, 17, 65, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(206, 17, 65, 0.5),
                        0 0 20px rgba(206, 17, 65, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                raptorsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(206, 17, 65, 0.7); border-right: 2px solid rgba(206, 17, 65, 0.7); position: relative; background: linear-gradient(90deg, rgba(206,17,65,0.05) 0%, transparent 10%, transparent 90%, rgba(206,17,65,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #CE1141; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">Raptors</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(206, 17, 65, 0.7); position: relative; background: linear-gradient(90deg, rgba(206,17,65,0.05) 0%, transparent 10%, transparent 90%, rgba(206,17,65,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #CE1141; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">+190</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(206, 17, 65, 0.15); border: 1px solid rgba(206, 17, 65, 0.4); border-radius: 6px; padding: 6px 8px; color: #CE1141; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.2);">
                    </div>
                `;
                
                raptorsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(raptorsEntry);
                
                // 76ers
                const sixersEntry = document.createElement('div');
                sixersEntry.className = 'log-entry permanent-example';
                sixersEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #ED174C 0%, #D31342 50%, #B90F38 100%);
                    border: 3px solid #006BB6;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(237, 23, 76, 0.8),
                        inset 0 -1px 2px rgba(0, 107, 182, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(0, 107, 182, 0.5),
                        0 0 20px rgba(0, 107, 182, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                sixersEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(0, 107, 182, 0.7); border-right: 2px solid rgba(0, 107, 182, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,107,182,0.05) 0%, transparent 10%, transparent 90%, rgba(0,107,182,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #006BB6; text-shadow: 0 1px 2px rgba(237,23,76,0.5);">76ers</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(0, 107, 182, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,107,182,0.05) 0%, transparent 10%, transparent 90%, rgba(0,107,182,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #006BB6; text-shadow: 0 1px 2px rgba(237,23,76,0.5);">+165</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(0, 107, 182, 0.15); border: 1px solid rgba(0, 107, 182, 0.4); border-radius: 6px; padding: 6px 8px; color: #006BB6; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(237,23,76,0.3);">
                    </div>
                `;
                
                sixersEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(sixersEntry);
                
                // Magic
                const magicEntry = document.createElement('div');
                magicEntry.className = 'log-entry permanent-example';
                magicEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #C4CED4 0%, #B0BAC0 50%, #9CA6AC 100%);
                    border: 3px solid #0077C0;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(196, 206, 212, 0.8),
                        inset 0 -1px 2px rgba(0, 119, 192, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(0, 119, 192, 0.5),
                        0 0 20px rgba(0, 119, 192, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                magicEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(0, 119, 192, 0.7); border-right: 2px solid rgba(0, 119, 192, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,119,192,0.05) 0%, transparent 10%, transparent 90%, rgba(0,119,192,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #0077C0; text-shadow: 0 1px 2px rgba(196,206,212,0.5);">Magic</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(0, 119, 192, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,119,192,0.05) 0%, transparent 10%, transparent 90%, rgba(0,119,192,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #0077C0; text-shadow: 0 1px 2px rgba(196,206,212,0.5);">+195</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(0, 119, 192, 0.15); border: 1px solid rgba(0, 119, 192, 0.4); border-radius: 6px; padding: 6px 8px; color: #0077C0; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(196,206,212,0.3);">
                    </div>
                `;
                
                magicEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(magicEntry);
                
                // Heat
                const heatEntry = document.createElement('div');
                heatEntry.className = 'log-entry permanent-example';
                heatEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #E8E8E8 100%);
                    border: 3px solid #98002E;
                    outline: 4px solid rgba(249, 160, 27, 0.9);
                    outline-offset: -7px;
                    box-shadow: 
                        inset 0 1px 3px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(152, 0, 46, 0.3),
                        0 0 0 1px rgba(249, 160, 27, 0.3),
                        0 4px 12px rgba(152, 0, 46, 0.5),
                        0 0 20px rgba(152, 0, 46, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                heatEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(249, 160, 27, 0.7); border-right: 2px solid rgba(249, 160, 27, 0.7); position: relative; background: linear-gradient(90deg, rgba(249,160,27,0.05) 0%, transparent 10%, transparent 90%, rgba(249,160,27,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #98002E; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">Heat</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(249, 160, 27, 0.7); position: relative; background: linear-gradient(90deg, rgba(249,160,27,0.05) 0%, transparent 10%, transparent 90%, rgba(249,160,27,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #98002E; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">-130</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(152, 0, 46, 0.15); border: 1px solid rgba(152, 0, 46, 0.4); border-radius: 6px; padding: 6px 8px; color: #98002E; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.3);">
                    </div>
                `;
                
                heatEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(heatEntry);
                
                // Hawks
                const hawksEntry = document.createElement('div');
                hawksEntry.className = 'log-entry permanent-example';
                hawksEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #E8E8E8 100%);
                    border: 3px solid #E03A3E;
                    outline: 4px solid rgba(193, 211, 47, 0.9);
                    outline-offset: -7px;
                    box-shadow: 
                        inset 0 1px 3px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(224, 58, 62, 0.3),
                        0 0 0 1px rgba(193, 211, 47, 0.3),
                        0 4px 12px rgba(224, 58, 62, 0.5),
                        0 0 20px rgba(224, 58, 62, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                hawksEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(224, 58, 62, 0.7); border-right: 2px solid rgba(224, 58, 62, 0.7); position: relative; background: linear-gradient(90deg, rgba(224,58,62,0.05) 0%, transparent 10%, transparent 90%, rgba(224,58,62,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #E03A3E; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">Hawks</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(224, 58, 62, 0.7); position: relative; background: linear-gradient(90deg, rgba(224,58,62,0.05) 0%, transparent 10%, transparent 90%, rgba(224,58,62,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #E03A3E; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">+205</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(224, 58, 62, 0.15); border: 1px solid rgba(224, 58, 62, 0.4); border-radius: 6px; padding: 6px 8px; color: #E03A3E; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.3);">
                    </div>
                `;
                
                hawksEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(hawksEntry);
                
                // Hornets
                const hornetsEntry = document.createElement('div');
                hornetsEntry.className = 'log-entry permanent-example';
                hornetsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #00788C 0%, #006678 50%, #005464 100%);
                    border: 3px solid #1D1160;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(0, 120, 140, 0.8),
                        inset 0 -1px 2px rgba(29, 17, 96, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(29, 17, 96, 0.5),
                        0 0 20px rgba(29, 17, 96, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                hornetsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(29, 17, 96, 0.7); border-right: 2px solid rgba(29, 17, 96, 0.7); position: relative; background: linear-gradient(90deg, rgba(29,17,96,0.05) 0%, transparent 10%, transparent 90%, rgba(29,17,96,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #1D1160; text-shadow: 0 1px 2px rgba(0,120,140,0.5);">Hornets</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(29, 17, 96, 0.7); position: relative; background: linear-gradient(90deg, rgba(29,17,96,0.05) 0%, transparent 10%, transparent 90%, rgba(29,17,96,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #1D1160; text-shadow: 0 1px 2px rgba(0,120,140,0.5);">+215</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(29, 17, 96, 0.15); border: 1px solid rgba(29, 17, 96, 0.4); border-radius: 6px; padding: 6px 8px; color: #1D1160; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(0,120,140,0.3);">
                    </div>
                `;
                
                hornetsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(hornetsEntry);
                
                // Bulls
                const bullsEntry = document.createElement('div');
                bullsEntry.className = 'log-entry permanent-example';
                bullsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #1A1A1A 0%, #000000 50%, #0D0D0D 100%);
                    border: 3px solid #CE1141;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(50, 50, 50, 0.8),
                        inset 0 -1px 2px rgba(206, 17, 65, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(206, 17, 65, 0.5),
                        0 0 20px rgba(206, 17, 65, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                bullsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(206, 17, 65, 0.7); border-right: 2px solid rgba(206, 17, 65, 0.7); position: relative; background: linear-gradient(90deg, rgba(206,17,65,0.05) 0%, transparent 10%, transparent 90%, rgba(206,17,65,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #CE1141; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">Bulls</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(206, 17, 65, 0.7); position: relative; background: linear-gradient(90deg, rgba(206,17,65,0.05) 0%, transparent 10%, transparent 90%, rgba(206,17,65,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #CE1141; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">+180</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(206, 17, 65, 0.15); border: 1px solid rgba(206, 17, 65, 0.4); border-radius: 6px; padding: 6px 8px; color: #CE1141; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.2);">
                    </div>
                `;
                
                bullsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(bullsEntry);
                
                // Bucks
                const bucksEntry = document.createElement('div');
                bucksEntry.className = 'log-entry permanent-example';
                bucksEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #EEE1C6 0%, #DDD0B5 50%, #CCBFA4 100%);
                    border: 3px solid #00471B;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(238, 225, 198, 0.8),
                        inset 0 -1px 2px rgba(0, 71, 27, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(0, 71, 27, 0.5),
                        0 0 20px rgba(0, 71, 27, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                bucksEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(0, 71, 27, 0.7); border-right: 2px solid rgba(0, 71, 27, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,71,27,0.05) 0%, transparent 10%, transparent 90%, rgba(0,71,27,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #00471B; text-shadow: 0 1px 2px rgba(238,225,198,0.5);">Bucks</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(0, 71, 27, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,71,27,0.05) 0%, transparent 10%, transparent 90%, rgba(0,71,27,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #00471B; text-shadow: 0 1px 2px rgba(238,225,198,0.5);">-125</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(0, 71, 27, 0.15); border: 1px solid rgba(0, 71, 27, 0.4); border-radius: 6px; padding: 6px 8px; color: #00471B; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(238,225,198,0.3);">
                    </div>
                `;
                
                bucksEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(bucksEntry);
                
                // Nets
                const netsEntry = document.createElement('div');
                netsEntry.className = 'log-entry permanent-example';
                netsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #E8E8E8 100%);
                    border: 3px solid #000000;
                    outline: 2px solid rgba(150, 150, 150, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(0, 0, 0, 0.3),
                        0 0 0 1px rgba(150, 150, 150, 0.3),
                        0 4px 12px rgba(0, 0, 0, 0.5),
                        0 0 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                netsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(0, 0, 0, 0.7); border-right: 2px solid rgba(0, 0, 0, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,0,0,0.05) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #000000; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">Nets</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(0, 0, 0, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,0,0,0.05) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #000000; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">+220</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(0, 0, 0, 0.15); border: 1px solid rgba(0, 0, 0, 0.4); border-radius: 6px; padding: 6px 8px; color: #000000; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.3);">
                    </div>
                `;
                
                netsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(netsEntry);
                
                // Wizards
                const wizardsEntry = document.createElement('div');
                wizardsEntry.className = 'log-entry permanent-example';
                wizardsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #E8E8E8 100%);
                    border: 3px solid #002B5C;
                    outline: 4px solid rgba(227, 24, 55, 0.9);
                    outline-offset: -7px;
                    box-shadow: 
                        inset 0 1px 3px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(0, 43, 92, 0.3),
                        0 0 0 1px rgba(227, 24, 55, 0.3),
                        0 4px 12px rgba(0, 43, 92, 0.5),
                        0 0 20px rgba(0, 43, 92, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                wizardsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(227, 24, 55, 0.7); border-right: 2px solid rgba(227, 24, 55, 0.7); position: relative; background: linear-gradient(90deg, rgba(227,24,55,0.05) 0%, transparent 10%, transparent 90%, rgba(227,24,55,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #002B5C; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">Wizards</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(227, 24, 55, 0.7); position: relative; background: linear-gradient(90deg, rgba(227,24,55,0.05) 0%, transparent 10%, transparent 90%, rgba(227,24,55,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #002B5C; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">+230</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(0, 43, 92, 0.15); border: 1px solid rgba(0, 43, 92, 0.4); border-radius: 6px; padding: 6px 8px; color: #002B5C; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.3);">
                    </div>
                `;
                
                wizardsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(wizardsEntry);
                
                // Pacers
                const pacersEntry = document.createElement('div');
                pacersEntry.className = 'log-entry permanent-example';
                pacersEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FDBB30 0%, #E0A82E 50%, #C4952A 100%);
                    border: 3px solid #002D62;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(253, 187, 48, 0.8),
                        inset 0 -1px 2px rgba(0, 45, 98, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(0, 45, 98, 0.5),
                        0 0 20px rgba(0, 45, 98, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                pacersEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(0, 45, 98, 0.7); border-right: 2px solid rgba(0, 45, 98, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,45,98,0.05) 0%, transparent 10%, transparent 90%, rgba(0,45,98,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #002D62; text-shadow: 0 1px 2px rgba(253,187,48,0.5);">Pacers</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(0, 45, 98, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,45,98,0.05) 0%, transparent 10%, transparent 90%, rgba(0,45,98,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #002D62; text-shadow: 0 1px 2px rgba(253,187,48,0.5);">+150</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(0, 45, 98, 0.15); border: 1px solid rgba(0, 45, 98, 0.4); border-radius: 6px; padding: 6px 8px; color: #002D62; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(253,187,48,0.3);">
                    </div>
                `;
                
                pacersEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(pacersEntry);
                
                // Thunder
                const thunderEntry = document.createElement('div');
                thunderEntry.className = 'log-entry permanent-example';
                thunderEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #EF3B24 0%, #D63520 50%, #BD2F1C 100%);
                    border: 3px solid #007AC1;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(239, 59, 36, 0.8),
                        inset 0 -1px 2px rgba(0, 122, 193, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(0, 122, 193, 0.5),
                        0 0 20px rgba(0, 122, 193, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                thunderEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(0, 122, 193, 0.7); border-right: 2px solid rgba(0, 122, 193, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,122,193,0.05) 0%, transparent 10%, transparent 90%, rgba(0,122,193,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #007AC1; text-shadow: 0 1px 2px rgba(239,59,36,0.5);">Thunder</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(0, 122, 193, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,122,193,0.05) 0%, transparent 10%, transparent 90%, rgba(0,122,193,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #007AC1; text-shadow: 0 1px 2px rgba(239,59,36,0.5);">-135</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(0, 122, 193, 0.15); border: 1px solid rgba(0, 122, 193, 0.4); border-radius: 6px; padding: 6px 8px; color: #007AC1; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(239,59,36,0.3);">
                    </div>
                `;
                
                thunderEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(thunderEntry);
                
                // Spurs
                const spursEntry = document.createElement('div');
                spursEntry.className = 'log-entry permanent-example';
                spursEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #C4CED4 0%, #B0BAC0 50%, #9CA6AC 100%);
                    border: 5px solid #3A3A3A;
                    outline: 2px solid rgba(150, 150, 150, 0.8);
                    outline-offset: -7px;
                    box-shadow: 
                        inset 0 1px 3px rgba(196, 206, 212, 0.8),
                        inset 0 -1px 2px rgba(58, 58, 58, 0.3),
                        0 0 0 1px rgba(150, 150, 150, 0.3),
                        0 4px 12px rgba(58, 58, 58, 0.5),
                        0 0 20px rgba(58, 58, 58, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                spursEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(58, 58, 58, 0.7); border-right: 2px solid rgba(58, 58, 58, 0.7); position: relative; background: linear-gradient(90deg, rgba(58,58,58,0.05) 0%, transparent 10%, transparent 90%, rgba(58,58,58,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #3A3A3A; text-shadow: 0 1px 2px rgba(196,206,212,0.5);">Spurs</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(58, 58, 58, 0.7); position: relative; background: linear-gradient(90deg, rgba(58,58,58,0.05) 0%, transparent 10%, transparent 90%, rgba(58,58,58,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #3A3A3A; text-shadow: 0 1px 2px rgba(196,206,212,0.5);">+200</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(58, 58, 58, 0.15); border: 1px solid rgba(58, 58, 58, 0.4); border-radius: 6px; padding: 6px 8px; color: #3A3A3A; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(196,206,212,0.3);">
                    </div>
                `;
                
                spursEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(spursEntry);
                
                // Nuggets
                const nuggetsEntry = document.createElement('div');
                nuggetsEntry.className = 'log-entry permanent-example';
                nuggetsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FEC524 0%, #E5B221 50%, #CC9F1E 100%);
                    border: 3px solid #0E2240;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(254, 197, 36, 0.8),
                        inset 0 -1px 2px rgba(14, 34, 64, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(14, 34, 64, 0.5),
                        0 0 20px rgba(14, 34, 64, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                nuggetsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(14, 34, 64, 0.7); border-right: 2px solid rgba(14, 34, 64, 0.7); position: relative; background: linear-gradient(90deg, rgba(14,34,64,0.05) 0%, transparent 10%, transparent 90%, rgba(14,34,64,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #0E2240; text-shadow: 0 1px 2px rgba(254,197,36,0.5);">Nuggets</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(14, 34, 64, 0.7); position: relative; background: linear-gradient(90deg, rgba(14,34,64,0.05) 0%, transparent 10%, transparent 90%, rgba(14,34,64,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #0E2240; text-shadow: 0 1px 2px rgba(254,197,36,0.5);">-120</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(14, 34, 64, 0.15); border: 1px solid rgba(14, 34, 64, 0.4); border-radius: 6px; padding: 6px 8px; color: #0E2240; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(254,197,36,0.3);">
                    </div>
                `;
                
                nuggetsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(nuggetsEntry);
                
                // Rockets
                const rocketsEntry = document.createElement('div');
                rocketsEntry.className = 'log-entry permanent-example';
                rocketsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #1A1A1A 0%, #000000 50%, #0D0D0D 100%);
                    border: 3px solid #CE1141;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(50, 50, 50, 0.8),
                        inset 0 -1px 2px rgba(206, 17, 65, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(206, 17, 65, 0.5),
                        0 0 20px rgba(206, 17, 65, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                rocketsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(206, 17, 65, 0.7); border-right: 2px solid rgba(206, 17, 65, 0.7); position: relative; background: linear-gradient(90deg, rgba(206,17,65,0.05) 0%, transparent 10%, transparent 90%, rgba(206,17,65,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #CE1141; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">Rockets</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(206, 17, 65, 0.7); position: relative; background: linear-gradient(90deg, rgba(206,17,65,0.05) 0%, transparent 10%, transparent 90%, rgba(206,17,65,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #CE1141; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">+175</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(206, 17, 65, 0.15); border: 1px solid rgba(206, 17, 65, 0.4); border-radius: 6px; padding: 6px 8px; color: #CE1141; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.2);">
                    </div>
                `;
                rocketsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(rocketsEntry);
                
                // Wolves
                const wolvesEntry = document.createElement('div');
                wolvesEntry.className = 'log-entry permanent-example';
                wolvesEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #236192 0%, #1D5280 50%, #17436E 100%);
                    border: 3px solid #0C2340;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(35, 97, 146, 0.8),
                        inset 0 -1px 2px rgba(12, 35, 64, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(12, 35, 64, 0.5),
                        0 0 20px rgba(12, 35, 64, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                wolvesEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(12, 35, 64, 0.7); border-right: 2px solid rgba(12, 35, 64, 0.7); position: relative; background: linear-gradient(90deg, rgba(12,35,64,0.05) 0%, transparent 10%, transparent 90%, rgba(12,35,64,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #0C2340; text-shadow: 0 1px 2px rgba(35,97,146,0.5);">Wolves</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(12, 35, 64, 0.7); position: relative; background: linear-gradient(90deg, rgba(12,35,64,0.05) 0%, transparent 10%, transparent 90%, rgba(12,35,64,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #0C2340; text-shadow: 0 1px 2px rgba(35,97,146,0.5);">+160</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(12, 35, 64, 0.15); border: 1px solid rgba(12, 35, 64, 0.4); border-radius: 6px; padding: 6px 8px; color: #0C2340; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(35,97,146,0.3);">
                    </div>
                `;
                wolvesEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(wolvesEntry);
                
                // Suns
                const sunsEntry = document.createElement('div');
                sunsEntry.className = 'log-entry permanent-example';
                sunsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #E56020 0%, #CF561D 50%, #B94C1A 100%);
                    border: 3px solid #1D1160;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(229, 96, 32, 0.8),
                        inset 0 -1px 2px rgba(29, 17, 96, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(29, 17, 96, 0.5),
                        0 0 20px rgba(29, 17, 96, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                sunsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(29, 17, 96, 0.7); border-right: 2px solid rgba(29, 17, 96, 0.7); position: relative; background: linear-gradient(90deg, rgba(29,17,96,0.05) 0%, transparent 10%, transparent 90%, rgba(29,17,96,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #1D1160; text-shadow: 0 1px 2px rgba(229,96,32,0.5);">Suns</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(29, 17, 96, 0.7); position: relative; background: linear-gradient(90deg, rgba(29,17,96,0.05) 0%, transparent 10%, transparent 90%, rgba(29,17,96,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #1D1160; text-shadow: 0 1px 2px rgba(229,96,32,0.5);">+145</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(29, 17, 96, 0.15); border: 1px solid rgba(29, 17, 96, 0.4); border-radius: 6px; padding: 6px 8px; color: #1D1160; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(229,96,32,0.3);">
                    </div>
                `;
                sunsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(sunsEntry);
                
                // Lakers
                const lakersEntry = document.createElement('div');
                lakersEntry.className = 'log-entry permanent-example';
                lakersEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FDB927 0%, #E5A722 50%, #CC951E 100%);
                    border: 3px solid #552583;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(253, 185, 39, 0.8),
                        inset 0 -1px 2px rgba(85, 37, 131, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(85, 37, 131, 0.5),
                        0 0 20px rgba(85, 37, 131, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                
                lakersEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(85, 37, 131, 0.7); border-right: 2px solid rgba(85, 37, 131, 0.7); position: relative; background: linear-gradient(90deg, rgba(85,37,131,0.05) 0%, transparent 10%, transparent 90%, rgba(85,37,131,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #552583; text-shadow: 0 1px 2px rgba(253,185,39,0.5);">Lakers</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(85, 37, 131, 0.7); position: relative; background: linear-gradient(90deg, rgba(85,37,131,0.05) 0%, transparent 10%, transparent 90%, rgba(85,37,131,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #552583; text-shadow: 0 1px 2px rgba(253,185,39,0.5);">-150</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(85, 37, 131, 0.15); border: 1px solid rgba(85, 37, 131, 0.4); border-radius: 6px; padding: 6px 8px; color: #552583; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(253,185,39,0.3);">
                    </div>
                `;
                
                lakersEntry.style.display = 'none'; // HIDDEN - only for cloning
                lakersEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(lakersEntry);
                
                // Warriors
                const warriorsEntry = document.createElement('div');
                warriorsEntry.className = 'log-entry permanent-example';
                warriorsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FFC72C 0%, #E5B328 50%, #CC9F24 100%);
                    border: 3px solid #1D428A;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(255, 199, 44, 0.8),
                        inset 0 -1px 2px rgba(29, 66, 138, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(29, 66, 138, 0.5),
                        0 0 20px rgba(29, 66, 138, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                warriorsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(29, 66, 138, 0.7); border-right: 2px solid rgba(29, 66, 138, 0.7); position: relative; background: linear-gradient(90deg, rgba(29,66,138,0.05) 0%, transparent 10%, transparent 90%, rgba(29,66,138,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #1D428A; text-shadow: 0 1px 2px rgba(255,199,44,0.5);">Warriors</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(29, 66, 138, 0.7); position: relative; background: linear-gradient(90deg, rgba(29,66,138,0.05) 0%, transparent 10%, transparent 90%, rgba(29,66,138,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #1D428A; text-shadow: 0 1px 2px rgba(255,199,44,0.5);">-110</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(29, 66, 138, 0.15); border: 1px solid rgba(29, 66, 138, 0.4); border-radius: 6px; padding: 6px 8px; color: #1D428A; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,199,44,0.3);">
                    </div>
                `;
                warriorsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(warriorsEntry);
                
                // Blazers
                const blazersEntry = document.createElement('div');
                blazersEntry.className = 'log-entry permanent-example';
                blazersEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #1A1A1A 0%, #000000 50%, #0D0D0D 100%);
                    border: 3px solid #E03A3E;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(50, 50, 50, 0.8),
                        inset 0 -1px 2px rgba(224, 58, 62, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(224, 58, 62, 0.5),
                        0 0 20px rgba(224, 58, 62, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                blazersEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(224, 58, 62, 0.7); border-right: 2px solid rgba(224, 58, 62, 0.7); position: relative; background: linear-gradient(90deg, rgba(224,58,62,0.05) 0%, transparent 10%, transparent 90%, rgba(224,58,62,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #E03A3E; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">Blazers</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(224, 58, 62, 0.7); position: relative; background: linear-gradient(90deg, rgba(224,58,62,0.05) 0%, transparent 10%, transparent 90%, rgba(224,58,62,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #E03A3E; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">+195</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(224, 58, 62, 0.15); border: 1px solid rgba(224, 58, 62, 0.4); border-radius: 6px; padding: 6px 8px; color: #E03A3E; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.2);">
                    </div>
                `;
                blazersEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(blazersEntry);
                
                // Clippers
                const clippersEntry = document.createElement('div');
                clippersEntry.className = 'log-entry permanent-example';
                clippersEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #1D428A 0%, #1A3C7C 50%, #17366E 100%);
                    border: 3px solid #C8102E;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(29, 66, 138, 0.8),
                        inset 0 -1px 2px rgba(200, 16, 46, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(200, 16, 46, 0.5),
                        0 0 20px rgba(200, 16, 46, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                clippersEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Los_Angeles_Clippers_%282024%29.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(200, 16, 46, 0.7); border-right: 2px solid rgba(200, 16, 46, 0.7); position: relative; background: linear-gradient(90deg, rgba(200,16,46,0.05) 0%, transparent 10%, transparent 90%, rgba(200,16,46,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #C8102E; text-shadow: 0 1px 2px rgba(29,66,138,0.5);">Clippers</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(200, 16, 46, 0.7); position: relative; background: linear-gradient(90deg, rgba(200,16,46,0.05) 0%, transparent 10%, transparent 90%, rgba(200,16,46,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #C8102E; text-shadow: 0 1px 2px rgba(29,66,138,0.5);">+155</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(200, 16, 46, 0.15); border: 1px solid rgba(200, 16, 46, 0.4); border-radius: 6px; padding: 6px 8px; color: #C8102E; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(29,66,138,0.3);">
                    </div>
                `;
                clippersEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(clippersEntry);
                
                // Grizzlies
                const grizzliesEntry = document.createElement('div');
                grizzliesEntry.className = 'log-entry permanent-example';
                grizzliesEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #12173F 0%, #0F1436 50%, #0C112D 100%);
                    border: 3px solid #5D76A9;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(18, 23, 63, 0.8),
                        inset 0 -1px 2px rgba(93, 118, 169, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(93, 118, 169, 0.5),
                        0 0 20px rgba(93, 118, 169, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                grizzliesEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(93, 118, 169, 0.7); border-right: 2px solid rgba(93, 118, 169, 0.7); position: relative; background: linear-gradient(90deg, rgba(93,118,169,0.05) 0%, transparent 10%, transparent 90%, rgba(93,118,169,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #5D76A9; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">Grizzlies</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(93, 118, 169, 0.7); position: relative; background: linear-gradient(90deg, rgba(93,118,169,0.05) 0%, transparent 10%, transparent 90%, rgba(93,118,169,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #5D76A9; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">+175</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(93, 118, 169, 0.15); border: 1px solid rgba(93, 118, 169, 0.4); border-radius: 6px; padding: 6px 8px; color: #5D76A9; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.2);">
                    </div>
                `;
                grizzliesEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(grizzliesEntry);
                
                // Mavericks
                const mavsEntry = document.createElement('div');
                mavsEntry.className = 'log-entry permanent-example';
                mavsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #002B5E 0%, #002653 50%, #002148 100%);
                    border: 3px solid #00538C;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(0, 43, 94, 0.8),
                        inset 0 -1px 2px rgba(0, 83, 140, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(0, 83, 140, 0.5),
                        0 0 20px rgba(0, 83, 140, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                mavsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(0, 83, 140, 0.7); border-right: 2px solid rgba(0, 83, 140, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,83,140,0.05) 0%, transparent 10%, transparent 90%, rgba(0,83,140,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #FFFFFF; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Mavericks</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(0, 83, 140, 0.7); position: relative; background: linear-gradient(90deg, rgba(0,83,140,0.05) 0%, transparent 10%, transparent 90%, rgba(0,83,140,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #FFFFFF; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">-115</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(0, 83, 140, 0.15); border: 1px solid rgba(0, 83, 140, 0.4); border-radius: 6px; padding: 6px 8px; color: #FFFFFF; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(0,0,0,0.3);">
                    </div>
                `;
                mavsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(mavsEntry);
                
                // Jazz
                const jazzEntry = document.createElement('div');
                jazzEntry.className = 'log-entry permanent-example';
                jazzEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #E8E8E8 100%);
                    border: 3px solid #5D2E8C;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(93, 46, 140, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(93, 46, 140, 0.5),
                        0 0 20px rgba(93, 46, 140, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                jazzEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(93, 46, 140, 0.7); border-right: 2px solid rgba(93, 46, 140, 0.7); position: relative; background: linear-gradient(90deg, rgba(93,46,140,0.05) 0%, transparent 10%, transparent 90%, rgba(93,46,140,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #5D2E8C; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">Jazz</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(93, 46, 140, 0.7); position: relative; background: linear-gradient(90deg, rgba(93,46,140,0.05) 0%, transparent 10%, transparent 90%, rgba(93,46,140,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #5D2E8C; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">+210</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(93, 46, 140, 0.15); border: 1px solid rgba(93, 46, 140, 0.4); border-radius: 6px; padding: 6px 8px; color: #5D2E8C; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(255,255,255,0.3);">
                    </div>
                `;
                jazzEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(jazzEntry);
                
                // Pelicans
                const pelicansEntry = document.createElement('div');
                pelicansEntry.className = 'log-entry permanent-example';
                pelicansEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #C8102E 0%, #B30E29 50%, #9E0C24 100%);
                    border: 3px solid #0C2340;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(200, 16, 46, 0.8),
                        inset 0 -1px 2px rgba(12, 35, 64, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(12, 35, 64, 0.5),
                        0 0 20px rgba(12, 35, 64, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                pelicansEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(12, 35, 64, 0.7); border-right: 2px solid rgba(12, 35, 64, 0.7); position: relative; background: linear-gradient(90deg, rgba(12,35,64,0.05) 0%, transparent 10%, transparent 90%, rgba(12,35,64,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #0C2340; text-shadow: 0 1px 2px rgba(200,16,46,0.5);">Pelicans</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(12, 35, 64, 0.7); position: relative; background: linear-gradient(90deg, rgba(12,35,64,0.05) 0%, transparent 10%, transparent 90%, rgba(12,35,64,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #0C2340; text-shadow: 0 1px 2px rgba(200,16,46,0.5);">+185</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(12, 35, 64, 0.15); border: 1px solid rgba(12, 35, 64, 0.4); border-radius: 6px; padding: 6px 8px; color: #0C2340; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(200,16,46,0.3);">
                    </div>
                `;
                pelicansEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(pelicansEntry);
                
                // Kings
                const kingsEntry = document.createElement('div');
                kingsEntry.className = 'log-entry permanent-example';
                kingsEntry.style.cssText = `
                    display: grid;
                    grid-template-columns: 50px 90px 65px 80px;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #63727A 0%, #576168 50%, #4B5156 100%);
                    border: 3px solid #5A2D81;
                    outline: 2px solid rgba(200, 200, 200, 0.8);
                    outline-offset: -5px;
                    box-shadow: 
                        inset 0 1px 3px rgba(99, 114, 122, 0.8),
                        inset 0 -1px 2px rgba(90, 45, 129, 0.3),
                        0 0 0 1px rgba(200, 200, 200, 0.3),
                        0 4px 12px rgba(90, 45, 129, 0.5),
                        0 0 20px rgba(90, 45, 129, 0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    opacity: 0.85;
                    position: relative;
                `;
                kingsEntry.innerHTML = `
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%); pointer-events: none;"></div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 8px; height: 100%; position: relative;">
                        <img src="https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg" style="width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px 8px; height: 100%; border-left: 2px solid rgba(90, 45, 129, 0.7); border-right: 2px solid rgba(90, 45, 129, 0.7); position: relative; background: linear-gradient(90deg, rgba(90,45,129,0.05) 0%, transparent 10%, transparent 90%, rgba(90,45,129,0.05) 100%); box-shadow: inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #5A2D81; text-shadow: 0 1px 2px rgba(99,114,122,0.5);">Kings</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; border-right: 2px solid rgba(90, 45, 129, 0.7); position: relative; background: linear-gradient(90deg, rgba(90,45,129,0.05) 0%, transparent 10%, transparent 90%, rgba(90,45,129,0.05) 100%); box-shadow: inset -1px 0 0 rgba(255,255,255,0.2);">
                        <span style="font-size: 13px; font-weight: 700; color: #5A2D81; text-shadow: 0 1px 2px rgba(99,114,122,0.5);">+170</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; padding: 12px 6px; height: 100%; position: relative;">
                        <input type="text" placeholder="$00.00" disabled style="background: rgba(90, 45, 129, 0.15); border: 1px solid rgba(90, 45, 129, 0.4); border-radius: 6px; padding: 6px 8px; color: #5A2D81; font-size: 13px; font-weight: 700; text-align: center; outline: none; width: 65px; cursor: not-allowed; text-shadow: 0 1px 1px rgba(99,114,122,0.3);">
                    </div>
                `;
                kingsEntry.style.display = "none"; // HIDDEN - only for cloning
                logContent.appendChild(kingsEntry);



                // MLB Diamondbacks
                const diamondbacksMLBEntry = document.createElement('div');
                diamondbacksMLBEntry.className = 'log-entry mlb-permanent-example';
                diamondbacksMLBEntry.setAttribute('data-team-name', 'D-Backs');
                diamondbacksMLBEntry.setAttribute('data-confidence', '0');
                diamondbacksMLBEntry.setAttribute('data-odds', '+100');
                diamondbacksMLBEntry.setAttribute('data-bet-type', 'PLAY');
                diamondbacksMLBEntry.style.cssText = `
                    display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;
                    background:#A71930;
                    border:3px solid #E3D4AD;
                    outline:2px solid #E3D4AD;
                    outline-offset:-5px;
                    box-shadow:
                        inset 0 1px 3px rgba(255,100,100,0.6),
                        inset 0 -1px 2px rgba(167,25,48,0.3),
                        0 0 0 1px rgba(227,212,173,0.3),
                        0 4px 12px rgba(200,30,50,0.5),
                        0 0 20px rgba(200,30,50,0.3), 0 0 15px rgba(255,255,255,0.6);
                    border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;
                `;
                diamondbacksMLBEntry.innerHTML = `
                    <div style="position:absolute;top:0;left:0;right:0;height:40%;background:linear-gradient(180deg,rgba(200,50,50,0.4) 0%,rgba(255,255,255,0) 100%);pointer-events:none;"></div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/ari.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #E3D4AD;border-right:2px solid #E3D4AD;position:relative;background:linear-gradient(90deg,rgba(227,212,173,0.05) 0%,transparent 10%,transparent 90%,rgba(227,212,173,0.05) 100%);box-shadow:inset 1px 0 0 rgba(255,255,255,0.15),inset -1px 0 0 rgba(255,255,255,0.15);">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.8);">D-Backs</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #E3D4AD;position:relative;background:linear-gradient(90deg,rgba(227,212,173,0.05) 0%,transparent 10%,transparent 90%,rgba(227,212,173,0.05) 100%);box-shadow:inset -1px 0 0 rgba(255,255,255,0.15);">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.8);">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.6);border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                diamondbacksMLBEntry.style.display = 'none';
                logContent.appendChild(diamondbacksMLBEntry);

                // MLB Braves
                const bravesMLBEntry = document.createElement('div');
                bravesMLBEntry.className = 'log-entry mlb-permanent-example';
                bravesMLBEntry.setAttribute('data-team-name', 'Braves');
                bravesMLBEntry.setAttribute('data-confidence', '0');
                bravesMLBEntry.setAttribute('data-odds', '+100');
                bravesMLBEntry.setAttribute('data-bet-type', 'PLAY');
                bravesMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#CE1141;border:3px solid #13274F;outline:2px solid #13274F;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                bravesMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/atl.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #13274F;border-right:2px solid #13274F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #13274F;">Braves</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #13274F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #13274F;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#13274F;border:1px solid #13274F;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                bravesMLBEntry.style.display = 'none';
                logContent.appendChild(bravesMLBEntry);

                // MLB Orioles
                const oriolesMLBEntry = document.createElement('div');
                oriolesMLBEntry.className = 'log-entry mlb-permanent-example';
                oriolesMLBEntry.setAttribute('data-team-name', 'Orioles');
                oriolesMLBEntry.setAttribute('data-confidence', '0');
                oriolesMLBEntry.setAttribute('data-odds', '+100');
                oriolesMLBEntry.setAttribute('data-bet-type', 'PLAY');
                oriolesMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#DF4601;border:3px solid #000000;outline:2px solid #000000;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                oriolesMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/bal.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #000000;border-right:2px solid #000000;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #000000;">Orioles</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #000000;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #000000;">+100</span>
                    </div>

                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#000000;border:1px solid #000000;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                oriolesMLBEntry.style.display = 'none';
                logContent.appendChild(oriolesMLBEntry);

                // MLB Red Sox
                const red_soxMLBEntry = document.createElement('div');
                red_soxMLBEntry.className = 'log-entry mlb-permanent-example';
                red_soxMLBEntry.setAttribute('data-team-name', 'Red Sox');
                red_soxMLBEntry.setAttribute('data-confidence', '0');
                red_soxMLBEntry.setAttribute('data-odds', '+100');
                red_soxMLBEntry.setAttribute('data-bet-type', 'PLAY');
                red_soxMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#BD3039;border:3px solid #0C2340;outline:2px solid #0C2340;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                red_soxMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/bos.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #0C2340;border-right:2px solid #0C2340;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #0C2340;">Red Sox</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #0C2340;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #0C2340;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#0C2340;border:1px solid #0C2340;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                red_soxMLBEntry.style.display = 'none';
                logContent.appendChild(red_soxMLBEntry);

                // MLB Cubs
                const cubsMLBEntry = document.createElement('div');
                cubsMLBEntry.className = 'log-entry mlb-permanent-example';
                cubsMLBEntry.setAttribute('data-team-name', 'Cubs');
                cubsMLBEntry.setAttribute('data-confidence', '0');
                cubsMLBEntry.setAttribute('data-odds', '+100');
                cubsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                cubsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#0E3386;border:3px solid #CC3433;outline:2px solid #CC3433;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                cubsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/chc.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #CC3433;border-right:2px solid #CC3433;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #CC3433;">Cubs</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #CC3433;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #CC3433;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#CC3433;border:1px solid #CC3433;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                cubsMLBEntry.style.display = 'none';
                logContent.appendChild(cubsMLBEntry);

                // MLB White Sox
                const white_soxMLBEntry = document.createElement('div');
                white_soxMLBEntry.className = 'log-entry mlb-permanent-example';
                white_soxMLBEntry.setAttribute('data-team-name', 'White Sox');
                white_soxMLBEntry.setAttribute('data-confidence', '0');
                white_soxMLBEntry.setAttribute('data-odds', '+100');
                white_soxMLBEntry.setAttribute('data-bet-type', 'PLAY');
                white_soxMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#27251F;border:3px solid #C4CED4;outline:2px solid #C4CED4;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                white_soxMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/chw.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #C4CED4;border-right:2px solid #C4CED4;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #C4CED4;">White Sox</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #C4CED4;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #C4CED4;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#C4CED4;border:1px solid #C4CED4;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                white_soxMLBEntry.style.display = 'none';
                logContent.appendChild(white_soxMLBEntry);

                // MLB Reds
                const redsMLBEntry = document.createElement('div');
                redsMLBEntry.className = 'log-entry mlb-permanent-example';
                redsMLBEntry.setAttribute('data-team-name', 'Reds');
                redsMLBEntry.setAttribute('data-confidence', '0');
                redsMLBEntry.setAttribute('data-odds', '+100');
                redsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                redsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#C6011F;border:3px solid #000000;outline:2px solid #000000;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                redsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/cin.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #000000;border-right:2px solid #000000;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #000000;">Reds</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #000000;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #000000;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#000000;border:1px solid #000000;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                redsMLBEntry.style.display = 'none';
                logContent.appendChild(redsMLBEntry);

                // MLB Guardians
                const guardiansMLBEntry = document.createElement('div');
                guardiansMLBEntry.className = 'log-entry mlb-permanent-example';
                guardiansMLBEntry.setAttribute('data-team-name', 'Guardians');
                guardiansMLBEntry.setAttribute('data-confidence', '0');
                guardiansMLBEntry.setAttribute('data-odds', '+100');
                guardiansMLBEntry.setAttribute('data-bet-type', 'PLAY');
                guardiansMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#00385D;border:3px solid #CC0000;outline:2px solid #CC0000;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                guardiansMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/cle.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #CC0000;border-right:2px solid #CC0000;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #CC0000;">Guardians</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #CC0000;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #CC0000;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#CC0000;border:1px solid #CC0000;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                guardiansMLBEntry.style.display = 'none';
                logContent.appendChild(guardiansMLBEntry);

                // MLB Rockies
                const rockiesMLBEntry = document.createElement('div');
                rockiesMLBEntry.className = 'log-entry mlb-permanent-example';
                rockiesMLBEntry.setAttribute('data-team-name', 'Rockies');
                rockiesMLBEntry.setAttribute('data-confidence', '0');
                rockiesMLBEntry.setAttribute('data-odds', '+100');
                rockiesMLBEntry.setAttribute('data-bet-type', 'PLAY');
                rockiesMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#33006F;border:3px solid #C4CED4;outline:2px solid #C4CED4;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                rockiesMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/col.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #C4CED4;border-right:2px solid #C4CED4;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #C4CED4;">Rockies</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #C4CED4;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #C4CED4;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#C4CED4;border:1px solid #C4CED4;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                rockiesMLBEntry.style.display = 'none';
                logContent.appendChild(rockiesMLBEntry);

                // MLB Tigers
                const tigersMLBEntry = document.createElement('div');
                tigersMLBEntry.className = 'log-entry mlb-permanent-example';
                tigersMLBEntry.setAttribute('data-team-name', 'Tigers');
                tigersMLBEntry.setAttribute('data-confidence', '0');
                tigersMLBEntry.setAttribute('data-odds', '+100');
                tigersMLBEntry.setAttribute('data-bet-type', 'PLAY');
                tigersMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#0C2340;border:3px solid #FA4616;outline:2px solid #FA4616;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                tigersMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/det.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #FA4616;border-right:2px solid #FA4616;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FA4616;">Tigers</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #FA4616;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FA4616;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#FA4616;border:1px solid #FA4616;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                tigersMLBEntry.style.display = 'none';
                logContent.appendChild(tigersMLBEntry);

                // MLB Astros
                const astrosMLBEntry = document.createElement('div');
                astrosMLBEntry.className = 'log-entry mlb-permanent-example';
                astrosMLBEntry.setAttribute('data-team-name', 'Astros');
                astrosMLBEntry.setAttribute('data-confidence', '0');
                astrosMLBEntry.setAttribute('data-odds', '+100');
                astrosMLBEntry.setAttribute('data-bet-type', 'PLAY');
                astrosMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#002D62;border:3px solid #EB6E1F;outline:2px solid #EB6E1F;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                astrosMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/hou.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #EB6E1F;border-right:2px solid #EB6E1F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #EB6E1F;">Astros</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #EB6E1F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #EB6E1F;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#EB6E1F;border:1px solid #EB6E1F;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                astrosMLBEntry.style.display = 'none';
                logContent.appendChild(astrosMLBEntry);

                // MLB Royals
                const royalsMLBEntry = document.createElement('div');
                royalsMLBEntry.className = 'log-entry mlb-permanent-example';
                royalsMLBEntry.setAttribute('data-team-name', 'Royals');
                royalsMLBEntry.setAttribute('data-confidence', '0');
                royalsMLBEntry.setAttribute('data-odds', '+100');
                royalsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                royalsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#004687;border:3px solid #BD9B60;outline:2px solid #BD9B60;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                royalsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/kc.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #BD9B60;border-right:2px solid #BD9B60;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #BD9B60;">Royals</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #BD9B60;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #BD9B60;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#BD9B60;border:1px solid #BD9B60;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                royalsMLBEntry.style.display = 'none';
                logContent.appendChild(royalsMLBEntry);

                // MLB Angels
                const angelsMLBEntry = document.createElement('div');
                angelsMLBEntry.className = 'log-entry mlb-permanent-example';
                angelsMLBEntry.setAttribute('data-team-name', 'Angels');
                angelsMLBEntry.setAttribute('data-confidence', '0');
                angelsMLBEntry.setAttribute('data-odds', '+100');
                angelsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                angelsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#BA0021;border:3px solid #003263;outline:2px solid #003263;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                angelsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/laa.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #003263;border-right:2px solid #003263;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #003263;">Angels</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #003263;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #003263;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#003263;border:1px solid #003263;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                angelsMLBEntry.style.display = 'none';
                logContent.appendChild(angelsMLBEntry);

                // MLB Dodgers
                const dodgersMLBEntry = document.createElement('div');
                dodgersMLBEntry.className = 'log-entry mlb-permanent-example';
                dodgersMLBEntry.setAttribute('data-team-name', 'Dodgers');
                dodgersMLBEntry.setAttribute('data-confidence', '0');
                dodgersMLBEntry.setAttribute('data-odds', '+100');
                dodgersMLBEntry.setAttribute('data-bet-type', 'PLAY');
                dodgersMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#005A9C;border:3px solid #EF3E42;outline:2px solid #EF3E42;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                dodgersMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/lad.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #EF3E42;border-right:2px solid #EF3E42;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #EF3E42;">Dodgers</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #EF3E42;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #EF3E42;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#EF3E42;border:1px solid #EF3E42;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                dodgersMLBEntry.style.display = 'none';
                logContent.appendChild(dodgersMLBEntry);

                // MLB Marlins
                const marlinsMLBEntry = document.createElement('div');
                marlinsMLBEntry.className = 'log-entry mlb-permanent-example';
                marlinsMLBEntry.setAttribute('data-team-name', 'Marlins');
                marlinsMLBEntry.setAttribute('data-confidence', '0');
                marlinsMLBEntry.setAttribute('data-odds', '+100');
                marlinsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                marlinsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#00A3E0;border:3px solid #EF3340;outline:2px solid #EF3340;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                marlinsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/mia.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #EF3340;border-right:2px solid #EF3340;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #EF3340;">Marlins</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #EF3340;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #EF3340;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#EF3340;border:1px solid #EF3340;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                marlinsMLBEntry.style.display = 'none';
                logContent.appendChild(marlinsMLBEntry);

                // MLB Brewers
                const brewersMLBEntry = document.createElement('div');
                brewersMLBEntry.className = 'log-entry mlb-permanent-example';
                brewersMLBEntry.setAttribute('data-team-name', 'Brewers');
                brewersMLBEntry.setAttribute('data-confidence', '0');
                brewersMLBEntry.setAttribute('data-odds', '+100');
                brewersMLBEntry.setAttribute('data-bet-type', 'PLAY');
                brewersMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#12284B;border:3px solid #FFC52F;outline:2px solid #FFC52F;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                brewersMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/mil.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #FFC52F;border-right:2px solid #FFC52F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FFC52F;">Brewers</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #FFC52F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FFC52F;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#FFC52F;border:1px solid #FFC52F;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                brewersMLBEntry.style.display = 'none';
                logContent.appendChild(brewersMLBEntry);

                // MLB Twins
                const twinsMLBEntry = document.createElement('div');
                twinsMLBEntry.className = 'log-entry mlb-permanent-example';
                twinsMLBEntry.setAttribute('data-team-name', 'Twins');
                twinsMLBEntry.setAttribute('data-confidence', '0');
                twinsMLBEntry.setAttribute('data-odds', '+100');
                twinsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                twinsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#002B5C;border:3px solid #D31145;outline:2px solid #D31145;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                twinsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/min.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #D31145;border-right:2px solid #D31145;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #D31145;">Twins</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #D31145;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #D31145;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#D31145;border:1px solid #D31145;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                twinsMLBEntry.style.display = 'none';
                logContent.appendChild(twinsMLBEntry);

                // MLB Mets
                const metsMLBEntry = document.createElement('div');
                metsMLBEntry.className = 'log-entry mlb-permanent-example';
                metsMLBEntry.setAttribute('data-team-name', 'Mets');
                metsMLBEntry.setAttribute('data-confidence', '0');
                metsMLBEntry.setAttribute('data-odds', '+100');
                metsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                metsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#002D72;border:3px solid #FF5910;outline:2px solid #FF5910;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                metsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/nym.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #FF5910;border-right:2px solid #FF5910;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FF5910;">Mets</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #FF5910;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FF5910;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#FF5910;border:1px solid #FF5910;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                metsMLBEntry.style.display = 'none';
                logContent.appendChild(metsMLBEntry);

                // MLB Yankees
                const yankeesMLBEntry = document.createElement('div');
                yankeesMLBEntry.className = 'log-entry mlb-permanent-example';
                yankeesMLBEntry.setAttribute('data-team-name', 'Yankees');
                yankeesMLBEntry.setAttribute('data-confidence', '0');
                yankeesMLBEntry.setAttribute('data-odds', '+100');
                yankeesMLBEntry.setAttribute('data-bet-type', 'PLAY');
                yankeesMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#003087;border:3px solid #C4CED4;outline:2px solid #C4CED4;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                yankeesMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/nyy.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #C4CED4;border-right:2px solid #C4CED4;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #C4CED4;">Yankees</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #C4CED4;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #C4CED4;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#C4CED4;border:1px solid #C4CED4;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                yankeesMLBEntry.style.display = 'none';
                logContent.appendChild(yankeesMLBEntry);

                // MLB Athletics
                const athleticsMLBEntry = document.createElement('div');
                athleticsMLBEntry.className = 'log-entry mlb-permanent-example';
                athleticsMLBEntry.setAttribute('data-team-name', 'Athletics');
                athleticsMLBEntry.setAttribute('data-confidence', '0');
                athleticsMLBEntry.setAttribute('data-odds', '+100');
                athleticsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                athleticsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#003831;border:3px solid #EFB21E;outline:2px solid #EFB21E;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                athleticsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/oak.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #EFB21E;border-right:2px solid #EFB21E;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #EFB21E;">Athletics</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #EFB21E;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #EFB21E;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#EFB21E;border:1px solid #EFB21E;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                athleticsMLBEntry.style.display = 'none';
                logContent.appendChild(athleticsMLBEntry);

                // MLB Phillies
                const philliesMLBEntry = document.createElement('div');
                philliesMLBEntry.className = 'log-entry mlb-permanent-example';
                philliesMLBEntry.setAttribute('data-team-name', 'Phillies');
                philliesMLBEntry.setAttribute('data-confidence', '0');
                philliesMLBEntry.setAttribute('data-odds', '+100');
                philliesMLBEntry.setAttribute('data-bet-type', 'PLAY');
                philliesMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#E81828;border:3px solid #002D72;outline:2px solid #002D72;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                philliesMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/phi.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #002D72;border-right:2px solid #002D72;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #002D72;">Phillies</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #002D72;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #002D72;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#002D72;border:1px solid #002D72;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                philliesMLBEntry.style.display = 'none';
                logContent.appendChild(philliesMLBEntry);

                // MLB Pirates
                const piratesMLBEntry = document.createElement('div');
                piratesMLBEntry.className = 'log-entry mlb-permanent-example';
                piratesMLBEntry.setAttribute('data-team-name', 'Pirates');
                piratesMLBEntry.setAttribute('data-confidence', '0');
                piratesMLBEntry.setAttribute('data-odds', '+100');
                piratesMLBEntry.setAttribute('data-bet-type', 'PLAY');
                piratesMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#27251F;border:3px solid #FDB827;outline:2px solid #FDB827;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                piratesMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/pit.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #FDB827;border-right:2px solid #FDB827;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FDB827;">Pirates</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #FDB827;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FDB827;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#FDB827;border:1px solid #FDB827;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                piratesMLBEntry.style.display = 'none';
                logContent.appendChild(piratesMLBEntry);

                // MLB Padres
                const padresMLBEntry = document.createElement('div');
                padresMLBEntry.className = 'log-entry mlb-permanent-example';
                padresMLBEntry.setAttribute('data-team-name', 'Padres');
                padresMLBEntry.setAttribute('data-confidence', '0');
                padresMLBEntry.setAttribute('data-odds', '+100');
                padresMLBEntry.setAttribute('data-bet-type', 'PLAY');
                padresMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#2F241D;border:3px solid #FFC425;outline:2px solid #FFC425;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                padresMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/sd.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #FFC425;border-right:2px solid #FFC425;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FFC425;">Padres</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #FFC425;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #FFC425;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#FFC425;border:1px solid #FFC425;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                padresMLBEntry.style.display = 'none';
                logContent.appendChild(padresMLBEntry);

                // MLB Giants
                const giantsMLBEntry = document.createElement('div');
                giantsMLBEntry.className = 'log-entry mlb-permanent-example';
                giantsMLBEntry.setAttribute('data-team-name', 'Giants');
                giantsMLBEntry.setAttribute('data-confidence', '0');
                giantsMLBEntry.setAttribute('data-odds', '+100');
                giantsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                giantsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#FD5A1E;border:3px solid #27251F;outline:2px solid #27251F;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                giantsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/sf.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #27251F;border-right:2px solid #27251F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #27251F;">Giants</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #27251F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #27251F;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#27251F;border:1px solid #27251F;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                giantsMLBEntry.style.display = 'none';
                logContent.appendChild(giantsMLBEntry);

                // MLB Mariners
                const marinersMLBEntry = document.createElement('div');
                marinersMLBEntry.className = 'log-entry mlb-permanent-example';
                marinersMLBEntry.setAttribute('data-team-name', 'Mariners');
                marinersMLBEntry.setAttribute('data-confidence', '0');
                marinersMLBEntry.setAttribute('data-odds', '+100');
                marinersMLBEntry.setAttribute('data-bet-type', 'PLAY');
                marinersMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#0C2C56;border:3px solid #005C5C;outline:2px solid #005C5C;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                marinersMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/sea.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #005C5C;border-right:2px solid #005C5C;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #005C5C;">Mariners</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #005C5C;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #005C5C;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#005C5C;border:1px solid #005C5C;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                marinersMLBEntry.style.display = 'none';
                logContent.appendChild(marinersMLBEntry);

                // MLB Cardinals
                const cardinalsMLBEntry = document.createElement('div');
                cardinalsMLBEntry.className = 'log-entry mlb-permanent-example';
                cardinalsMLBEntry.setAttribute('data-team-name', 'Cardinals');
                cardinalsMLBEntry.setAttribute('data-confidence', '0');
                cardinalsMLBEntry.setAttribute('data-odds', '+100');
                cardinalsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                cardinalsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#C41E3A;border:3px solid #0C2340;outline:2px solid #0C2340;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                cardinalsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/stl.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #0C2340;border-right:2px solid #0C2340;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #0C2340;">Cardinals</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #0C2340;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #0C2340;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#0C2340;border:1px solid #0C2340;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                cardinalsMLBEntry.style.display = 'none';
                logContent.appendChild(cardinalsMLBEntry);

                // MLB Rays
                const raysMLBEntry = document.createElement('div');
                raysMLBEntry.className = 'log-entry mlb-permanent-example';
                raysMLBEntry.setAttribute('data-team-name', 'Rays');
                raysMLBEntry.setAttribute('data-confidence', '0');
                raysMLBEntry.setAttribute('data-odds', '+100');
                raysMLBEntry.setAttribute('data-bet-type', 'PLAY');
                raysMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#092C5C;border:3px solid #8FBCE6;outline:2px solid #8FBCE6;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                raysMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/tb.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #8FBCE6;border-right:2px solid #8FBCE6;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #8FBCE6;">Rays</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #8FBCE6;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #8FBCE6;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#8FBCE6;border:1px solid #8FBCE6;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                raysMLBEntry.style.display = 'none';
                logContent.appendChild(raysMLBEntry);

                // MLB Rangers
                const rangersMLBEntry = document.createElement('div');
                rangersMLBEntry.className = 'log-entry mlb-permanent-example';
                rangersMLBEntry.setAttribute('data-team-name', 'Rangers');
                rangersMLBEntry.setAttribute('data-confidence', '0');
                rangersMLBEntry.setAttribute('data-odds', '+100');
                rangersMLBEntry.setAttribute('data-bet-type', 'PLAY');
                rangersMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#003278;border:3px solid #C0111F;outline:2px solid #C0111F;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                rangersMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/tex.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #C0111F;border-right:2px solid #C0111F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #C0111F;">Rangers</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #C0111F;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #C0111F;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#C0111F;border:1px solid #C0111F;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                rangersMLBEntry.style.display = 'none';
                logContent.appendChild(rangersMLBEntry);

                // MLB Blue Jays
                const blue_jaysMLBEntry = document.createElement('div');
                blue_jaysMLBEntry.className = 'log-entry mlb-permanent-example';
                blue_jaysMLBEntry.setAttribute('data-team-name', 'Blue Jays');
                blue_jaysMLBEntry.setAttribute('data-confidence', '0');
                blue_jaysMLBEntry.setAttribute('data-odds', '+100');
                blue_jaysMLBEntry.setAttribute('data-bet-type', 'PLAY');
                blue_jaysMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#134A8E;border:3px solid #E8291C;outline:2px solid #E8291C;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                blue_jaysMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/tor.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #E8291C;border-right:2px solid #E8291C;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #E8291C;">Blue Jays</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #E8291C;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #E8291C;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#E8291C;border:1px solid #E8291C;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                blue_jaysMLBEntry.style.display = 'none';
                logContent.appendChild(blue_jaysMLBEntry);

                // MLB Nationals
                const nationalsMLBEntry = document.createElement('div');
                nationalsMLBEntry.className = 'log-entry mlb-permanent-example';
                nationalsMLBEntry.setAttribute('data-team-name', 'Nationals');
                nationalsMLBEntry.setAttribute('data-confidence', '0');
                nationalsMLBEntry.setAttribute('data-odds', '+100');
                nationalsMLBEntry.setAttribute('data-bet-type', 'PLAY');
                nationalsMLBEntry.style.cssText = 'display:grid;grid-template-columns:50px 90px 65px 80px;align-items:center;gap:0;padding:0;background:#AB0003;border:3px solid #14225A;outline:2px solid #14225A;outline-offset:-5px;box-shadow:0 0 15px rgba(255,255,255,0.6),0 4px 12px rgba(0,0,0,0.5);border-radius:8px;margin-bottom:10px;overflow:hidden;opacity:0.85;position:relative;';
                nationalsMLBEntry.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 8px;height:100%;position:relative;">
                        <img src="https://a.espncdn.com/i/teamlogos/mlb/500/wsh.png" style="width:32px;height:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));object-fit:contain;">
                    </div>
                    <div style="display:flex;align-items:center;padding:12px 8px;height:100%;border-left:2px solid #14225A;border-right:2px solid #14225A;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #14225A;">Nationals</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;border-right:2px solid #14225A;position:relative;">
                        <span style="font-size:13px;font-weight:700;color:#fff;text-shadow:0 1px 2px #14225A;">+100</span>
                    </div>
                    <div style="display:flex;align-items:center;justify-content:center;padding:12px 6px;height:100%;position:relative;">
                        <input type="text" placeholder="$00.00" disabled style="background:#14225A;border:1px solid #14225A;border-radius:6px;padding:6px 8px;color:#fff;font-size:13px;font-weight:700;text-align:center;outline:none;width:65px;cursor:not-allowed;">
                    </div>
                `;
                nationalsMLBEntry.style.display = 'none';
                logContent.appendChild(nationalsMLBEntry);

                // Restore saved logbook entries from Firebase (or localStorage fallback)
                if (pendingLogbookEntries) {
                    restoreLogbookEntries(pendingLogbookEntries);
                    pendingLogbookEntries = null;
                } else {
                    // Firebase may not have loaded yet — try localStorage immediately
                    try {
                        const raw = localStorage.getItem('appState');
                        if (raw) {
                            const data = JSON.parse(raw);
                            if (data.logbookEntries && data.logbookEntries.length > 0) {
                                restoreLogbookEntries(data.logbookEntries);
                            }
                        }
                    } catch(e) {}
                }
            }
            
            // Initialize with current sport (MLB)
            updateSportSettings();
            
            // Show Game Winner header on load since default is winner mode
            document.querySelector('.header').style.display = 'none';
            document.getElementById('gwHeader').style.display = 'flex';
            
            const inningBox = document.getElementById('inningBox');
            if (inningBox) {
                inningBox.addEventListener('click', () => {
                    if (currentSport === 'mlb') {
                        if (inningHalf === 'top') {
                            inningHalf = 'bottom';
                        } else {
                            inningHalf = 'top';
                            quarter++;
                            if (quarter > getSportConfig().maxPeriods) {
                                quarter = 1;
                                // Full reset when cycling back to 1st inning
                                teamAScore = 0;
                                teamBScore = 0;
                                scoreLeft.textContent = '0';
                                scoreRight.textContent = '0';
                                ouLine = 0;
                                ouLineEl.textContent = '—';
                                betTypeEl.textContent = '—';
                                document.querySelectorAll('.score-box.selected').forEach(el => el.classList.remove('selected'));
                                document.querySelectorAll('.control-btn.selected').forEach(el => el.classList.remove('selected'));
                            }
                        }
                        updateInningDisplay();
                        // Clear outs and bases
                        outsRecorded = [false, false, false];
                        basesOccupied = [false, false, false];
                        document.querySelectorAll('.out-circle').forEach(c => c.classList.remove('active'));
                        document.querySelectorAll('.base-square').forEach(c => c.classList.remove('active'));
                        calculateStats();
                    }
                });
            }
            
            // Pitch count handlers
            const baseballSaveBtn = document.getElementById('baseballSaveBtn');
            
            if (baseballSaveBtn) {
                baseballSaveBtn.addEventListener('click', () => {
                    // Save bet just like the main save button
                    saveBetBtn.click();
                });
            }
            
            // Team selector functionality
            const teamPopup = document.getElementById('teamPopup');
            const teamOverlay = document.getElementById('teamOverlay');
            const teamList = document.getElementById('teamList');
            const teamSearch = document.getElementById('teamSearch');
            const teamLeftLabel = document.getElementById('teamLeftLabel');
            const teamRightLabel = document.getElementById('teamRightLabel');
            let selectingFor = null; // 'left' or 'right'
            let selectedTeamLeft = null;
            let selectedTeamRight = null;
            
            // Populate teams in popup
            function populateTeams(filter = '') {
                teamList.innerHTML = ''; // Clear existing
                
                // Select correct team list based on sport
                let teamsToUse = nbaTeams; // default
                if (currentSport === 'cbb') {
                    teamsToUse = ncaabTeams;
                } else if (currentSport === 'nba' || currentSport === 'enba') {
                    teamsToUse = nbaTeams;
                } else if (currentSport === 'nfl') {
                    teamsToUse = nflTeams;
                } else if (currentSport === 'cfb') {
                    teamsToUse = cfbTeams;
                } else if (currentSport === 'mlb') {
                    teamsToUse = mlbTeams;
                } else if (currentSport === 'nhl') {
                    teamsToUse = nhlTeams;
                } else if (currentSport === 'soccer') {
                    teamsToUse = soccerTeams;
                }
                
                const filteredTeams = teamsToUse.filter(team => 
                    team.name.toLowerCase().includes(filter.toLowerCase()) ||
                    team.prefix.toLowerCase().includes(filter.toLowerCase())
                );
                
                filteredTeams.forEach(team => {
                    const item = document.createElement('div');
                    item.className = 'team-item';
                    
                    item.innerHTML = `
                        <img src="${team.logo}" class="team-logo" alt="${team.name}">
                        <div class="team-name">${team.name}</div>
                    `;
                    item.addEventListener('click', () => {
                        if (selectingFor === 'left') {
                            selectedTeamLeft = team;
                            teamLeftLabel.innerHTML = `<img src="${team.logo}" class="team-label-logo" alt="${team.name}"><span>${team.name}</span>`;
                        } else if (selectingFor === 'right') {
                            selectedTeamRight = team;
                            teamRightLabel.innerHTML = `<img src="${team.logo}" class="team-label-logo" alt="${team.name}"><span>${team.name}</span>`;
                        } else if (selectingFor === 'away') {
                            selectedAwayTeam = team;
                            const awayTeamNameContent = document.getElementById('awayTeamNameContent');
                            const awayTeamRecord = document.getElementById('awayTeamRecord');
                            awayTeamNameContent.innerHTML = `<img src="${team.logo}" class="winner-team-logo" alt="${team.name}"><span>${team.name}</span>`;
                            awayTeamRecord.textContent = `${team.wins}-${team.losses}`;
                            document.getElementById('awayTeamSeed').value = team.seed || '';
                            // Auto-fill injuries
                            fetchInjuryForTeam(team.name).then(count => {
                                awayInjuries = count;
                                document.getElementById('awayTeamInjDisplay').textContent = count;
                                calculateGameWinnerEdge();
                            });
                            updatePlayoffSeriesUI();
                            // Load series state if both teams selected
                            if (selectedHomeTeam) {
                                loadSeriesState(team.name, selectedHomeTeam.name);
                            }
                            updateWinnerDisplay();
                        } else if (selectingFor === 'home') {
                            selectedHomeTeam = team;
                            const homeTeamNameContent = document.getElementById('homeTeamNameContent');
                            const homeTeamRecord = document.getElementById('homeTeamRecord');
                            homeTeamNameContent.innerHTML = `<img src="${team.logo}" class="winner-team-logo" alt="${team.name}"><span>${team.name}</span>`;
                            homeTeamRecord.textContent = `${team.wins}-${team.losses}`;
                            document.getElementById('homeTeamSeed').value = team.seed || '';
                            // Auto-fill injuries
                            fetchInjuryForTeam(team.name).then(count => {
                                homeInjuries = count;
                                document.getElementById('homeTeamInjDisplay').textContent = count;
                                calculateGameWinnerEdge();
                            });
                            updatePlayoffSeriesUI();
                            // Load series state if both teams selected
                            if (selectedAwayTeam) {
                                loadSeriesState(selectedAwayTeam.name, team.name);
                            }
                            updateWinnerDisplay();
                        } else if (selectingFor === 'bbAway') {
                            selectedBBAwayTeam = team;
                            // Refresh MLB standings silently on team select
                            fetch(BACKEND_URL + '/api/mlb/standings').then(r=>r.json()).then(data=>{
                                if(data&&data.al&&data.nl){mlbStandings=data;reapplyMLBStandingsFromBetLog();calculateBaseballEdge();}
                            }).catch(()=>{});
                            const box = document.getElementById('bbAwayTeamName');
                            if (box) {
                                box.innerHTML = `<div style="font-size:8px;font-weight:300;color:#888;text-transform:uppercase;letter-spacing:1px;">away</div><div style="display:flex;align-items:center;gap:4px;"><img src="${team.logo}" style="width:20px;height:20px;object-fit:contain;"><span style="font-size:11px;font-weight:700;color:#fff;">${team.name}</span></div>`;
                            }
                            if (team.park) {
                                const awayParkEl = document.getElementById('bbParkAway');
                                if (awayParkEl) awayParkEl.value = team.park;
                            }
                            fetchMLBInjuries(team.name, 'away');
                            fetchMLBPitchingStats(team.name, 'away');
                            fetchMLBBatting(team.name, 'away');
                            fetchMLBSeries(team.name);
                            calcCurrentSeriesCount();
                            calculateBaseballEdge();
                        } else if (selectingFor === 'bbHome') {
                            selectedBBHomeTeam = team;
                            const box = document.getElementById('bbHomeTeamName');
                            if (box) {
                                box.innerHTML = `<div style="font-size:8px;font-weight:300;color:#888;text-transform:uppercase;letter-spacing:1px;">home</div><div style="display:flex;align-items:center;gap:4px;"><img src="${team.logo}" style="width:20px;height:20px;object-fit:contain;"><span style="font-size:11px;font-weight:700;color:#fff;">${team.name}</span></div>`;
                            }
                            if (team.park) {
                                const homeParkEl = document.getElementById('bbParkHome');
                                const awayParkEl = document.getElementById('bbParkAway');
                                if (homeParkEl) homeParkEl.value = team.park;
                                if (awayParkEl) awayParkEl.value = team.park;
                            }
                            calculateBaseballEdge();
                            fetchMLBInjuries(team.name, 'home');
                            fetchMLBPitchingStats(team.name, 'home');
                            calcCurrentSeriesCount();
                            fetchMLBBatting(team.name, 'home');
                        }
                        closeTeamPopup();
                    });
                    teamList.appendChild(item);
                });
            }
            
            // Search functionality
            teamSearch.addEventListener('input', (e) => {
                populateTeams(e.target.value);
            });
            
            function openTeamPopup(side) {
                selectingFor = side;
                teamSearch.value = '';
                populateTeams();
                
                // Update title based on sport
                const teamTitle = document.querySelector('.team-title');
                const sportNames = {
                    'enba': 'E-NBA',
                    'nba': 'NBA',
                    'cbb': 'COLLEGE BASKETBALL',
                    'nfl': 'NFL',
                    'cfb': 'COLLEGE FOOTBALL',
                    'mlb': 'MLB',
                    'nhl': 'NHL',
                    'soccer': 'SOCCER'
                };
                const sportName = sportNames[currentSport] || 'NBA';
                teamTitle.textContent = `select ${sportName} team`;
                
                teamPopup.classList.add('open');
                teamOverlay.classList.add('open');
                setTimeout(() => { teamSearch.focus(); }, 100);
            }
            
            function closeTeamPopup() {
                teamPopup.classList.remove('open');
                teamOverlay.classList.remove('open');
            }
            
            teamLeftLabel.addEventListener('click', () => openTeamPopup('left'));
            teamRightLabel.addEventListener('click', () => openTeamPopup('right'));
            teamOverlay.addEventListener('click', closeTeamPopup);
            
            // Game Winner team selection - handled in setupRecordReveal
            // awayTeamNameLabel.addEventListener('click', () => openTeamPopup('away'));
            // homeTeamNameLabel.addEventListener('click', () => openTeamPopup('home'));
            
            // Swipe/drag gesture for record reveal (MOBILE + DESKTOP)
            let touchStartY = 0;
            let touchStartX = 0;
            let isSwiping = false;
            let isDragging = false;
            
            function setupRecordReveal(element, teamType) {
                const recordOverlay = element.querySelector('.winner-team-record-overlay');
                
                // CLICK HANDLING: single click = team popup, double click = edit record
                let lastTap = 0;
                let clickTimeout = null;
                
                element.addEventListener('click', (e) => {
                    const currentTime = new Date().getTime();
                    const tapLength = currentTime - lastTap;
                    
                    // Check for shift key (reveal shortcut)
                    if (e.shiftKey) {
                        e.stopPropagation();
                        element.classList.add('reveal');
                        setTimeout(() => {
                            element.classList.remove('reveal');
                        }, 2000);
                        lastTap = 0;
                        return;
                    }
                    
                    // Get current team
                    let currentTeam;
                    if (teamType === 'away') {
                        currentTeam = selectedAwayTeam;
                    } else {
                        currentTeam = selectedHomeTeam;
                    }
                    
                    // Double click/tap detection (within 400ms)
                    if (tapLength < 400 && tapLength > 0 && currentTeam) {
                        // DOUBLE CLICK - EDIT MODE
                        e.stopPropagation();
                        clearTimeout(clickTimeout); // Cancel single click action
                        
                        // Create editable overlay
                        const currentRecord = recordOverlay.textContent;
                        const [wins, losses] = currentRecord.split('-').map(n => parseInt(n) || 0);
                        
                        recordOverlay.innerHTML = `
                            <input type="number" class="record-edit-input" id="winsInput${element.id}" value="${wins}" min="0" max="99" style="width: 35px; background: rgba(0,0,0,0.3); border: 2px solid #fff; border-radius: 4px; color: #fff; font-size: 13px; font-weight: 700; text-align: center; outline: none; padding: 2px;">
                            <span style="color: #fff; font-weight: 700; margin: 0 4px;">-</span>
                            <input type="number" class="record-edit-input" id="lossesInput${element.id}" value="${losses}" min="0" max="99" style="width: 35px; background: rgba(0,0,0,0.3); border: 2px solid #fff; border-radius: 4px; color: #fff; font-size: 13px; font-weight: 700; text-align: center; outline: none; padding: 2px;">
                        `;
                        
                        element.classList.add('reveal');
                        
                        const winsInput = recordOverlay.querySelector(`#winsInput${element.id}`);
                        const lossesInput = recordOverlay.querySelector(`#lossesInput${element.id}`);
                        
                        // Focus first input and select all
                        setTimeout(() => {
                            winsInput.focus();
                            winsInput.select();
                        }, 100);
                        
                        // Move to losses input when user presses Tab or Enter on wins
                        winsInput.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter' || e.key === 'Tab') {
                                e.preventDefault();
                                lossesInput.focus();
                                lossesInput.select();
                            }
                        });
                        
                        // Save on blur or enter
                        const saveRecord = () => {
                            const newWins = parseInt(winsInput.value) || 0;
                            const newLosses = parseInt(lossesInput.value) || 0;
                            
                            // Update DISPLAY ONLY - doesn't touch backend team data
                            recordOverlay.textContent = `${newWins}-${newLosses}`;
                            
                            // Also update the team object for THIS SESSION's calculation
                            if (teamType === 'away' && selectedAwayTeam) {
                                selectedAwayTeam.displayWins = newWins;
                                selectedAwayTeam.displayLosses = newLosses;
                            } else if (teamType === 'home' && selectedHomeTeam) {
                                selectedHomeTeam.displayWins = newWins;
                                selectedHomeTeam.displayLosses = newLosses;
                            }
                            
                            // Recalculate edge with new records
                            calculateGameWinnerEdge();
                            
                            // Hide after saving
                            setTimeout(() => {
                                element.classList.remove('reveal');
                            }, 500);
                        };
                        
                        lossesInput.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter') {
                                saveRecord();
                            }
                        });
                        
                        lossesInput.addEventListener('blur', saveRecord);
                        
                        lastTap = 0;
                        return;
                    }
                    
                    // SINGLE CLICK - delay to see if double click coming
                    lastTap = currentTime;
                    clickTimeout = setTimeout(() => {
                        // Single click action - open team popup
                        openTeamPopup(teamType);
                    }, 400); // Wait 400ms to see if second click comes
                });
                
                // TOUCH EVENTS (Mobile)
                element.addEventListener('touchstart', (e) => {
                    touchStartY = e.touches[0].clientY;
                    touchStartX = e.touches[0].clientX;
                    isSwiping = false;
                }, { passive: true });
                
                element.addEventListener('touchmove', (e) => {
                    const touchY = e.touches[0].clientY;
                    const touchX = e.touches[0].clientX;
                    const deltaY = touchStartY - touchY;
                    const deltaX = Math.abs(touchStartX - touchX);
                    
                    // If swiping up (deltaY > 0) and mostly vertical (deltaX < deltaY)
                    if (deltaY > 20 && deltaX < deltaY / 2) {
                        isSwiping = true;
                        element.classList.add('reveal');
                    }
                }, { passive: true });
                
                element.addEventListener('touchend', () => {
                    if (isSwiping) {
                        // Keep revealed for 2 seconds then hide
                        setTimeout(() => {
                            element.classList.remove('reveal');
                        }, 2000);
                        isSwiping = false;
                    }
                });
                
                // MOUSE EVENTS (Desktop/Mac)
                element.addEventListener('mousedown', (e) => {
                    touchStartY = e.clientY;
                    touchStartX = e.clientX;
                    isDragging = false;
                    
                    const handleMouseMove = (moveEvent) => {
                        const deltaY = touchStartY - moveEvent.clientY;
                        const deltaX = Math.abs(touchStartX - moveEvent.clientX);
                        
                        // If dragging up (deltaY > 0) and mostly vertical
                        if (deltaY > 15 && deltaX < deltaY / 2) {
                            isDragging = true;
                            element.classList.add('reveal');
                        }
                    };
                    
                    const handleMouseUp = () => {
                        if (isDragging) {
                            // Keep revealed for 2 seconds then hide
                            setTimeout(() => {
                                element.classList.remove('reveal');
                            }, 2000);
                            isDragging = false;
                        }
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    };
                    
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                });
            }
            
            setupRecordReveal(awayTeamNameLabel, 'away');
            setupRecordReveal(homeTeamNameLabel, 'home');

            // MLB Game Winner team selection
            const bbAwayBox = document.getElementById('bbAwayTeamName');
            const bbHomeBox = document.getElementById('bbHomeTeamName');
            if (bbAwayBox) bbAwayBox.addEventListener('click', () => openTeamPopup('bbAway'));
            if (bbHomeBox) bbHomeBox.addEventListener('click', () => openTeamPopup('bbHome'));
        });
        
        function updateScoreButtons(buttons) {
            const controlsContainer = document.querySelector('.controls');
            
            // For MLB, replace +1 with BALL and +3 with STRIKE
            if (currentSport === 'mlb') {
                controlsContainer.innerHTML = `
                    <button class="control-btn btn-ball" data-action="ball">BALL</button>
                    <button class="control-btn btn-1" data-points="1">+1</button>
                    <button class="control-btn btn-strike" data-action="strike">STRIKE</button>
                `;
            } else {
                controlsContainer.innerHTML = buttons.map(num => 
                    `<button class="control-btn btn-${num}" data-points="${num}">+${num}</button>`
                ).join('');
            }
            
            // Re-attach event listeners
            const newPointButtons = document.querySelectorAll('.control-btn');
            newPointButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (currentSport === 'mlb') {
                        const action = btn.dataset.action;
                        if (action === 'ball' || action === 'strike') {
                            // Update pitch count
                            const countEl = document.getElementById('ballStrikeCount');
                            if (countEl) {
                                const count = countEl.textContent.split('-');
                                let balls = parseInt(count[0]) || 0;
                                let strikes = parseInt(count[1]) || 0;
                                
                                if (action === 'ball') {
                                    balls++;
                                    if (balls >= 4) {
                                        // Walk - only FORCED runners advance
                                        // Batter always goes to first, forcing runner on first if present
                                        
                                        // Work backwards to avoid overwriting
                                        const newBases = [false, false, false];
                                        
                                        // If bases loaded, everyone advances (3rd scores)
                                        if (basesOccupied[0] && basesOccupied[1] && basesOccupied[2]) {
                                            newBases[2] = true; // 2nd → 3rd
                                            newBases[1] = true; // 1st → 2nd
                                            newBases[0] = true; // Batter → 1st
                                            // Runner on 3rd scores (handle separately)
                                        }
                                        // If 1st and 2nd occupied, both forced to advance
                                        else if (basesOccupied[0] && basesOccupied[1]) {
                                            newBases[2] = true; // 2nd → 3rd (forced)
                                            newBases[1] = true; // 1st → 2nd (forced)
                                            newBases[0] = true; // Batter → 1st
                                        }
                                        // If only 1st occupied, runner forced to 2nd
                                        else if (basesOccupied[0]) {
                                            if (basesOccupied[2]) newBases[2] = true; // Keep 3rd if occupied
                                            newBases[1] = true; // 1st → 2nd (forced)
                                            newBases[0] = true; // Batter → 1st
                                        }
                                        // Otherwise just batter to 1st, keep other runners
                                        else {
                                            newBases[0] = true; // Batter → 1st
                                            if (basesOccupied[1]) newBases[1] = true; // Keep 2nd
                                            if (basesOccupied[2]) newBases[2] = true; // Keep 3rd
                                        }
                                        
                                        basesOccupied = newBases;
                                        
                                        // Update visual bases using data-base attribute
                                        basesOccupied.forEach((occupied, baseIndex) => {
                                            const base = document.querySelector(`[data-base="${baseIndex}"]`);
                                            if (base) {
                                                if (occupied) {
                                                    base.classList.add('active');
                                                } else {
                                                    base.classList.remove('active');
                                                }
                                            }
                                        });
                                        
                                        balls = 0;
                                        strikes = 0;
                                    }
                                } else if (action === 'strike') {
                                    strikes++;
                                    if (strikes >= 3) {
                                        // Strikeout - record an out
                                        const nextOutIndex = outsRecorded.findIndex(o => !o);
                                        if (nextOutIndex !== -1) {
                                            outsRecorded[nextOutIndex] = true;
                                            const outCircle = document.querySelector(`[data-out="${nextOutIndex}"]`);
                                            if (outCircle) outCircle.classList.add('active');
                                            
                                            // Check AFTER recording if we now have 3 outs
                                            const totalOuts = outsRecorded.filter(o => o).length;
                                            if (totalOuts >= 3) {
                                                // Flip inning immediately
                                                if (inningHalf === 'top') {
                                                    inningHalf = 'bottom';
                                                } else {
                                                    inningHalf = 'top';
                                                    quarter++;
                                                    if (quarter > getSportConfig().maxPeriods) {
                                                        quarter = 1;
                                                        // Full reset when cycling back to 1st inning
                                                        teamAScore = 0;
                                                        teamBScore = 0;
                                                        scoreLeft.textContent = '0';
                                                        scoreRight.textContent = '0';
                                                        ouLine = 0;
                                                        ouLineEl.textContent = '—';
                                                        betTypeEl.textContent = '—';
                                                        document.querySelectorAll('.score-box.selected').forEach(el => el.classList.remove('selected'));
                                                        document.querySelectorAll('.control-btn.selected').forEach(el => el.classList.remove('selected'));
                                                    }
                                                }
                                                updateInningDisplay();
                                                
                                                // Clear outs and bases
                                                outsRecorded = [false, false, false];
                                                basesOccupied = [false, false, false];
                                                document.querySelectorAll('.out-circle').forEach(c => c.classList.remove('active'));
                                                document.querySelectorAll('.base-square').forEach(c => c.classList.remove('active'));
                                                
                                                calculateStats();
                                            }
                                        }
                                        
                                        balls = 0;
                                        strikes = 0;
                                    }
                                }
                                
                                countEl.textContent = `${balls}-${strikes}`;
                                
                                // Flash the button that was clicked
                                btn.classList.remove('flash-ball', 'flash-strike');
                                if (action === 'ball') {
                                    btn.classList.add('flash-ball');
                                    setTimeout(() => btn.classList.remove('flash-ball'), 600);
                                } else if (action === 'strike') {
                                    btn.classList.add('flash-strike');
                                    setTimeout(() => btn.classList.remove('flash-strike'), 600);
                                }
                                
                                calculateStats();
                            }
                            return;
                        }
                    }
                    
                    // Normal scoring for +2 in MLB or all buttons in other sports
                    if (selectedPoints === parseInt(btn.dataset.points)) {
                        btn.classList.remove('selected');
                        selectedPoints = null;
                    } else {
                        newPointButtons.forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                        selectedPoints = parseInt(btn.dataset.points);
                    }
                    applyScore();
                });
            });
        }
        
        navMenu.addEventListener('click', (e) => {
            // Make it rain money!
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const money = document.createElement('div');
                    money.className = 'money-rain';
                    money.textContent = '💵';
                    money.style.left = Math.random() * window.innerWidth + 'px';
                    money.style.top = '-50px';
                    money.style.animationDelay = '0s';
                    money.style.animationDuration = (1.5 + Math.random()) + 's';
                    
                    document.body.appendChild(money);
                    setTimeout(() => money.remove(), 2500);
                }, i * 50);
            }
            
            // Open side panel
            sidePanel.classList.add('open');
            panelOverlay.classList.add('open');
            
            // Start live clock updates when panel opens
            startLiveClockUpdates();
        });
        
        // Sports selector
        navSports.addEventListener('click', () => {
            const isOpening = !sportsPopup.classList.contains('open');
            
            sportsPopup.classList.toggle('open');
            sportsOverlay.classList.toggle('open');
            
            // Only add gold highlight when opening
            if (isOpening) {
                navSports.classList.add('active');
            } else {
                navSports.classList.remove('active');
            }
        });
        
        // Sport selection
        sportButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                currentSport = btn.dataset.sport;
                sportButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Animate emoji
                const iconEl = btn.querySelector('.sport-icon');
                iconEl.classList.add('animate');
                setTimeout(() => iconEl.classList.remove('animate'), 500);

                // Update nav icon to match sport
                const icon = iconEl.textContent;
                navSports.textContent = icon;

                // Switch to the appropriate betLog for this sport
                switchBetLog(currentSport);

                // Load betLog data for this sport from Firebase
                const loadEndpoint = BACKEND_URL + '/api/state/' + currentSport;
                fetch(loadEndpoint)
                    .then(r => r.json())
                    .then(data => {
                        console.log('🏀 SPORT SWITCH LOAD:', currentSport, {
                            hasBetLog: !!data.betLog,
                            totalDays: data.betLog ? data.betLog.length : 0
                        });
                        if (data && data.betLog) {
                            const activeBetLog = getActiveBetLog();
                            // Clear and reload
                            activeBetLog.length = 0;
                            data.betLog.forEach(saved => {
                                activeBetLog.push(saved);
                            });
                            betLog = activeBetLog;
                            console.log('✅ SPORT BETLOG LOADED:', betLog.length, 'days');
                        }
                        // Update UI after loading
                        updateSportSettings();
                        updateGameWinnerMode();
                        renderGameLogForDay(activeBetDay);
                        sortGameLog(currentLogSort);
                    })
                    .catch(err => {
                        console.log('No saved data for ' + currentSport + ', starting fresh');
                        // Update UI anyway
                        updateSportSettings();
                        updateGameWinnerMode();
                        renderGameLogForDay(activeBetDay);
                        sortGameLog(currentLogSort);
                    });

                // Remove gold highlight from nav
                navSports.classList.remove('active');

                // Close popup after selection
                setTimeout(() => {
                    sportsPopup.classList.remove('open');
                    sportsOverlay.classList.remove('open');
                }, 300);

                console.log('Selected sport:', currentSport);
            });
        });
        
        // Close sports popup when clicking overlay
        sportsOverlay.addEventListener('click', () => {
            sportsPopup.classList.remove('open');
            sportsOverlay.classList.remove('open');
            navSports.classList.remove('active'); // Remove gold highlight
        });
        
        // Close panel handlers
        panelOverlay.addEventListener('click', () => {
            sidePanel.classList.remove('open');
            panelOverlay.classList.remove('open');
            
            // Stop live clock updates when panel closes
            stopLiveClockUpdates();
        });

        // Baseball outs and bases handlers
        document.querySelectorAll('.out-circle').forEach(circle => {
            circle.addEventListener('click', () => {
                const outIndex = parseInt(circle.dataset.out);
                outsRecorded[outIndex] = !outsRecorded[outIndex];
                circle.classList.toggle('active');
                
                // Check if 3 outs - flip inning
                const totalOuts = outsRecorded.filter(o => o).length;
                if (totalOuts >= 3) {
                    setTimeout(() => {
                        // Flip inning
                        if (inningHalf === 'top') {
                            inningHalf = 'bottom';
                        } else {
                            inningHalf = 'top';
                            quarter++;
                            if (quarter > getSportConfig().maxPeriods) {
                                quarter = 1;
                            }
                        }
                        updateInningDisplay();
                        
                        // Clear outs and bases
                        outsRecorded = [false, false, false];
                        basesOccupied = [false, false, false];
                        document.querySelectorAll('.out-circle').forEach(c => c.classList.remove('active'));
                        document.querySelectorAll('.base-square').forEach(c => c.classList.remove('active'));
                        
                        calculateStats();
                    }, 200);
                } else {
                    calculateStats(); // Recalculate pace when outs change
                }
            });
        });
        
        document.querySelectorAll('.base-square').forEach(base => {
            base.addEventListener('click', () => {
                const baseIndex = parseInt(base.dataset.base);
                basesOccupied[baseIndex] = !basesOccupied[baseIndex];
                base.classList.toggle('active');
                calculateStats(); // Recalculate pace when bases change
            });
        });
        
        // Baseball inning half switching (click quarter box)
        function advanceBaseballInning() {
            if (inningHalf === 'top') {
                inningHalf = 'bottom';
            } else {
                inningHalf = 'top';
                quarter++;
                if (quarter > getSportConfig().maxPeriods) {
                    quarter = 1; // Reset to inning 1
                }
            }
            // Clear outs and bases
            outsRecorded = [false, false, false];
            basesOccupied = [false, false, false];
            document.querySelectorAll('.out-circle').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.base-square').forEach(c => c.classList.remove('active'));
            updateInningDisplay();
        }

        // Initialize
        updateClockDisplay();
        calculateStats();
        
        // Game Winner - Injury Counter and Odds Input Functionality
        let selectedInjuryTeam = null; // 'away' or 'home'
        let selectedOddsInput = null; // reference to the selected odds input
        let preSelectedSign = null; // '+' or '-' selected before odds
        
        // Click on injury display to select which team to modify
        // Injury click tracking
        let awayInjClickCount = 0, homeInjClickCount = 0;
        let awayInjTimer = null, homeInjTimer = null;

        function openInjKeypad(team) {
            openCustomKeypad(team === 'away' ? 'awayInj' : 'homeInj');
        }

        awayInjDisplay.addEventListener('click', () => {
            if (selectedOddsInput) { selectedOddsInput.style.outline = 'none'; selectedOddsInput = null; }
            preSelectedSign = null;
            selectedInjuryTeam = 'away';
            awayInjDisplay.style.outline = '2px solid #22c55e';
            homeInjDisplay.style.outline = 'none';

            awayInjClickCount++;
            clearTimeout(awayInjTimer);
            if (awayInjClickCount >= 2) {
                awayInjClickCount = 0;
                openInjKeypad('away');
            } else {
                // single tap — reset to 0
                awayInjuries = 0;
                awayInjDisplay.textContent = 0;
                calculateGameWinnerEdge();
                awayInjTimer = setTimeout(() => { awayInjClickCount = 0; }, 400);
            }
        });

        awayInjDisplay.addEventListener('keydown', (e) => { e.preventDefault(); return false; });
        awayInjDisplay.addEventListener('input', (e) => { e.preventDefault(); return false; });

        homeInjDisplay.addEventListener('click', () => {
            if (selectedOddsInput) { selectedOddsInput.style.outline = 'none'; selectedOddsInput = null; }
            preSelectedSign = null;
            selectedInjuryTeam = 'home';
            homeInjDisplay.style.outline = '2px solid #22c55e';
            awayInjDisplay.style.outline = 'none';

            homeInjClickCount++;
            clearTimeout(homeInjTimer);
            if (homeInjClickCount >= 2) {
                homeInjClickCount = 0;
                openInjKeypad('home');
            } else {
                // single tap — reset to 0
                homeInjuries = 0;
                homeInjDisplay.textContent = 0;
                calculateGameWinnerEdge();
                homeInjTimer = setTimeout(() => { homeInjClickCount = 0; }, 400);
            }
        });

        homeInjDisplay.addEventListener('keydown', (e) => { e.preventDefault(); return false; });
        homeInjDisplay.addEventListener('input', (e) => { e.preventDefault(); return false; });


        
        // Odds input selection
        // Single click odds — focus immediately, clear value, numeric keypad only
        function selectOddsInput(input, otherInput) {
            selectedOddsInput = input;
            selectedInjuryTeam = null;
            awayInjDisplay.style.outline = 'none';
            homeInjDisplay.style.outline = 'none';
            input.style.outline = '2px solid #22c55e';
            otherInput.style.outline = 'none';
            preSelectedSign = null;
            injPlusBtn.style.outline = 'none';
            injMinusBtn.style.outline = 'none';
            const target = input.id === 'awayTeamOdds' ? 'awayOdds' : 'homeOdds';
            openCustomKeypad(target);
        }

        awayOddsInput.setAttribute('inputmode', 'none');
        homeOddsInput.setAttribute('inputmode', 'none');
        awayOddsInput.setAttribute('readonly', 'true');
        homeOddsInput.setAttribute('readonly', 'true');

        awayOddsInput.addEventListener('mousedown', (e) => e.preventDefault());
        homeOddsInput.addEventListener('mousedown', (e) => e.preventDefault());

        awayOddsInput.addEventListener('click', () => selectOddsInput(awayOddsInput, homeOddsInput));
        homeOddsInput.addEventListener('click', () => selectOddsInput(homeOddsInput, awayOddsInput));

        awayOddsInput.addEventListener('touchend', (e) => { e.preventDefault(); selectOddsInput(awayOddsInput, homeOddsInput); });
        homeOddsInput.addEventListener('touchend', (e) => { e.preventDefault(); selectOddsInput(homeOddsInput, awayOddsInput); });

        
        // Debounce timer for input calculations
        let calcDebounceTimer = null;

        function debouncedCalculate() {
            // Clear existing timer
            if (calcDebounceTimer) {
                clearTimeout(calcDebounceTimer);
            }

            // Wait 300ms after user stops typing before calculating
            calcDebounceTimer = setTimeout(() => {
                recalculateGameWinner();
            }, 300);
        }
        
        [awayOddsInput, homeOddsInput].forEach(input => {
            input.addEventListener('input', (e) => {
                // Allow numbers, plus, minus, and nothing else
                let value = e.target.value;
                value = value.replace(/[^0-9+\-]/g, '');
                e.target.value = value;

                // Trigger debounced calculation (waits for user to stop typing)
                debouncedCalculate();
            });
        });

        // H2H inputs for e-NBA mode
        const awayH2HInput = document.getElementById('awayTeamH2HInput');
        const homeH2HInput = document.getElementById('homeTeamH2HInput');

        [awayH2HInput, homeH2HInput].forEach(input => {
            if (input) {
                input.addEventListener('input', (e) => {
                    // Allow numbers and dash only (format: "7-3")
                    let value = e.target.value;
                    value = value.replace(/[^0-9\-]/g, '');
                    // Only allow one dash
                    const dashCount = (value.match(/\-/g) || []).length;
                    if (dashCount > 1) {
                        value = value.substring(0, value.lastIndexOf('-'));
                    }
                    e.target.value = value;

                    // Trigger debounced calculation
                    debouncedCalculate();
                });
            }
        });

        // Seed inputs - only allow 1-16
        const awayTeamSeed = document.getElementById('awayTeamSeed');
        const homeTeamSeed = document.getElementById('homeTeamSeed');
        
        [awayTeamSeed, homeTeamSeed].forEach(input => {
            input.addEventListener('input', (e) => {
                // Only allow numbers
                let value = e.target.value.replace(/[^0-9]/g, '');
                
                // Convert to number and limit to 1-16
                if (value !== '') {
                    let num = parseInt(value);
                    if (num > 16) {
                        value = '16';
                    } else if (num < 1) {
                        value = '1';
                    }
                }
                
                e.target.value = value;
                
                // Trigger debounced calculation
                debouncedCalculate();
            });
            
            // Also validate on blur (when user leaves the field)
            input.addEventListener('blur', (e) => {
                let value = e.target.value;
                if (value !== '') {
                    let num = parseInt(value);
                    if (num > 16) {
                        e.target.value = '16';
                    } else if (num < 1) {
                        e.target.value = '1';
                    }
                }

                // Trigger calculation
                recalculateGameWinner();
            });
        });

        // Initialize game winner UI mode (NBA vs e-NBA)
        updateGameWinnerMode();

        // Playoff series display is now read-only (auto-calculated from bet log)

        // Plus button
        injPlusBtn.addEventListener('click', () => {
            if (selectedOddsInput) {
                // If odds are already selected, add + symbol immediately
                let currentValue = selectedOddsInput.value;
                currentValue = currentValue.replace(/^[+\-]/, '');
                selectedOddsInput.value = '+' + currentValue;
                // Clear button highlights
                injPlusBtn.style.outline = 'none';
                injMinusBtn.style.outline = 'none';
                preSelectedSign = null;
            } else if (selectedInjuryTeam) {
                // Injury mode
                if (selectedInjuryTeam === 'away') {
                    awayInjuries++;
                    awayInjDisplay.textContent = awayInjuries;
                    calculateGameWinnerEdge();
                } else if (selectedInjuryTeam === 'home') {
                    homeInjuries++;
                    homeInjDisplay.textContent = homeInjuries;
                    calculateGameWinnerEdge();
                }
            } else {
                // No selection - pre-select + for next odds click
                preSelectedSign = '+';
                injPlusBtn.style.outline = '2px solid #22c55e';
                injMinusBtn.style.outline = 'none';
            }
        });
        
        // Minus button
        injMinusBtn.addEventListener('click', () => {
            if (selectedOddsInput) {
                // If odds are already selected, add - symbol immediately (favorite)
                let currentValue = selectedOddsInput.value;
                currentValue = currentValue.replace(/^[+\-]/, '');
                selectedOddsInput.value = '-' + currentValue;
                // Clear button highlights
                injPlusBtn.style.outline = 'none';
                injMinusBtn.style.outline = 'none';
                preSelectedSign = null;
            } else if (selectedInjuryTeam) {
                // Injury mode
                if (selectedInjuryTeam === 'away' && awayInjuries > 0) {
                    awayInjuries--;
                    awayInjDisplay.textContent = awayInjuries;
                    calculateGameWinnerEdge();
                } else if (selectedInjuryTeam === 'home' && homeInjuries > 0) {
                    homeInjuries--;
                    homeInjDisplay.textContent = homeInjuries;
                    calculateGameWinnerEdge();
                }
            } else {
                // No selection - pre-select - for next odds click
                preSelectedSign = '-';
                injMinusBtn.style.outline = '2px solid #22c55e';
                injPlusBtn.style.outline = 'none';
            }
        });
        
        // Save to log book button (📝)
        const gwRecordBtn = document.getElementById('gwRecordBtn');
        if (gwRecordBtn) {
            gwRecordBtn.addEventListener('click', () => {

                // ── MLB GAME WINNER SAVE ──────────────────────────────
                if (currentSport === 'mlb' && currentBetType === 'winner') {
                    if (!selectedBBAwayTeam || !selectedBBHomeTeam) {
                        alert('Please select both teams first!');
                        return;
                    }
                    const awayOdds = document.getElementById('bbAwayOdds')?.value || '';
                    const homeOdds = document.getElementById('bbHomeOdds')?.value || '';
                    const winnerEl = document.getElementById('bbWinnerBox');
                    const edgeEl  = document.getElementById('bbFinalEdge');
                    const winnerText = winnerEl?.textContent || '—';
                    const edge = edgeEl?.textContent || '—';

                    if (!awayOdds || !homeOdds || winnerText === '—') {
                        alert('Please select teams and enter odds first!');
                        return;
                    }

                    // Use winner determined by Core 4 math directly
                    const awayWinPctEl = document.getElementById('bbFinalEdge');
                    const bbResultBox = document.getElementById('bbWinnerResultBox');
                    const pickIsHome = bbResultBox && bbResultBox.classList.contains('highlight-home');
                    const pickTeam   = pickIsHome ? selectedBBHomeTeam.name : selectedBBAwayTeam.name;
                    const pickOdds   = pickIsHome ? homeOdds : awayOdds;

                    const targetDay = betLog.slice().reverse().find(d => d.unlocked || d.day <= 28);

                    if (targetDay) {
                        const awayStand = [...(mlbStandings.al||[]),...(mlbStandings.nl||[])].find(t => t.abbr === selectedBBAwayTeam.prefix);
                        const homeStand = [...(mlbStandings.al||[]),...(mlbStandings.nl||[])].find(t => t.abbr === selectedBBHomeTeam.prefix);
                        const aWins = awayStand?.wins || 0;
                        const aLoss = awayStand?.losses || 0;
                        const hWins = homeStand?.wins || 0;
                        const hLoss = homeStand?.losses || 0;
                        const aL10  = awayStand?.last10 || [];
                        const hL10  = homeStand?.last10 || [];
                        const aL10w = aL10.filter(r=>r==='W').length;
                        const hL10w = hL10.filter(r=>r==='W').length;
                        const awayInjEl = document.getElementById('bbAwayInjDisplay');
                        const homeInjEl = document.getElementById('bbHomeInjDisplay');
                        const aInj = parseInt((awayInjEl?.textContent||'').replace(/[^0-9]/g,'')) || 0;
                        const hInj = parseInt((homeInjEl?.textContent||'').replace(/[^0-9]/g,'')) || 0;
                        const betId = Date.now();
                        targetDay.games.push({
                            t1:   selectedBBAwayTeam.name,
                            o1:   awayOdds,
                            s1:   awayStand?.rank || 0,
                            i1:   aInj,
                            wl1:  `${aWins}-${aLoss}`,
                            l1:   `${aL10w}-${10-aL10w}`,
                            t2:   selectedBBHomeTeam.name,
                            o2:   homeOdds,
                            s2:   homeStand?.rank || 0,
                            i2:   hInj,
                            wl2:  `${hWins}-${hLoss}`,
                            l2:   `${hL10w}-${10-hL10w}`,
                            pick: pickTeam,
                            res:  null,
                            edge: edge,
                            sport: 'mlb',
                            _id:  betId
                        });
                        saveAppState();
                        if (activeBetDay === targetDay.day) renderBetDayCards();

                        // Save full stats to Firebase
                        console.log('📊 Saving MLB stats to Firebase...', betId);
                        fetch(BACKEND_URL + '/api/mlb/gameStats', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                gameId: betId,
                                stats: {
                                    savedAt: new Date().toISOString(),
                                    awayTeam: selectedBBAwayTeam.name,
                                    homeTeam: selectedBBHomeTeam.name,
                                    odds: {
                                        away: document.getElementById('bbAwayOdds')?.value || '',
                                        home: document.getElementById('bbHomeOdds')?.value || '',
                                    },
                                    standings: {
                                        awaySeed: awayStand ? awayStand.rank : 0,
                                        awayWins: awayStand ? awayStand.wins : 0,
                                        awayLosses: awayStand ? awayStand.losses : 0,
                                        homeSeed: homeStand ? homeStand.rank : 0,
                                        homeWins: homeStand ? homeStand.wins : 0,
                                        homeLosses: homeStand ? homeStand.losses : 0,
                                    },
                                    pitching: {
                                        awayStarter: document.getElementById('bbAwayPitcherBox')?.textContent?.trim() || '',
                                        awayERA: parseFloat(document.getElementById('bbAwayStarterERA')?.value) || 0,
                                        awayIP: parseFloat(document.getElementById('bbAwayStarterIP')?.value) || 0,
                                        awayBullERA: parseFloat(document.getElementById('bbAwayBullpenERA')?.value) || 0,
                                        homeStarter: document.getElementById('bbHomePitcherBox')?.textContent?.trim() || '',
                                        homeERA: parseFloat(document.getElementById('bbHomeStarterERA')?.value) || 0,
                                        homeIP: parseFloat(document.getElementById('bbHomeStarterIP')?.value) || 0,
                                        homeBullERA: parseFloat(document.getElementById('bbHomeBullpenERA')?.value) || 0,
                                    },
                                    batting: {
                                        awayAvg: parseFloat(document.getElementById('bbAwayAvg')?.value) || 0,
                                        awayOBP: parseFloat(document.getElementById('bbAwayOBP')?.value) || 0,
                                        awaySLG: parseFloat(document.getElementById('bbAwaySLG')?.value) || 0,
                                        homeAvg: parseFloat(document.getElementById('bbHomeAvg')?.value) || 0,
                                        homeOBP: parseFloat(document.getElementById('bbHomeOBP')?.value) || 0,
                                        homeSLG: parseFloat(document.getElementById('bbHomeSLG')?.value) || 0,
                                    },
                                    injuries: {
                                        awayCount: parseInt(document.getElementById('bbAwayInjDisplay')?.textContent) || 0,
                                        homeCount: parseInt(document.getElementById('bbHomeInjDisplay')?.textContent) || 0,
                                    },
                                    series: {
                                        count: document.getElementById('bbSeriesCount')?.value || '0-0',
                                        games: parseInt(document.getElementById('bbSeriesGames')?.value) || 3,
                                    },
                                    park: {
                                        away: document.getElementById('bbParkAway')?.value || '',
                                        home: document.getElementById('bbParkHome')?.value || '',
                                    },
                                }
                            })
                        })
                        .then(r => r.json())
                        .then(data => console.log('✅ MLB stats saved to Firebase:', betId))
                        .catch(err => console.error('❌ Failed to save MLB stats:', err));

                        console.log('✅ MLB game saved:', selectedBBAwayTeam.name, 'vs', selectedBBHomeTeam.name, '→', pickTeam);

                        // ── Also add card to GAME LOG ──
                        const logContent = document.getElementById('logContent');
                        if (logContent) {
                            const pickTeamDisplay = pickTeam === 'Diamondbacks' ? 'D-Backs' : pickTeam;
                            const mlbExamples = logContent.querySelectorAll('.log-entry.mlb-permanent-example');
                            let matchingExample = null;
                            mlbExamples.forEach(example => {
                                const span = example.querySelector('span');
                                if (span && (span.textContent.trim() === pickTeam || span.textContent.trim() === pickTeamDisplay)) {
                                    matchingExample = example;
                                }
                            });
                            if (matchingExample) {
                                const logEntry = matchingExample.cloneNode(true);
                                logEntry.classList.remove('mlb-permanent-example');
                                logEntry.style.display = 'grid';
                                logEntry.setAttribute('data-odds', pickOdds);
                                const oddsSpans = logEntry.querySelectorAll('span');
                                if (oddsSpans.length >= 2) oddsSpans[1].textContent = pickOdds;
                                const betInput = logEntry.querySelector('input');
                                if (betInput) {
                                    betInput.removeAttribute('disabled');
                                    betInput.classList.add('bet-amount-input');
                                    betInput.setAttribute('readonly', 'true');
                                    betInput.style.cursor = 'default';
                                }
                                logEntry.setAttribute('data-order', ++logEntryCounter);
                                logEntryOrder.unshift(logEntry);
                                logContent.insertBefore(logEntry, logContent.firstChild);
                                setTimeout(() => { calculateBetAmounts(); }, 50);
                            }
                        }

                        gwRecordBtn.style.transform = 'scale(1.2)';
                        setTimeout(() => gwRecordBtn.style.transform = 'scale(1)', 200);
                    }
                    return;
                }

                // ── NBA GAME WINNER SAVE ──────────────────────────────
                // FORCE FRESH RECALCULATION
                calculateGameWinnerEdge();
                
                // Get all current inputs
                const awayTeamSeedInput = document.getElementById('awayTeamSeed');
                const homeTeamSeedInput = document.getElementById('homeTeamSeed');
                const awayOddsInput = document.getElementById('awayTeamOdds');
                const homeOddsInput = document.getElementById('homeTeamOdds');
                const finalEdgeValueEl = document.getElementById('finalEdgeValue');
                
                const awaySeed = parseFloat(awayTeamSeedInput?.value) || 0;
                const homeSeed = parseFloat(homeTeamSeedInput?.value) || 0;
                const awayOddsStr = awayOddsInput?.value.trim() || '';
                const homeOddsStr = homeOddsInput?.value.trim() || '';
                const finalEdgeText = finalEdgeValueEl?.textContent || '—';
                
                // Validate all inputs exist
                if (!awaySeed || !homeSeed || !awayOddsStr || !homeOddsStr || finalEdgeText === '—') {
                    alert('Please fill in all fields (seeds and odds) before saving!');
                    return;
                }
                
                // Get team names
                const awayName = selectedAwayTeam ? selectedAwayTeam.name : 'AWAY';
                const homeName = selectedHomeTeam ? selectedHomeTeam.name : 'HOME';
                const awayLogo = selectedAwayTeam ? selectedAwayTeam.logo : '';
                const homeLogo = selectedHomeTeam ? selectedHomeTeam.logo : '';
                const awayColor1 = selectedAwayTeam ? selectedAwayTeam.color1 : '#22c55e';
                const awayColor2 = selectedAwayTeam ? selectedAwayTeam.color2 : '#16a34a';
                const homeColor1 = selectedHomeTeam ? selectedHomeTeam.color1 : '#22c55e';
                const homeColor2 = selectedHomeTeam ? selectedHomeTeam.color2 : '#16a34a';
                
                // Get winner from data attribute (we store it there when calculating)
                const winnerTeamFromCalc = finalEdgeValueEl.dataset.winner || '';
                
                // Determine which team won based on the calculation
                const pickHome = winnerTeamFromCalc === homeName;
                
                // Determine winner and their odds
                let winnerName, winnerOdds, winnerLogo, winnerWordmark, winnerColor1, winnerColor2;
                if (pickHome) {
                    winnerName = homeName;
                    winnerOdds = homeOddsStr;
                    winnerLogo = homeLogo;
                    winnerWordmark = selectedHomeTeam ? selectedHomeTeam.wordmark : '';
                    winnerColor1 = homeColor1;
                    winnerColor2 = homeColor2;
                } else {
                    winnerName = awayName;
                    winnerOdds = awayOddsStr;
                    winnerLogo = awayLogo;
                    winnerWordmark = selectedAwayTeam ? selectedAwayTeam.wordmark : '';
                    winnerColor1 = awayColor1;
                    winnerColor2 = awayColor2;
                }
                
                // Add to log book
                const logContent = document.getElementById('logContent');
                if (logContent) {
                    // Find the matching permanent example for this team
                    const permanentExamples = logContent.querySelectorAll('.permanent-example');
                    let matchingExample = null;
                    
                    // Search through all permanent examples to find the one with matching team name
                    permanentExamples.forEach(example => {
                        const teamNameSpan = example.querySelector('span');
                        if (teamNameSpan && teamNameSpan.textContent.trim() === winnerName) {
                            matchingExample = example;
                        }
                    });
                    
                    if (matchingExample) {
                        // Clone the matching permanent example
                        const logEntry = matchingExample.cloneNode(true);
                        
                        // Remove the permanent-example class and make it visible
                        logEntry.classList.remove('permanent-example');
                        logEntry.style.display = 'grid'; // Show the cloned entry
                        
                        // Get the recommendation type from winnerExtraBox
                        const winnerExtraBox = document.getElementById('winnerExtraBox');
                        const recommendation = winnerExtraBox?.querySelector('.winner-extra-text')?.textContent.trim() || 'CAREFUL';
                        
                        // Add bet type, odds, and confidence as data attributes
                        logEntry.setAttribute('data-bet-type', recommendation);
                        logEntry.setAttribute('data-odds', winnerOdds);
                        const confScore = parseInt(winnerExtraBox?.dataset?.confidenceScore || '0');
                        logEntry.setAttribute('data-confidence', confScore);
                        logEntry.setAttribute('data-kelly', calcKelly(winnerOdds, confScore / 100).toFixed(4));
                        
                        // Update the odds in the cloned entry
                        const oddsSpans = logEntry.querySelectorAll('span');
                        if (oddsSpans.length >= 2) {
                            oddsSpans[1].textContent = winnerOdds; // Second span is the odds
                        }
                        
                        // Enable the bet amount input (permanent examples have it disabled)
                        const betInput = logEntry.querySelector('input');
                        if (betInput) {
                            betInput.removeAttribute('disabled');
                            betInput.classList.add('bet-amount-input'); // Add class for calculation
                            betInput.setAttribute('readonly', 'true'); // Make it readonly since it's auto-calculated
                            betInput.style.cursor = 'default';
                        }
                        
                        logEntry.setAttribute('data-order', ++logEntryCounter);
                        logEntryOrder.unshift(logEntry);
                        logContent.insertBefore(logEntry, logContent.firstChild);
                        sortLogByConfidence();
                        
                        // Recalculate all bet amounts
                        setTimeout(() => {
                            calculateBetAmounts();
                        }, 50);

                        // Push to bet log — find newest unlocked/active day
                        const targetDay = betLog.slice().reverse().find(d => d.unlocked || d.day <= 28);
                        if (targetDay) {
                            const betId = Date.now();
                            const aWins = selectedAwayTeam ? (selectedAwayTeam.displayWins !== undefined ? selectedAwayTeam.displayWins : selectedAwayTeam.wins) : 0;
                            const aLoss = selectedAwayTeam ? (selectedAwayTeam.displayLosses !== undefined ? selectedAwayTeam.displayLosses : selectedAwayTeam.losses) : 0;
                            const hWins = selectedHomeTeam ? (selectedHomeTeam.displayWins !== undefined ? selectedHomeTeam.displayWins : selectedHomeTeam.wins) : 0;
                            const hLoss = selectedHomeTeam ? (selectedHomeTeam.displayLosses !== undefined ? selectedHomeTeam.displayLosses : selectedHomeTeam.losses) : 0;
                            const aL10 = selectedAwayTeam?.last10Results || [];
                            const hL10 = selectedHomeTeam?.last10Results || [];
                            const aL10w = aL10.filter(r=>r==='W').length;
                            const hL10w = hL10.filter(r=>r==='W').length;
                            targetDay.games.push({
                                t1: awayName, o1: awayOddsStr,
                                s1: parseFloat(awayTeamSeedInput?.value)||0,
                                i1: awayInjuries||0,
                                wl1: `${aWins}-${aLoss}`,
                                l1: `${aL10w}-${10-aL10w}`,
                                t2: homeName, o2: homeOddsStr,
                                s2: parseFloat(homeTeamSeedInput?.value)||0,
                                i2: homeInjuries||0,
                                wl2: `${hWins}-${hLoss}`,
                                l2: `${hL10w}-${10-hL10w}`,
                                pick: winnerName, res: null, _id: betId, conf: confScore, sport: currentSport
                            });
                            saveAppState();
                            if (activeBetDay === targetDay.day) renderBetDayCards();

                            // Backup NBA game stats to Firebase + local JSON
                            console.log('📊 Saving NBA stats to Firebase...', betId);
                            fetch(BACKEND_URL + '/api/nba/gameStats', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    gameId: betId,
                                    stats: {
                                        savedAt: new Date().toISOString(),
                                        awayTeam: awayName,
                                        homeTeam: homeName,
                                        odds: {
                                            away: awayOddsStr,
                                            home: homeOddsStr,
                                        },
                                        seeds: {
                                            away: awaySeed,
                                            home: homeSeed,
                                        },
                                        records: {
                                            awayWins: aWins,
                                            awayLosses: aLoss,
                                            homeWins: hWins,
                                            homeLosses: hLoss,
                                        },
                                        last10: {
                                            awayWins: aL10w,
                                            awayLosses: 10 - aL10w,
                                            homeWins: hL10w,
                                            homeLosses: 10 - hL10w,
                                        },
                                        injuries: {
                                            away: awayInjuries || 0,
                                            home: homeInjuries || 0,
                                        },
                                        confidence: confScore,
                                        pick: winnerName,
                                        sport: currentSport
                                    }
                                })
                            })
                            .then(r => r.json())
                            .then(data => console.log('✅ NBA stats saved to Firebase:', betId))
                            .catch(err => console.error('❌ Failed to save NBA stats:', err));
                        }

                        // Visual feedback
                        gwRecordBtn.style.transform = 'scale(1.2)';
                        setTimeout(() => {
                            gwRecordBtn.style.transform = 'scale(1)';
                        }, 200);
                    }
                }
            });
        }
        
        // ===== SAVE BET TO HISTORY (+ BUTTON) =====
        const gwSaveBtn = document.getElementById('gwSaveBtn');
        if (gwSaveBtn) {
            gwSaveBtn.addEventListener('click', () => {
                const betHistoryContent = document.getElementById('betHistoryContent');
                if (!betHistoryContent) return;
                
                // Get both teams
                const awayName = selectedAwayTeam ? selectedAwayTeam.name : null;
                const homeName = selectedHomeTeam ? selectedHomeTeam.name : null;
                const awayOdds = document.getElementById('awayTeamOdds')?.value.trim() || '';
                const homeOdds = document.getElementById('homeTeamOdds')?.value.trim() || '';
                
                // Get the winner from the edge calculation
                const finalEdgeValueEl = document.getElementById('finalEdgeValue');
                const pickedWinner = finalEdgeValueEl?.dataset.winner || homeName; // Default to home if not set
                const pickedOdds = pickedWinner === awayName ? awayOdds : homeOdds;
                
                // Get bet amount from log book (if it exists)
                const logContent = document.getElementById('logContent');
                let betAmount = 0;
                if (logContent) {
                    const logEntries = logContent.querySelectorAll('.log-entry:not(.permanent-example)');
                    for (const entry of logEntries) {
                        const betInput = entry.querySelector('.bet-amount-input');
                        if (betInput && betInput.value) {
                            const amount = parseFloat(betInput.value.replace('$', ''));
                            if (!isNaN(amount)) {
                                betAmount = amount;
                                break; // Get the first one (most recent)
                            }
                        }
                    }
                }
                
                // Calculate potential payout
                let potentialWin = 0;
                if (betAmount > 0) {
                    const odds = parseFloat(pickedOdds.replace('+', '').replace('-', ''));
                    if (pickedOdds.includes('-')) {
                        // Negative odds: risk more to win less
                        potentialWin = (betAmount / odds) * 100;
                    } else {
                        // Positive odds: risk less to win more
                        potentialWin = (betAmount * odds) / 100;
                    }
                }
                
                if (!awayName || !homeName || !awayOdds || !homeOdds) {
                    alert('Please select both teams and enter odds before saving!');
                    return;
                }
                
                // Remove empty state if it exists
                const emptyState = betHistoryContent.querySelector('.empty-state');
                if (emptyState) {
                    emptyState.remove();
                }
                
                // Find the "create new bet" button
                const createNewBet = betHistoryContent.querySelector('.create-new-bet');
                
                // Create bet history entry with BOTH teams
                const historyEntry = document.createElement('div');
                historyEntry.className = 'history-entry';
                historyEntry.dataset.awayTeam = awayName;
                historyEntry.dataset.homeTeam = homeName;
                historyEntry.dataset.awayOdds = awayOdds;
                historyEntry.dataset.homeOdds = homeOdds;
                historyEntry.dataset.pickedWinner = pickedWinner; // Store who we picked
                historyEntry.dataset.result = 'pending'; // pending, win, loss
                
                historyEntry.style.cssText = `
                    background: linear-gradient(135deg, #1f1f1f, #2a2a2a);
                    border-radius: 16px;
                    padding: 16px;
                    margin-bottom: 12px;
                    border: 2px solid #3a3a3a;
                    position: relative;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
                    transition: all 0.3s ease;
                `;
                
                historyEntry.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <img src="${selectedAwayTeam.logo}" style="width: 28px; height: 28px;">
                            <div>
                                <div style="color: #fff; font-weight: 700; font-size: 14px;">${awayName}</div>
                                <div style="color: #888; font-size: 12px; font-weight: 600;">${awayOdds}</div>
                            </div>
                        </div>
                        <div style="color: #666; font-size: 14px; font-weight: 700;">VS</div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="text-align: right;">
                                <div style="color: #fff; font-weight: 700; font-size: 14px;">${homeName}</div>
                                <div style="color: #888; font-size: 12px; font-weight: 600;">${homeOdds}</div>
                            </div>
                            <img src="${selectedHomeTeam.logo}" style="width: 28px; height: 28px;">
                        </div>
                    </div>
                    ${betAmount > 0 ? `
                        <div style="background: rgba(34, 197, 94, 0.15); border: 2px solid #22c55e; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <span style="color: #22c55e; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">PICK</span>
                                <div style="color: #fff; font-weight: 700; font-size: 16px; margin-top: 2px;">${pickedWinner}</div>
                            </div>
                            <div style="text-align: right;">
                                <span style="color: #888; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">PAYOUT</span>
                                <div style="color: #22c55e; font-weight: 700; font-size: 16px; margin-top: 2px;">$${potentialWin.toFixed(2)}</div>
                            </div>
                        </div>
                    ` : `
                        <div style="background: rgba(34, 197, 94, 0.15); border: 2px solid #22c55e; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px;">
                            <span style="color: #22c55e; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">PICK</span>
                            <div style="color: #fff; font-weight: 700; font-size: 16px; margin-top: 2px;">${pickedWinner}</div>
                        </div>
                    `}
                    <div style="display: flex; gap: 8px; justify-content: center;">
                        <button class="mark-win-btn" style="flex: 1; background: linear-gradient(135deg, #22c55e, #16a34a); border: none; border-radius: 10px; padding: 12px; color: #fff; font-weight: 700; font-size: 14px; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 8px rgba(34, 197, 94, 0.3); text-transform: uppercase; letter-spacing: 0.5px;">WIN</button>
                        <button class="mark-loss-btn" style="flex: 1; background: linear-gradient(135deg, #ef4444, #dc2626); border: none; border-radius: 10px; padding: 12px; color: #fff; font-weight: 700; font-size: 14px; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3); text-transform: uppercase; letter-spacing: 0.5px;">LOSS</button>
                    </div>
                `;
                
                // Add to bet history (after the "create new bet" button)
                // Need to wait a tiny bit for DOM to update
                setTimeout(() => {
                    const createNewBet = betHistoryContent.querySelector('.create-new-bet, .create-new-bet-btn');
                    if (createNewBet) {
                        createNewBet.after(historyEntry);
                        console.log('✅ Added bet after create button');
                    } else {
                        betHistoryContent.appendChild(historyEntry);
                        console.log('✅ Added bet to end');
                    }
                }, 10);
                
                // Handle WIN button
                const winBtn = historyEntry.querySelector('.mark-win-btn');
                winBtn.addEventListener('click', () => {
                    const pickedWinner = historyEntry.dataset.pickedWinner;
                    const loser = pickedWinner === historyEntry.dataset.awayTeam ? historyEntry.dataset.homeTeam : historyEntry.dataset.awayTeam;
                    
                    // Update last-10 records for BOTH teams
                    updateLast10Records(pickedWinner, loser);
                    
                    // Update YOUR W-L record
                    const recordWins = document.getElementById('recordWins');
                    if (recordWins) {
                        recordWins.textContent = parseInt(recordWins.textContent) + 1;
                    }
                    
                    console.log(`✅ YOUR BET WON! ${pickedWinner} beat ${loser}`);
                    console.log(`📊 Team records updated: ${pickedWinner} +W, ${loser} +L`);
                    
                    // Show updated records
                    const winnerTeam = nbaTeams.find(t => t.name === pickedWinner);
                    const loserTeam = nbaTeams.find(t => t.name === loser);
                    if (winnerTeam) {
                        const last10 = winnerTeam.last10Results || [];
                        const wins = last10.filter(r => r === 'W').length;
                        console.log(`   ${pickedWinner} last-10: ${wins}-${last10.length - wins}`);
                    }
                    if (loserTeam) {
                        const last10 = loserTeam.last10Results || [];
                        const wins = last10.filter(r => r === 'W').length;
                        console.log(`   ${loser} last-10: ${wins}-${last10.length - wins}`);
                    }
                    
                    // Delete entry with animation
                    historyEntry.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    historyEntry.style.opacity = '0';
                    historyEntry.style.transform = 'translateX(100px)';
                    
                    setTimeout(() => {
                        historyEntry.remove();
                    }, 300);
                });
                
                // Handle LOSS button
                const lossBtn = historyEntry.querySelector('.mark-loss-btn');
                lossBtn.addEventListener('click', () => {
                    const pickedWinner = historyEntry.dataset.pickedWinner;
                    const actualWinner = pickedWinner === historyEntry.dataset.awayTeam ? historyEntry.dataset.homeTeam : historyEntry.dataset.awayTeam;
                    
                    // Update last-10 records for BOTH teams (picked team lost, other team won)
                    updateLast10Records(actualWinner, pickedWinner);
                    
                    // Update YOUR W-L record
                    const recordLosses = document.getElementById('recordLosses');
                    if (recordLosses) {
                        recordLosses.textContent = parseInt(recordLosses.textContent) + 1;
                    }
                    
                    console.log(`❌ YOUR BET LOST! ${pickedWinner} lost to ${actualWinner}`);
                    console.log(`📊 Team records updated: ${actualWinner} +W, ${pickedWinner} +L`);
                    
                    // Show updated records
                    const winnerTeam = nbaTeams.find(t => t.name === actualWinner);
                    const loserTeam = nbaTeams.find(t => t.name === pickedWinner);
                    if (winnerTeam) {
                        const last10 = winnerTeam.last10Results || [];
                        const wins = last10.filter(r => r === 'W').length;
                        console.log(`   ${actualWinner} last-10: ${wins}-${last10.length - wins}`);
                    }
                    if (loserTeam) {
                        const last10 = loserTeam.last10Results || [];
                        const wins = last10.filter(r => r === 'W').length;
                        console.log(`   ${pickedWinner} last-10: ${wins}-${last10.length - wins}`);
                    }
                    
                    // Delete entry with animation
                    historyEntry.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    historyEntry.style.opacity = '0';
                    historyEntry.style.transform = 'translateX(100px)';
                    
                    setTimeout(() => {
                        historyEntry.remove();
                    }, 300);
                });
                
                // Visual feedback
                gwSaveBtn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    gwSaveBtn.style.transform = 'scale(1)';
                }, 200);
                
                console.log('💾 Saved matchup to bet history');
            });
        }
        
        // ===== AUTO-UPDATE LAST-10 SYSTEM =====
        // NOTE: This function will be called when you mark a game as W/L in the future
        // For now, it's set up and ready to use
        function updateLast10Records(winnerName, loserName) {
            console.log(`🔄 updateLast10Records called: Winner="${winnerName}", Loser="${loserName}"`);
            
            // Find winner and loser teams
            const winnerTeam = nbaTeams.find(t => t.name === winnerName);
            const loserTeam = nbaTeams.find(t => t.name === loserName);
            
            console.log(`   Found winner team:`, winnerTeam ? winnerTeam.name : 'NOT FOUND');
            console.log(`   Found loser team:`, loserTeam ? loserTeam.name : 'NOT FOUND');
            
            if (winnerTeam) {
                // Update last-10
                if (!winnerTeam.last10Results) winnerTeam.last10Results = [];
                winnerTeam.last10Results.push('W');
                if (winnerTeam.last10Results.length > 10) {
                    winnerTeam.last10Results.shift(); // Remove oldest
                }
                
                // Update overall W-L record
                winnerTeam.wins = (winnerTeam.wins || 0) + 1;
                
                console.log(`   ${winnerName} last10: ${winnerTeam.last10Results.join(',')}`);
                console.log(`   ${winnerName} overall: ${winnerTeam.wins}-${winnerTeam.losses}`);
            }
            
            if (loserTeam) {
                // Update last-10
                if (!loserTeam.last10Results) loserTeam.last10Results = [];
                loserTeam.last10Results.push('L');
                if (loserTeam.last10Results.length > 10) {
                    loserTeam.last10Results.shift(); // Remove oldest
                }
                
                // Update overall W-L record
                loserTeam.losses = (loserTeam.losses || 0) + 1;
                
                console.log(`   ${loserName} last10: ${loserTeam.last10Results.join(',')}`);
                console.log(`   ${loserName} overall: ${loserTeam.wins}-${loserTeam.losses}`);
            }
            
            // Save to localStorage
            const last10Data = nbaTeams.map(t => ({
                name: t.name,
                wins: t.wins,
                losses: t.losses,
                last10Results: t.last10Results || []
            }));
            localStorage.setItem('nbaTeamsLast10', JSON.stringify(last10Data));
            console.log(`   ✅ Saved to localStorage (including overall W-L)`);
            
            console.log(`✅ Updated last-10 AND overall W-L: ${winnerName} (+W), ${loserName} (+L)`);
        }
        
        // Load last-10 records from localStorage on startup
        window.addEventListener('DOMContentLoaded', () => {
            // FORCE SAVE correct data to localStorage (overwrites old data)
            const correctData = nbaTeams.map(t => ({
                name: t.name,
                wins: t.wins,
                losses: t.losses,
                last10Results: t.last10Results || []
            }));
            localStorage.setItem('nbaTeamsLast10', JSON.stringify(correctData));
            console.log('🔄 FORCE SAVED correct team data to localStorage');
            
            const savedLast10 = localStorage.getItem('nbaTeamsLast10');
            if (savedLast10) {
                try {
                    const last10Data = JSON.parse(savedLast10);
                    console.log('📊 Loading last-10 AND overall W-L records from localStorage...');
                    let loadedCount = 0;
                    nbaTeams.forEach(team => {
                        const saved = last10Data.find(t => t.name === team.name);
                        if (saved) {
                            if (saved.last10Results) {
                                team.last10Results = saved.last10Results;
                            }
                            if (saved.wins !== undefined) {
                                team.wins = saved.wins;
                            }
                            if (saved.losses !== undefined) {
                                team.losses = saved.losses;
                            }
                            loadedCount++;
                            const wins = (saved.last10Results || []).filter(r => r === 'W').length;
                            const losses = (saved.last10Results || []).length - wins;
                            console.log(`   ${team.name}: ${team.wins}-${team.losses} overall | Last-10: ${wins}-${losses} (${(saved.last10Results || []).join(',')})`);
                        }
                    });
                    console.log(`✅ Loaded ${loadedCount} teams' records from localStorage`);
                } catch (e) {
                    console.error('Error loading last-10 data:', e);
                }
            } else {
                console.log('⚠️ No saved last-10 data in localStorage - using default data');
            }
            
        });
        
        // ===== BET AMOUNT CALCULATION SYSTEM =====
        function calculateBetAmounts() {
            const gwBankroll = document.getElementById('gwBankroll');
            const logContent = document.getElementById('logContent');
            if (!gwBankroll || !logContent) return;

            const bankroll = parseFloat(gwBankroll.textContent.replace('$', '')) || 100;
            const entries = Array.from(logContent.querySelectorAll('.log-entry:not(.permanent-example)'));
            if (entries.length === 0) return;

            const sorted = [...entries].sort((a,b) => parseInt(b.getAttribute('data-confidence')||'0') - parseInt(a.getAttribute('data-confidence')||'0'));

            if (currentLogSort === 'kelly') {
                // Raw Kelly fraction per pick using confidence + odds
                const rawFracs = entries.map(entry => {
                    const conf = parseInt(entry.getAttribute('data-confidence')||'0');
                    const odds = entry.getAttribute('data-odds')||'0';
                    const f = calcKellyEdge(odds, conf / 100);
                    return Math.max(0, f);
                });
                const totalFrac = rawFracs.reduce((s,f) => s + f, 0);
                entries.forEach((entry, i) => {
                    const betInput = entry.querySelector('input');
                    if (!betInput) return;
                    const conf = parseInt(entry.getAttribute('data-confidence')||'0');
                    const odds = entry.getAttribute('data-odds')||'0';
                    const edge = calcKellyEdge(odds, conf / 100);
                    const frac = totalFrac > 0 ? rawFracs[i] / totalFrac : 1 / entries.length;
                    betInput.removeAttribute('disabled');
                    betInput.value = '$' + (bankroll * frac).toFixed(2) + (edge < 0 ? ' ⚠️' : '');
                });
            } else if (currentLogSort === 'odds') {
                // Best Odds: Justin logic — top 5 by odds, 20% each
                const byOdds = [...entries].sort((a,b) => {
                    const toNum = el => parseInt((el.getAttribute('data-odds')||'0').replace(/[^0-9+\-]/g,'')) || 0;
                    return toNum(b) - toNum(a);
                });
                const top5 = new Set(byOdds.slice(0, 5));
                entries.forEach(entry => {
                    const betInput = entry.querySelector('input');
                    if (!betInput) return;
                    betInput.removeAttribute('disabled');
                    betInput.value = top5.has(entry) ? '$' + (bankroll * 0.20).toFixed(2) : '$0.00';
                });
            } else {
                // Equal tab: equal split (Rob logic)
                const stake = bankroll / entries.length;
                entries.forEach(entry => {
                    const betInput = entry.querySelector('input');
                    if (!betInput) return;
                    betInput.removeAttribute('disabled');
                    betInput.value = '$' + stake.toFixed(2);
                });
            }

            renderConfChips();
        }
        
        // Render CONF chips and rank badges on all log entries
        function sortLogByConfidence() {
            const logContent = document.getElementById('logContent');
            if (!logContent) return;
            const entries = Array.from(logContent.querySelectorAll('.log-entry:not(.permanent-example)'));

            function oddsValue(entry) {
                // parse odds string like "+450" or "-200", higher payout = bigger positive number
                const oddsStr = entry.getAttribute('data-odds') || '0';
                const n = parseInt(oddsStr);
                if (isNaN(n)) return 0;
                // convert american odds to implied payout per $100
                return n > 0 ? n : Math.round(10000 / Math.abs(n));
            }

            entries.sort((a, b) => {
                const confA = parseInt(a.getAttribute('data-confidence') || '0');
                const confB = parseInt(b.getAttribute('data-confidence') || '0');
                if (confB !== confA) return confB - confA; // highest confidence first
                return oddsValue(b) - oddsValue(a); // tie: bigger payout first
            });

            // append in sorted order (highest first at top)
            entries.forEach(e => logContent.appendChild(e));
        }

        function renderConfChips() {
            const logContent = document.getElementById('logContent');
            if (!logContent) return;
            const entries = Array.from(logContent.querySelectorAll('.log-entry:not(.permanent-example)'));

            entries.forEach(e => {
                e.querySelectorAll('.rank-badge, .conf-chip').forEach(b => b.remove());
                e.style.position = 'relative';
            });

            const bettable = entries.filter(e => e.getAttribute('data-bet-type') !== 'SKIP');
            bettable.sort((a, b) => parseInt(b.getAttribute('data-confidence') || '0') - parseInt(a.getAttribute('data-confidence') || '0'));

            const rankConfigs = [
                { color: '#f59e0b', glow: '#f59e0b99', label: '🔒 LOCK' },
                { color: '#c0c0c0', glow: '#c0c0c066', label: '② TOP'  },
                { color: '#cd7f32', glow: '#cd7f3266', label: '③ SOLID' },
            ];

            bettable.slice(0, 3).forEach((entry, i) => {
                const cfg = rankConfigs[i];
                entry.style.outline = `1.5px solid ${cfg.color}55`;
                const badge = document.createElement('div');
                badge.className = 'rank-badge';
                badge.style.cssText = `position:absolute;top:-10px;right:10px;background:${cfg.color};color:#000;font-size:10px;font-weight:800;padding:2px 8px;border-radius:20px;letter-spacing:1px;z-index:10;box-shadow:0 0 8px ${cfg.glow};pointer-events:none;`;
                badge.textContent = cfg.label;
                entry.appendChild(badge);
            });

            entries.forEach(e => {
                const conf = parseInt(e.getAttribute('data-confidence') || '0');
                const confColor = conf >= 60 ? '#f59e0b' : conf >= 45 ? '#22c55e' : conf >= 30 ? '#888' : '#555';
                const chip = document.createElement('div');
                chip.className = 'conf-chip';
                chip.style.cssText = `position:absolute;top:-9px;left:10px;background:#111;border:1px solid ${confColor};color:${confColor};font-size:9px;font-weight:800;padding:1px 7px;border-radius:10px;letter-spacing:1px;z-index:10;pointer-events:none;`;
                chip.textContent = `CONF ${conf}`;
                e.appendChild(chip);
            });
        }

        function calculateGroupBets(games, budget) {
            if (games.length === 0) return;
            
            // Step 1: Calculate 100 / odds for each game (Math.abs - category handles risk)
            const oddsValues = games.map(game => {
                const oddsStr = game.getAttribute('data-odds') || '-110';
                const odds = Math.abs(parseFloat(oddsStr));
                return 100 / odds;
            });
            
            // Step 2: Sum all values
            const total = oddsValues.reduce((sum, val) => sum + val, 0);
            
            // Step 3: Calculate percentage and bet amount for each game
            games.forEach((game, index) => {
                const percentage = oddsValues[index] / total;
                const betAmount = percentage * budget;
                
                // Update the input field
                const betInput = game.querySelector('.bet-amount-input');
                if (betInput) {
                    betInput.value = '$' + betAmount.toFixed(2);
                }
            });
        }
        
        // Watch for bankroll changes and recalculate
        window.addEventListener('DOMContentLoaded', () => {
            const gwBankroll = document.getElementById('gwBankroll');
            if (gwBankroll) {
                // Observe changes to bankroll
                const observer = new MutationObserver(() => {
                    calculateBetAmounts();
                });
                observer.observe(gwBankroll, { childList: true, characterData: true, subtree: true });
            }
            
            // Add delete buttons to log entries
            const logContent = document.getElementById('logContent');
            if (logContent) {
                // Use MutationObserver to add swipe handlers to new entries
                const logObserver = new MutationObserver(() => {
                    addSwipeToDelete();
                });
                logObserver.observe(logContent, { childList: true });
                
                // Add to existing entries
                addSwipeToDelete();
            }
        });
        
        // ===== SWIPE TO REVEAL DELETE BUTTON =====
        function addSwipeToDelete() {
            const logContent = document.getElementById('logContent');
            if (!logContent) {
                console.log('❌ logContent not found');
                return;
            }
            
            const logEntries = logContent.querySelectorAll('.log-entry:not(.permanent-example)');
            console.log(`🗑️ Adding swipe-to-delete to ${logEntries.length} entries`);
            
            logEntries.forEach(entry => {
                // Skip if already has swipe handler
                if (entry.dataset.swipeEnabled) return;
                entry.dataset.swipeEnabled = 'true';
                
                // Make entry position relative and add overflow
                entry.style.position = 'relative';
                entry.style.overflow = 'visible';
                
                // Don't add deleteBtn inside entry - keep entry clean
                entry.style.position = 'relative';
                
                // Create delete button container OUTSIDE entry
                const deleteContainer = document.createElement('div');
                deleteContainer.className = 'delete-container';
                deleteContainer.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 100%;
                    width: 80px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.2s ease;
                `;
                
                const deleteBtn = document.createElement('div');
                deleteBtn.className = 'delete-btn';
                deleteBtn.innerHTML = '🗑️';
                deleteBtn.style.cssText = `
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    cursor: pointer;
                    border-radius: 8px;
                    border: 3px solid #fff;
                    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.5);
                    transition: all 0.2s ease;
                    pointer-events: auto;
                `;
                
                deleteContainer.appendChild(deleteBtn);
                entry.style.position = 'relative';
                entry.parentElement.style.position = 'relative';
                entry.appendChild(deleteContainer);
                
                // Function to show/hide trash based on swipe
                const updateTrashVisibility = (deltaX) => {
                    if (deltaX < -20) {
                        deleteContainer.style.opacity = '1';
                        deleteContainer.style.pointerEvents = 'auto';
                    } else {
                        deleteContainer.style.opacity = '0';
                        deleteContainer.style.pointerEvents = 'none';
                    }
                };
                
                // Swipe variables
                let startX = 0;
                let currentX = 0;
                let isDragging = false;
                
                // TOUCH EVENTS
                entry.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                    isDragging = true;
                    entry.style.transition = 'none';
                    deleteContainer.style.transition = 'opacity 0.2s ease';
                });
                
                entry.addEventListener('touchmove', (e) => {
                    if (!isDragging) return;
                    currentX = e.touches[0].clientX;
                    const deltaX = currentX - startX;
                    
                    // Only allow left swipe
                    if (deltaX < 0) {
                        const moveX = Math.max(deltaX, -80);
                        entry.style.transform = `translateX(${moveX}px)`;
                        updateTrashVisibility(deltaX);
                    }
                });
                
                entry.addEventListener('touchend', () => {
                    if (!isDragging) return;
                    isDragging = false;
                    
                    const deltaX = currentX - startX;
                    entry.style.transition = 'transform 0.3s ease';
                    
                    // If swiped more than 40px, reveal delete
                    if (deltaX < -40) {
                        entry.style.transform = 'translateX(-80px)';
                        deleteContainer.style.opacity = '1';
                        deleteContainer.style.pointerEvents = 'auto';
                    } else {
                        entry.style.transform = 'translateX(0)';
                        deleteContainer.style.opacity = '0';
                        deleteContainer.style.pointerEvents = 'none';
                    }
                });
                
                // MOUSE EVENTS
                entry.addEventListener('mousedown', (e) => {
                    // Don't trigger if clicking delete button
                    if (e.target.closest('.delete-btn')) return;
                    
                    startX = e.clientX;
                    isDragging = true;
                    entry.style.transition = 'none';
                    deleteContainer.style.transition = 'opacity 0.2s ease';
                    e.preventDefault();
                });
                
                document.addEventListener('mousemove', (e) => {
                    if (!isDragging || !entry.dataset.swipeEnabled) return;
                    currentX = e.clientX;
                    const deltaX = currentX - startX;
                    
                    // Only allow left swipe
                    if (deltaX < 0) {
                        const moveX = Math.max(deltaX, -80);
                        entry.style.transform = `translateX(${moveX}px)`;
                        updateTrashVisibility(deltaX);
                    }
                });
                
                document.addEventListener('mouseup', () => {
                    if (!isDragging) return;
                    isDragging = false;
                    
                    const deltaX = currentX - startX;
                    entry.style.transition = 'transform 0.3s ease';
                    
                    // If swiped more than 40px, reveal delete
                    if (deltaX < -40) {
                        entry.style.transform = 'translateX(-80px)';
                        deleteContainer.style.opacity = '1';
                        deleteContainer.style.pointerEvents = 'auto';
                    } else {
                        entry.style.transform = 'translateX(0)';
                        deleteContainer.style.opacity = '0';
                        deleteContainer.style.pointerEvents = 'none';
                    }
                    
                    startX = 0;
                    currentX = 0;
                });
                
                // DELETE BUTTON CLICK
                deleteBtn.addEventListener('mouseenter', () => {
                    deleteBtn.style.background = '#dc2626';
                });
                deleteBtn.addEventListener('mouseleave', () => {
                    deleteBtn.style.background = '#ef4444';
                });
                
                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Get team name before removing
                    const teamNameEl = entry.querySelector('span');
                    const teamName = teamNameEl ? teamNameEl.textContent.trim() : '';
                    // Animate out and remove
                    entry.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                    entry.style.transform = 'translateX(-100%)';
                    entry.style.opacity = '0';
                    setTimeout(() => {
                        entry.remove();
                        // Save deleted team to Firebase hidden list
                        if (teamName) {
                            try {
                                fetch(BACKEND_URL + '/api/deletedLogbook').then(r => r.json()).then(existing => {
                                    const deleted = existing || [];
                                    if (!deleted.includes(teamName)) deleted.push(teamName);
                                    fetch(BACKEND_URL + '/api/deletedLogbook', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(deleted)
                                    });
                                });
                            } catch(e) {}
                        }
                        saveAppState();
                    }, 300);
                });
                
                console.log('✅ Swipe-to-delete added');
            });
        }
        
        // ===== SWIPE GESTURES FOR SEED INPUTS =====
        const awayTeamSeedInput = document.getElementById('awayTeamSeed');
        const homeTeamSeedInput = document.getElementById('homeTeamSeed');
        
        if (awayTeamSeedInput) {
            let awaySeedOriginal = '';
            let awaySeedTimeout = null;
            
            awayTeamSeedInput.addEventListener('touchstart', (e) => {
                const touch = e.touches[0];
                awayTeamSeedInput.dataset.startY = touch.clientY;
            });
            
            awayTeamSeedInput.addEventListener('touchend', (e) => {
                const touch = e.changedTouches[0];
                const startY = parseFloat(awayTeamSeedInput.dataset.startY);
                const deltaY = startY - touch.clientY;
                
                // Swipe UP (deltaY > 50) to show last 10 record
                if (deltaY > 50 && selectedAwayTeam) {
                    const last10 = selectedAwayTeam.last10Results || [];
                    const wins = last10.filter(r => r === 'W').length;
                    const losses = last10.length - wins;
                    
                    // Save original value
                    awaySeedOriginal = awayTeamSeedInput.value;
                    
                    // Show record
                    awayTeamSeedInput.value = `${wins}-${losses}`;
                    awayTeamSeedInput.style.color = '#22c55e';
                    awayTeamSeedInput.style.fontWeight = '700';
                    
                    // Reset after 5 seconds
                    clearTimeout(awaySeedTimeout);
                    awaySeedTimeout = setTimeout(() => {
                        awayTeamSeedInput.value = awaySeedOriginal;
                        awayTeamSeedInput.style.color = '';
                        awayTeamSeedInput.style.fontWeight = '';
                    }, 5000);
                }
            });
        }
        
        if (homeTeamSeedInput) {
            let homeSeedOriginal = '';
            let homeSeedTimeout = null;
            
            homeTeamSeedInput.addEventListener('touchstart', (e) => {
                const touch = e.touches[0];
                homeTeamSeedInput.dataset.startY = touch.clientY;
            });
            
            homeTeamSeedInput.addEventListener('touchend', (e) => {
                const touch = e.changedTouches[0];
                const startY = parseFloat(homeTeamSeedInput.dataset.startY);
                const deltaY = startY - touch.clientY;
                
                // Swipe DOWN (deltaY < -50) to show last 10 record
                if (deltaY < -50 && selectedHomeTeam) {
                    const last10 = selectedHomeTeam.last10Results || [];
                    const wins = last10.filter(r => r === 'W').length;
                    const losses = last10.length - wins;
                    
                    // Save original value
                    homeSeedOriginal = homeTeamSeedInput.value;
                    
                    // Show record
                    homeTeamSeedInput.value = `${wins}-${losses}`;
                    homeTeamSeedInput.style.color = '#22c55e';
                    homeTeamSeedInput.style.fontWeight = '700';
                    
                    // Reset after 5 seconds
                    clearTimeout(homeSeedTimeout);
                    homeSeedTimeout = setTimeout(() => {
                        homeTeamSeedInput.value = homeSeedOriginal;
                        homeTeamSeedInput.style.color = '';
                        homeTeamSeedInput.style.fontWeight = '';
                    }, 5000);
                }
            });
        }

        // ===== NBA STANDINGS =====
        const nbaStandings = {
            east: [
                { rank:1,  name:'Pistons',   wins:45, losses:14, pct:0.763, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:2,  name:'Celtics',   wins:40, losses:20, pct:0.667, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:3,  name:'Knicks',    wins:39, losses:22, pct:0.639, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:4,  name:'Cavaliers', wins:38, losses:24, pct:0.613, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:5,  name:'Raptors',   wins:35, losses:25, pct:0.583, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:6,  name:'76ers',     wins:33, losses:27, pct:0.550, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:7,  name:'Heat',      wins:32, losses:29, pct:0.525, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:8,  name:'Magic',     wins:31, losses:28, pct:0.525, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:9,  name:'Hawks',     wins:31, losses:31, pct:0.500, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:10, name:'Hornets',   wins:30, losses:31, pct:0.492, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:11, name:'Bucks',     wins:26, losses:33, pct:0.441, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:12, name:'Bulls',     wins:25, losses:36, pct:0.410, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:13, name:'Wizards',   wins:16, losses:43, pct:0.271, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:14, name:'Nets',      wins:15, losses:45, pct:0.250, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:15, name:'Pacers',    wins:15, losses:46, pct:0.246, last10:['W','W','W','W','W','W','W','W','W','W'] },
            ],
            west: [
                { rank:1,  name:'Thunder',   wins:47, losses:15, pct:0.758, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:2,  name:'Spurs',     wins:43, losses:17, pct:0.717, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:3,  name:'Wolves',    wins:38, losses:23, pct:0.623, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:4,  name:'Rockets',   wins:37, losses:22, pct:0.627, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:5,  name:'Nuggets',   wins:37, losses:24, pct:0.607, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:6,  name:'Lakers',    wins:36, losses:24, pct:0.600, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:7,  name:'Suns',      wins:34, losses:26, pct:0.567, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:8,  name:'Warriors',  wins:31, losses:29, pct:0.517, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:9,  name:'Clippers',  wins:28, losses:31, pct:0.475, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:10, name:'Blazers',   wins:29, losses:33, pct:0.468, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:11, name:'Grizzlies', wins:23, losses:36, pct:0.390, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:12, name:'Mavericks', wins:21, losses:39, pct:0.350, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:13, name:'Pelicans',  wins:19, losses:43, pct:0.306, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:14, name:'Jazz',      wins:18, losses:42, pct:0.300, last10:['W','W','W','W','W','W','W','W','W','W'] },
                { rank:15, name:'Kings',     wins:14, losses:48, pct:0.226, last10:['W','W','W','W','W','W','W','W','W','W'] },
            ]
        };
                let currentConference = 'east';

        let mlbStandings = { al: [], nl: [] };
        let currentMLBLeague = 'al';

        // Sync nbaTeams wins/losses/seed/last10 from nbaStandings so bet entry always uses live data
        function syncTeamsFromStandings() {
            const allStandings = [...nbaStandings.east, ...nbaStandings.west];
            nbaTeams.forEach(team => {
                const s = allStandings.find(t => t.name === team.name);
                if (s) {
                    team.wins = s.wins;
                    team.losses = s.losses;
                    team.seed = s.rank;
                    team.last10Results = [...s.last10];
                }
            });
        }
        syncTeamsFromStandings();
        // Store 3/16 baseline so reapplyStandingsFromBetLog can reset to it
        [...nbaStandings.east, ...nbaStandings.west].forEach(t => {
            t._baseWins = t.wins;
            t._baseLosses = t.losses;
            t._baseLast10 = [...t.last10];
        });
        function showConference(conf) {
            const eastTab = document.getElementById('eastTab');
            const westTab = document.getElementById('westTab');
            const logo = document.getElementById('standingsLeagueLogo');
            if (currentSport === 'mlb') {
                currentMLBLeague = conf;
                eastTab.textContent = 'AL';
                westTab.textContent = 'NL';
                if (logo) logo.src = 'https://www.mlbstatic.com/team-logos/league-on-dark/1.svg';
                if (conf === 'al') {
                    eastTab.style.color='#fff'; eastTab.style.borderBottom='2px solid #1D428A';
                    westTab.style.color='#555'; westTab.style.borderBottom='2px solid transparent';
                } else {
                    westTab.style.color='#fff'; westTab.style.borderBottom='2px solid #C8102E';
                    eastTab.style.color='#555'; eastTab.style.borderBottom='2px solid transparent';
                }
            } else {
                currentConference = conf;
                eastTab.textContent = 'EAST';
                westTab.textContent = 'WEST';
                if (logo) logo.src = 'https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg';
                if (conf === 'east') {
                    eastTab.style.color='#fff'; eastTab.style.borderBottom='2px solid #1D428A';
                    westTab.style.color='#555'; westTab.style.borderBottom='2px solid transparent';
                } else {
                    westTab.style.color='#fff'; westTab.style.borderBottom='2px solid #C8102E';
                    eastTab.style.color='#555'; eastTab.style.borderBottom='2px solid transparent';
                }
            }
            renderStandings(conf);
        }
        function renderStandings(conf) {
            const list = document.getElementById('standingsList');
            const data = currentSport === 'mlb' ? mlbStandings : nbaStandings;
            const key = currentSport === 'mlb' ? (conf === 'al' ? 'al' : 'nl') : conf;
            list.innerHTML = (data[key] || []).map(t => {
                const bc = t.rank<=6 ? '#22c55e' : t.rank<=8 ? '#f59e0b' : '#555';
                const last10 = Array.isArray(t.last10) ? t.last10 : [];

                const l10w = last10.filter(r=>r==='W').length;
                const l10str = last10.length > 0 ? `${l10w}-${last10.length - l10w}` : '—';
                const l10color = last10.length > 0 ? (l10w>=7?'#22c55e':l10w>=5?'#fff':'#ef4444') : '#555';
                const filledDots = last10.map(r=>`<span style="color:${r==='W'?'#22c55e':'#ef4444'};font-size:8px;">●</span>`).join('');
                const emptyDots = Array(10 - last10.length).fill('<span style="color:#333;font-size:8px;">●</span>').join('');
                const dots = filledDots + emptyDots;
                return `<div style="display:grid;grid-template-columns:24px 1fr 52px 38px 44px;align-items:center;padding:8px 0;border-bottom:1px solid #1e1e1e;">
                    <div style="font-size:11px;font-weight:700;color:${bc};">${t.rank}</div>
                    <div>
                        <div style="font-size:13px;font-weight:700;color:#fff;">${t.name}</div>
                        <div style="display:flex;gap:2px;margin-top:3px;">${dots}</div>
                    </div>
                    <div style="font-size:12px;font-weight:600;color:#aaa;text-align:center;">${t.wins}-${t.losses}</div>
                    <div style="font-size:12px;font-weight:700;color:${l10color};text-align:center;">${l10str}</div>
                    <div style="font-size:11px;font-weight:600;color:#555;text-align:center;">${(t.pct || 0).toFixed(3)}</div>
                </div>`;
            }).join('');
        }

        // ===== BET LOG =====
        // Dynamic betLogs object - loads from Firebase (no hardcoded data)
        let betLogs = {
            nba: [], // Will load from Firebase: /nbaBetlog
            mlb: [], // Will load from Firebase: /mlbBetlog
            nfl: [], // Will load from Firebase: /nflBetlog
            nhl: [], // Will load from Firebase: /nhlBetlog
            cbb: [], // Will load from Firebase: /cbbBetlog
            cfb: []  // Will load from Firebase: /cfbBetlog
        };

        // REMOVED: 13,000+ lines of hardcoded betLog data
        // Source of truth is now: backup txt files → Firebase → frontend

        // Placeholder to maintain line structure (will be removed)
        const _removedHardcodedData = [
          { day:1, date:'', type:'PAPER', overall:'10-0 (100%) 🔥', unlocked:false, games:[
            {
              i1:4,
              i2:2,
              l1:'2-8',
              l2:'7-3',
              o1:'+450',
              o2:'-650',
              pick:'Celtics',
              res:'W',
              s1:12,
              s2:2,
              t1:'Bucks',
              t2:'Celtics',
              wl1:'19-30',
              wl2:'30-18'
            },
            {
              i1:2,
              i2:1,
              l1:'5-5',
              l2:'5-5',
              o1:'+450',
              o2:'-210',
              pick:'Spurs',
              res:'W',
              s1:7,
              s2:2,
              t1:'Magic',
              t2:'Spurs',
              wl1:'25-22',
              wl2:'32-16'
            },
            {
              i1:3,
              i2:3,
              l1:'2-8',
              l2:'7-3',
              o1:'+475',
              o2:'-700',
              pick:'Pistons',
              res:'W',
              s1:13,
              s2:1,
              t1:'Nets',
              t2:'Pistons',
              wl1:'10-38',
              wl2:'35-12'
            },
            {
              i1:4,
              i2:5,
              l1:'2-8',
              l2:'2-8',
              o1:'-135',
              o2:'+115',
              pick:'Wizards',
              res:'W',
              s1:15,
              s2:15,
              t1:'Kings',
              t2:'Wizards',
              wl1:'9-42',
              wl2:'11-37'
            },
            {
              i1:6,
              i2:2,
              l1:'1-9',
              l2:'5-5',
              o1:'+360',
              o2:'-500',
              pick:'Raptors',
              res:'W',
              s1:13,
              s2:5,
              t1:'Jazz',
              t2:'Raptors',
              wl1:'13-36',
              wl2:'29-21'
            },
            {
              i1:8,
              i2:4,
              l1:'6-4',
              l2:'5-5',
              o1:'+190',
              o2:'-230',
              pick:'Heat',
              res:'W',
              s1:11,
              s2:8,
              t1:'Bulls',
              t2:'Heat',
              wl1:'19-30',
              wl2:'26-24'
            },
            {
              i1:3,
              i2:2,
              l1:'6-4',
              l2:'6-4',
              o1:'+165',
              o2:'-195',
              pick:'Knicks',
              res:'W',
              s1:6,
              s2:3,
              t1:'Lakers',
              t2:'Knicks',
              wl1:'29-18',
              wl2:'30-18'
            },
            {
              i1:3,
              i2:2,
              l1:'8-2',
              l2:'6-4',
              o1:'-125',
              o2:'+105',
              pick:'Clippers',
              res:'W',
              s1:9,
              s2:7,
              t1:'Clippers',
              t2:'Suns',
              wl1:'22-27',
              wl2:'28-22'
            },
            {
              i1:6,
              i2:9,
              l1:'7-3',
              l2:'4-6',
              o1:'-160',
              o2:'+135',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:10,
              t1:'Cavaliers',
              t2:'Blazers',
              wl1:'29-21',
              wl2:'23-26'
            },
            {
              i1:5,
              i2:6,
              l1:'6-4',
              l2:'7-3',
              o1:'-270',
              o2:'+220',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:3,
              t1:'Thunder',
              t2:'Nuggets',
              wl1:'38-11',
              wl2:'33-16'
            }
          ]},
          { day:2, date:'', type:'PAPER', overall:'13-1 (93%)', unlocked:false, games:[
            {
              i1:2,
              i2:2,
              l1:'4-6',
              l2:'8-2',
              o1:'+210',
              o2:'-250',
              pick:'Hornets',
              res:'W',
              s1:14,
              s2:9,
              t1:'Pelicans',
              t2:'Hornets',
              wl1:'12-37',
              wl2:'22-30'
            },
            {
              i1:3,
              i2:2,
              l1:'7-3',
              l2:'5-5',
              o1:'-270',
              o2:'+220',
              pick:'Rockets',
              res:'W',
              s1:4,
              s2:14,
              t1:'Rockets',
              t2:'Pacers',
              wl1:'29-19',
              wl2:'10-40'
            },
            {
              i1:3,
              i2:7,
              l1:'5-5',
              l2:'2-8',
              o1:'-235',
              o2:'+195',
              pick:'Wolves',
              res:'L',
              s1:5,
              s2:11,
              t1:'Wolves',
              t2:'Grizzlies',
              wl1:'30-22',
              wl2:'17-31'
            },
            {
              i1:1,
              i2:4,
              l1:'5-5',
              l2:'8-2',
              o1:'-120',
              o2:'+100',
              pick:'76ers',
              res:'W',
              s1:6,
              s2:9,
              t1:'76ers',
              t2:'Clippers',
              wl1:'26-25',
              wl2:'22-27'
            }
          ]},
          { day:3, date:'', type:'PAPER', overall:'21-3 (88%)', unlocked:false, games:[
            {
              i1:4,
              i2:2,
              l1:'6-4',
              l2:'8-2',
              o1:'+155',
              o2:'-180',
              pick:'Pistons',
              res:'W',
              s1:3,
              s2:1,
              t1:'Nuggets',
              t2:'Pistons',
              wl1:'33-17',
              wl2:'36-12'
            },
            {
              i1:3,
              i2:5,
              l1:'6-4',
              l2:'3-7',
              o1:'-750',
              o2:'+500',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:15,
              t1:'Knicks',
              t2:'Wizards',
              wl1:'31-18',
              wl2:'12-37'
            },
            {
              i1:5,
              i2:2,
              l1:'1-9',
              l2:'4-6',
              o1:'+135',
              o2:'-160',
              pick:'Pacers',
              res:'L',
              s1:13,
              s2:14,
              t1:'Jazz',
              t2:'Pacers',
              wl1:'13-37',
              wl2:'10-41'
            },
            {
              i1:4,
              i2:4,
              l1:'3-7',
              l2:'6-4',
              o1:'+145',
              o2:'-170',
              pick:'Heat',
              res:'L',
              s1:10,
              s2:8,
              t1:'Hawks',
              t2:'Heat',
              wl1:'23-30',
              wl2:'27-24'
            },
            {
              i1:3,
              i2:3,
              l1:'5-5',
              l2:'2-8',
              o1:'-350',
              o2:'+275',
              pick:'Lakers',
              res:'W',
              s1:6,
              s2:13,
              t1:'Lakers',
              t2:'Nets',
              wl1:'29-19',
              wl2:'10-39'
            },
            {
              i1:1,
              i2:6,
              l1:'8-2',
              l2:'5-5',
              o1:'-260',
              o2:'+215',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:12,
              t1:'Celtics',
              t2:'Mavericks',
              wl1:'31-18',
              wl2:'14-34'
            },
            {
              i1:8,
              i2:4,
              l1:'5-5',
              l2:'2-8',
              o1:'-150',
              o2:'+130',
              pick:'Bucks',
              res:'W',
              s1:11,
              s2:12,
              t1:'Bulls',
              t2:'Bucks',
              wl1:'19-31',
              wl2:'19-31'
            },
            {
              i1:2,
              i2:9,
              l1:'4-6',
              l2:'6-4',
              o1:'+210',
              o2:'-250',
              pick:'Thunder',
              res:'W',
              s1:7,
              s2:1,
              t1:'Magic',
              t2:'Thunder',
              wl1:'25-23',
              wl2:'39-11'
            },
            {
              i1:0,
              i2:6,
              l1:'6-4',
              l2:'6-4',
              o1:'+125',
              o2:'-145',
              pick:'76ers',
              res:'W',
              s1:6,
              s2:8,
              t1:'76ers',
              t2:'Warriors',
              wl1:'27-25',
              wl2:'26-25'
            },
            {
              i1:2,
              i2:6,
              l1:'6-4',
              l2:'4-6',
              o1:'-165',
              o2:'+140',
              pick:'Suns',
              res:'W',
              s1:7,
              s2:10,
              t1:'Suns',
              t2:'Blazers',
              wl1:'28-23',
              wl2:'23-27'
            }
          ]},
          { day:4, date:'', type:'PAPER', overall:'26-5 (84%)', unlocked:false, games:[
            {
              i1:4,
              i2:4,
              l1:'5-5',
              l2:'7-3',
              o1:'+170',
              o2:'-200',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:3,
              t1:'Nuggets',
              t2:'Knicks',
              wl1:'33-18',
              wl2:'32-18'
            },
            {
              i1:3,
              i2:2,
              l1:'4-6',
              l2:'6-4',
              o1:'-125',
              o2:'+105',
              pick:'Wolves',
              res:'W',
              s1:5,
              s2:5,
              t1:'Wolves',
              t2:'Raptors',
              wl1:'30-23',
              wl2:'30-21'
            },
            {
              i1:5,
              i2:4,
              l1:'8-2',
              l2:'8-2',
              o1:'+220',
              o2:'-270',
              pick:'Rockets',
              res:'L',
              s1:2,
              s2:4,
              t1:'Celtics',
              t2:'Rockets',
              wl1:'32-18',
              wl2:'30-19'
            },
            {
              i1:2,
              i2:6,
              l1:'4-6',
              l2:'2-8',
              o1:'-195',
              o2:'+165',
              pick:'Bucks',
              res:'W',
              s1:14,
              s2:12,
              t1:'Pelicans',
              t2:'Bucks',
              wl1:'12-38',
              wl2:'20-31'
            },
            {
              i1:10,
              i2:5,
              l1:'6-4',
              l2:'6-4',
              o1:'+315',
              o2:'-420',
              pick:'Spurs',
              res:'W',
              s1:1,
              s2:2,
              t1:'Thunder',
              t2:'Spurs',
              wl1:'40-11',
              wl2:'33-16'
            },
            {
              i1:9,
              i2:2,
              l1:'3-7',
              l2:'1-9',
              o1:'-110',
              o2:'-110',
              pick:'Grizzlies',
              res:'W',
              s1:11,
              s2:15,
              t1:'Grizzlies',
              t2:'Kings',
              wl1:'18-31',
              wl2:'9-43'
            },
            {
              i1:3,
              i2:4,
              l1:'8-2',
              l2:'7-3',
              o1:'-145',
              o2:'+125',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:9,
              t1:'Cavaliers',
              t2:'Clippers',
              wl1:'30-21',
              wl2:'23-28'
            }
          ]},
          { day:5, date:'', type:'PAPER', overall:'31-8 (79%)', unlocked:false, games:[
            {
              i1:4,
              i2:2,
              l1:'1-9',
              l2:'4-6',
              o1:'+300',
              o2:'-400',
              pick:'Magic',
              res:'W',
              s1:13,
              s2:7,
              t1:'Nets',
              t2:'Magic',
              wl1:'10-40',
              wl2:'25-24'
            },
            {
              i1:7,
              i2:3,
              l1:'3-7',
              l2:'8-2',
              o1:'+700',
              o2:'-1200',
              pick:'Pistons',
              res:'L',
              s1:15,
              s2:1,
              t1:'Wizards',
              t2:'Pistons',
              wl1:'12-38',
              wl2:'37-12'
            },
            {
              i1:8,
              i2:4,
              l1:'5-5',
              l2:'5-5',
              o1:'+250',
              o2:'-300',
              pick:'Raptors',
              res:'W',
              s1:11,
              s2:5,
              t1:'Bulls',
              t2:'Raptors',
              wl1:'19-32',
              wl2:'30-22'
            },
            {
              i1:7,
              i2:4,
              l1:'2-8',
              l2:'4-6',
              o1:'+255',
              o2:'-310',
              pick:'Hawks',
              res:'W',
              s1:13,
              s2:10,
              t1:'Jazz',
              t2:'Hawks',
              wl1:'14-37',
              wl2:'24-30'
            },
            {
              i1:4,
              i2:4,
              l1:'8-2',
              l2:'7-3',
              o1:'+155',
              o2:'-180',
              pick:'Rockets',
              res:'L',
              s1:9,
              s2:4,
              t1:'Hornets',
              t2:'Rockets',
              wl1:'23-30',
              wl2:'30-20'
            },
            {
              i1:6,
              i2:9,
              l1:'7-3',
              l2:'4-6',
              o1:'-310',
              o2:'+255',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:12,
              t1:'Spurs',
              t2:'Mavericks',
              wl1:'34-16',
              wl2:'14-35'
            },
            {
              i1:6,
              i2:4,
              l1:'5-5',
              l2:'7-3',
              o1:'+180',
              o2:'-220',
              pick:'Suns',
              res:'L',
              s1:8,
              s2:7,
              t1:'Warriors',
              t2:'Suns',
              wl1:'26-26',
              wl2:'29-23'
            },
            {
              i1:2,
              i2:2,
              l1:'7-3',
              l2:'6-4',
              o1:'+145',
              o2:'-170',
              pick:'Lakers',
              res:'W',
              s1:6,
              s2:6,
              t1:'76ers',
              t2:'Lakers',
              wl1:'28-25',
              wl2:'30-19'
            }
          ]},
          { day:6, date:'', type:'PAPER', overall:'35-10 (78%)', unlocked:false, games:[
            {
              i1:2,
              i2:1,
              l1:'5-5',
              l2:'8-2',
              o1:'+200',
              o2:'-240',
              pick:'Celtics',
              res:'W',
              s1:8,
              s2:2,
              t1:'Heat',
              t2:'Celtics',
              wl1:'27-25',
              wl2:'33-18'
            },
            {
              i1:5,
              i2:5,
              l1:'8-2',
              l2:'7-3',
              o1:'+150',
              o2:'-175',
              pick:'Pistons',
              res:'W',
              s1:3,
              s2:1,
              t1:'Knicks',
              t2:'Pistons',
              wl1:'33-18',
              wl2:'37-13'
            },
            {
              i1:5,
              i2:6,
              l1:'4-6',
              l2:'3-7',
              o1:'-120',
              o2:'+100',
              pick:'Bucks',
              res:'W',
              s1:14,
              s2:12,
              t1:'Pacers',
              t2:'Bucks',
              wl1:'10-42',
              wl2:'21-31'
            },
            {
              i1:3,
              i2:4,
              l1:'3-7',
              l2:'5-5',
              o1:'+275',
              o2:'-350',
              pick:'Wolves',
              res:'L',
              s1:14,
              s2:5,
              t1:'Pelicans',
              t2:'Wolves',
              wl1:'12-39',
              wl2:'31-23'
            },
            {
              i1:4,
              i2:2,
              l1:'6-4',
              l2:'0-10',
              o1:'-195',
              o2:'+165',
              pick:'Clippers',
              res:'W',
              s1:9,
              s2:15,
              t1:'Clippers',
              t2:'Kings',
              wl1:'23-29',
              wl2:'9-44'
            },
            {
              i1:6,
              i2:5,
              l1:'3-7',
              l2:'4-6',
              o1:'+240',
              o2:'-290',
              pick:'Blazers',
              res:'W',
              s1:11,
              s2:10,
              t1:'Grizzlies',
              t2:'Blazers',
              wl1:'19-31',
              wl2:'23-28'
            }
          ]},
          { day:7, date:'', type:'PAPER', overall:'42-13 (76%)', unlocked:false, games:[
            {
              i1:10,
              i2:0,
              l1:'4-6',
              l2:'1-9',
              o1:'+185',
              o2:'-225',
              pick:'Nets',
              res:'W',
              s1:15,
              s2:13,
              t1:'Wizards',
              t2:'Nets',
              wl1:'13-38',
              wl2:'10-41'
            },
            {
              i1:4,
              i2:5,
              l1:'6-4',
              l2:'5-5',
              o1:'+160',
              o2:'-185',
              pick:'Thunder',
              res:'L',
              s1:4,
              s2:1,
              t1:'Rockets',
              t2:'Thunder',
              wl1:'30-21',
              wl2:'40-12'
            },
            {
              i1:7,
              i2:5,
              l1:'4-6',
              l2:'7-3',
              o1:'+305',
              o2:'-410',
              pick:'Spurs',
              res:'W',
              s1:12,
              s2:2,
              t1:'Mavericks',
              t2:'Spurs',
              wl1:'14-36',
              wl2:'35-16'
            },
            {
              i1:4,
              i2:2,
              l1:'2-8',
              l2:'4-6',
              o1:'+240',
              o2:'-290',
              pick:'Magic',
              res:'W',
              s1:13,
              s2:7,
              t1:'Jazz',
              t2:'Magic',
              wl1:'14-38',
              wl2:'26-24'
            },
            {
              i1:3,
              i2:3,
              l1:'9-1',
              l2:'5-5',
              o1:'-130',
              o2:'+110',
              pick:'Hawks',
              res:'W',
              s1:9,
              s2:10,
              t1:'Hornets',
              t2:'Hawks',
              wl1:'24-30',
              wl2:'25-30'
            },
            {
              i1:7,
              i2:5,
              l1:'4-6',
              l2:'4-6',
              o1:'-235',
              o2:'+195',
              pick:'Nuggets',
              res:'W',
              s1:3,
              s2:11,
              t1:'Nuggets',
              t2:'Bulls',
              wl1:'33-19',
              wl2:'19-33'
            },
            {
              i1:6,
              i2:3,
              l1:'5-5',
              l2:'7-3',
              o1:'+110',
              o2:'-130',
              pick:'Lakers',
              res:'W',
              s1:8,
              s2:6,
              t1:'Warriors',
              t2:'Lakers',
              wl1:'27-26',
              wl2:'31-19'
            },
            {
              i1:1,
              i2:4,
              l1:'6-4',
              l2:'6-4',
              o1:'+105',
              o2:'-125',
              pick:'76ers',
              res:'W',
              s1:6,
              s2:7,
              t1:'76ers',
              t2:'Suns',
              wl1:'28-26',
              wl2:'29-24'
            },
            {
              i1:8,
              i2:8,
              l1:'3-7',
              l2:'4-6',
              o1:'+265',
              o2:'-330',
              pick:'Blazers',
              res:'W',
              s1:11,
              s2:10,
              t1:'Grizzlies',
              t2:'Blazers',
              wl1:'19-32',
              wl2:'24-28'
            },
            {
              i1:4,
              i2:3,
              l1:'8-2',
              l2:'0-10',
              o1:'-600',
              o2:'+425',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:15,
              t1:'Cavaliers',
              t2:'Kings',
              wl1:'31-21',
              wl2:'9-45'
            }
          ]},
          { day:8, date:'', type:'PAPER', overall:'53-12 (82%) 🔥', unlocked:false, games:[
            {
              i1:6,
              i2:4,
              l1:'3-7',
              l2:'8-2',
              o1:'+550',
              o2:'-850',
              pick:'Knicks',
              res:'W',
              s1:12,
              s2:3,
              t1:'Mavericks',
              t2:'Knicks',
              wl1:'14-37',
              wl2:'33-19'
            },
            {
              i1:3,
              i2:3,
              l1:'8-2',
              l2:'5-5',
              o1:'+135',
              o2:'-160',
              pick:'Heat',
              res:'W',
              s1:4,
              s2:8,
              t1:'Cavaliers',
              t2:'Heat',
              wl1:'32-21',
              wl2:'27-26'
            },
            {
              i1:5,
              i2:3,
              l1:'7-3',
              l2:'6-4',
              o1:'-145',
              o2:'+125',
              pick:'Raptors',
              res:'W',
              s1:2,
              s2:5,
              t1:'Spurs',
              t2:'Raptors',
              wl1:'36-16',
              wl2:'31-22'
            },
            {
              i1:4,
              i2:3,
              l1:'7-3',
              l2:'5-5',
              o1:'+145',
              o2:'-170',
              pick:'Wolves',
              res:'W',
              s1:6,
              s2:5,
              t1:'Lakers',
              t2:'Wolves',
              wl1:'32-19',
              wl2:'31-24'
            }
          ]},
          { day:9, date:'', type:'PAPER', overall:'60-15 (80%)', unlocked:false, games:[
            {
              i1:2,
              i2:3,
              l1:'9-1',
              l2:'7-3',
              o1:'+250',
              o2:'-310',
              pick:'Pistons',
              res:'W',
              s1:9,
              s2:1,
              t1:'Hornets',
              t2:'Pistons',
              wl1:'25-30',
              wl2:'38-13'
            },
            {
              i1:5,
              i2:2,
              l1:'4-6',
              l2:'2-8',
              o1:'+410',
              o2:'-600',
              pick:'Nets',
              res:'W',
              s1:15,
              s2:13,
              t1:'Wizards',
              t2:'Nets',
              wl1:'13-39',
              wl2:'11-41'
            },
            {
              i1:8,
              i2:3,
              l1:'3-7',
              l2:'4-6',
              o1:'+225',
              o2:'-275',
              pick:'Magic',
              res:'W',
              s1:11,
              s2:7,
              t1:'Bulls',
              t2:'Magic',
              wl1:'19-34',
              wl2:'27-24'
            },
            {
              i1:6,
              i2:4,
              l1:'4-6',
              l2:'2-8',
              o1:'+195',
              o2:'-235',
              pick:'Jazz',
              res:'W',
              s1:12,
              s2:13,
              t1:'Bucks',
              t2:'Jazz',
              wl1:'22-31',
              wl2:'14-39'
            },
            {
              i1:4,
              i2:2,
              l1:'3-7',
              l2:'5-5',
              o1:'+375',
              o2:'-550',
              pick:'Wolves',
              res:'W',
              s1:14,
              s2:5,
              t1:'Pacers',
              t2:'Wolves',
              wl1:'10-44',
              wl2:'31-25'
            },
            {
              i1:3,
              i2:2,
              l1:'5-5',
              l2:'4-6',
              o1:'+155',
              o2:'-180',
              pick:'Pelicans',
              res:'W',
              s1:7,
              s2:14,
              t1:'Suns',
              t2:'Pelicans',
              wl1:'29-25',
              wl2:'13-39'
            },
            {
              i1:4,
              i2:6,
              l1:'5-5',
              l2:'8-2',
              o1:'-150',
              o2:'+130',
              pick:'Cavaliers',
              res:'W',
              s1:1,
              s2:4,
              t1:'Thunder',
              t2:'Cavaliers',
              wl1:'40-13',
              wl2:'32-21'
            },
            {
              i1:2,
              i2:5,
              l1:'5-5',
              l2:'4-6',
              o1:'+260',
              o2:'-320',
              pick:'Warriors',
              res:'W',
              s1:10,
              s2:8,
              t1:'Hawks',
              t2:'Warriors',
              wl1:'25-31',
              wl2:'27-27'
            },
            {
              i1:4,
              i2:4,
              l1:'5-5',
              l2:'5-5',
              o1:'+105',
              o2:'-125',
              pick:'Thunder',
              res:'W',
              s1:3,
              s2:1,
              t1:'Nuggets',
              t2:'Thunder',
              wl1:'34-19',
              wl2:'40-13'
            },
            {
              i1:6,
              i2:7,
              l1:'2-8',
              l2:'4-6',
              o1:'+195',
              o2:'-235',
              pick:'Blazers',
              res:'W',
              s1:11,
              s2:10,
              t1:'Grizzlies',
              t2:'Blazers',
              wl1:'19-33',
              wl2:'25-28'
            }
          ]},
          { day:10, date:'', type:'PAPER', overall:'63-16 (80%)', unlocked:false, games:[
            {
              i1:4,
              i2:6,
              l1:'2-8',
              l2:'3-7',
              o1:'-125',
              o2:'+105',
              pick:'Pacers',
              res:'W',
              s1:13,
              s2:14,
              t1:'Jazz',
              t2:'Pacers',
              wl1:'14-39',
              wl2:'10-44'
            },
            {
              i1:7,
              i2:4,
              l1:'3-7',
              l2:'6-4',
              o1:'+265',
              o2:'-330',
              pick:'Rockets',
              res:'W',
              s1:12,
              s2:4,
              t1:'Mavericks',
              t2:'Rockets',
              wl1:'14-37',
              wl2:'31-21'
            },
            {
              i1:8,
              i2:5,
              l1:'2-8',
              l2:'5-5',
              o1:'+310',
              o2:'-420',
              pick:'Suns',
              res:'W',
              s1:11,
              s2:7,
              t1:'Bulls',
              t2:'Suns',
              wl1:'19-35',
              wl2:'29-25'
            },
            {
              i1:4,
              i2:5,
              l1:'5-5',
              l2:'7-3',
              o1:'-105',
              o2:'-115',
              pick:'Spurs',
              res:'W',
              s1:3,
              s2:2,
              t1:'Nuggets',
              t2:'Spurs',
              wl1:'34-20',
              wl2:'36-16'
            }
          ]},
          { day:11, date:'', type:'PAPER', overall:'76-21 (78%)', unlocked:false, games:[
            {
              i1:7,
              i2:3,
              l1:'4-6',
              l2:'9-1',
              o1:'+340',
              o2:'-470',
              pick:'Hornets',
              res:'W',
              s1:15,
              s2:9,
              t1:'Wizards',
              t2:'Hornets',
              wl1:'13-40',
              wl2:'25-31'
            },
            {
              i1:3,
              i2:4,
              l1:'3-7',
              l2:'9-1',
              o1:'+625',
              o2:'-1000',
              pick:'Cavaliers',
              res:'W',
              s1:13,
              s2:4,
              t1:'Nets',
              t2:'Cavaliers',
              wl1:'12-41',
              wl2:'33-21'
            },
            {
              i1:3,
              i2:5,
              l1:'5-5',
              l2:'4-6',
              o1:'+245',
              o2:'-300',
              pick:'Bucks',
              res:'W',
              s1:10,
              s2:12,
              t1:'Hawks',
              t2:'Bucks',
              wl1:'25-32',
              wl2:'22-32'
            },
            {
              i1:2,
              i2:1,
              l1:'6-4',
              l2:'8-2',
              o1:'+185',
              o2:'-225',
              pick:'Celtics',
              res:'W',
              s1:6,
              s2:2,
              t1:'76ers',
              t2:'Celtics',
              wl1:'29-27',
              wl2:'34-19'
            },
            {
              i1:7,
              i2:4,
              l1:'2-8',
              l2:'3-7',
              o1:'+255',
              o2:'-310',
              pick:'Pacers',
              res:'W',
              s1:12,
              s2:14,
              t1:'Mavericks',
              t2:'Pacers',
              wl1:'14-38',
              wl2:'10-45'
            },
            {
              i1:5,
              i2:3,
              l1:'5-5',
              l2:'9-1',
              o1:'-145',
              o2:'+125',
              pick:'Knicks',
              res:'W',
              s1:1,
              s2:3,
              t1:'Thunder',
              t2:'Knicks',
              wl1:'41-13',
              wl2:'34-19'
            },
            {
              i1:2,
              i2:4,
              l1:'5-5',
              l2:'7-3',
              o1:'+175',
              o2:'-210',
              pick:'Pistons',
              res:'W',
              s1:7,
              s2:1,
              t1:'Magic',
              t2:'Pistons',
              wl1:'28-24',
              wl2:'39-13'
            },
            {
              i1:5,
              i2:3,
              l1:'0-10',
              l2:'6-4',
              o1:'+370',
              o2:'-520',
              pick:'Clippers',
              res:'W',
              s1:15,
              s2:9,
              t1:'Kings',
              t2:'Clippers',
              wl1:'9-47',
              wl2:'25-30'
            },
            {
              i1:6,
              i2:3,
              l1:'2-8',
              l2:'6-4',
              o1:'+285',
              o2:'-380',
              pick:'Wolves',
              res:'W',
              s1:11,
              s2:5,
              t1:'Grizzlies',
              t2:'Wolves',
              wl1:'19-34',
              wl2:'32-25'
            },
            {
              i1:3,
              i2:2,
              l1:'7-3',
              l2:'5-5',
              o1:'+130',
              o2:'-155',
              pick:'Heat',
              res:'W',
              s1:5,
              s2:8,
              t1:'Raptors',
              t2:'Heat',
              wl1:'32-22',
              wl2:'28-27'
            },
            {
              i1:7,
              i2:4,
              l1:'4-6',
              l2:'5-5',
              o1:'+650',
              o2:'-1100',
              pick:'Thunder',
              res:'W',
              s1:10,
              s2:1,
              t1:'Blazers',
              t2:'Thunder',
              wl1:'26-28',
              wl2:'41-13'
            },
            {
              i1:2,
              i2:5,
              l1:'5-5',
              l2:'2-8',
              o1:'-125',
              o2:'+105',
              pick:'Jazz',
              res:'W',
              s1:14,
              s2:13,
              t1:'Pelicans',
              t2:'Jazz',
              wl1:'14-39',
              wl2:'15-39'
            },
            {
              i1:3,
              i2:4,
              l1:'6-4',
              l2:'5-5',
              o1:'-115',
              o2:'-105',
              pick:'Nuggets',
              res:'W',
              s1:6,
              s2:3,
              t1:'Lakers',
              t2:'Nuggets',
              wl1:'32-21',
              wl2:'34-20'
            },
            {
              i1:6,
              i2:5,
              l1:'4-6',
              l2:'7-3',
              o1:'+295',
              o2:'-390',
              pick:'Spurs',
              res:'W',
              s1:8,
              s2:2,
              t1:'Warriors',
              t2:'Spurs',
              wl1:'28-27',
              wl2:'37-16'
            }
          ]},
          { day:12, date:'2/12', type:'REAL', overall:'', unlocked:false, games:[
          ]},
                    { day:13, date:'', type:'REAL 💰', overall:'82-25 (77%)', unlocked:false, games:[
            {
              i1:3,
              i2:3,
              l1:'4-6',
              l2:'6-4',
              o1:'+100',
              o2:'-120',
              pick:'76ers',
              res:'L',
              s1:10,
              s2:6,
              t1:'Hawks',
              t2:'76ers',
              wl1:'25-33',
              wl2:'29-28'
            },
            {
              i1:3,
              i2:3,
              l1:'3-7',
              l2:'9-1',
              o1:'+650',
              o2:'-1100',
              pick:'Cavaliers',
              res:'W',
              s1:13,
              s2:4,
              t1:'Nets',
              t2:'Cavaliers',
              wl1:'12-42',
              wl2:'34-21'
            },
            {
              i1:3,
              i2:3,
              l1:'6-4',
              l2:'9-1',
              o1:'-170',
              o2:'+145',
              pick:'Rockets',
              res:'W',
              s1:4,
              s2:9,
              t1:'Rockets',
              t2:'Hornets',
              wl1:'32-22',
              wl2:'26-31'
            },
            {
              i1:9,
              i2:6,
              l1:'4-6',
              l2:'4-6',
              o1:'-150',
              o2:'+130',
              pick:'Pacers',
              res:'L',
              s1:14,
              s2:15,
              t1:'Pacers',
              t2:'Wizards',
              wl1:'11-45',
              wl2:'13-41'
            },
            {
              i1:3,
              i2:3,
              l1:'8-2',
              l2:'9-1',
              o1:'+150',
              o2:'-175',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:3,
              t1:'Pistons',
              t2:'Knicks',
              wl1:'40-13',
              wl2:'36-19'
            },
            {
              i1:3,
              i2:3,
              l1:'6-4',
              l2:'1-9',
              o1:'-210',
              o2:'+175',
              pick:'Raptors',
              res:'W',
              s1:5,
              s2:11,
              t1:'Raptors',
              t2:'Bulls',
              wl1:'32-23',
              wl2:'19-36'
            },
            {
              i1:3,
              i2:3,
              l1:'5-5',
              l2:'8-2',
              o1:'+250',
              o2:'-300',
              pick:'Spurs',
              res:'W',
              s1:7,
              s2:2,
              t1:'Suns',
              t2:'Spurs',
              wl1:'30-26',
              wl2:'38-16'
            },
            {
              i1:3,
              i2:3,
              l1:'8-2',
              l2:'4-6',
              o1:'-210',
              o2:'+175',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:8,
              t1:'Celtics',
              t2:'Warriors',
              wl1:'35-19',
              wl2:'28-28'
            },
            {
              i1:3,
              i2:3,
              l1:'5-5',
              l2:'0-10',
              o1:'-410',
              o2:'+305',
              pick:'Magic',
              res:'W',
              s1:7,
              s2:15,
              t1:'Magic',
              t2:'Kings',
              wl1:'28-25',
              wl2:'9-48'
            },
            {
              i1:3,
              i2:3,
              l1:'5-5',
              l2:'6-4',
              o1:'+100',
              o2:'-120',
              pick:'Clippers',
              res:'L',
              s1:3,
              s2:9,
              t1:'Nuggets',
              t2:'Clippers',
              wl1:'35-20',
              wl2:'26-30'
            }
          ]},
          { day:14, date:'', type:'REAL 💰', overall:'91-25 (78%) 🔥', unlocked:false, games:[
            {
              i1:3,
              i2:3,
              l1:'9-1',
              l2:'9-1',
              o1:'-210',
              o2:'+175',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:9,
              t1:'Cavaliers',
              t2:'Hornets',
              wl1:'34-21',
              wl2:'26-31'
            },
            {
              i1:9,
              i2:6,
              l1:'4-6',
              l2:'5-5',
              o1:'+100',
              o2:'-120',
              pick:'Wizards',
              res:'W',
              s1:14,
              s2:15,
              t1:'Pacers',
              t2:'Wizards',
              wl1:'11-45',
              wl2:'14-41'
            },
            {
              i1:6,
              i2:9,
              l1:'3-7',
              l2:'2-8',
              o1:'+110',
              o2:'-130',
              pick:'Grizzlies',
              res:'W',
              s1:13,
              s2:11,
              t1:'Jazz',
              t2:'Grizzlies',
              wl1:'16-40',
              wl2:'19-35'
            },
            {
              i1:6,
              i2:0,
              l1:'1-9',
              l2:'7-3',
              o1:'+525',
              o2:'-800',
              pick:'Wolves',
              res:'W',
              s1:12,
              s2:5,
              t1:'Mavericks',
              t2:'Wolves',
              wl1:'14-39',
              wl2:'33-25'
            },
            {
              i1:1,
              i2:1,
              l1:'5-5',
              l2:'4-6',
              o1:'-150',
              o2:'+130',
              pick:'Heat',
              res:'W',
              s1:8,
              s2:10,
              t1:'Heat',
              t2:'Hawks',
              wl1:'29-27',
              wl2:'25-33'
            },
            {
              i1:1,
              i2:4,
              l1:'3-7',
              l2:'5-5',
              o1:'+725',
              o2:'-1300',
              pick:'Thunder',
              res:'W',
              s1:13,
              s2:1,
              t1:'Nets',
              t2:'Thunder',
              wl1:'12-42',
              wl2:'42-14'
            },
            {
              i1:3,
              i2:4,
              l1:'5-5',
              l2:'5-5',
              o1:'+150',
              o2:'-175',
              pick:'Bucks',
              res:'W',
              s1:12,
              s2:14,
              t1:'Bucks',
              t2:'Pelicans',
              wl1:'24-32',
              wl2:'14-40'
            },
            {
              i1:3,
              i2:4,
              l1:'5-5',
              l2:'4-6',
              o1:'+100',
              o2:'-120',
              pick:'Nuggets',
              res:'W',
              s1:3,
              s2:10,
              t1:'Nuggets',
              t2:'Blazers',
              wl1:'35-20',
              wl2:'27-29'
            },
            {
              i1:2,
              i2:1,
              l1:'6-4',
              l2:'6-4',
              o1:'+215',
              o2:'-260',
              pick:'Lakers',
              res:'W',
              s1:9,
              s2:6,
              t1:'Clippers',
              t2:'Lakers',
              wl1:'26-30',
              wl2:'33-21'
            }
          ]},
          { day:15, date:'', type:'REAL 💰', overall:'98-14 (88%)', unlocked:true, games:[
            {
              i1:3,
              i2:3,
              l1:'6-4',
              l2:'5-5',
              o1:'+210',
              o2:'-250',
              pick:'Suns',
              res:'W',
              s1:7,
              s2:7,
              t1:'Magic',
              t2:'Suns',
              wl1:'29-25',
              wl2:'32-24'
            },
            {
              i1:3,
              i2:4,
              l1:'6-4',
              l2:'5-5',
              o1:'-150',
              o2:'+130',
              pick:'76ers',
              res:'L',
              s1:6,
              s2:14,
              t1:'76ers',
              t2:'Pelicans',
              wl1:'30-25',
              wl2:'15-41'
            },
            {
              i1:3,
              i2:3,
              l1:'8-2',
              l2:'1-9',
              o1:'-195',
              o2:'+165',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:11,
              t1:'Pistons',
              t2:'Bulls',
              wl1:'41-13',
              wl2:'24-32'
            },
            {
              i1:9,
              i2:1,
              l1:'2-8',
              l2:'5-5',
              o1:'+130',
              o2:'-155',
              pick:'Heat',
              res:'W',
              s1:11,
              s2:8,
              t1:'Grizzlies',
              t2:'Heat',
              wl1:'20-33',
              wl2:'29-27'
            },
            {
              i1:5,
              i2:3,
              l1:'0-10',
              l2:'8-2',
              o1:'+275',
              o2:'-235',
              pick:'Spurs',
              res:'W',
              s1:15,
              s2:2,
              t1:'Kings',
              t2:'Spurs',
              wl1:'12-45',
              wl2:'39-16'
            },
            {
              i1:3,
              i2:3,
              l1:'6-4',
              l2:'8-2',
              o1:'-195',
              o2:'-165',
              pick:'Knicks',
              res:'W',
              s1:4,
              s2:3,
              t1:'Rockets',
              t2:'Knicks',
              wl1:'34-20',
              wl2:'35-21'
            }
          ]},
          { day:16, date:'', type:'REAL', overall:'', unlocked:false, games:[
          ]},
          { day:17, date:'', type:'REAL 💰', overall:'106-17 (86%)', unlocked:false, games:[
            {
              i1:3,
              i2:4,
              l1:'9-1',
              l2:'6-4',
              o1:'-195',
              o2:'+165',
              pick:'Thunder',
              res:'L',
              s1:4,
              s2:1,
              t1:'Cavaliers',
              t2:'Thunder',
              wl1:'36-21',
              wl2:'43-14'
            },
            {
              i1:1,
              i2:1,
              l1:'3-7',
              l2:'3-7',
              o1:'+350',
              o2:'-430',
              pick:'Hawks',
              res:'W',
              s1:13,
              s2:10,
              t1:'Nets',
              t2:'Hawks',
              wl1:'15-40',
              wl2:'27-31'
            },
            {
              i1:3,
              i2:3,
              l1:'5-5',
              l2:'4-6',
              o1:'-125',
              o2:'+105',
              pick:'Warriors',
              res:'W',
              s1:3,
              s2:8,
              t1:'Nuggets',
              t2:'Warriors',
              wl1:'36-21',
              wl2:'29-27'
            },
            {
              i1:3,
              i2:3,
              l1:'6-4',
              l2:'6-4',
              o1:'-150',
              o2:'+130',
              pick:'Raptors',
              res:'W',
              s1:5,
              s2:12,
              t1:'Raptors',
              t2:'Bucks',
              wl1:'33-23',
              wl2:'24-30'
            },
            {
              i1:6,
              i2:2,
              l1:'0-10',
              l2:'3-7',
              o1:'-125',
              o2:'+105',
              pick:'Mavericks',
              res:'W',
              s1:12,
              s2:14,
              t1:'Mavericks',
              t2:'Pacers',
              wl1:'19-36',
              wl2:'15-42'
            },
            {
              i1:3,
              i2:6,
              l1:'7-3',
              l2:'5-5',
              o1:'-130',
              o2:'+110',
              pick:'Hornets',
              res:'W',
              s1:9,
              s2:15,
              t1:'Hornets',
              t2:'Wizards',
              wl1:'26-31',
              wl2:'16-39'
            },
            {
              i1:1,
              i2:3,
              l1:'9-1',
              l2:'6-4',
              o1:'-350',
              o2:'+275',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:6,
              t1:'Celtics',
              t2:'Lakers',
              wl1:'36-19',
              wl2:'34-21'
            },
            {
              i1:3,
              i2:0,
              l1:'6-4',
              l2:'7-3',
              o1:'+130',
              o2:'-155',
              pick:'Wolves',
              res:'L',
              s1:6,
              s2:5,
              t1:'76ers',
              t2:'Wolves',
              wl1:'30-25',
              wl2:'35-22'
            },
            {
              i1:3,
              i2:8,
              l1:'8-2',
              l2:'1-9',
              o1:'-195',
              o2:'+165',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:11,
              t1:'Knicks',
              t2:'Bulls',
              wl1:'35-21',
              wl2:'24-32'
            },
            {
              i1:6,
              i2:3,
              l1:'4-6',
              l2:'5-5',
              o1:'-125',
              o2:'+105',
              pick:'Suns',
              res:'L',
              s1:10,
              s2:7,
              t1:'Blazers',
              t2:'Suns',
              wl1:'27-30',
              wl2:'32-24'
            },
            {
              i1:3,
              i2:2,
              l1:'6-4',
              l2:'5-5',
              o1:'+165',
              o2:'-195',
              pick:'Clippers',
              res:'L',
              s1:7,
              s2:9,
              t1:'Magic',
              t2:'Clippers',
              wl1:'29-25',
              wl2:'27-29'
            }
          ]},
          { day:18, date:'', type:'REAL 💰', overall:'107-19 (85%)', unlocked:false, games:[
            {
              i1:2,
              i2:1,
              l1:'9-1',
              l2:'8-2',
              o1:'+100',
              o2:'-120',
              pick:'Pistons',
              res:'W',
              s1:2,
              s2:1,
              t1:'Spurs',
              t2:'Pistons',
              wl1:'40-16',
              wl2:'42-13'
            },
            {
              i1:5,
              i2:8,
              l1:'0-10',
              l2:'3-7',
              o1:'+125',
              o2:'-145',
              pick:'Grizzlies',
              res:'L',
              s1:15,
              s2:11,
              t1:'Kings',
              t2:'Grizzlies',
              wl1:'12-46',
              wl2:'21-34'
            },
            {
              i1:5,
              i2:3,
              l1:'3-7',
              l2:'6-4',
              o1:'+525',
              o2:'-800',
              pick:'Rockets',
              res:'W',
              s1:13,
              s2:4,
              t1:'Jazz',
              t2:'Rockets',
              wl1:'18-39',
              wl2:'34-21'
            }
          ]},
          { day:19, date:'', type:'REAL 💰', overall:'113-24 (82%)', unlocked:false, games:[
            {
              i1:3,
              i2:6,
              l1:'5-5',
              l2:'2-8',
              o1:'+500',
              o2:'+360',
              pick:'76ers',
              res:'L',
              s1:6,
              s2:15,
              t1:'76ers',
              t2:'Pacers',
              wl1:'31-26',
              wl2:'15-43'
            },
            {
              i1:5,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+460',
              o2:'-675',
              pick:'Hawks',
              res:'W',
              s1:13,
              s2:9,
              t1:'Wizards',
              t2:'Hawks',
              wl1:'16-40',
              wl2:'28-31'
            },
            {
              i1:5,
              i2:0,
              l1:'2-8',
              l2:'2-8',
              o1:'-120',
              o2:'+100',
              pick:'Nets',
              res:'L',
              s1:12,
              s2:14,
              t1:'Mavericks',
              t2:'Nets',
              wl1:'20-36',
              wl2:'15-41'
            },
            {
              i1:6,
              i2:2,
              l1:'7-3',
              l2:'5-5',
              o1:'+120',
              o2:'-140',
              pick:'Raptors',
              res:'L',
              s1:1,
              s2:5,
              t1:'Thunder',
              t2:'Raptors',
              wl1:'44-14',
              wl2:'34-23'
            },
            {
              i1:1,
              i2:1,
              l1:'6-4',
              l2:'8-2',
              o1:'+150',
              o2:'-175',
              pick:'Cavaliers',
              res:'W',
              s1:3,
              s2:4,
              t1:'Knicks',
              t2:'Cavaliers',
              wl1:'37-21',
              wl2:'36-22'
            },
            {
              i1:1,
              i2:5,
              l1:'7-3',
              l2:'1-9',
              o1:'-310',
              o2:'+255',
              pick:'Hornets',
              res:'W',
              s1:10,
              s2:12,
              t1:'Hornets',
              t2:'Bulls',
              wl1:'27-31',
              wl2:'24-34'
            },
            {
              i1:3,
              i2:2,
              l1:'5-5',
              l2:'7-3',
              o1:'-230',
              o2:'+190',
              pick:'Heat',
              res:'L',
              s1:7,
              s2:11,
              t1:'Heat',
              t2:'Bucks',
              wl1:'31-27',
              wl2:'24-31'
            },
            {
              i1:7,
              i2:3,
              l1:'4-6',
              l2:'5-5',
              o1:'-120',
              o2:'+100',
              pick:'Warriors',
              res:'L',
              s1:8,
              s2:14,
              t1:'Warriors',
              t2:'Pelicans',
              wl1:'30-27',
              wl2:'16-42'
            },
            {
              i1:2,
              i2:6,
              l1:'8-2',
              l2:'3-7',
              o1:'-225',
              o2:'+185',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:7,
              t1:'Celtics',
              t2:'Suns',
              wl1:'37-19',
              wl2:'33-25'
            },
            {
              i1:0,
              i2:4,
              l1:'6-4',
              l2:'5-5',
              o1:'-245',
              o2:'+205',
              pick:'Wolves',
              res:'W',
              s1:4,
              s2:9,
              t1:'Wolves',
              t2:'Blazers',
              wl1:'35-23',
              wl2:'28-30'
            },
            {
              i1:2,
              i2:1,
              l1:'6-4',
              l2:'5-5',
              o1:'+180',
              o2:'-220',
              pick:'Lakers',
              res:'L',
              s1:8,
              s2:6,
              t1:'Magic',
              t2:'Lakers',
              wl1:'30-26',
              wl2:'34-22'
            }
          ]},
          { day:20, date:'', type:'REAL 💰', overall:'117-26 (82%)', unlocked:false, games:[
            {
              i1:7,
              i2:7,
              l1:'4-6',
              l2:'3-7',
              o1:'-170',
              o2:'+145',
              pick:'Warriors',
              res:'L',
              s1:8,
              s2:11,
              t1:'Warriors',
              t2:'Grizzlies',
              wl1:'30-28',
              wl2:'21-35'
            },
            {
              i1:7,
              i2:0,
              l1:'7-3',
              l2:'8-2',
              o1:'+335',
              o2:'-450',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:1,
              t1:'Thunder',
              t2:'Pistons',
              wl1:'45-14',
              wl2:'42-14'
            },
            {
              i1:2,
              i2:1,
              l1:'9-1',
              l2:'5-5',
              o1:'-225',
              o2:'+185',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:5,
              t1:'Spurs',
              t2:'Raptors',
              wl1:'41-16',
              wl2:'34-24'
            },
            {
              i1:4,
              i2:2,
              l1:'8-2',
              l2:'7-3',
              o1:'-140',
              o2:'+120',
              pick:'Cavaliers',
              res:'L',
              s1:4,
              s2:11,
              t1:'Cavaliers',
              t2:'Bucks',
              wl1:'37-22',
              wl2:'25-31'
            },
            {
              i1:5,
              i2:4,
              l1:'2-8',
              l2:'6-4',
              o1:'+575',
              o2:'-900',
              pick:'Rockets',
              res:'W',
              s1:15,
              s2:5,
              t1:'Kings',
              t2:'Rockets',
              wl1:'13-46',
              wl2:'35-21'
            },
            {
              i1:1,
              i2:6,
              l1:'9-1',
              l2:'4-6',
              o1:'+130',
              o2:'-150',
              pick:'Celtics',
              res:'L',
              s1:2,
              s2:3,
              t1:'Celtics',
              t2:'Nuggets',
              wl1:'38-19',
              wl2:'36-22'
            }
          ]},
          { day:21, date:'', type:'PAPER', overall:'125-26 (83%) 🔥', unlocked:false, games:[
            {
              i1:4,
              i2:1,
              l1:'7-3',
              l2:'6-4',
              o1:'+115',
              o2:'-135',
              pick:'Hornets',
              res:'W',
              s1:4,
              s2:10,
              t1:'Cavaliers',
              t2:'Hornets',
              wl1:'36-22',
              wl2:'28-31'
            },
            {
              i1:3,
              i2:2,
              l1:'4-6',
              l2:'6-4',
              o1:'+185',
              o2:'-220',
              pick:'76ers',
              res:'W',
              s1:8,
              s2:6,
              t1:'Heat',
              t2:'76ers',
              wl1:'30-28',
              wl2:'32-25'
            },
            {
              i1:1,
              i2:3,
              l1:'7-3',
              l2:'6-4',
              o1:'-400',
              o2:'+310',
              pick:'Rockets',
              res:'W',
              s1:2,
              s2:3,
              t1:'Celtics',
              t2:'Rockets',
              wl1:'37-19',
              wl2:'36-20'
            },
            {
              i1:0,
              i2:2,
              l1:'2-8',
              l2:'9-1',
              o1:'+400',
              o2:'-575',
              pick:'Spurs',
              res:'W',
              s1:14,
              s2:2,
              t1:'Nets',
              t2:'Spurs',
              wl1:'15-42',
              wl2:'42-16'
            },
            {
              i1:6,
              i2:2,
              l1:'3-7',
              l2:'5-5',
              o1:'+355',
              o2:'-490',
              pick:'Hawks',
              res:'W',
              s1:13,
              s2:9,
              t1:'Wizards',
              t2:'Hawks',
              wl1:'16-41',
              wl2:'29-31'
            },
            {
              i1:4,
              i2:6,
              l1:'5-5',
              l2:'1-9',
              o1:'-180',
              o2:'+155',
              pick:'Blazers',
              res:'W',
              s1:9,
              s2:12,
              t1:'Blazers',
              t2:'Bulls',
              wl1:'28-31',
              wl2:'24-35'
            },
            {
              i1:7,
              i2:5,
              l1:'2-8',
              l2:'2-8',
              o1:'+250',
              o2:'-300',
              pick:'Mavericks',
              res:'L',
              s1:15,
              s2:12,
              t1:'Kings',
              t2:'Mavericks',
              wl1:'13-47',
              wl2:'21-36'
            },
            {
              i1:1,
              i2:5,
              l1:'5-5',
              l2:'3-7',
              o1:'-210',
              o2:'+175',
              pick:'Lakers',
              res:'L',
              s1:6,
              s2:7,
              t1:'Lakers',
              t2:'Suns',
              wl1:'34-23',
              wl2:'33-26'
            },
            {
              i1:2,
              i2:6,
              l1:'5-5',
              l2:'3-7',
              o1:'-240',
              o2:'+200',
              pick:'Pelicans',
              res:'W',
              s1:14,
              s2:13,
              t1:'Pelicans',
              t2:'Jazz',
              wl1:'17-42',
              wl2:'18-40'
            },
            {
              i1:0,
              i2:4,
              l1:'6-4',
              l2:'5-5',
              o1:'-310',
              o2:'+255',
              pick:'Wolves',
              res:'W',
              s1:5,
              s2:10,
              t1:'Wolves',
              t2:'Clippers',
              wl1:'36-23',
              wl2:'27-30'
            }
          ]},
          { day:22, date:'', type:'REAL 💰', overall:'129-27 (83%)', unlocked:false, games:[
            {
              i1:5,
              i2:0,
              l1:'8-2',
              l2:'8-2',
              o1:'+180',
              o2:'-240',
              pick:'Pistons',
              res:'W',
              s1:4,
              s2:1,
              t1:'Cavaliers',
              t2:'Pistons',
              wl1:'37-23',
              wl2:'43-14'
            },
            {
              i1:0,
              i2:1,
              l1:'2-8',
              l2:'8-2',
              o1:'+750',
              o2:'-1400',
              pick:'Celtics',
              res:'W',
              s1:14,
              s2:2,
              t1:'Nets',
              t2:'Celtics',
              wl1:'15-43',
              wl2:'38-20'
            },
            {
              i1:1,
              i2:2,
              l1:'6-4',
              l2:'8-2',
              o1:'-300',
              o2:'+250',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:11,
              t1:'Knicks',
              t2:'Bucks',
              wl1:'37-22',
              wl2:'26-31'
            },
            {
              i1:8,
              i2:7,
              l1:'3-7',
              l2:'3-7',
              o1:'+165',
              o2:'-195',
              pick:'Mavericks',
              res:'L',
              s1:12,
              s2:11,
              t1:'Grizzlies',
              t2:'Mavericks',
              wl1:'21-36',
              wl2:'22-36'
            },
            {
              i1:3,
              i2:4,
              l1:'4-6',
              l2:'6-4',
              o1:'+265',
              o2:'-330',
              pick:'Thunder',
              res:'W',
              s1:4,
              s2:1,
              t1:'Nuggets',
              t2:'Thunder',
              wl1:'37-22',
              wl2:'45-15'
            }
          ]},
          { day:23, date:'', type:'REAL 💰', overall:'133-28 (83%)', unlocked:false, games:[
            {
              i1:5,
              i2:0,
              l1:'6-4',
              l2:'7-3',
              o1:'+250',
              o2:'-300',
              pick:'Hornets',
              res:'W',
              s1:9,
              s2:10,
              t1:'Blazers',
              t2:'Hornets',
              wl1:'29-31',
              wl2:'29-31'
            },
            {
              i1:4,
              i2:3,
              l1:'6-4',
              l2:'5-5',
              o1:'-135',
              o2:'+115',
              pick:'Rockets',
              res:'L',
              s1:3,
              s2:8,
              t1:'Rockets',
              t2:'Heat',
              wl1:'37-21',
              wl2:'31-29'
            },
            {
              i1:2,
              i2:8,
              l1:'5-5',
              l2:'3-7',
              o1:'-850',
              o2:'+550',
              pick:'Raptors',
              res:'W',
              s1:5,
              s2:12,
              t1:'Raptors',
              t2:'Wizards',
              wl1:'34-25',
              wl2:'16-42'
            },
            {
              i1:1,
              i2:6,
              l1:'5-5',
              l2:'2-8',
              o1:'-175',
              o2:'+150',
              pick:'Lakers',
              res:'W',
              s1:6,
              s2:8,
              t1:'Lakers',
              t2:'Warriors',
              wl1:'34-24',
              wl2:'31-28'
            },
            {
              i1:3,
              i2:6,
              l1:'5-5',
              l2:'3-7',
              o1:'-250',
              o2:'+210',
              pick:'Pelicans',
              res:'W',
              s1:14,
              s2:13,
              t1:'Pelicans',
              t2:'Jazz',
              wl1:'18-42',
              wl2:'18-41'
            }
          ]},
          { day:24, date:'', type:'REAL 💰', overall:'151-32 (83%)', unlocked:false, games:[
            {
              i1:3,
              i2:1,
              l1:'9-1',
              l2:'6-4',
              o1:'-115',
              o2:'-105',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:3,
              t1:'Spurs',
              t2:'Knicks',
              wl1:'43-16',
              wl2:'38-22'
            },
            {
              i1:5,
              i2:2,
              l1:'7-3',
              l2:'2-8',
              o1:'-625',
              o2:'+430',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:14,
              t1:'Cavaliers',
              t2:'Nets',
              wl1:'37-24',
              wl2:'15-44'
            },
            {
              i1:3,
              i2:6,
              l1:'7-3',
              l2:'0-10',
              o1:'-140',
              o2:'+120',
              pick:'Bucks',
              res:'L',
              s1:11,
              s2:12,
              t1:'Bucks',
              t2:'Bulls',
              wl1:'26-32',
              wl2:'24-36'
            },
            {
              i1:1,
              i2:5,
              l1:'6-4',
              l2:'6-4',
              o1:'+130',
              o2:'-150',
              pick:'Wolves',
              res:'W',
              s1:5,
              s2:4,
              t1:'Wolves',
              t2:'Nuggets',
              wl1:'37-23',
              wl2:'37-23'
            },
            {
              i1:8,
              i2:7,
              l1:'2-8',
              l2:'2-8',
              o1:'-105',
              o2:'-115',
              pick:'Grizzlies',
              res:'W',
              s1:11,
              s2:15,
              t1:'Grizzlies',
              t2:'Pacers',
              wl1:'21-37',
              wl2:'15-45'
            },
            {
              i1:6,
              i2:2,
              l1:'5-5',
              l2:'6-4',
              o1:'+175',
              o2:'-210',
              pick:'Hawks',
              res:'W',
              s1:9,
              s2:10,
              t1:'Blazers',
              t2:'Hawks',
              wl1:'29-32',
              wl2:'30-31'
            },
            {
              i1:0,
              i2:2,
              l1:'8-2',
              l2:'6-4',
              o1:'-210',
              o2:'+175',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:7,
              t1:'Pistons',
              t2:'Magic',
              wl1:'44-14',
              wl2:'31-27'
            },
            {
              i1:2,
              i2:2,
              l1:'5-5',
              l2:'8-2',
              o1:'+290',
              o2:'-380',
              pick:'Celtics',
              res:'W',
              s1:6,
              s2:2,
              t1:'76ers',
              t2:'Celtics',
              wl1:'33-26',
              wl2:'39-20'
            },
            {
              i1:4,
              i2:7,
              l1:'7-3',
              l2:'3-7',
              o1:'-1000',
              o2:'+625',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:12,
              t1:'Thunder',
              t2:'Mavericks',
              wl1:'46-15',
              wl2:'23-36'
            },
            {
              i1:3,
              i2:3,
              l1:'6-4',
              l2:'2-8',
              o1:'+285',
              o2:'-730',
              pick:'Clippers',
              res:'W',
              s1:13,
              s2:10,
              t1:'Pelicans',
              t2:'Clippers',
              wl1:'19-42',
              wl2:'27-31'
            },
            {
              i1:6,
              i2:1,
              l1:'2-8',
              l2:'5-5',
              o1:'+500',
              o2:'-750',
              pick:'Lakers',
              res:'W',
              s1:15,
              s2:6,
              t1:'Kings',
              t2:'Lakers',
              wl1:'14-47',
              wl2:'35-24'
            }
          ]},
          { day:25, date:'', type:'REAL 💰', overall:'155-32 (83%) 🔥', unlocked:false, games:[
            {
              i1:4,
              i2:8,
              l1:'6-4',
              l2:'3-7',
              o1:'-950',
              o2:'+600',
              pick:'Rockets',
              res:'W',
              s1:3,
              s2:13,
              t1:'Rockets',
              t2:'Wizards',
              wl1:'37-22',
              wl2:'16-43'
            },
            {
              i1:3,
              i2:1,
              l1:'8-2',
              l2:'6-4',
              o1:'-135',
              o2:'+115',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:11,
              t1:'Celtics',
              t2:'Bucks',
              wl1:'40-20',
              wl2:'26-33'
            },
            {
              i1:5,
              i2:6,
              l1:'4-6',
              l2:'3-7',
              o1:'-600',
              o2:'+425',
              pick:'Nuggets',
              res:'W',
              s1:4,
              s2:13,
              t1:'Nuggets',
              t2:'Jazz',
              wl1:'37-24',
              wl2:'18-42'
            },
            {
              i1:3,
              i2:7,
              l1:'5-5',
              l2:'4-6',
              o1:'-120',
              o2:'+100',
              pick:'Clippers',
              res:'W',
              s1:10,
              s2:8,
              t1:'Clippers',
              t2:'Warriors',
              wl1:'28-31',
              wl2:'31-29'
            }
          ]},
          { day:26, date:'', type:'REAL 💰', overall:'164-33 (83%)', unlocked:false, games:[
            {
              i1:8,
              i2:1,
              l1:'3-7',
              l2:'7-3',
              o1:'+525',
              o2:'-800',
              pick:'Hornets',
              res:'W',
              s1:11,
              s2:10,
              t1:'Mavericks',
              t2:'Hornets',
              wl1:'23-37',
              wl2:'30-31'
            },
            {
              i1:0,
              i2:3,
              l1:'8-2',
              l2:'7-3',
              o1:'-140',
              o2:'+120',
              pick:'Pistons',
              res:'L',
              s1:1,
              s2:4,
              t1:'Pistons',
              t2:'Cavaliers',
              wl1:'45-14',
              wl2:'38-24'
            },
            {
              i1:9,
              i2:2,
              l1:'2-8',
              l2:'6-4',
              o1:'+725',
              o2:'-1300',
              pick:'Magic',
              res:'W',
              s1:13,
              s2:7,
              t1:'Wizards',
              t2:'Magic',
              wl1:'16-44',
              wl2:'31-28'
            },
            {
              i1:0,
              i2:5,
              l1:'2-8',
              l2:'5-5',
              o1:'+475',
              o2:'-700',
              pick:'Heat',
              res:'W',
              s1:14,
              s2:8,
              t1:'Nets',
              t2:'Heat',
              wl1:'15-45',
              wl2:'32-29'
            },
            {
              i1:1,
              i2:5,
              l1:'7-3',
              l2:'6-4',
              o1:'-140',
              o2:'+120',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:5,
              t1:'Knicks',
              t2:'Raptors',
              wl1:'39-22',
              wl2:'35-25'
            },
            {
              i1:8,
              i2:0,
              l1:'3-7',
              l2:'7-3',
              o1:'+550',
              o2:'-850',
              pick:'Wolves',
              res:'W',
              s1:12,
              s2:5,
              t1:'Grizzlies',
              t2:'Wolves',
              wl1:'23-36',
              wl2:'38-23'
            },
            {
              i1:6,
              i2:6,
              l1:'7-3',
              l2:'1-9',
              o1:'-420',
              o2:'+315',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:12,
              t1:'Thunder',
              t2:'Bulls',
              wl1:'47-15',
              wl2:'25-36'
            },
            {
              i1:3,
              i2:3,
              l1:'9-1',
              l2:'4-6',
              o1:'-330',
              o2:'+265',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:6,
              t1:'Spurs',
              t2:'76ers',
              wl1:'43-17',
              wl2:'33-27'
            },
            {
              i1:1,
              i2:0,
              l1:'6-4',
              l2:'5-5',
              o1:'+285',
              o2:'-370',
              pick:'Lakers',
              res:'W',
              s1:14,
              s2:6,
              t1:'Pelicans',
              t2:'Lakers',
              wl1:'19-43',
              wl2:'36-24'
            },
            {
              i1:1,
              i2:6,
              l1:'4-6',
              l2:'2-8',
              o1:'-380',
              o2:'+290',
              pick:'Suns',
              res:'W',
              s1:7,
              s2:15,
              t1:'Suns',
              t2:'Kings',
              wl1:'34-26',
              wl2:'14-48'
            }
          ]},
          { day:27, date:'', type:'REAL 💰', overall:'169-34 (83%)', unlocked:false, games:[
            {
              i1:4,
              i2:2,
              l1:'8-2',
              l2:'7-3',
              o1:'-170',
              o2:'+145',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:3,
              t1:'Thunder',
              t2:'Knicks',
              wl1:'48-15',
              wl2:'40-22'
            },
            {
              i1:2,
              i2:1,
              l1:'7-3',
              l2:'8-2',
              o1:'+205',
              o2:'-245',
              pick:'Celtics',
              res:'L',
              s1:10,
              s2:2,
              t1:'Hornets',
              t2:'Celtics',
              wl1:'31-31',
              wl2:'41-20'
            },
            {
              i1:5,
              i2:4,
              l1:'2-8',
              l2:'4-6',
              o1:'+175',
              o2:'-350',
              pick:'76ers',
              res:'W',
              s1:14,
              s2:6,
              t1:'Jazz',
              t2:'76ers',
              wl1:'18-43',
              wl2:'33-28'
            },
            {
              i1:4,
              i2:9,
              l1:'5-5',
              l2:'3-7',
              o1:'-450',
              o2:'+335',
              pick:'Blazers',
              res:'W',
              s1:9,
              s2:11,
              t1:'Blazers',
              t2:'Grizzlies',
              wl1:'29-33',
              wl2:'23-37'
            },
            {
              i1:0,
              i2:2,
              l1:'6-4',
              l2:'5-5',
              o1:'-105',
              o2:'-115',
              pick:'Hawks',
              res:'W',
              s1:9,
              s2:11,
              t1:'Hawks',
              t2:'Bucks',
              wl1:'31-31',
              wl2:'26-34'
            },
            {
              i1:7,
              i2:3,
              l1:'2-8',
              l2:'6-4',
              o1:'+500',
              o2:'-750',
              pick:'Clippers',
              res:'W',
              s1:15,
              s2:9,
              t1:'Pacers',
              t2:'Clippers',
              wl1:'15-46',
              wl2:'29-31'
            }
          ]},
          { day:28, date:'', type:'REAL 💰', overall:'175-37 (83%)', unlocked:false, games:[
            {
              i1:7,
              i2:4,
              l1:'2-8',
              l2:'6-4',
              o1:'+270',
              o2:'-340',
              pick:'Magic',
              res:'W',
              s1:12,
              s2:7,
              t1:'Mavericks',
              t2:'Magic',
              wl1:'23-38',
              wl2:'32-28'
            },
            {
              i1:6,
              i2:8,
              l1:'2-8',
              l2:'2-8',
              o1:'+150',
              o2:'-175',
              pick:'Wizards',
              res:'L',
              s1:14,
              s2:13,
              t1:'Jazz',
              t2:'Wizards',
              wl1:'18-44',
              wl2:'16-45'
            },
            {
              i1:1,
              i2:4,
              l1:'1-9',
              l2:'6-4',
              o1:'+525',
              o2:'-800',
              pick:'Heat',
              res:'W',
              s1:14,
              s2:8,
              t1:'Nets',
              t2:'Heat',
              wl1:'15-46',
              wl2:'33-29'
            },
            {
              i1:8,
              i2:6,
              l1:'4-6',
              l2:'7-3',
              o1:'+280',
              o2:'-360',
              pick:'Rockets',
              res:'L',
              s1:8,
              s2:3,
              t1:'Warriors',
              t2:'Rockets',
              wl1:'31-30',
              wl2:'38-22'
            },
            {
              i1:0,
              i2:4,
              l1:'8-2',
              l2:'9-1',
              o1:'+135',
              o2:'-160',
              pick:'Spurs',
              res:'W',
              s1:1,
              s2:2,
              t1:'Pistons',
              t2:'Spurs',
              wl1:'45-15',
              wl2:'44-17'
            },
            {
              i1:3,
              i2:3,
              l1:'5-5',
              l2:'7-3',
              o1:'+175',
              o2:'-210',
              pick:'Wolves',
              res:'W',
              s1:5,
              s2:4,
              t1:'Raptors',
              t2:'Wolves',
              wl1:'35-26',
              wl2:'39-23'
            },
            {
              i1:8,
              i2:3,
              l1:'1-9',
              l2:'4-6',
              o1:'+375',
              o2:'-525',
              pick:'Suns',
              res:'L',
              s1:12,
              s2:7,
              t1:'Bulls',
              t2:'Suns',
              wl1:'25-37',
              wl2:'35-26'
            },
            {
              i1:1,
              i2:4,
              l1:'5-5',
              l2:'5-5',
              o1:'+155',
              o2:'-180',
              pick:'Nuggets',
              res:'W',
              s1:6,
              s2:5,
              t1:'Lakers',
              t2:'Nuggets',
              wl1:'37-24',
              wl2:'38-24'
            },
            {
              i1:3,
              i2:5,
              l1:'6-4',
              l2:'2-8',
              o1:'-220',
              o2:'+180',
              pick:'Pelicans',
              res:'W',
              s1:13,
              s2:15,
              t1:'Pelicans',
              t2:'Kings',
              wl1:'19-44',
              wl2:'14-49'
            }
          ]},
          { day:29, date:'', type:'REAL 💰', overall:'181-38 (83%) 🔥', unlocked:false, games:[
            {
              i1:4,
              i2:1,
              l1:'2-8',
              l2:'7-3',
              o1:'+700',
              o2:'-1200',
              pick:'Celtics',
              res:'W',
              s1:12,
              s2:2,
              t1:'Mavericks',
              t2:'Celtics',
              wl1:'21-41',
              wl2:'41-21'
            },
            {
              i1:5,
              i2:1,
              l1:'7-3',
              l2:'7-3',
              o1:'+230',
              o2:'-280',
              pick:'Hornets',
              res:'L',
              s1:8,
              s2:9,
              t1:'Heat',
              t2:'Hornets',
              wl1:'34-29',
              wl2:'32-31'
            },
            {
              i1:4,
              i2:4,
              l1:'5-5',
              l2:'6-4',
              o1:'+215',
              o2:'-260',
              pick:'Rockets',
              res:'W',
              s1:10,
              s2:4,
              t1:'Blazers',
              t2:'Rockets',
              wl1:'30-33',
              wl2:'38-23'
            },
            {
              i1:0,
              i2:4,
              l1:'6-4',
              l2:'4-6',
              o1:'+155',
              o2:'-180',
              pick:'Suns',
              res:'W',
              s1:13,
              s2:7,
              t1:'Pelicans',
              t2:'Suns',
              wl1:'20-44',
              wl2:'35-27'
            },
            {
              i1:2,
              i2:4,
              l1:'6-4',
              l2:'5-5',
              o1:'-110',
              o2:'-110',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:5,
              t1:'Knicks',
              t2:'Nuggets',
              wl1:'40-23',
              wl2:'39-24'
            },
            {
              i1:6,
              i2:5,
              l1:'6-4',
              l2:'9-1',
              o1:'+225',
              o2:'-275',
              pick:'Spurs',
              res:'W',
              s1:9,
              s2:2,
              t1:'Clippers',
              t2:'Spurs',
              wl1:'30-31',
              wl2:'45-17'
            },
            {
              i1:6,
              i2:3,
              l1:'2-8',
              l2:'5-5',
              o1:'+305',
              o2:'-410',
              pick:'Lakers',
              res:'W',
              s1:15,
              s2:6,
              t1:'Pacers',
              t2:'Lakers',
              wl1:'15-47',
              wl2:'37-25'
            }
          ]},
          { day:30, date:'', type:'REAL 💰', overall:'185-39 (83%)', unlocked:false, games:[
            {
              _id:1773010475575,
              i1:1,
              i2:3,
              l1:'0-10',
              l2:'7-3',
              o1:'+650',
              o2:'-1100',
              pick:'Pistons',
              res:'L',
              s1:14,
              s2:1,
              t1:'Nets',
              t2:'Pistons',
              wl1:'15-47',
              wl2:'45-16'
            },
            {
              _id:1773010708771,
              i1:3,
              i2:1,
              l1:'4-6',
              l2:'6-4',
              o1:'+210',
              o2:'-250',
              pick:'Hawks',
              res:'W',
              s1:6,
              s2:10,
              t1:'76ers',
              t2:'Hawks',
              wl1:'34-28',
              wl2:'32-31'
            },
            {
              _id:1773010789645,
              i1:5,
              i2:6,
              l1:'5-5',
              l2:'3-7',
              o1:'-250',
              o2:'+210',
              pick:'Clippers',
              res:'W',
              s1:9,
              s2:11,
              t1:'Clippers',
              t2:'Grizzlies',
              wl1:'30-32',
              wl2:'23-38'
            },
            {
              _id:1773010815265,
              i1:6,
              i2:2,
              l1:'3-7',
              l2:'5-5',
              o1:'+335',
              o2:'-450',
              pick:'Bucks',
              res:'W',
              s1:14,
              s2:11,
              t1:'Jazz',
              t2:'Bucks',
              wl1:'19-44',
              wl2:'26-35'
            },
            {
              _id:1773010859421,
              i1:8,
              i2:6,
              l1:'4-6',
              l2:'8-2',
              o1:'+575',
              o2:'-900',
              pick:'Thunder',
              res:'W',
              s1:8,
              s2:1,
              t1:'Warriors',
              t2:'Thunder',
              wl1:'32-30',
              wl2:'49-15'
            },
            {
              _id:1773010900001,
              i1:4,
              i2:1,
              l1:'6-4',
              l2:'7-3',
              o1:'+220',
              o2:'-270',
              pick:'Wolves',
              res:'L',
              s1:7,
              s2:4,
              t1:'Magic',
              t2:'Wolves',
              wl1:'33-28',
              wl2:'44-18'
            }
          ]},
          { day:31, date:'', type:'REAL 💰', overall:'192-42 (82%)', unlocked:false, games:[
            {
              _id:1773013608683,
              i1:1,
              i2:3,
              l1:'8-2',
              l2:'7-3',
              o1:'+100',
              o2:'-120',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:4,
              t1:'Celtics',
              t2:'Cavaliers',
              wl1:'42-21',
              wl2:'39-24'
            },
            {
              _id:1773013678104,
              i1:2,
              i2:1,
              l1:'7-3',
              l2:'6-4',
              o1:'-195',
              o2:'+165',
              pick:'Knicks',
              res:'L',
              s1:3,
              s2:6,
              t1:'Knicks',
              t2:'Lakers',
              wl1:'41-23',
              wl2:'38-25'
            },
            {
              _id:1773013722582,
              i1:3,
              i2:5,
              l1:'7-3',
              l2:'7-3',
              o1:'-195',
              o2:'+165',
              pick:'Pistons',
              res:'L',
              s1:1,
              s2:8,
              t1:'Pistons',
              t2:'Heat',
              wl1:'45-16',
              wl2:'35-29'
            },
            {
              _id:1773013782334,
              i1:5,
              i2:4,
              l1:'3-7',
              l2:'5-5',
              o1:'+320',
              o2:'-430',
              pick:'Raptors',
              res:'W',
              s1:12,
              s2:5,
              t1:'Mavericks',
              t2:'Raptors',
              wl1:'21-42',
              wl2:'35-27'
            },
            {
              _id:1773013817079,
              i1:6,
              i2:0,
              l1:'2-8',
              l2:'6-4',
              o1:'+410',
              o2:'-585',
              pick:'Pelicans',
              res:'W',
              s1:13,
              s2:13,
              t1:'Wizards',
              t2:'Pelicans',
              wl1:'16-46',
              wl2:'20-45'
            },
            {
              _id:1773014391544,
              i1:4,
              i2:5,
              l1:'6-4',
              l2:'5-5',
              o1:'-200',
              o2:'+170',
              pick:'Magic',
              res:'W',
              s1:7,
              s2:11,
              t1:'Magic',
              t2:'Bucks',
              wl1:'33-28',
              wl2:'26-35'
            },
            {
              _id:1773014426688,
              i1:3,
              i2:3,
              l1:'6-4',
              l2:'9-1',
              o1:'+185',
              o2:'-225',
              pick:'Spurs',
              res:'W',
              s1:4,
              s2:2,
              t1:'Rockets',
              t2:'Spurs',
              wl1:'39-23',
              wl2:'46-17'
            },
            {
              _id:1773014489926,
              i1:6,
              i2:4,
              l1:'2-8',
              l2:'4-6',
              o1:'+310',
              o2:'-415',
              pick:'Blazers',
              res:'W',
              s1:15,
              s2:10,
              t1:'Pacers',
              t2:'Blazers',
              wl1:'15-48',
              wl2:'30-34'
            },
            {
              _id:1773014524043,
              i1:9,
              i2:5,
              l1:'2-8',
              l2:'2-8',
              o1:'-170',
              o2:'+145',
              pick:'Bulls',
              res:'W',
              s1:12,
              s2:15,
              t1:'Bulls',
              t2:'Kings',
              wl1:'26-37',
              wl2:'14-50'
            },
            {
              _id:1773021252629,
              i1:1,
              i2:3,
              l1:'7-3',
              l2:'5-5',
              o1:'-195',
              o2:'+165',
              pick:'Hornets',
              res:'L',
              s1:9,
              s2:7,
              t1:'Hornets',
              t2:'Suns',
              wl1:'32-32',
              wl2:'36-27'
            }
          ]},
          { day:32, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1773096084509,
              i1:4,
              i2:4,
              l1:'4-6',
              l2:'7-3',
              o1:'+575',
              o2:'-900',
              pick:'Cavaliers',
              res:'W',
              s1:6,
              s2:4,
              t1:'76ers',
              t2:'Cavaliers',
              wl1:'34-28',
              wl2:'39-24'
            },
            {
              _id:1773096139310,
              i1:2,
              i2:6,
              l1:'5-5',
              l2:'8-2',
              o1:'+165',
              o2:'-165',
              pick:'Thunder',
              res:'W',
              s1:6,
              s2:1,
              t1:'Nuggets',
              t2:'Thunder',
              wl1:'39-25',
              wl2:'49-15'
            },
            {
              _id:1773096198177,
              i1:10,
              i2:2,
              l1:'3-7',
              l2:'0-10',
              o1:'-105',
              o2:'-115',
              pick:'Grizzlies',
              res:'L',
              s1:11,
              s2:14,
              t1:'Grizzlies',
              t2:'Nets',
              wl1:'23-38',
              wl2:'15-47'
            },
            {
              _id:1773096259971,
              i1:6,
              i2:7,
              l1:'4-6',
              l2:'3-7',
              o1:'-290',
              o2:'+240',
              pick:'Warriors',
              res:'L',
              s1:8,
              s2:14,
              t1:'Warriors',
              t2:'Jazz',
              wl1:'32-30',
              wl2:'19-44'
            },
            {
              _id:1773096308038,
              i1:2,
              i2:3,
              l1:'7-3',
              l2:'5-5',
              o1:'-130',
              o2:'+110',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:9,
              t1:'Knicks',
              t2:'Clippers',
              wl1:'41-23',
              wl2:'30-32'
            }
          ]},
          { day:33, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1773172329874,
              i1:4,
              i2:4,
              l1:'3-7',
              l2:'4-6',
              o1:'+130',
              o2:'-150',
              pick:'76ers',
              res:'W',
              s1:11,
              s2:8,
              t1:'Grizzlies',
              t2:'76ers',
              wl1:'23-40',
              wl2:'34-30'
            },
            {
              _id:1773172366568,
              i1:2,
              i2:1,
              l1:'2-8',
              l2:'7-3',
              o1:'+340',
              o2:'-460',
              pick:'Hawks',
              res:'W',
              s1:12,
              s2:9,
              t1:'Mavericks',
              t2:'Hawks',
              wl1:'21-43',
              wl2:'33-31'
            },
            {
              _id:1773172396529,
              i1:2,
              i2:3,
              l1:'5-5',
              l2:'2-8',
              o1:'-1200',
              o2:'+700',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:13,
              t1:'Pistons',
              t2:'Nets',
              wl1:'45-18',
              wl2:'17-47'
            },
            {
              _id:1773172422452,
              i1:2,
              i2:3,
              l1:'8-2',
              l2:'9-1',
              o1:'+130',
              o2:'-150',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:2,
              t1:'Celtics',
              t2:'Spurs',
              wl1:'43-21',
              wl2:'47-17'
            },
            {
              _id:1773172471039,
              i1:3,
              i2:5,
              l1:'5-5',
              l2:'4-6',
              o1:'-120',
              o2:'+100',
              pick:'Suns',
              res:'W',
              s1:7,
              s2:11,
              t1:'Suns',
              t2:'Bucks',
              wl1:'37-27',
              wl2:'27-36'
            },
            {
              _id:1773172555166,
              i1:5,
              i2:3,
              l1:'5-5',
              l2:'6-4',
              o1:'+160',
              o2:'-185',
              pick:'Rockets',
              res:'W',
              s1:5,
              s2:4,
              t1:'Raptors',
              t2:'Rockets',
              wl1:'36-27',
              wl2:'39-24'
            },
            {
              _id:1773172642973,
              i1:6,
              i2:6,
              l1:'2-8',
              l2:'8-2',
              o1:'+700',
              o2:'-1200',
              pick:'Heat',
              res:'W',
              s1:14,
              s2:6,
              t1:'Wizards',
              t2:'Heat',
              wl1:'16-47',
              wl2:'36-29'
            },
            {
              _id:1773172688569,
              i1:3,
              i2:2,
              l1:'6-4',
              l2:'5-5',
              o1:'-160',
              o2:'+135',
              pick:'Hornets',
              res:'W',
              s1:10,
              s2:10,
              t1:'Hornets',
              t2:'Blazers',
              wl1:'32-33',
              wl2:'31-34'
            },
            {
              _id:1773172739882,
              i1:9,
              i2:6,
              l1:'2-8',
              l2:'3-7',
              o1:'+205',
              o2:'-245',
              pick:'Warriors',
              res:'L',
              s1:12,
              s2:9,
              t1:'Bulls',
              t2:'Warriors',
              wl1:'26-38',
              wl2:'32-32'
            },
            {
              _id:1773172791065,
              i1:7,
              i2:5,
              l1:'1-9',
              l2:'3-7',
              o1:'+130',
              o2:'-150',
              pick:'Kings',
              res:'W',
              s1:15,
              s2:15,
              t1:'Pacers',
              t2:'Kings',
              wl1:'15-49',
              wl2:'15-50'
            },
            {
              _id:1773172877210,
              i1:1,
              i2:1,
              l1:'8-2',
              l2:'6-4',
              o1:'-145',
              o2:'+125',
              pick:'Wolves',
              res:'L',
              s1:3,
              s2:5,
              t1:'Wolves',
              t2:'Lakers',
              wl1:'40-24',
              wl2:'39-25'
            }
          ]},
          { day:34, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1773253520141,
              i1:3,
              i2:2,
              l1:'6-4',
              l2:'7-3',
              o1:'-165',
              o2:'+140',
              pick:'Cavaliers',
              res:'L',
              s1:4,
              s2:8,
              t1:'Cavaliers',
              t2:'Magic',
              wl1:'40-25',
              wl2:'35-28'
            },
            {
              _id:1773266648872,
              i1:4,
              i2:1,
              l1:'1-9',
              l2:'6-4',
              o1:'-140',
              o2:'+120',
              pick:'Pelicans',
              res:'W',
              s1:9,
              s2:12,
              t1:'Raptors',
              t2:'Pelicans',
              wl1:'36-34',
              wl2:'21-45'
            },
            {
              _id:1773266704660,
              i1:4,
              i2:1,
              l1:'6-4',
              l2:'2-8',
              o1:'-1000',
              o2:'+625',
              pick:'Knicks',
              res:'W',
              s1:5,
              s2:15,
              t1:'Knicks',
              t2:'Jazz',
              wl1:'41-25',
              wl2:'20-45'
            },
            {
              _id:1773266836738,
              i1:3,
              i2:8,
              l1:'10-0',
              l2:'10-0',
              o1:'-850',
              o2:'+550',
              pick:'Hornets',
              res:'W',
              s1:6,
              s2:11,
              t1:'Hornets',
              t2:'Kings',
              wl1:'44-33',
              wl2:'27-50'
            },
            {
              _id:1773267032608,
              i1:4,
              i2:3,
              l1:'10-0',
              l2:'4-6',
              o1:'+225',
              o2:'-275',
              pick:'Rockets',
              res:'L',
              s1:2,
              s2:7,
              t1:'Rockets',
              t2:'Nuggets',
              wl1:'58-24',
              wl2:'39-26'
            },
            {
              _id:1773267100393,
              i1:1,
              i2:3,
              l1:'0-10',
              l2:'6-4',
              o1:'+100',
              o2:'-210',
              pick:'Clippers',
              res:'W',
              s1:6,
              s2:9,
              t1:'Wolves',
              t2:'Clippers',
              wl1:'40-46',
              wl2:'32-32'
            }
          ]},
          { day:35, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1773348443146,
              i1:6,
              i2:3,
              l1:'4-6',
              l2:'6-4',
              o1:'+650',
              o2:'-1000',
              pick:'Pistons',
              res:'W',
              s1:8,
              s2:1,
              t1:'76ers',
              t2:'Pistons',
              wl1:'35-30',
              wl2:'46-18'
            },
            {
              _id:1773356178684,
              i1:3,
              i2:6,
              l1:'6-4',
              l2:'0-10',
              o1:'-430',
              o2:'+320',
              pick:'Suns',
              res:'W',
              s1:7,
              s2:15,
              t1:'Suns',
              t2:'Pacers',
              wl1:'38-27',
              wl2:'15-50'
            },
            {
              _id:1773356280964,
              i1:4,
              i2:3,
              l1:'1-9',
              l2:'7-3',
              o1:'+625',
              o2:'-1000',
              pick:'Magic',
              res:'W',
              s1:14,
              s2:5,
              t1:'Wizards',
              t2:'Magic',
              wl1:'16-48',
              wl2:'36-28'
            },
            {
              _id:1773356317550,
              i1:5,
              i2:1,
              l1:'2-8',
              l2:'8-2',
              o1:'+750',
              o2:'-1400',
              pick:'Hawks',
              res:'W',
              s1:13,
              s2:9,
              t1:'Nets',
              t2:'Hawks',
              wl1:'17-48',
              wl2:'34-31'
            },
            {
              _id:1773356371290,
              i1:3,
              i2:11,
              l1:'2-8',
              l2:'2-8',
              o1:'-225',
              o2:'+185',
              pick:'Mavericks',
              res:'W',
              s1:13,
              s2:11,
              t1:'Mavericks',
              t2:'Grizzlies',
              wl1:'21-44',
              wl2:'23-41'
            },
            {
              _id:1773356420118,
              i1:3,
              i2:4,
              l1:'5-5',
              l2:'9-1',
              o1:'+155',
              o2:'-180',
              pick:'Spurs',
              res:'L',
              s1:5,
              s2:2,
              t1:'Nuggets',
              t2:'Spurs',
              wl1:'40-26',
              wl2:'48-17'
            },
            {
              _id:1773356464009,
              i1:3,
              i2:4,
              l1:'7-3',
              l2:'8-2',
              o1:'+230',
              o2:'-280',
              pick:'Thunder',
              res:'W',
              s1:2,
              s2:1,
              t1:'Celtics',
              t2:'Thunder',
              wl1:'43-22',
              wl2:'51-15'
            },
            {
              _id:1773356510170,
              i1:11,
              i2:4,
              l1:'3-7',
              l2:'6-4',
              o1:'+410',
              o2:'-585',
              pick:'Lakers',
              res:'W',
              s1:12,
              s2:4,
              t1:'Bulls',
              t2:'Lakers',
              wl1:'27-38',
              wl2:'40-25'
            },
            {
              _id:1773364509858,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'8-2',
              o1:'+500',
              o2:'-500',
              pick:'Heat',
              res:'W',
              s1:11,
              s2:6,
              t1:'Bucks',
              t2:'Heat',
              wl1:'27-37',
              wl2:'37-29'
            }
          ]},
          { day:36, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1773444648817,
              i1:4,
              i2:5,
              l1:'5-5',
              l2:'2-8',
              o1:'-750',
              o2:'+500',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:13,
              t1:'Cavaliers',
              t2:'Mavericks',
              wl1:'40-26',
              wl2:'22-44'
            },
            {
              _id:1773444700517,
              i1:10,
              i2:2,
              l1:'2-8',
              l2:'5-5',
              o1:'+800',
              o2:'-1600',
              pick:'Pistons',
              res:'W',
              s1:11,
              s2:1,
              t1:'Grizzlies',
              t2:'Pistons',
              wl1:'23-42',
              wl2:'47-18'
            },
            {
              _id:1773444744296,
              i1:4,
              i2:4,
              l1:'6-4',
              l2:'0-10',
              o1:'-750',
              o2:'+500',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:15,
              t1:'Knicks',
              t2:'Pacers',
              wl1:'42-25',
              wl2:'15-51'
            },
            {
              _id:1773444790955,
              i1:2,
              i2:2,
              l1:'6-4',
              l2:'5-5',
              o1:'+170',
              o2:'-200',
              pick:'Raptors',
              res:'W',
              s1:7,
              s2:7,
              t1:'Suns',
              t2:'Raptors',
              wl1:'39-27',
              wl2:'36-29'
            },
            {
              _id:1773444828545,
              i1:1,
              i2:4,
              l1:'7-3',
              l2:'6-4',
              o1:'+195',
              o2:'-235',
              pick:'Rockets',
              res:'W',
              s1:12,
              s2:3,
              t1:'Pelicans',
              t2:'Rockets',
              wl1:'22-45',
              wl2:'40-25'
            },
            {
              _id:1773444866706,
              i1:2,
              i2:5,
              l1:'6-4',
              l2:'3-7',
              o1:'-220',
              o2:'+180',
              pick:'Wolves',
              res:'W',
              s1:6,
              s2:9,
              t1:'Wolves',
              t2:'Warriors',
              wl1:'40-26',
              wl2:'32-33'
            },
            {
              _id:1773444916503,
              i1:6,
              i2:4,
              l1:'2-8',
              l2:'4-6',
              o1:'+700',
              o2:'-1200',
              pick:'Blazers',
              res:'W',
              s1:14,
              s2:10,
              t1:'Jazz',
              t2:'Blazers',
              wl1:'20-46',
              wl2:'31-35'
            },
            {
              _id:1773444957819,
              i1:9,
              i2:4,
              l1:'3-7',
              l2:'6-4',
              o1:'+525',
              o2:'-800',
              pick:'Clippers',
              res:'W',
              s1:12,
              s2:8,
              t1:'Bulls',
              t2:'Clippers',
              wl1:'27-39',
              wl2:'33-32'
            }
          ]},
          { day:37, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1773505950809,
              i1:5,
              i2:6,
              l1:'2-8',
              l2:'4-6',
              o1:'+295',
              o2:'-390',
              pick:'76ers',
              res:'W',
              s1:13,
              s2:8,
              t1:'Nets',
              t2:'76ers',
              wl1:'17-49',
              wl2:'35-31'
            },
            {
              _id:1773505997066,
              i1:5,
              i2:1,
              l1:'3-7',
              l2:'8-2',
              o1:'+305',
              o2:'-410',
              pick:'Hawks',
              res:'W',
              s1:11,
              s2:9,
              t1:'Bucks',
              t2:'Hawks',
              wl1:'27-38',
              wl2:'35-31'
            },
            {
              _id:1773506495412,
              i1:4,
              i2:4,
              l1:'8-2',
              l2:'8-2',
              o1:'+165',
              o2:'-195',
              pick:'Spurs',
              res:'W',
              s1:10,
              s2:2,
              t1:'Hornets',
              t2:'Spurs',
              wl1:'34-33',
              wl2:'48-18'
            },
            {
              _id:1773506548862,
              i1:4,
              i2:3,
              l1:'1-9',
              l2:'6-4',
              o1:'+1200',
              o2:'-4000',
              pick:'Celtics',
              res:'W',
              s1:14,
              s2:2,
              t1:'Wizards',
              t2:'Celtics',
              wl1:'16-49',
              wl2:'43-23'
            },
            {
              _id:1773506605217,
              i1:3,
              i2:6,
              l1:'7-3',
              l2:'8-2',
              o1:'+145',
              o2:'+170',
              pick:'Magic',
              res:'W',
              s1:5,
              s2:6,
              t1:'Magic',
              t2:'Heat',
              wl1:'37-28',
              wl2:'38-29'
            },
            {
              _id:1773506644214,
              i1:4,
              i2:2,
              l1:'5-5',
              l2:'6-4',
              o1:'-145',
              o2:'+125',
              pick:'Lakers',
              res:'W',
              s1:5,
              s2:4,
              t1:'Nuggets',
              t2:'Lakers',
              wl1:'41-26',
              wl2:'41-25'
            },
            {
              _id:1773506708626,
              i1:8,
              i2:4,
              l1:'4-6',
              l2:'7-3',
              o1:'+550',
              o2:'-850',
              pick:'Clippers',
              res:'L',
              s1:15,
              s2:8,
              t1:'Kings',
              t2:'Clippers',
              wl1:'16-51',
              wl2:'34-32'
            }
          ]},
          { day:38, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1773591772000,
              i1:1,
              i2:4,
              l1:'7-3',
              l2:'9-1',
              o1:'+300',
              o2:'-400',
              pick:'Thunder',
              res:'W',
              s1:5,
              s2:1,
              t1:'Wolves',
              t2:'Thunder',
              wl1:'41-26',
              wl2:'52-15'
            },
            {
              _id:1773591943485,
              i1:5,
              i2:6,
              l1:'1-9',
              l2:'6-4',
              o1:'+700',
              o2:'-1200',
              pick:'Cavaliers',
              res:'L',
              s1:12,
              s2:4,
              t1:'Mavericks',
              t2:'Cavaliers',
              wl1:'22-45',
              wl2:'41-26'
            },
            {
              _id:1773592023463,
              i1:1,
              i2:2,
              l1:'6-4',
              l2:'5-5',
              o1:'-165',
              o2:'+140',
              pick:'Pistons',
              res:'L',
              s1:1,
              s2:7,
              t1:'Pistons',
              t2:'Raptors',
              wl1:'48-18',
              wl2:'37-29'
            },
            {
              _id:1773592114547,
              i1:10,
              i2:7,
              l1:'0-10',
              l2:'3-7',
              o1:'+235',
              o2:'-285',
              pick:'Bucks',
              res:'W',
              s1:15,
              s2:11,
              t1:'Pacers',
              t2:'Bucks',
              wl1:'15-52',
              wl2:'27-39'
            },
            {
              _id:1773592693660,
              i1:4,
              i2:6,
              l1:'5-5',
              l2:'5-5',
              o1:'-330',
              o2:'+265',
              pick:'Blazers',
              res:'W',
              s1:10,
              s2:8,
              t1:'Blazers',
              t2:'76ers',
              wl1:'32-35',
              wl2:'36-31'
            },
            {
              _id:1773592761681,
              i1:9,
              i2:3,
              l1:'3-7',
              l2:'7-3',
              o1:'+600',
              o2:'-950',
              pick:'Knicks',
              res:'W',
              s1:9,
              s2:3,
              t1:'Warriors',
              t2:'Knicks',
              wl1:'32-34',
              wl2:'43-25'
            },
            {
              _id:1773592900555,
              i1:8,
              i2:8,
              l1:'2-8',
              l2:'5-5',
              o1:'+135',
              o2:'-160',
              pick:'Kings',
              res:'W',
              s1:14,
              s2:15,
              t1:'Jazz',
              t2:'Kings',
              wl1:'20-47',
              wl2:'17-51'
            }
          ]},
          { day:39, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1773696657090,
              i1:8,
              i2:6,
              l1:'3-7',
              l2:'1-9',
              o1:'-310',
              o2:'+255',
              pick:'Warriors',
              res:'W',
              s1:10,
              s2:14,
              t1:'Warriors',
              t2:'Wizards',
              wl1:'32-35',
              wl2:'16-50'
            },
            {
              _id:1773696700229,
              i1:3,
              i2:0,
              l1:'8-2',
              l2:'8-2',
              o1:'+130',
              o2:'-150',
              pick:'Hawks',
              res:'W',
              s1:5,
              s2:8,
              t1:'Magic',
              t2:'Hawks',
              wl1:'38-28',
              wl2:'36-31'
            },
            {
              _id:1773696739679,
              i1:2,
              i2:1,
              l1:'5-5',
              l2:'6-4',
              o1:'+315',
              o2:'-420',
              pick:'Celtics',
              res:'W',
              s1:7,
              s2:2,
              t1:'Suns',
              t2:'Celtics',
              wl1:'39-28',
              wl2:'44-23'
            },
            {
              _id:1773696785938,
              i1:5,
              i2:5,
              l1:'5-5',
              l2:'2-8',
              o1:'+510',
              o2:'+370',
              pick:'Blazers',
              res:'W',
              s1:9,
              s2:13,
              t1:'Blazers',
              t2:'Nets',
              wl1:'33-35',
              wl2:'17-50'
            },
            {
              _id:1773696858265,
              i1:5,
              i2:2,
              l1:'2-8',
              l2:'5-5',
              o1:'+275',
              o2:'-330',
              pick:'Pelicans',
              res:'W',
              s1:12,
              s2:13,
              t1:'Mavericks',
              t2:'Pelicans',
              wl1:'23-45',
              wl2:'22-46'
            },
            {
              _id:1773697014860,
              i1:9,
              i2:8,
              l1:'2-8',
              l2:'2-8',
              o1:'+225',
              o2:'-275',
              pick:'Bulls',
              res:'W',
              s1:11,
              s2:12,
              t1:'Grizzlies',
              t2:'Bulls',
              wl1:'23-43',
              wl2:'27-40'
            },
            {
              _id:1773697151143,
              i1:1,
              i2:4,
              l1:'6-4',
              l2:'7-3',
              o1:'+115',
              o2:'-135',
              pick:'Rockets',
              res:'L',
              s1:3,
              s2:4,
              t1:'Lakers',
              t2:'Rockets',
              wl1:'42-25',
              wl2:'41-25'
            },
            {
              _id:1773697215467,
              i1:3,
              i2:3,
              l1:'8-2',
              l2:'6-4',
              o1:'-360',
              o2:'+280',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:8,
              t1:'Spurs',
              t2:'Clippers',
              wl1:'49-18',
              wl2:'34-33'
            }
          ]},
          { day:40, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774568987677,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'0-10',
              o1:'-2200',
              o2:'+1100',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:14,
              t1:'Pistons',
              t2:'Wizards',
              wl1:'48-19',
              wl2:'16-51'
            },
            {
              _id:1774569061200,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'8-2',
              o1:'-450',
              o2:'+350',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:6,
              t1:'Thunder',
              t2:'Magic',
              wl1:'53-15',
              wl2:'38-29'
            },
            {
              _id:1774569079499,
              i1:3,
              i2:2,
              l1:'7-3',
              l2:'7-3',
              o1:'+170',
              o2:'-205',
              pick:'Hornets',
              res:'W',
              s1:7,
              s2:10,
              t1:'Heat',
              t2:'Hornets',
              wl1:'38-30',
              wl2:'34-34'
            },
            {
              _id:1774569098718,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'6-4',
              o1:'+550',
              o2:'-800',
              pick:'Knicks',
              res:'W',
              s1:15,
              s2:3,
              t1:'Pacers',
              t2:'Knicks',
              wl1:'15-53',
              wl2:'44-25'
            },
            {
              _id:1774569122237,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'6-4',
              o1:'+140',
              o2:'-165',
              pick:'Wolves',
              res:'W',
              s1:7,
              s2:5,
              t1:'Suns',
              t2:'Wolves',
              wl1:'39-29',
              wl2:'41-27'
            },
            {
              _id:1774569142305,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'2-8',
              o1:'-600',
              o2:'+450',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:12,
              t1:'Cavaliers',
              t2:'Bucks',
              wl1:'41-27',
              wl2:'28-39'
            },
            {
              _id:1774569157456,
              i1:3,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+750',
              o2:'-1200',
              pick:'Nuggets',
              res:'W',
              s1:9,
              s2:6,
              t1:'76ers',
              t2:'Nuggets',
              wl1:'36-32',
              wl2:'41-27'
            },
            {
              _id:1774569177757,
              i1:9,
              i2:7,
              l1:'9-1',
              l2:'2-8',
              o1:'-850',
              o2:'+575',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:15,
              t1:'Spurs',
              t2:'Kings',
              wl1:'50-18',
              wl2:'17-52'
            }
          ]},
          { day:41, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774569274555,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'7-3',
              o1:'+475',
              o2:'-650',
              pick:'Celtics',
              res:'W',
              s1:10,
              s2:2,
              t1:'Warriors',
              t2:'Celtics',
              wl1:'33-35',
              wl2:'45-23'
            },
            {
              _id:1774569290971,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'1-9',
              o1:'-700',
              o2:'+500',
              pick:'Blazers',
              res:'W',
              s1:9,
              s2:15,
              t1:'Blazers',
              t2:'Pacers',
              wl1:'34-35',
              wl2:'15-54'
            },
            {
              _id:1774569309256,
              i1:0,
              i2:6,
              l1:'9-1',
              l2:'2-8',
              o1:'-2200',
              o2:'+1100',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:13,
              t1:'Thunder',
              t2:'Nets',
              wl1:'54-15',
              wl2:'17-51'
            },
            {
              _id:1774569326157,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'6-4',
              o1:'+550',
              o2:'-800',
              pick:'Wolves',
              res:'W',
              s1:14,
              s2:4,
              t1:'Jazz',
              t2:'Wolves',
              wl1:'20-48',
              wl2:'42-27'
            },
            {
              _id:1774569351143,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'2-8',
              o1:'-130',
              o2:'+110',
              pick:'Clippers',
              res:'L',
              s1:8,
              s2:13,
              t1:'Clippers',
              t2:'Pelicans',
              wl1:'34-34',
              wl2:'23-46'
            },
            {
              _id:1774569372669,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'2-8',
              o1:'-300',
              o2:'+240',
              pick:'Raptors',
              res:'W',
              s1:5,
              s2:11,
              t1:'Raptors',
              t2:'Bulls',
              wl1:'38-29',
              wl2:'29-39'
            },
            {
              _id:1774569389187,
              i1:0,
              i2:0,
              l1:'10-0',
              l2:'2-8',
              o1:'-340',
              o2:'+270',
              pick:'Hawks',
              res:'W',
              s1:8,
              s2:12,
              t1:'Hawks',
              t2:'Mavericks',
              wl1:'37-31',
              wl2:'23-46'
            },
            {
              _id:1774569412007,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'2-8',
              o1:'-800',
              o2:'+550',
              pick:'Nuggets',
              res:'L',
              s1:5,
              s2:11,
              t1:'Nuggets',
              t2:'Grizzlies',
              wl1:'42-27',
              wl2:'23-44'
            },
            {
              _id:1774569431191,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'5-5',
              o1:'+110',
              o2:'-130',
              pick:'Lakers',
              res:'W',
              s1:3,
              s2:6,
              t1:'Lakers',
              t2:'Rockets',
              wl1:'43-25',
              wl2:'41-26'
            }
          ]},
          { day:42, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774569575044,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'7-3',
              o1:'+180',
              o2:'-220',
              pick:'Hornets',
              res:'W',
              s1:6,
              s2:10,
              t1:'Magic',
              t2:'Hornets',
              wl1:'38-30',
              wl2:'35-34'
            },
            {
              _id:1774569618865,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'0-10',
              o1:'-1100',
              o2:'+700',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:14,
              t1:'Pistons',
              t2:'Wizards',
              wl1:'49-19',
              wl2:'16-52'
            },
            {
              _id:1774569637732,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'9-1',
              o1:'+375',
              o2:'-500',
              pick:'Spurs',
              res:'W',
              s1:7,
              s2:2,
              t1:'Suns',
              t2:'Spurs',
              wl1:'39-30',
              wl2:'51-18'
            },
            {
              _id:1774569653868,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'7-3',
              o1:'+140',
              o2:'-165',
              pick:'Lakers',
              res:'W',
              s1:3,
              s2:7,
              t1:'Lakers',
              t2:'Heat',
              wl1:'44-25',
              wl2:'38-31'
            },
            {
              _id:1774569679387,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'6-4',
              o1:'+150',
              o2:'-180',
              pick:'Pelicans',
              res:'W',
              s1:9,
              s2:12,
              t1:'Clippers',
              t2:'Pelicans',
              wl1:'34-35',
              wl2:'24-46'
            },
            {
              _id:1774569700388,
              i1:4,
              i2:10,
              l1:'5-5',
              l2:'2-8',
              o1:'-500',
              o2:'+375',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:11,
              t1:'Cavaliers',
              t2:'Bulls',
              wl1:'42-27',
              wl2:'29-40'
            },
            {
              _id:1774569718648,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'2-8',
              o1:'-250',
              o2:'+205',
              pick:'Bucks',
              res:'L',
              s1:12,
              s2:14,
              t1:'Bucks',
              t2:'Jazz',
              wl1:'28-40',
              wl2:'20-49'
            },
            {
              _id:1774569740192,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'-150',
              o2:'+125',
              pick:'76ers',
              res:'W',
              s1:9,
              s2:15,
              t1:'76ers',
              t2:'Kings',
              wl1:'36-33',
              wl2:'17-53'
            }
          ]},
          { day:43, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774570037176,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'+220',
              o2:'-270',
              pick:'Nuggets',
              res:'W',
              s1:5,
              s2:5,
              t1:'Raptors',
              t2:'Nuggets',
              wl1:'39-29',
              wl2:'42-28'
            },
            {
              _id:1774570068810,
              i1:0,
              i2:0,
              l1:'10-0',
              l2:'4-6',
              o1:'+125',
              o2:'-150',
              pick:'Hawks',
              res:'L',
              s1:7,
              s2:6,
              t1:'Hawks',
              t2:'Rockets',
              wl1:'38-31',
              wl2:'41-27'
            },
            {
              _id:1774570193424,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'6-4',
              o1:'-105',
              o2:'-115',
              pick:'Wolves',
              res:'L',
              s1:8,
              s2:4,
              t1:'Blazers',
              t2:'Wolves',
              wl1:'35-35',
              wl2:'43-27'
            },
            {
              _id:1774570211608,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'2-8',
              o1:'-1200',
              o2:'+750',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:12,
              t1:'Celtics',
              t2:'Grizzlies',
              wl1:'46-23',
              wl2:'24-44'
            },
            {
              _id:1774570236043,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'2-8',
              o1:'+195',
              o2:'-240',
              pick:'Pistons',
              res:'W',
              s1:10,
              s2:1,
              t1:'Warriors',
              t2:'Pistons',
              wl1:'33-36',
              wl2:'50-19'
            },
            {
              _id:1774570275495,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'2-8',
              o1:'-2200',
              o2:'+1100',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:13,
              t1:'Knicks',
              t2:'Nets',
              wl1:'45-25',
              wl2:'17-52'
            }
          ]},
          { day:44, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774570532089,
              i1:0,
              i2:0,
              l1:'10-0',
              l2:'0-10',
              o1:'-3000',
              o2:'+1400',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:14,
              t1:'Thunder',
              t2:'Wizards',
              wl1:'55-15',
              wl2:'16-53'
            },
            {
              _id:1774570550806,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'6-4',
              o1:'-205',
              o2:'+170',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:11,
              t1:'Cavaliers',
              t2:'Pelicans',
              wl1:'43-27',
              wl2:'25-46'
            },
            {
              _id:1774570573069,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'7-3',
              o1:'-155',
              o2:'+130',
              pick:'Lakers',
              res:'W',
              s1:3,
              s2:6,
              t1:'Lakers',
              t2:'Magic',
              wl1:'45-25',
              wl2:'38-31'
            },
            {
              _id:1774570590172,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'7-3',
              o1:'+950',
              o2:'-1700',
              pick:'Hornets',
              res:'W',
              s1:12,
              s2:10,
              t1:'Grizzlies',
              t2:'Hornets',
              wl1:'24-45',
              wl2:'36-34'
            },
            {
              _id:1774570610640,
              i1:0,
              i2:0,
              l1:'0-10',
              l2:'9-1',
              o1:'+900',
              o2:'-1600',
              pick:'Spurs',
              res:'W',
              s1:15,
              s2:2,
              t1:'Pacers',
              t2:'Spurs',
              wl1:'15-55',
              wl2:'52-18'
            },
            {
              _id:1774570629858,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'9-1',
              o1:'+250',
              o2:'-310',
              pick:'Hawks',
              res:'W',
              s1:10,
              s2:7,
              t1:'Warriors',
              t2:'Hawks',
              wl1:'33-37',
              wl2:'38-32'
            },
            {
              _id:1774570652610,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'7-3',
              o1:'+120',
              o2:'-140',
              pick:'Rockets',
              res:'W',
              s1:8,
              s2:6,
              t1:'Heat',
              t2:'Rockets',
              wl1:'38-32',
              wl2:'42-27'
            },
            {
              _id:1774570672412,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'2-8',
              o1:'-275',
              o2:'+225',
              pick:'Clippers',
              res:'W',
              s1:9,
              s2:13,
              t1:'Clippers',
              t2:'Mavericks',
              wl1:'34-36',
              wl2:'23-47'
            },
            {
              _id:1774570688980,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'3-7',
              o1:'-225',
              o2:'+185',
              pick:'76ers',
              res:'W',
              s1:9,
              s2:14,
              t1:'76ers',
              t2:'Jazz',
              wl1:'37-33',
              wl2:'21-49'
            },
            {
              _id:1774570707973,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'5-5',
              o1:'+450',
              o2:'-600',
              pick:'Suns',
              res:'L',
              s1:12,
              s2:7,
              t1:'Bucks',
              t2:'Suns',
              wl1:'28-41',
              wl2:'39-31'
            }
          ]},
          { day:45, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774570847847,
              i1:0,
              i2:0,
              l1:'0-10',
              l2:'7-3',
              o1:'+1500',
              o2:'-5000',
              pick:'Knicks',
              res:'W',
              s1:14,
              s2:3,
              t1:'Wizards',
              t2:'Knicks',
              wl1:'16-54',
              wl2:'46-25'
            },
            {
              _id:1774570888051,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'7-3',
              o1:'+325',
              o2:'-425',
              pick:'Celtics',
              res:'L',
              s1:5,
              s2:2,
              t1:'Wolves',
              t2:'Celtics',
              wl1:'43-28',
              wl2:'47-23'
            },
            {
              _id:1774570904835,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'4-6',
              o1:'-180',
              o2:'+150',
              pick:'Raptors',
              res:'L',
              s1:5,
              s2:7,
              t1:'Raptors',
              t2:'Suns',
              wl1:'39-30',
              wl2:'39-32'
            },
            {
              _id:1774570969574,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'6-4',
              o1:'+275',
              o2:'-350',
              pick:'Nuggets',
              res:'W',
              s1:8,
              s2:6,
              t1:'Blazers',
              t2:'Nuggets',
              wl1:'36-35',
              wl2:'43-28'
            },
            {
              _id:1774570985775,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'3-7',
              o1:'+200',
              o2:'-245',
              pick:'Kings',
              res:'W',
              s1:13,
              s2:15,
              t1:'Nets',
              t2:'Kings',
              wl1:'17-53',
              wl2:'17-54'
            }
          ]},
          { day:46, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774571036933,
              i1:0,
              i2:0,
              l1:'0-10',
              l2:'6-4',
              o1:'+400',
              o2:'-550',
              pick:'Magic',
              res:'L',
              s1:15,
              s2:7,
              t1:'Pacers',
              t2:'Magic',
              wl1:'15-56',
              wl2:'38-32'
            },
            {
              _id:1774571051284,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'6-4',
              o1:'-120',
              o2:'+100',
              pick:'Lakers',
              res:'L',
              s1:3,
              s2:1,
              t1:'Lakers',
              t2:'Pistons',
              wl1:'46-25',
              wl2:'51-19'
            },
            {
              _id:1774571108502,
              i1:0,
              i2:0,
              l1:'10-0',
              l2:'5-5',
              o1:'-1200',
              o2:'+750',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:9,
              t1:'Thunder',
              t2:'76ers',
              wl1:'56-15',
              wl2:'38-33'
            },
            {
              _id:1774571125239,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'6-4',
              o1:'-160',
              o2:'+135',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:8,
              t1:'Spurs',
              t2:'Heat',
              wl1:'53-18',
              wl2:'38-33'
            },
            {
              _id:1774571139172,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'9-1',
              o1:'+575',
              o2:'-850',
              pick:'Hawks',
              res:'W',
              s1:12,
              s2:6,
              t1:'Grizzlies',
              t2:'Hawks',
              wl1:'24-46',
              wl2:'39-32'
            },
            {
              _id:1774571186170,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'-390',
              o2:'+310',
              pick:'Rockets',
              res:'L',
              s1:6,
              s2:11,
              t1:'Rockets',
              t2:'Bulls',
              wl1:'43-27',
              wl2:'29-41'
            },
            {
              _id:1774571211755,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'3-7',
              o1:'-450',
              o2:'+350',
              pick:'Raptors',
              res:'W',
              s1:5,
              s2:14,
              t1:'Raptors',
              t2:'Jazz',
              wl1:'39-31',
              wl2:'21-50'
            },
            {
              _id:1774571236570,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'2-8',
              o1:'-140',
              o2:'+120',
              pick:'Warriors',
              res:'W',
              s1:10,
              s2:13,
              t1:'Warriors',
              t2:'Mavericks',
              wl1:'33-38',
              wl2:'23-48'
            },
            {
              _id:1774571256146,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'7-3',
              o1:'+700',
              o2:'-1100',
              pick:'Blazers',
              res:'W',
              s1:13,
              s2:8,
              t1:'Nets',
              t2:'Blazers',
              wl1:'17-54',
              wl2:'36-36'
            },
            {
              _id:1774571270782,
              i1:6,
              i2:3,
              l1:'3-7',
              l2:'5-5',
              o1:'+600',
              o2:'-900',
              pick:'Clippers',
              res:'W',
              s1:12,
              s2:9,
              t1:'Bucks',
              t2:'Clippers',
              wl1:'29-41',
              wl2:'35-36'
            }
          ]},
          { day:47, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774571394697,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'7-3',
              o1:'+1000',
              o2:'-2000',
              pick:'Hornets',
              res:'W',
              s1:15,
              s2:10,
              t1:'Kings',
              t2:'Hornets',
              wl1:'18-54',
              wl2:'37-34'
            },
            {
              _id:1774571410631,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'6-4',
              o1:'+280',
              o2:'-360',
              pick:'Knicks',
              res:'W',
              s1:11,
              s2:3,
              t1:'Pelicans',
              t2:'Knicks',
              wl1:'25-47',
              wl2:'47-25'
            },
            {
              _id:1774571446096,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'6-4',
              o1:'+350',
              o2:'-450',
              pick:'Cavaliers',
              res:'W',
              s1:7,
              s2:4,
              t1:'Magic',
              t2:'Cavaliers',
              wl1:'38-33',
              wl2:'44-27'
            },
            {
              _id:1774571459914,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'5-5',
              o1:'-240',
              o2:'+195',
              pick:'Nuggets',
              res:'W',
              s1:4,
              s2:7,
              t1:'Nuggets',
              t2:'Suns',
              wl1:'44-28',
              wl2:'40-32'
            }
          ]},
          { day:48, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774571514135,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'4-6',
              o1:'+205',
              o2:'-250',
              pick:'76ers',
              res:'W',
              s1:11,
              s2:9,
              t1:'Bulls',
              t2:'76ers',
              wl1:'30-41',
              wl2:'38-34'
            },
            {
              _id:1774571535170,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'7-3',
              o1:'+120',
              o2:'-140',
              pick:'Pistons',
              res:'L',
              s1:6,
              s2:1,
              t1:'Hawks',
              t2:'Pistons',
              wl1:'40-32',
              wl2:'52-19'
            },
            {
              _id:1774571556705,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'1-9',
              o1:'-425',
              o2:'+325',
              pick:'Lakers',
              res:'W',
              s1:3,
              s2:15,
              t1:'Lakers',
              t2:'Pacers',
              wl1:'46-26',
              wl2:'16-56'
            },
            {
              _id:1774571577741,
              i1:0,
              i2:0,
              l1:'10-0',
              l2:'6-4',
              o1:'-130',
              o2:'+110',
              pick:'Thunder',
              res:'L',
              s1:1,
              s2:3,
              t1:'Thunder',
              t2:'Celtics',
              wl1:'57-15',
              wl2:'47-24'
            },
            {
              _id:1774571593059,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'7-3',
              o1:'+125',
              o2:'-150',
              pick:'Cavaliers',
              res:'L',
              s1:8,
              s2:4,
              t1:'Heat',
              t2:'Cavaliers',
              wl1:'38-34',
              wl2:'45-27'
            },
            {
              _id:1774571609727,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'1-9',
              o1:'-2000',
              o2:'+1000',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:12,
              t1:'Spurs',
              t2:'Grizzlies',
              wl1:'54-18',
              wl2:'24-47'
            },
            {
              _id:1774571621111,
              i1:0,
              i2:0,
              l1:'0-10',
              l2:'3-7',
              o1:'+130',
              o2:'-155',
              pick:'Jazz',
              res:'L',
              s1:14,
              s2:14,
              t1:'Wizards',
              t2:'Jazz',
              wl1:'16-55',
              wl2:'21-51'
            },
            {
              _id:1774571639446,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'-130',
              o2:'+110',
              pick:'Wolves',
              res:'W',
              s1:6,
              s2:5,
              t1:'Rockets',
              t2:'Wolves',
              wl1:'43-28',
              wl2:'44-28'
            },
            {
              _id:1774571661856,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'2-8',
              o1:'+500',
              o2:'-700',
              pick:'Warriors',
              res:'W',
              s1:13,
              s2:10,
              t1:'Nets',
              t2:'Warriors',
              wl1:'17-55',
              wl2:'34-38'
            },
            {
              _id:1774571675157,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'7-3',
              o1:'+700',
              o2:'-1100',
              pick:'Blazers',
              res:'W',
              s1:12,
              s2:8,
              t1:'Bucks',
              t2:'Blazers',
              wl1:'29-42',
              wl2:'37-36'
            },
            {
              _id:1774571718353,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'6-4',
              o1:'+450',
              o2:'-600',
              pick:'Nuggets',
              res:'W',
              s1:13,
              s2:4,
              t1:'Mavericks',
              t2:'Nuggets',
              wl1:'23-49',
              wl2:'45-28'
            },
            {
              _id:1774571742268,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'6-4',
              o1:'+150',
              o2:'-180',
              pick:'Clippers',
              res:'W',
              s1:5,
              s2:9,
              t1:'Raptors',
              t2:'Clippers',
              wl1:'40-31',
              wl2:'36-36'
            }
          ]},
          { day:49, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1774571952803,
              i1:2,
              i2:4,
              l1:'6-4',
              l2:'7-3',
              o1:'+180',
              o2:'-220',
              pick:'Pistons',
              res:'W',
              s1:11,
              s2:1,
              t1:'Pelicans',
              t2:'Pistons',
              wl1:'25-48',
              wl2:'52-20'
            },
            {
              _id:1774571968596,
              i1:3,
              i2:2,
              l1:'8-2',
              l2:'7-3',
              o1:'+110',
              o2:'-130',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:10,
              t1:'Knicks',
              t2:'Hornets',
              wl1:'48-25',
              wl2:'38-34'
            },
            {
              _id:1774571997352,
              i1:7,
              i2:3,
              l1:'4-6',
              l2:'5-5',
              o1:'+800',
              o2:'-1300',
              pick:'Magic',
              res:'W',
              s1:15,
              s2:9,
              t1:'Kings',
              t2:'Magic',
              wl1:'18-55',
              wl2:'38-34'
            }
          ]},
          { day:50, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776282206309,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'1-9',
              o1:'-390',
              o2:'+310',
              pick:'Clippers',
              res:'W',
              s1:9,
              s2:15,
              t1:'Clippers',
              t2:'Pacers',
              wl1:'37-36',
              wl2:'16-57'
            },
            {
              _id:1776282302219,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'7-3',
              o1:'+180',
              o2:'-220',
              pick:'Celtics',
              res:'W',
              s1:5,
              s2:3,
              t1:'Hawks',
              t2:'Celtics',
              wl1:'41-32',
              wl2:'48-24'
            },
            {
              _id:1776282320345,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'6-4',
              o1:'+180',
              o2:'-220',
              pick:'Cavaliers',
              res:'W',
              s1:8,
              s2:4,
              t1:'Heat',
              t2:'Cavaliers',
              wl1:'39-34',
              wl2:'45-28'
            },
            {
              _id:1776282346731,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'9-1',
              o1:'+1200',
              o2:'-2400',
              pick:'Thunder',
              res:'W',
              s1:11,
              s2:1,
              t1:'Bulls',
              t2:'Thunder',
              wl1:'30-42',
              wl2:'57-16'
            },
            {
              _id:1776282388610,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'1-9',
              o1:'-950',
              o2:'+625',
              pick:'Rockets',
              res:'W',
              s1:6,
              s2:12,
              t1:'Rockets',
              t2:'Grizzlies',
              wl1:'43-29',
              wl2:'24-48'
            },
            {
              _id:1776282410569,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'+270',
              o2:'-340',
              pick:'Raptors',
              res:'W',
              s1:11,
              s2:6,
              t1:'Pelicans',
              t2:'Raptors',
              wl1:'25-49',
              wl2:'40-32'
            },
            {
              _id:1776283635728,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'7-3',
              o1:'+1100',
              o2:'-2200',
              pick:'Nuggets',
              res:'W',
              s1:14,
              s2:4,
              t1:'Jazz',
              t2:'Nuggets',
              wl1:'21-52',
              wl2:'46-28'
            },
            {
              _id:1776283651036,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'3-7',
              o1:'+550',
              o2:'-800',
              pick:'Warriors',
              res:'W',
              s1:13,
              s2:10,
              t1:'Wizards',
              t2:'Warriors',
              wl1:'17-55',
              wl2:'35-38'
            },
            {
              _id:1776283676371,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'8-2',
              o1:'+375',
              o2:'-500',
              pick:'Blazers',
              res:'L',
              s1:13,
              s2:8,
              t1:'Mavericks',
              t2:'Blazers',
              wl1:'23-50',
              wl2:'38-36'
            },
            {
              _id:1776283693682,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'9-1',
              o1:'+1100',
              o2:'-2200',
              pick:'Lakers',
              res:'W',
              s1:14,
              s2:3,
              t1:'Nets',
              t2:'Lakers',
              wl1:'17-56',
              wl2:'47-26'
            }
          ]},
          { day:51, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776283833096,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'2-8',
              o1:'-2000',
              o2:'+1000',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:12,
              t1:'Spurs',
              t2:'Bucks',
              wl1:'55-18',
              wl2:'29-43'
            },
            {
              _id:1776283870077,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'5-5',
              o1:'-130',
              o2:'+110',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:5,
              t1:'Pistons',
              t2:'Wolves',
              wl1:'53-20',
              wl2:'45-28'
            },
            {
              _id:1776283888197,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'6-4',
              o1:'+205',
              o2:'-250',
              pick:'Hornets',
              res:'L',
              s1:7,
              s2:10,
              t1:'76ers',
              t2:'Hornets',
              wl1:'39-34',
              wl2:'38-35'
            },
            {
              _id:1776283911348,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'8-2',
              o1:'+525',
              o2:'-750',
              pick:'Hawks',
              res:'W',
              s1:15,
              s2:6,
              t1:'Kings',
              t2:'Hawks',
              wl1:'18-56',
              wl2:'41-33'
            },
            {
              _id:1776283931058,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'1-9',
              o1:'-210',
              o2:'+175',
              pick:'Bulls',
              res:'L',
              s1:11,
              s2:12,
              t1:'Bulls',
              t2:'Grizzlies',
              wl1:'30-43',
              wl2:'24-49'
            },
            {
              _id:1776283956775,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'4-6',
              o1:'+950',
              o2:'-1700',
              pick:'Suns',
              res:'W',
              s1:14,
              s2:7,
              t1:'Jazz',
              t2:'Suns',
              wl1:'21-53',
              wl2:'40-33'
            }
          ]},
          { day:52, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776284056089,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'2-8',
              o1:'-1400',
              o2:'+850',
              pick:'Clippers',
              res:'W',
              s1:8,
              s2:12,
              t1:'Clippers',
              t2:'Bucks',
              wl1:'38-36',
              wl2:'29-44'
            },
            {
              _id:1776284080701,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'1-9',
              o1:'-360',
              o2:'+280',
              pick:'Heat',
              res:'L',
              s1:9,
              s2:15,
              t1:'Heat',
              t2:'Pacers',
              wl1:'39-35',
              wl2:'16-58'
            },
            {
              _id:1776284102028,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'0-10',
              o1:'+105',
              o2:'-125',
              pick:'Kings',
              res:'L',
              s1:15,
              s2:14,
              t1:'Kings',
              t2:'Nets',
              wl1:'18-57',
              wl2:'17-57'
            },
            {
              _id:1776284125413,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+100',
              o2:'-120',
              pick:'Raptors',
              res:'W',
              s1:8,
              s2:6,
              t1:'Magic',
              t2:'Raptors',
              wl1:'39-34',
              wl2:'41-32'
            },
            {
              _id:1776284156699,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'7-3',
              o1:'+950',
              o2:'-1700',
              pick:'Blazers',
              res:'W',
              s1:13,
              s2:9,
              t1:'Wizards',
              t2:'Blazers',
              wl1:'17-56',
              wl2:'38-37'
            },
            {
              _id:1776284193619,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'6-4',
              o1:'+115',
              o2:'-135',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:10,
              t1:'Celtics',
              t2:'Hornets',
              wl1:'49-24',
              wl2:'38-36'
            },
            {
              _id:1776284227023,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'-245',
              o2:'+200',
              pick:'Rockets',
              res:'W',
              s1:6,
              s2:12,
              t1:'Rockets',
              t2:'Pelicans',
              wl1:'44-29',
              wl2:'25-50'
            },
            {
              _id:1776284252075,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'9-1',
              o1:'+275',
              o2:'-350',
              pick:'Thunder',
              res:'W',
              s1:3,
              s2:1,
              t1:'Knicks',
              t2:'Thunder',
              wl1:'49-25',
              wl2:'58-16'
            },
            {
              _id:1776284265268,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'8-2',
              o1:'+475',
              o2:'-650',
              pick:'Nuggets',
              res:'W',
              s1:10,
              s2:4,
              t1:'Warriors',
              t2:'Nuggets',
              wl1:'36-38',
              wl2:'47-28'
            }
          ]},
          { day:53, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776284368369,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'3-7',
              o1:'-130',
              o2:'+110',
              pick:'76ers',
              res:'L',
              s1:7,
              s2:9,
              t1:'76ers',
              t2:'Heat',
              wl1:'40-34',
              wl2:'39-36'
            },
            {
              _id:1776284389487,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'8-2',
              o1:'+125',
              o2:'-150',
              pick:'Hawks',
              res:'W',
              s1:2,
              s2:6,
              t1:'Celtics',
              t2:'Hawks',
              wl1:'50-24',
              wl2:'42-33'
            },
            {
              _id:1776284410656,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'2-8',
              o1:'-600',
              o2:'+450',
              pick:'Suns',
              res:'W',
              s1:7,
              s2:11,
              t1:'Suns',
              t2:'Grizzlies',
              wl1:'41-33',
              wl2:'25-49'
            },
            {
              _id:1776284447138,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'9-1',
              o1:'+900',
              o2:'-2000',
              pick:'Spurs',
              res:'W',
              s1:11,
              s2:2,
              t1:'Bulls',
              t2:'Spurs',
              wl1:'30-44',
              wl2:'56-18'
            },
            {
              _id:1776284468415,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'3-7',
              o1:'-360',
              o2:'+280',
              pick:'Wolves',
              res:'W',
              s1:5,
              s2:13,
              t1:'Wolves',
              t2:'Mavericks',
              wl1:'45-29',
              wl2:'24-50'
            },
            {
              _id:1776284486801,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'1-9',
              o1:'-1600',
              o2:'+900',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:14,
              t1:'Cavaliers',
              t2:'Jazz',
              wl1:'46-28',
              wl2:'21-54'
            },
            {
              _id:1776284505977,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'9-1',
              o1:'+450',
              o2:'-600',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:1,
              t1:'Pistons',
              t2:'Thunder',
              wl1:'54-20',
              wl2:'59-16'
            },
            {
              _id:1776284522921,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'9-1',
              o1:'+850',
              o2:'-1400',
              pick:'Lakers',
              res:'W',
              s1:14,
              s2:3,
              t1:'Wizards',
              t2:'Lakers',
              wl1:'17-57',
              wl2:'48-26'
            }
          ]},
          { day:54, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776284609653,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'3-7',
              o1:'+110',
              o2:'-130',
              pick:'Suns',
              res:'L',
              s1:7,
              s2:9,
              t1:'Suns',
              t2:'Magic',
              wl1:'42-33',
              wl2:'39-35'
            },
            {
              _id:1776284632923,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'1-9',
              o1:'-2000',
              o2:'+1000',
              pick:'Hornets',
              res:'W',
              s1:10,
              s2:13,
              t1:'Hornets',
              t2:'Nets',
              wl1:'38-37',
              wl2:'18-57'
            },
            {
              _id:1776284657849,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'7-3',
              o1:'+135',
              o2:'-180',
              pick:'Pistons',
              res:'W',
              s1:6,
              s2:1,
              t1:'Raptors',
              t2:'Pistons',
              wl1:'42-32',
              wl2:'54-21'
            },
            {
              _id:1776284672626,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'5-5',
              o1:'-125',
              o2:'+105',
              pick:'Knicks',
              res:'L',
              s1:3,
              s2:6,
              t1:'Knicks',
              t2:'Rockets',
              wl1:'49-26',
              wl2:'45-29'
            },
            {
              _id:1776284696820,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'3-7',
              o1:'-140',
              o2:'+120',
              pick:'Mavericks',
              res:'L',
              s1:13,
              s2:12,
              t1:'Mavericks',
              t2:'Bucks',
              wl1:'24-51',
              wl2:'29-45'
            },
            {
              _id:1776284720997,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'9-1',
              o1:'+115',
              o2:'-135',
              pick:'Lakers',
              res:'W',
              s1:4,
              s2:3,
              t1:'Cavaliers',
              t2:'Lakers',
              wl1:'47-28',
              wl2:'49-26'
            },
            {
              _id:1776284746633,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'6-4',
              o1:'+160',
              o2:'-190',
              pick:'Clippers',
              res:'L',
              s1:9,
              s2:8,
              t1:'Blazers',
              t2:'Clippers',
              wl1:'39-37',
              wl2:'39-36'
            }
          ]},
          { day:55, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776285476134,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'1-9',
              o1:'-1200',
              o2:'+750',
              pick:'76ers',
              res:'W',
              s1:7,
              s2:14,
              t1:'76ers',
              t2:'Wizards',
              wl1:'40-35',
              wl2:'17-58'
            },
            {
              _id:1776285498986,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'3-7',
              o1:'-150',
              o2:'+125',
              pick:'Hawks',
              res:'W',
              s1:5,
              s2:8,
              t1:'Hawks',
              t2:'Magic',
              wl1:'43-33',
              wl2:'40-35'
            },
            {
              _id:1776285555866,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'3-7',
              o1:'-200',
              o2:'+165',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:9,
              t1:'Celtics',
              t2:'Heat',
              wl1:'50-25',
              wl2:'40-36'
            },
            {
              _id:1776285593194,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'2-8',
              o1:'-900',
              o2:'+600',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:11,
              t1:'Knicks',
              t2:'Grizzlies',
              wl1:'49-27',
              wl2:'25-50'
            },
            {
              _id:1776285665727,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'5-5',
              o1:'+500',
              o2:'-700',
              pick:'Raptors',
              res:'L',
              s1:15,
              s2:6,
              t1:'Kings',
              t2:'Raptors',
              wl1:'18-58',
              wl2:'42-33'
            },
            {
              _id:1776285756981,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'6-4',
              o1:'+1250',
              o2:'-2500',
              pick:'Rockets',
              res:'W',
              s1:12,
              s2:6,
              t1:'Bucks',
              t2:'Rockets',
              wl1:'30-45',
              wl2:'46-29'
            },
            {
              _id:1776285794484,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'2-8',
              o1:'+140',
              o2:'-165',
              pick:'Bulls',
              res:'L',
              s1:15,
              s2:11,
              t1:'Pacers',
              t2:'Bulls',
              wl1:'17-58',
              wl2:'30-45'
            },
            {
              _id:1776285815628,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'1-9',
              o1:'-2000',
              o2:'+1000',
              pick:'Nuggets',
              res:'W',
              s1:4,
              s2:14,
              t1:'Nuggets',
              t2:'Jazz',
              wl1:'48-28',
              wl2:'21-55'
            },
            {
              _id:1776285860781,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'4-6',
              o1:'-1100',
              o2:'+700',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:10,
              t1:'Spurs',
              t2:'Warriors',
              wl1:'57-18',
              wl2:'36-39'
            }
          ]},
          { day:56, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776286044031,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'7-3',
              o1:'+175',
              o2:'-210',
              pick:'Pistons',
              res:'W',
              s1:6,
              s2:1,
              t1:'Wolves',
              t2:'Pistons',
              wl1:'46-29',
              wl2:'55-21'
            },
            {
              _id:1776286478019,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'6-4',
              o1:'+170',
              o2:'-205',
              pick:'Hornets',
              res:'W',
              s1:7,
              s2:10,
              t1:'Suns',
              t2:'Hornets',
              wl1:'42-34',
              wl2:'39-37'
            },
            {
              _id:1776286577790,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'9-1',
              o1:'+300',
              o2:'-380',
              pick:'Thunder',
              res:'W',
              s1:3,
              s2:1,
              t1:'Lakers',
              t2:'Thunder',
              wl1:'50-26',
              wl2:'60-16'
            },
            {
              _id:1776286627886,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'8-2',
              o1:'+200',
              o2:'-245',
              pick:'Blazers',
              res:'W',
              s1:12,
              s2:8,
              t1:'Pelicans',
              t2:'Blazers',
              wl1:'25-51',
              wl2:'40-37'
            },
            {
              _id:1776286652889,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'4-6',
              o1:'-500',
              o2:'+375',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:10,
              t1:'Cavaliers',
              t2:'Warriors',
              wl1:'47-29',
              wl2:'36-40'
            },
            {
              _id:1776286676341,
              i1:0,
              i2:0,
              l1:'10-0',
              l2:'5-5',
              o1:'+120',
              o2:'-140',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:9,
              t1:'Spurs',
              t2:'Clippers',
              wl1:'58-18',
              wl2:'39-37'
            }
          ]},
          { day:57, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776286733668,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'1-9',
              o1:'-1700',
              o2:'-950',
              pick:'Hawks',
              res:'W',
              s1:5,
              s2:13,
              t1:'Hawks',
              t2:'Nets',
              wl1:'44-33',
              wl2:'18-58'
            },
            {
              _id:1776286754685,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'8-2',
              o1:'+650',
              o2:'-1000',
              pick:'Knicks',
              res:'W',
              s1:12,
              s2:3,
              t1:'Bulls',
              t2:'Knicks',
              wl1:'30-46',
              wl2:'50-27'
            },
            {
              _id:1776286827805,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'6-4',
              o1:'+140',
              o2:'-165',
              pick:'76ers',
              res:'W',
              s1:6,
              s2:7,
              t1:'Wolves',
              t2:'76ers',
              wl1:'46-30',
              wl2:'41-35'
            },
            {
              _id:1776286891136,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'6-4',
              o1:'+900',
              o2:'-1600',
              pick:'Hornets',
              res:'W',
              s1:14,
              s2:10,
              t1:'Pacers',
              t2:'Hornets',
              wl1:'18-58',
              wl2:'40-37'
            },
            {
              _id:1776286928719,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'6-4',
              o1:'+1000',
              o2:'-2000',
              pick:'Rockets',
              res:'W',
              s1:14,
              s2:5,
              t1:'Jazz',
              t2:'Rockets',
              wl1:'21-56',
              wl2:'47-29'
            },
            {
              _id:1776286944704,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'3-7',
              o1:'-2200',
              o2:'+1100',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:11,
              t1:'Celtics',
              t2:'Bucks',
              wl1:'51-25',
              wl2:'30-46'
            },
            {
              _id:1776286966272,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'2-8',
              o1:'-1000',
              o2:'+650',
              pick:'Raptors',
              res:'W',
              s1:6,
              s2:11,
              t1:'Raptors',
              t2:'Grizzlies',
              wl1:'42-34',
              wl2:'25-51'
            },
            {
              _id:1776286985389,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'2-8',
              o1:'-260',
              o2:'+210',
              pick:'Magic',
              res:'W',
              s1:9,
              s2:13,
              t1:'Magic',
              t2:'Mavericks',
              wl1:'40-36',
              wl2:'24-52'
            },
            {
              _id:1776287003700,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'-250',
              o2:'+205',
              pick:'Pelicans',
              res:'L',
              s1:12,
              s2:15,
              t1:'Pelicans',
              t2:'Kings',
              wl1:'25-52',
              wl2:'19-58'
            }
          ]},
          { day:58, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776287109957,
              i1:0,
              i2:0,
              l1:'10-0',
              l2:'8-2',
              o1:'-125',
              o2:'+105',
              pick:'Spurs',
              res:'L',
              s1:2,
              s2:4,
              t1:'Spurs',
              t2:'Nuggets',
              wl1:'59-18',
              wl2:'49-28'
            },
            {
              _id:1776287131865,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'2-8',
              o1:'+1200',
              o2:'-2400',
              pick:'Heat',
              res:'W',
              s1:15,
              s2:10,
              t1:'Wizards',
              t2:'Heat',
              wl1:'17-59',
              wl2:'40-37'
            },
            {
              _id:1776287146493,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'6-4',
              o1:'-170',
              o2:'+125',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:7,
              t1:'Pistons',
              t2:'76ers',
              wl1:'56-21',
              wl2:'42-35'
            }
          ]},
          { day:59, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776287201134,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'8-2',
              o1:'+325',
              o2:'-425',
              pick:'Celtics',
              res:'W',
              s1:6,
              s2:2,
              t1:'Raptors',
              t2:'Celtics',
              wl1:'43-34',
              wl2:'52-25'
            },
            {
              _id:1776287224180,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'2-8',
              o1:'+225',
              o2:'-275',
              pick:'Bucks',
              res:'W',
              s1:11,
              s2:11,
              t1:'Grizzlies',
              t2:'Bucks',
              wl1:'25-52',
              wl2:'30-47'
            },
            {
              _id:1776287269992,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'3-7',
              o1:'-600',
              o2:'+450',
              pick:'Suns',
              res:'W',
              s1:7,
              s2:12,
              t1:'Suns',
              t2:'Bulls',
              wl1:'42-35',
              wl2:'30-47'
            },
            {
              _id:1776287301344,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'1-9',
              o1:'+135',
              o2:'-160',
              pick:'Nets',
              res:'W',
              s1:15,
              s2:13,
              t1:'Wizards',
              t2:'Nets',
              wl1:'17-60',
              wl2:'18-59'
            },
            {
              _id:1776287321709,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'7-3',
              o1:'+950',
              o2:'-1700',
              pick:'Cavaliers',
              res:'W',
              s1:14,
              s2:4,
              t1:'Pacers',
              t2:'Cavaliers',
              wl1:'18-59',
              wl2:'48-29'
            },
            {
              _id:1776287351956,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'3-7',
              o1:'-245',
              o2:'+200',
              pick:'Magic',
              res:'W',
              s1:8,
              s2:12,
              t1:'Magic',
              t2:'Pelicans',
              wl1:'41-36',
              wl2:'25-53'
            },
            {
              _id:1776287390426,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'9-1',
              o1:'+2500',
              o2:'-1000',
              pick:'Thunder',
              res:'W',
              s1:14,
              s2:1,
              t1:'Jazz',
              t2:'Thunder',
              wl1:'21-57',
              wl2:'61-16'
            },
            {
              _id:1776287413903,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'5-5',
              o1:'-185',
              o2:'+155',
              pick:'Hornets',
              res:'W',
              s1:9,
              s2:6,
              t1:'Hornets',
              t2:'Wolves',
              wl1:'41-37',
              wl2:'46-31'
            },
            {
              _id:1776287438630,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'2-8',
              o1:'-115',
              o2:'-105',
              pick:'Lakers',
              res:'L',
              s1:3,
              s2:13,
              t1:'Lakers',
              t2:'Mavericks',
              wl1:'50-27',
              wl2:'24-53'
            },
            {
              _id:1776287460383,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'4-6',
              o1:'-850',
              o2:'+575',
              pick:'Clippers',
              res:'W',
              s1:9,
              s2:15,
              t1:'Clippers',
              t2:'Kings',
              wl1:'39-38',
              wl2:'20-58'
            },
            {
              _id:1776287488451,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'4-6',
              o1:'-180',
              o2:'+150',
              pick:'Rockets',
              res:'W',
              s1:5,
              s2:10,
              t1:'Rockets',
              t2:'Warriors',
              wl1:'48-29',
              wl2:'36-41'
            }
          ]},
          { day:60, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776288325055,
              i1:0,
              i2:7,
              l1:'8-2',
              l2:'8-2',
              o1:'+100',
              o2:'-120',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:5,
              t1:'Knicks',
              t2:'Hawks',
              wl1:'51-27',
              wl2:'45-33'
            },
            {
              _id:1776288421643,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'4-6',
              o1:'-120',
              o2:'+100',
              pick:'Pistons',
              res:'L',
              s1:1,
              s2:8,
              t1:'Pistons',
              t2:'Magic',
              wl1:'57-21',
              wl2:'42-36'
            },
            {
              _id:1776288446161,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'9-1',
              o1:'+280',
              o2:'-360',
              pick:'Spurs',
              res:'W',
              s1:7,
              s2:2,
              t1:'76ers',
              t2:'Spurs',
              wl1:'42-36',
              wl2:'59-19'
            },
            {
              _id:1776288465279,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'1-9',
              o1:'-950',
              o2:'+625',
              pick:'Cavaliers',
              res:'W',
              s1:4,
              s2:11,
              t1:'Cavaliers',
              t2:'Grizzlies',
              wl1:'49-29',
              wl2:'25-53'
            },
            {
              _id:1776288483397,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'9-1',
              o1:'+220',
              o2:'-270',
              pick:'Nuggets',
              res:'W',
              s1:8,
              s2:3,
              t1:'Blazers',
              t2:'Nuggets',
              wl1:'41-37',
              wl2:'50-28'
            }
          ]},
          { day:61, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776288569242,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'1-9',
              o1:'-230',
              o2:'+190',
              pick:'Bulls',
              res:'W',
              s1:12,
              s2:15,
              t1:'Bulls',
              t2:'Wizards',
              wl1:'30-48',
              wl2:'17-61'
            },
            {
              _id:1776288589777,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'3-7',
              o1:'-800',
              o2:'+550',
              pick:'Wolves',
              res:'W',
              s1:6,
              s2:14,
              t1:'Wolves',
              t2:'Pacers',
              wl1:'46-32',
              wl2:'18-60'
            },
            {
              _id:1776288612463,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'+120',
              o2:'-140',
              pick:'Raptors',
              res:'W',
              s1:10,
              s2:6,
              t1:'Heat',
              t2:'Raptors',
              wl1:'41-37',
              wl2:'43-35'
            },
            {
              _id:1776288627514,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'2-8',
              o1:'-120',
              o2:'+100',
              pick:'Bucks',
              res:'L',
              s1:11,
              s2:13,
              t1:'Bucks',
              t2:'Nets',
              wl1:'31-47',
              wl2:'19-59'
            },
            {
              _id:1776288645832,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'8-2',
              o1:'+170',
              o2:'-205',
              pick:'Celtics',
              res:'W',
              s1:9,
              s2:2,
              t1:'Hornets',
              t2:'Celtics',
              wl1:'42-37',
              wl2:'53-25'
            },
            {
              _id:1776288676625,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'2-8',
              o1:'+200',
              o2:'-235',
              pick:'Pelicans',
              res:'W',
              s1:14,
              s2:13,
              t1:'Jazz',
              t2:'Pelicans',
              wl1:'21-58',
              wl2:'25-54'
            },
            {
              _id:1776288695511,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'3-7',
              o1:'+700',
              o2:'-1100',
              pick:'Warriors',
              res:'W',
              s1:15,
              s2:10,
              t1:'Kings',
              t2:'Warriors',
              wl1:'20-59',
              wl2:'36-42'
            },
            {
              _id:1776288736077,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'6-4',
              o1:'+475',
              o2:'-650',
              pick:'Clippers',
              res:'W',
              s1:11,
              s2:9,
              t1:'Mavericks',
              t2:'Clippers',
              wl1:'25-53',
              wl2:'40-38'
            },
            {
              _id:1776288751763,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'7-3',
              o1:'-2200',
              o2:'+1100',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:4,
              t1:'Thunder',
              t2:'Lakers',
              wl1:'62-16',
              wl2:'50-28'
            },
            {
              _id:1776288769197,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'4-6',
              o1:'-120',
              o2:'+100',
              pick:'Rockets',
              res:'W',
              s1:5,
              s2:7,
              t1:'Rockets',
              t2:'Suns',
              wl1:'49-29',
              wl2:'43-35'
            }
          ]},
          { day:62, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776288883747,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'6-4',
              o1:'+375',
              o2:'-500',
              pick:'Magic',
              res:'W',
              s1:6,
              s2:7,
              t1:'Wolves',
              t2:'Magic',
              wl1:'47-32',
              wl2:'43-36'
            },
            {
              _id:1776288899550,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'8-2',
              o1:'+145',
              o2:'-170',
              pick:'Cavaliers',
              res:'W',
              s1:5,
              s2:4,
              t1:'Hawks',
              t2:'Cavaliers',
              wl1:'45-34',
              wl2:'50-29'
            },
            {
              _id:1776288927652,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'8-2',
              o1:'+1550',
              o2:'-4000',
              pick:'Pistons',
              res:'W',
              s1:11,
              s2:1,
              t1:'Bucks',
              t2:'Pistons',
              wl1:'31-48',
              wl2:'57-22'
            },
            {
              _id:1776288948787,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'9-1',
              o1:'+1800',
              o2:'-8000',
              pick:'Nuggets',
              res:'W',
              s1:13,
              s2:3,
              t1:'Grizzlies',
              t2:'Nuggets',
              wl1:'25-54',
              wl2:'51-28'
            },
            {
              _id:1776288969906,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'9-1',
              o1:'+130',
              o2:'-155',
              pick:'Spurs',
              res:'W',
              s1:8,
              s2:2,
              t1:'Blazers',
              t2:'Spurs',
              wl1:'41-38',
              wl2:'60-19'
            },
            {
              _id:1776289008713,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'6-4',
              o1:'-360',
              o2:'+280',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:9,
              t1:'Thunder',
              t2:'Clippers',
              wl1:'63-16',
              wl2:'41-38'
            },
            {
              _id:1776289032620,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'4-6',
              o1:'+525',
              o2:'-750',
              pick:'Suns',
              res:'W',
              s1:12,
              s2:7,
              t1:'Mavericks',
              t2:'Suns',
              wl1:'25-54',
              wl2:'43-36'
            }
          ]},
          { day:63, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776289222949,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'1-9',
              o1:'-300',
              o2:'+240',
              pick:'Bulls',
              res:'W',
              s1:11,
              s2:15,
              t1:'Bulls',
              t2:'Wizards',
              wl1:'31-48',
              wl2:'17-62'
            },
            {
              _id:1776289252988,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'5-5',
              o1:'+150',
              o2:'-180',
              pick:'Raptors',
              res:'W',
              s1:10,
              s2:6,
              t1:'Heat',
              t2:'Raptors',
              wl1:'41-38',
              wl2:'44-35'
            },
            {
              _id:1776289318810,
              i1:0,
              i2:10,
              l1:'3-7',
              l2:'3-7',
              o1:'-155',
              o2:'+130',
              pick:'Pacers',
              res:'W',
              s1:14,
              s2:13,
              t1:'Pacers',
              t2:'Nets',
              wl1:'18-61',
              wl2:'20-59'
            },
            {
              _id:1776289414286,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'8-2',
              o1:'+140',
              o2:'-165',
              pick:'Knicks',
              res:'W',
              s1:2,
              s2:3,
              t1:'Celtics',
              t2:'Knicks',
              wl1:'54-25',
              wl2:'52-27'
            },
            {
              _id:1776289435304,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'8-2',
              o1:'+205',
              o2:'-250',
              pick:'Rockets',
              res:'W',
              s1:8,
              s2:5,
              t1:'76ers',
              t2:'Rockets',
              wl1:'42-37',
              wl2:'50-29'
            },
            {
              _id:1776289458548,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'4-6',
              o1:'+100',
              o2:'-120',
              pick:'Lakers',
              res:'W',
              s1:5,
              s2:10,
              t1:'Lakers',
              t2:'Warriors',
              wl1:'50-29',
              wl2:'37-42'
            }
          ]},
          { day:64, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776290108639,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'1-9',
              o1:'-1600',
              o2:'+900',
              pick:'Heat',
              res:'W',
              s1:10,
              s2:15,
              t1:'Heat',
              t2:'Wizards',
              wl1:'41-39',
              wl2:'17-63'
            },
            {
              _id:1776290132253,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'6-4',
              o1:'+175',
              o2:'-210',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:9,
              t1:'Pistons',
              t2:'Hornets',
              wl1:'58-22',
              wl2:'42-38'
            },
            {
              _id:1776290152188,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'7-3',
              o1:'+280',
              o2:'-360',
              pick:'Hawks',
              res:'W',
              s1:4,
              s2:5,
              t1:'Cavaliers',
              t2:'Hawks',
              wl1:'51-29',
              wl2:'45-35'
            },
            {
              _id:1776290184991,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'8-2',
              o1:'+220',
              o2:'-270',
              pick:'Knicks',
              res:'W',
              s1:6,
              s2:3,
              t1:'Raptors',
              t2:'Knicks',
              wl1:'45-35',
              wl2:'53-27'
            },
            {
              _id:1776290211860,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'1-9',
              o1:'-1200',
              o2:'+750',
              pick:'76ers',
              res:'W',
              s1:8,
              s2:14,
              t1:'76ers',
              t2:'Pacers',
              wl1:'42-38',
              wl2:'19-61'
            },
            {
              _id:1776290229295,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'9-1',
              o1:'+1100',
              o2:'-2200',
              pick:'Celtics',
              res:'W',
              s1:11,
              s2:2,
              t1:'Pelicans',
              t2:'Celtics',
              wl1:'26-54',
              wl2:'54-26'
            },
            {
              _id:1776290243012,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'3-7',
              o1:'+390',
              o2:'-525',
              pick:'Bucks',
              res:'W',
              s1:13,
              s2:12,
              t1:'Nets',
              t2:'Bucks',
              wl1:'20-60',
              wl2:'31-49'
            },
            {
              _id:1776290258848,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'3-7',
              o1:'-1400',
              o2:'+850',
              pick:'Magic',
              res:'W',
              s1:7,
              s2:11,
              t1:'Magic',
              t2:'Bulls',
              wl1:'44-36',
              wl2:'32-48'
            },
            {
              _id:1776290301010,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'9-1',
              o1:'+1200',
              o2:'-2400',
              pick:'Spurs',
              res:'W',
              s1:12,
              s2:2,
              t1:'Mavericks',
              t2:'Spurs',
              wl1:'25-55',
              wl2:'61-19'
            },
            {
              _id:1776290315177,
              i1:0,
              i2:0,
              l1:'9-1',
              l2:'10-0',
              o1:'+120',
              o2:'-140',
              pick:'Nuggets',
              res:'W',
              s1:1,
              s2:3,
              t1:'Thunder',
              t2:'Nuggets',
              wl1:'64-16',
              wl2:'52-28'
            },
            {
              _id:1776290338113,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'8-2',
              o1:'+375',
              o2:'-500',
              pick:'Rockets',
              res:'L',
              s1:6,
              s2:4,
              t1:'Wolves',
              t2:'Rockets',
              wl1:'47-33',
              wl2:'51-29'
            },
            {
              _id:1776290362140,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'0-10',
              o1:'+155',
              o2:'-185',
              pick:'Jazz',
              res:'W',
              s1:13,
              s2:14,
              t1:'Grizzlies',
              t2:'Jazz',
              wl1:'25-55',
              wl2:'21-59'
            },
            {
              _id:1776290376658,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'3-7',
              o1:'-500',
              o2:'+375',
              pick:'Warriors',
              res:'L',
              s1:10,
              s2:15,
              t1:'Warriors',
              t2:'Kings',
              wl1:'37-43',
              wl2:'20-60'
            },
            {
              _id:1776290392826,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'6-4',
              o1:'+105',
              o2:'-125',
              pick:'Blazers',
              res:'W',
              s1:9,
              s2:8,
              t1:'Clippers',
              t2:'Blazers',
              wl1:'41-39',
              wl2:'41-39'
            },
            {
              _id:1776290419367,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'6-4',
              o1:'-135',
              o2:'+115',
              pick:'Lakers',
              res:'W',
              s1:7,
              s2:5,
              t1:'Suns',
              t2:'Lakers',
              wl1:'44-36',
              wl2:'51-29'
            }
          ]},
          { day:65, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:66, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776290635716,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'4-6',
              o1:'-1200',
              o2:'+750',
              pick:'Pistons',
              res:'W',
              s1:1,
              s2:14,
              t1:'Pistons',
              t2:'Pacers',
              wl1:'59-22',
              wl2:'19-62'
            },
            {
              _id:1776290692500,
              i1:1,
              i2:7,
              l1:'5-5',
              l2:'8-2',
              o1:'-900',
              o2:'+600',
              pick:'Hornets',
              res:'W',
              s1:9,
              s2:3,
              t1:'Hornets',
              t2:'Knicks',
              wl1:'42-39',
              wl2:'54-27'
            },
            {
              _id:1776290725753,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'8-2',
              o1:'-750',
              o2:'+525',
              pick:'Magic',
              res:'L',
              s1:7,
              s2:2,
              t1:'Magic',
              t2:'Celtics',
              wl1:'45-36',
              wl2:'55-26'
            },
            {
              _id:1776290744254,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'5-5',
              o1:'+800',
              o2:'-1300',
              pick:'76ers',
              res:'W',
              s1:12,
              s2:8,
              t1:'Bucks',
              t2:'76ers',
              wl1:'32-49',
              wl2:'43-38'
            },
            {
              _id:1776290763737,
              i1:0,
              i2:0,
              l1:'7-3',
              l2:'4-6',
              o1:'+350',
              o2:'-450',
              pick:'Heat',
              res:'W',
              s1:5,
              s2:10,
              t1:'Hawks',
              t2:'Heat',
              wl1:'46-35',
              wl2:'42-39'
            },
            {
              _id:1776290781160,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'7-3',
              o1:'+390',
              o2:'-525',
              pick:'Cavaliers',
              res:'W',
              s1:15,
              s2:4,
              t1:'Wizards',
              t2:'Cavaliers',
              wl1:'17-64',
              wl2:'51-30'
            },
            {
              _id:1776290800076,
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'5-5',
              o1:'+1800',
              o2:'-8000',
              pick:'Raptors',
              res:'W',
              s1:13,
              s2:6,
              t1:'Nets',
              t2:'Raptors',
              wl1:'20-61',
              wl2:'45-36'
            },
            {
              _id:1776290817627,
              i1:0,
              i2:0,
              l1:'10-0',
              l2:'9-1',
              o1:'+350',
              o2:'-450',
              pick:'Spurs',
              res:'L',
              s1:3,
              s2:2,
              t1:'Nuggets',
              t2:'Spurs',
              wl1:'53-28',
              wl2:'62-19'
            },
            {
              _id:1776290839812,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'5-5',
              o1:'+150',
              o2:'-180',
              pick:'Wolves',
              res:'W',
              s1:11,
              s2:6,
              t1:'Pelicans',
              t2:'Wolves',
              wl1:'26-55',
              wl2:'48-33'
            },
            {
              _id:1776290877208,
              i1:0,
              i2:0,
              l1:'2-8',
              l2:'2-8',
              o1:'+165',
              o2:'-200',
              pick:'Mavericks',
              res:'W',
              s1:11,
              s2:13,
              t1:'Bulls',
              t2:'Mavericks',
              wl1:'32-49',
              wl2:'25-56'
            },
            {
              _id:1776290892409,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'8-2',
              o1:'+250',
              o2:'-310',
              pick:'Thunder',
              res:'L',
              s1:7,
              s2:1,
              t1:'Suns',
              t2:'Thunder',
              wl1:'44-37',
              wl2:'64-17'
            },
            {
              _id:1776290907978,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'8-2',
              o1:'+550',
              o2:'-800',
              pick:'Rockets',
              res:'W',
              s1:12,
              s2:5,
              t1:'Grizzlies',
              t2:'Rockets',
              wl1:'25-56',
              wl2:'51-30'
            },
            {
              _id:1776290932579,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+140',
              o2:'-165',
              pick:'Clippers',
              res:'W',
              s1:10,
              s2:9,
              t1:'Warriors',
              t2:'Clippers',
              wl1:'37-44',
              wl2:'41-40'
            },
            {
              _id:1776290958783,
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+1100',
              o2:'-2200',
              pick:'Blazers',
              res:'W',
              s1:15,
              s2:8,
              t1:'Kings',
              t2:'Blazers',
              wl1:'21-60',
              wl2:'42-39'
            },
            {
              _id:1776290981109,
              i1:0,
              i2:0,
              l1:'1-9',
              l2:'6-4',
              o1:'+650',
              o2:'-1000',
              pick:'Lakers',
              res:'W',
              s1:14,
              s2:4,
              t1:'Jazz',
              t2:'Lakers',
              wl1:'22-59',
              wl2:'52-29'
            }
          ]},
          { day:67, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:68, date:'', type:'REAL 💰', overall:'', unlocked:false, games:[
            {
              _id:1776291287334,
              i1:3,
              i2:1,
              l1:'5-5',
              l2:'5-5',
              o1:'+205',
              o2:'-250',
              pick:'Hornets',
              res:'W',
              s1:10,
              s2:9,
              t1:'Heat',
              t2:'Hornets',
              wl1:'43-39',
              wl2:'43-39'
            },
            {
              _id:1776291313943,
              i1:0,
              i2:1,
              l1:'7-3',
              l2:'5-5',
              o1:'+135',
              o2:'-160',
              pick:'Suns',
              res:'L',
              s1:8,
              s2:7,
              t1:'Blazers',
              t2:'Suns',
              wl1:'43-39',
              wl2:'45-37'
            }
          ]},
          { day:69, date:'', type:'', overall:'', unlocked:false, games:[
            {
              _id:1776365135989,
              i1:3,
              i2:4,
              l1:'7-3',
              l2:'6-4',
              o1:'+105',
              o2:'-125',
              pick:'Magic',
              res:'L',
              s1:7,
              s2:8,
              t1:'Magic',
              t2:'76ers',
              wl1:'45-37',
              wl2:'44-38'
            },
            {
              _id:1776365150433,
              i1:4,
              i2:2,
              l1:'3-7',
              l2:'6-4',
              o1:'+180',
              o2:'-220',
              pick:'Clippers',
              res:'L',
              s1:10,
              s2:9,
              t1:'Warriors',
              t2:'Clippers',
              wl1:'37-45',
              wl2:'41-41'
            }
          ]},
          { day:70, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:71, date:'', type:'', overall:'', unlocked:false, games:[
            {
              _id:1776490543026,
              i1:1,
              i2:1,
              l1:'6-4',
              l2:'6-4',
              o1:'-150',
              o2:'+125',
              pick:'Magic',
              res:'W',
              s1:9,
              s2:8,
              t1:'Hornets',
              t2:'Magic',
              wl1:'44-39',
              wl2:'45-38'
            },
            {
              _id:1776490704643,
              i1:4,
              i2:1,
              l1:'3-7',
              l2:'5-5',
              o1:'+115',
              o2:'-135',
              pick:'Suns',
              res:'W',
              s1:10,
              s2:7,
              t1:'Warriors',
              t2:'Suns',
              wl1:'38-45',
              wl2:'45-38'
            }
          ]},
          { day:72, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:1776498937831,
              i1:2,
              i2:1,
              l1:'6-4',
              l2:'7-3',
              o1:'+290',
              o2:'-375',
              pick:'Cavaliers',
              res:'W',
              s1:5,
              s2:4,
              t1:'Raptors',
              t2:'Cavaliers',
              wl1:'46-36',
              wl2:'52-30'
            },
            {
              _id:1776498964512,
              i1:0,
              i2:2,
              l1:'5-5',
              l2:'10-0',
              o1:'+210',
              o2:'-260',
              pick:'Nuggets',
              res:'W',
              s1:6,
              s2:3,
              t1:'Wolves',
              t2:'Nuggets',
              wl1:'49-33',
              wl2:'54-28'
            },
            {
              _id:1776499007433,
              i1:1,
              i2:0,
              l1:'6-4',
              l2:'7-3',
              o1:'+185',
              o2:'-225',
              pick:'Knicks',
              res:'W',
              s1:6,
              s2:3,
              t1:'Hawks',
              t2:'Knicks',
              wl1:'46-36',
              wl2:'55-27'
            },
            {
              _id:1776499080288,
              i1:3,
              i2:2,
              l1:'9-1',
              l2:'7-3',
              o1:'-210',
              o2:'+175',
              pick:'Rockets',
              res:'L',
              s1:5,
              s2:4,
              t1:'Rockets',
              t2:'Lakers',
              wl1:'52-30',
              wl2:'53-29'
            }
          ]},
          { day:73, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:1776616558667,
              i1:1,
              i2:1,
              l1:'6-4',
              l2:'8-2',
              o1:'+575',
              o2:'-850',
              pick:'Celtics',
              res:'W',
              s1:8,
              s2:2,
              t1:'76ers',
              t2:'Celtics',
              wl1:'45-38',
              wl2:'56-26'
            },
            {
              _id:1776616622093,
              i1:2,
              i2:1,
              l1:'5-5',
              l2:'7-3',
              o1:'+750',
              o2:'-1200',
              pick:'Thunder',
              res:'W',
              s1:7,
              s2:1,
              t1:'Suns',
              t2:'Thunder',
              wl1:'46-38',
              wl2:'64-18'
            },
            {
              _id:1776616655931,
              i1:2,
              i2:0,
              l1:'7-3',
              l2:'8-2',
              o1:'+320',
              o2:'-400',
              pick:'Pistons',
              res:'L',
              s1:7,
              s2:1,
              t1:'Magic',
              t2:'Pistons',
              wl1:'46-38',
              wl2:'60-22'
            },
            {
              _id:1776616677183,
              i1:0,
              i2:9,
              l1:'6-4',
              l2:'8-2',
              o1:'+450',
              o2:'-600',
              pick:'Spurs',
              res:'W',
              s1:8,
              s2:2,
              t1:'Blazers',
              t2:'Spurs',
              wl1:'44-39',
              wl2:'62-20'
            }
          ]},
          { day:74, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:1776719615489,
              i1:2,
              i2:1,
              l1:'5-5',
              l2:'8-2',
              o1:'+325',
              o2:'-435',
              pick:'Cavaliers',
              res:'W',
              s1:6,
              s2:4,
              t1:'Raptors',
              t2:'Cavaliers',
              wl1:'46-37',
              wl2:'53-30'
            },
            {
              _id:1776719631533,
              i1:2,
              i2:1,
              l1:'5-5',
              l2:'7-3',
              o1:'+210',
              o2:'-250',
              pick:'Knicks',
              res:'L',
              s1:7,
              s2:3,
              t1:'Hawks',
              t2:'Knicks',
              wl1:'46-37',
              wl2:'56-27'
            },
            {
              _id:1776719649985,
              i1:0,
              i2:1,
              l1:'4-6',
              l2:'10-0',
              o1:'+255',
              o2:'-310',
              pick:'Nuggets',
              res:'L',
              s1:6,
              s2:3,
              t1:'Wolves',
              t2:'Nuggets',
              wl1:'49-34',
              wl2:'55-28'
            }
          ]},
          { day:75, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:1776896611135,
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'8-2',
              o1:'+575',
              o2:'-850',
              pick:'Celtics',
              res:'L',
              s1:8,
              s2:2,
              t1:'76ers',
              t2:'Celtics',
              wl1:'45-39',
              wl2:'57-26'
            },
            {
              _id:1776896636232,
              i1:0,
              i2:9,
              l1:'6-4',
              l2:'8-2',
              o1:'+475',
              o2:'-650',
              pick:'Spurs',
              res:'L',
              s1:8,
              s2:2,
              t1:'Blazers',
              t2:'Spurs',
              wl1:'44-40',
              wl2:'63-20'
            },
            {
              _id:1776896661283,
              i1:0,
              i2:0,
              l1:'8-2',
              l2:'7-3',
              o1:'-240',
              o2:'+195',
              pick:'Rockets',
              res:'L',
              s1:5,
              s2:4,
              t1:'Rockets',
              t2:'Lakers',
              wl1:'52-31',
              wl2:'54-29'
            }
          ]},
          { day:76, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:1776896772276,
              i1:1,
              i2:0,
              l1:'7-3',
              l2:'7-3',
              o1:'+310',
              o2:'-390',
              pick:'Pistons',
              res:'W',
              s1:6,
              s2:1,
              t1:'Magic',
              t2:'Pistons',
              wl1:'47-38',
              wl2:'60-23'
            },
            {
              _id:1776896793077,
              i1:3,
              i2:1,
              l1:'3-7',
              l2:'8-2',
              o1:'+950',
              o2:'-1700',
              pick:'Thunder',
              res:'W',
              s1:7,
              s2:1,
              t1:'Suns',
              t2:'Thunder',
              wl1:'46-39',
              wl2:'65-18'
            }
          ]},
          { day:77, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:1776969007890,
              edge:'55.00%',
              i1:6,
              i2:10,
              l1:'0-10',
              l2:'0-10',
              o1:'-125',
              o2:'+105',
              pick:'Cubs',
              res:'W',
              s1:14,
              s2:5,
              sport:'mlb',
              t1:'Phillies',
              t2:'Cubs',
              wl1:'8-16',
              wl2:'15-9'
            },
            {
              _id:1776969199835,
              edge:'52.00%',
              i1:8,
              i2:6,
              l1:'0-10',
              l2:'0-10',
              o1:'-155',
              o2:'+130',
              pick:'Rockies',
              res:'L',
              s1:2,
              s2:13,
              sport:'mlb',
              t1:'Padres',
              t2:'Rockies',
              wl1:'16-8',
              wl2:'10-15'
            },
            {
              _id:1776969299172,
              edge:'52.00%',
              i1:9,
              i2:11,
              l1:'0-10',
              l2:'0-10',
              o1:'+135',
              o2:'-160',
              pick:'Diamondbacks',
              res:'L',
              s1:0,
              s2:6,
              sport:'mlb',
              t1:'White Sox',
              t2:'Diamondbacks',
              wl1:'0-0',
              wl2:'14-10'
            },
            {
              _id:1776980063213,
              i1:0,
              i2:2,
              l1:'6-4',
              l2:'6-4',
              o1:'-115',
              o2:'-105',
              pick:'Knicks',
              res:'L',
              s1:3,
              s2:5,
              t1:'Knicks',
              t2:'Hawks',
              wl1:'56-28',
              wl2:'47-37'
            },
            {
              _id:1776980117115,
              i1:1,
              i2:1,
              l1:'8-2',
              l2:'4-6',
              o1:'-155',
              o2:'+130',
              pick:'Cavaliers',
              res:'L',
              s1:4,
              s2:7,
              t1:'Cavaliers',
              t2:'Raptors',
              wl1:'54-30',
              wl2:'46-38'
            },
            {
              _id:1776980146534,
              i1:2,
              i2:0,
              l1:'9-1',
              l2:'5-5',
              o1:'-130',
              o2:'+110',
              pick:'Nuggets',
              res:'L',
              s1:3,
              s2:6,
              t1:'Nuggets',
              t2:'Wolves',
              wl1:'55-29',
              wl2:'50-34'
            },
            {
              _id:1776987948365,
              edge:'56.00%',
              i1:13,
              i2:11,
              l1:'0-10',
              l2:'0-10',
              o1:'-155',
              o2:'+130',
              pick:'Dodgers',
              res:'W',
              s1:3,
              s2:11,
              sport:'mlb',
              t1:'Dodgers',
              t2:'Giants',
              wl1:'17-8',
              wl2:'11-14'
            },
            {
              _id:1776987988943,
              edge:'52.00%',
              i1:2,
              i2:8,
              l1:'0-10',
              l2:'0-10',
              o1:'+135',
              o2:'-160',
              pick:'Rangers',
              res:'W',
              s1:7,
              s2:6,
              sport:'mlb',
              t1:'Pirates',
              t2:'Rangers',
              wl1:'14-10',
              wl2:'12-12'
            },
            {
              _id:1776988018721,
              edge:'57.00%',
              i1:4,
              i2:8,
              l1:'0-10',
              l2:'0-10',
              o1:'-155',
              o2:'+130',
              pick:'Yankees',
              res:'L',
              s1:1,
              s2:14,
              sport:'mlb',
              t1:'Yankees',
              t2:'Red Sox',
              wl1:'15-9',
              wl2:'9-15'
            },
            {
              _id:1776988056291,
              edge:'53.00%',
              i1:5,
              i2:9,
              l1:'0-10',
              l2:'0-10',
              o1:'-105',
              o2:'-115',
              pick:'Twins',
              res:'L',
              s1:7,
              s2:14,
              sport:'mlb',
              t1:'Twins',
              t2:'Mets',
              wl1:'12-12',
              wl2:'8-16'
            },
            {
              _id:1776988087707,
              edge:'55.00%',
              i1:11,
              i2:5,
              l1:'0-10',
              l2:'0-10',
              o1:'-135',
              o2:'+115',
              pick:'Braves',
              res:'W',
              s1:1,
              s2:12,
              sport:'mlb',
              t1:'Braves',
              t2:'Nationals',
              wl1:'18-8',
              wl2:'11-15'
            },
            {
              _id:1776988118322,
              edge:'57.00%',
              i1:7,
              i2:9,
              l1:'0-10',
              l2:'0-10',
              o1:'+195',
              o2:'-240',
              pick:'Tigers',
              res:'W',
              s1:9,
              s2:3,
              sport:'mlb',
              t1:'Brewers',
              t2:'Tigers',
              wl1:'13-11',
              wl2:'14-12'
            }
          ]},
          { day:78, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:1777060177253,
              edge:'51.00%',
              i1:9,
              i2:4,
              l1:'1-9',
              l2:'0-10',
              o1:'-125',
              o2:'+105',
              pick:'Tigers',
              res:'L',
              s1:3,
              s2:4,
              sport:'mlb',
              t1:'Tigers',
              t2:'Reds',
              wl1:'14-12',
              wl2:'16-9'
            },
            {
              _id:1777060203859,
              edge:'57.00%',
              i1:8,
              i2:13,
              l1:'1-9',
              l2:'0-10',
              o1:'+105',
              o2:'-125',
              pick:'Orioles',
              res:'W',
              s1:14,
              s2:7,
              sport:'mlb',
              t1:'Red Sox',
              t2:'Orioles',
              wl1:'9-16',
              wl2:'12-13'
            },
            {
              _id:1777060228895,
              edge:'56.00%',
              i1:2,
              i2:11,
              l1:'0-10',
              l2:'0-10',
              o1:'-125',
              o2:'+105',
              pick:'Guardians',
              res:'W',
              s1:4,
              s2:11,
              sport:'mlb',
              t1:'Guardians',
              t2:'Blue Jays',
              wl1:'14-12',
              wl2:'10-14'
            },
            {
              _id:1777060264994,
              edge:'52.00%',
              i1:5,
              i2:9,
              l1:'0-10',
              l2:'0-10',
              o1:'+115',
              o2:'-135',
              pick:'Rays',
              res:'W',
              s1:8,
              s2:2,
              sport:'mlb',
              t1:'Twins',
              t2:'Rays',
              wl1:'12-13',
              wl2:'13-11'
            },
            {
              _id:1777060289782,
              edge:'54.00%',
              i1:6,
              i2:9,
              l1:'0-10',
              l2:'1-9',
              o1:'+180',
              o2:'-220',
              pick:'Mets',
              res:'L',
              s1:13,
              s2:14,
              sport:'mlb',
              t1:'Rockies',
              t2:'Mets',
              wl1:'10-16',
              wl2:'9-16'
            },
            {
              _id:1777060309652,
              edge:'60.00%',
              i1:6,
              i2:11,
              l1:'0-10',
              l2:'1-9',
              o1:'+125',
              o2:'-150',
              pick:'Braves',
              res:'W',
              s1:15,
              s2:1,
              sport:'mlb',
              t1:'Phillies',
              t2:'Braves',
              wl1:'8-17',
              wl2:'18-8'
            },
            {
              _id:1777060326703,
              edge:'51.00%',
              i1:2,
              i2:7,
              l1:'0-10',
              l2:'0-10',
              o1:'-120',
              o2:'+100',
              pick:'Pirates',
              res:'W',
              s1:8,
              s2:9,
              sport:'mlb',
              t1:'Pirates',
              t2:'Brewers',
              wl1:'14-11',
              wl2:'13-11'
            },
            {
              _id:1777060361507,
              edge:'52.00%',
              i1:7,
              i2:6,
              l1:'0-10',
              l2:'0-10',
              o1:'-110',
              o2:'-110',
              pick:'Angels',
              res:'L',
              s1:9,
              s2:15,
              sport:'mlb',
              t1:'Angels',
              t2:'Royals',
              wl1:'12-14',
              wl2:'8-17'
            },
            {
              _id:1777060380975,
              edge:'52.00%',
              i1:3,
              i2:8,
              l1:'0-10',
              l2:'1-9',
              o1:'+120',
              o2:'-140',
              pick:'Rangers',
              res:'L',
              s1:6,
              s2:5,
              sport:'mlb',
              t1:'Athletics',
              t2:'Rangers',
              wl1:'13-12',
              wl2:'13-12'
            },
            {
              _id:1777060406735,
              edge:'57.00%',
              i1:4,
              i2:16,
              l1:'0-10',
              l2:'0-10',
              o1:'-155',
              o2:'+130',
              pick:'Yankees',
              res:'W',
              s1:1,
              s2:13,
              sport:'mlb',
              t1:'Yankees',
              t2:'Astros',
              wl1:'16-9',
              wl2:'10-16'
            },
            {
              _id:1777060431504,
              edge:'50.00%',
              i1:7,
              i2:3,
              l1:'0-10',
              l2:'0-10',
              o1:'-150',
              o2:'+125',
              pick:'Mariners',
              res:'W',
              s1:10,
              s2:6,
              sport:'mlb',
              t1:'Mariners',
              t2:'Cardinals',
              wl1:'11-15',
              wl2:'14-10'
            },
            {
              _id:1777060447371,
              edge:'55.00%',
              i1:4,
              i2:11,
              l1:'0-10',
              l2:'0-10',
              o1:'-115',
              o2:'-105',
              pick:'Marlins',
              res:'W',
              s1:10,
              s2:11,
              sport:'mlb',
              t1:'Marlins',
              t2:'Giants',
              wl1:'12-13',
              wl2:'11-14'
            },
            {
              _id:1777060464157,
              edge:'51.00%',
              i1:10,
              i2:13,
              l1:'1-9',
              l2:'1-9',
              o1:'+135',
              o2:'-160',
              pick:'Dodgers',
              res:'W',
              s1:5,
              s2:3,
              sport:'mlb',
              t1:'Cubs',
              t2:'Dodgers',
              wl1:'16-9',
              wl2:'17-8'
            },
            {
              _id:1777061883678,
              i1:0,
              i2:1,
              l1:'7-3',
              l2:'7-3',
              o1:'-340',
              o2:'+270',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:8,
              t1:'Celtics',
              t2:'76ers',
              wl1:'57-27',
              wl2:'46-39'
            },
            {
              _id:1777061922150,
              i1:2,
              i2:3,
              l1:'7-3',
              l2:'7-3',
              o1:'+265',
              o2:'-330',
              pick:'Rockets',
              res:'L',
              s1:3,
              s2:5,
              t1:'Lakers',
              t2:'Rockets',
              wl1:'55-29',
              wl2:'52-32'
            },
            {
              _id:1777061965921,
              i1:9,
              i2:0,
              l1:'7-3',
              l2:'7-3',
              o1:'-135',
              o2:'+115',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:8,
              t1:'Spurs',
              t2:'Blazers',
              wl1:'63-21',
              wl2:'45-40'
            },
            {
              _id:1777063119971,
              edge:'56.00%',
              i1:5,
              i2:9,
              l1:'0-10',
              l2:'1-9',
              o1:'+105',
              o2:'-125',
              pick:'White Sox',
              res:'W',
              s1:12,
              s2:12,
              sport:'mlb',
              t1:'Nationals',
              t2:'White Sox',
              wl1:'11-15',
              wl2:'10-15'
            }
          ]},
          { day:79, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:1777111414514,
              conf:60,
              i1:0,
              i2:1,
              l1:'7-3',
              l2:'7-3',
              o1:'-150',
              o2:'+125',
              pick:'Pistons',
              res:'L',
              s1:1,
              s2:7,
              sport:'nba',
              t1:'Pistons',
              t2:'Magic',
              wl1:'61-23',
              wl2:'47-39'
            },
            {
              _id:1777111453732,
              conf:74,
              i1:3,
              i2:3,
              l1:'8-2',
              l2:'4-6',
              o1:'-450',
              o2:'+350',
              pick:'Thunder',
              res:'W',
              s1:1,
              s2:7,
              sport:'nba',
              t1:'Thunder',
              t2:'Suns',
              wl1:'66-18',
              wl2:'46-40'
            },
            {
              _id:1777111478583,
              conf:38,
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'6-4',
              o1:'-130',
              o2:'+110',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:5,
              sport:'nba',
              t1:'Knicks',
              t2:'Hawks',
              wl1:'56-29',
              wl2:'48-37'
            },
            {
              _id:1777111498736,
              conf:31,
              i1:2,
              i2:0,
              l1:'8-2',
              l2:'5-5',
              o1:'-120',
              o2:'+100',
              pick:'Nuggets',
              res:'L',
              s1:4,
              s2:6,
              sport:'nba',
              t1:'Nuggets',
              t2:'Wolves',
              wl1:'55-30',
              wl2:'51-34'
            },
            {
              _id:1777111765171,
              edge:'59.00%',
              i1:8,
              i2:11,
              l1:'1-9',
              l2:'1-9',
              o1:'-105',
              o2:'-115',
              pick:'Orioles',
              res:'L',
              s1:15,
              s2:7,
              sport:'mlb',
              t1:'Red Sox',
              t2:'Orioles',
              wl1:'9-17',
              wl2:'13-13'
            },
            {
              _id:1777111831519,
              edge:'53.00%',
              i1:7,
              i2:3,
              l1:'1-9',
              l2:'0-10',
              o1:'-150',
              o2:'+125',
              pick:'Mariners',
              res:'W',
              s1:10,
              s2:8,
              sport:'mlb',
              t1:'Mariners',
              t2:'Cardinals',
              wl1:'12-15',
              wl2:'14-11'
            },
            {
              _id:1777111896006,
              edge:'54.00%',
              i1:2,
              i2:11,
              l1:'1-9',
              l2:'0-10',
              o1:'+120',
              o2:'-140',
              pick:'Guardians',
              res:'L',
              s1:3,
              s2:12,
              sport:'mlb',
              t1:'Guardians',
              t2:'Blue Jays',
              wl1:'15-12',
              wl2:'10-15'
            },
            {
              _id:1777111935525,
              edge:'52.00%',
              i1:4,
              i2:11,
              l1:'1-9',
              l2:'0-10',
              o1:'+100',
              o2:'-120',
              pick:'Marlins',
              res:'L',
              s1:10,
              s2:11,
              sport:'mlb',
              t1:'Marlins',
              t2:'Giants',
              wl1:'13-13',
              wl2:'11-15'
            },
            {
              _id:1777112042633,
              edge:'54.00%',
              i1:5,
              i2:9,
              l1:'0-10',
              l2:'1-9',
              o1:'+115',
              o2:'-135',
              pick:'Rays',
              res:'W',
              s1:8,
              s2:2,
              sport:'mlb',
              t1:'Twins',
              t2:'Rays',
              wl1:'12-14',
              wl2:'14-11'
            },
            {
              _id:1777112061951,
              edge:'56.00%',
              i1:5,
              i2:9,
              l1:'0-10',
              l2:'2-8',
              o1:'+120',
              o2:'-140',
              pick:'White Sox',
              res:'L',
              s1:13,
              s2:11,
              sport:'mlb',
              t1:'Nationals',
              t2:'White Sox',
              wl1:'11-16',
              wl2:'11-15'
            },
            {
              _id:1777112102121,
              edge:'51.00%',
              i1:8,
              i2:11,
              l1:'1-9',
              l2:'0-10',
              o1:'+105',
              o2:'-125',
              pick:'Padres',
              res:'W',
              s1:2,
              s2:7,
              sport:'mlb',
              t1:'Padres',
              t2:'Diamondbacks',
              wl1:'17-8',
              wl2:'14-11'
            },
            {
              _id:1777112125773,
              edge:'51.00%',
              i1:3,
              i2:8,
              l1:'1-9',
              l2:'1-9',
              o1:'+120',
              o2:'-140',
              pick:'Athletics',
              res:'L',
              s1:4,
              s2:6,
              sport:'mlb',
              t1:'Athletics',
              t2:'Rangers',
              wl1:'14-12',
              wl2:'13-13'
            },
            {
              _id:1777112143424,
              edge:'53.00%',
              i1:2,
              i2:7,
              l1:'1-9',
              l2:'0-10',
              o1:'+115',
              o2:'-135',
              pick:'Pirates',
              res:'W',
              s1:6,
              s2:9,
              sport:'mlb',
              t1:'Pirates',
              t2:'Brewers',
              wl1:'15-11',
              wl2:'13-12'
            },
            {
              _id:1777112172647,
              edge:'61.00%',
              i1:4,
              i2:16,
              l1:'1-9',
              l2:'0-10',
              o1:'-155',
              o2:'+130',
              pick:'Yankees',
              res:'W',
              s1:1,
              s2:13,
              sport:'mlb',
              t1:'Yankees',
              t2:'Astros',
              wl1:'17-9',
              wl2:'10-17'
            },
            {
              _id:1777112197101,
              edge:'53.00%',
              i1:7,
              i2:6,
              l1:'0-10',
              l2:'1-9',
              o1:'+135',
              o2:'-160',
              pick:'Angels',
              res:'L',
              s1:9,
              s2:14,
              sport:'mlb',
              t1:'Angels',
              t2:'Royals',
              wl1:'12-15',
              wl2:'9-17'
            },
            {
              _id:1777112217117,
              edge:'50.00%',
              i1:9,
              i2:4,
              l1:'1-9',
              l2:'1-9',
              o1:'-110',
              o2:'-110',
              pick:'Tigers',
              res:'L',
              s1:5,
              s2:3,
              sport:'mlb',
              t1:'Tigers',
              t2:'Reds',
              wl1:'14-13',
              wl2:'17-9'
            },
            {
              _id:1777112233835,
              edge:'51.00%',
              i1:11,
              i2:13,
              l1:'1-9',
              l2:'2-8',
              o1:'+125',
              o2:'-150',
              pick:'Dodgers',
              res:'W',
              s1:4,
              s2:5,
              sport:'mlb',
              t1:'Cubs',
              t2:'Dodgers',
              wl1:'17-9',
              wl2:'17-9'
            },
            {
              _id:1777112251336,
              edge:'64.00%',
              i1:6,
              i2:11,
              l1:'0-10',
              l2:'2-8',
              o1:'+115',
              o2:'-135',
              pick:'Braves',
              res:'L',
              s1:15,
              s2:1,
              sport:'mlb',
              t1:'Phillies',
              t2:'Braves',
              wl1:'8-18',
              wl2:'19-8'
            }
          ]},
          { day:80, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:1777253673588,
              conf:19,
              i1:2,
              i2:3,
              l1:'7-3',
              l2:'6-4',
              o1:'+145',
              o2:'-170',
              pick:'Rockets',
              res:'W',
              s1:3,
              s2:5,
              sport:'nba',
              t1:'Lakers',
              t2:'Rockets',
              wl1:'56-29',
              wl2:'52-33'
            },
            {
              _id:1777253692907,
              conf:45,
              i1:0,
              i2:2,
              l1:'7-3',
              l2:'5-5',
              o1:'-180',
              o2:'+150',
              pick:'Cavaliers',
              res:'L',
              s1:4,
              s2:7,
              sport:'nba',
              t1:'Cavaliers',
              t2:'Raptors',
              wl1:'54-31',
              wl2:'47-38'
            },
            {
              _id:1777253710443,
              conf:58,
              i1:9,
              i2:0,
              l1:'7-3',
              l2:'6-4',
              o1:'-220',
              o2:'+180',
              pick:'Spurs',
              res:'W',
              s1:2,
              s2:8,
              sport:'nba',
              t1:'Spurs',
              t2:'Blazers',
              wl1:'64-21',
              wl2:'45-41'
            },
            {
              _id:1777253726977,
              conf:63,
              i1:0,
              i2:1,
              l1:'8-2',
              l2:'5-5',
              o1:'-230',
              o2:'+190',
              pick:'Celtics',
              res:'W',
              s1:2,
              s2:8,
              sport:'nba',
              t1:'Celtics',
              t2:'76ers',
              wl1:'58-27',
              wl2:'46-40'
            },
            {
              _id:1777253898266,
              edge:'53.00%',
              i1:8,
              i2:10,
              l1:'2-8',
              l2:'1-9',
              o1:'+120',
              o2:'-140',
              pick:'Orioles',
              res:'L',
              s1:13,
              s2:8,
              sport:'mlb',
              t1:'Red Sox',
              t2:'Orioles',
              wl1:'11-17',
              wl2:'13-15'
            },
            {
              _id:1777253915499,
              edge:'59.00%',
              i1:5,
              i2:11,
              l1:'1-9',
              l2:'2-8',
              o1:'+180',
              o2:'-220',
              pick:'Braves',
              res:'W',
              s1:14,
              s2:1,
              sport:'mlb',
              t1:'Phillies',
              t2:'Braves',
              wl1:'9-19',
              wl2:'20-9'
            },
            {
              _id:1777253934650,
              edge:'52.00%',
              i1:3,
              i2:12,
              l1:'1-9',
              l2:'1-9',
              o1:'+105',
              o2:'-125',
              pick:'Guardians',
              res:'L',
              s1:5,
              s2:9,
              sport:'mlb',
              t1:'Guardians',
              t2:'Blue Jays',
              wl1:'15-14',
              wl2:'12-15'
            },
            {
              _id:1777253961170,
              edge:'51.00%',
              i1:7,
              i2:9,
              l1:'1-9',
              l2:'1-9',
              o1:'+220',
              o2:'-260',
              pick:'Rockies',
              res:'W',
              s1:12,
              s2:15,
              sport:'mlb',
              t1:'Rockies',
              t2:'Mets',
              wl1:'13-16',
              wl2:'9-19'
            },
            {
              _id:1777253974753,
              edge:'55.00%',
              i1:10,
              i2:4,
              l1:'1-9',
              l2:'2-8',
              o1:'-110',
              o2:'-110',
              pick:'Reds',
              res:'L',
              s1:4,
              s2:4,
              sport:'mlb',
              t1:'Tigers',
              t2:'Reds',
              wl1:'15-14',
              wl2:'18-10'
            },
            {
              _id:1777253989423,
              edge:'59.00%',
              i1:5,
              i2:9,
              l1:'0-10',
              l2:'2-8',
              o1:'+125',
              o2:'-150',
              pick:'Rays',
              res:'W',
              s1:10,
              s2:2,
              sport:'mlb',
              t1:'Twins',
              t2:'Rays',
              wl1:'12-16',
              wl2:'16-11'
            },
            {
              _id:1777254009177,
              edge:'55.00%',
              i1:2,
              i2:7,
              l1:'2-8',
              l2:'0-10',
              o1:'+100',
              o2:'-120',
              pick:'Pirates',
              res:'L',
              s1:6,
              s2:9,
              sport:'mlb',
              t1:'Pirates',
              t2:'Brewers',
              wl1:'16-12',
              wl2:'14-13'
            },
            {
              _id:1777254031193,
              edge:'63.00%',
              i1:5,
              i2:15,
              l1:'2-8',
              l2:'0-10',
              o1:'-135',
              o2:'+115',
              pick:'Yankees',
              res:'L',
              s1:1,
              s2:14,
              sport:'mlb',
              t1:'Yankees',
              t2:'Astros',
              wl1:'18-10',
              wl2:'11-18'
            },
            {
              _id:1777254052120,
              edge:'51.00%',
              i1:6,
              i2:9,
              l1:'1-9',
              l2:'2-8',
              o1:'+100',
              o2:'-120',
              pick:'White Sox',
              res:'L',
              s1:13,
              s2:12,
              sport:'mlb',
              t1:'Nationals',
              t2:'White Sox',
              wl1:'13-16',
              wl2:'11-17'
            },
            {
              _id:1777254071608,
              edge:'56.00%',
              i1:7,
              i2:3,
              l1:'2-8',
              l2:'0-10',
              o1:'-130',
              o2:'+110',
              pick:'Mariners',
              res:'W',
              s1:7,
              s2:8,
              sport:'mlb',
              t1:'Mariners',
              t2:'Cardinals',
              wl1:'14-15',
              wl2:'14-13'
            },
            {
              _id:1777254090595,
              edge:'50.00%',
              i1:2,
              i2:8,
              l1:'1-9',
              l2:'2-8',
              o1:'-105',
              o2:'-115',
              pick:'Athletics',
              res:'W',
              s1:3,
              s2:6,
              sport:'mlb',
              t1:'Athletics',
              t2:'Rangers',
              wl1:'15-13',
              wl2:'14-14'
            },
            {
              _id:1777254114147,
              edge:'56.00%',
              i1:8,
              i2:11,
              l1:'2-8',
              l2:'0-10',
              o1:'-135',
              o2:'+115',
              pick:'Padres',
              res:'L',
              s1:8,
              s2:3,
              sport:'mlb',
              t1:'Padres',
              t2:'Diamondbacks',
              wl1:'18-9',
              wl2:'15-12'
            },
            {
              _id:1777254132857,
              edge:'52.00%',
              i1:4,
              i2:11,
              l1:'1-9',
              l2:'1-9',
              o1:'+105',
              o2:'-125',
              pick:'Giants',
              res:'W',
              s1:11,
              s2:10,
              sport:'mlb',
              t1:'Marlins',
              t2:'Giants',
              wl1:'13-15',
              wl2:'13-15'
            },
            {
              _id:1777254147925,
              edge:'61.00%',
              i1:12,
              i2:13,
              l1:'1-9',
              l2:'3-7',
              o1:'+100',
              o2:'-120',
              pick:'Dodgers',
              res:'W',
              s1:12,
              s2:5,
              sport:'mlb',
              t1:'Cubs',
              t2:'Dodgers',
              wl1:'17-11',
              wl2:'19-9'
            },
            {
              _id:1777254165269,
              edge:'53.00%',
              i1:8,
              i2:6,
              l1:'0-10',
              l2:'2-8',
              o1:'-110',
              o2:'-110',
              pick:'Royals',
              res:'W',
              s1:11,
              s2:15,
              sport:'mlb',
              t1:'Angels',
              t2:'Royals',
              wl1:'12-16',
              wl2:'10-17'
            },
            {
              _id:1777254187172,
              edge:'52.00%',
              i1:7,
              i2:9,
              l1:'1-9',
              l2:'1-9',
              o1:'+150',
              o2:'-165',
              pick:'Rockies',
              res:'W',
              s1:12,
              s2:15,
              sport:'mlb',
              t1:'Rockies',
              t2:'Mets',
              wl1:'13-16',
              wl2:'9-19'
            }
          ]},
          { day:81, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:'mlb_824446',
              edge:'64%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'4-6',
              o1:'+120',
              o2:'-141',
              pick:'Rays',
              res:'W',
              s1:2,
              s2:5,
              sport:'mlb',
              t1:'Rays',
              t2:'Guardians',
              wl1:'18-9',
              wl2:'13-15'
            },
            {
              _id:'mlb_823395',
              edge:'56%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'+105',
              o2:'-125',
              pick:'Cardinals',
              res:'W',
              s1:5,
              s2:8,
              sport:'mlb',
              t1:'Cardinals',
              t2:'Pirates',
              wl1:'15-11',
              wl2:'14-13'
            },
            {
              _id:'mlb_822825',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+105',
              o2:'-125',
              pick:'Red Sox',
              res:'W',
              s1:13,
              s2:12,
              sport:'mlb',
              t1:'Red Sox',
              t2:'Blue Jays',
              wl1:'11-16',
              wl2:'12-16'
            },
            {
              _id:'mlb_823719',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-120',
              o2:'+103',
              pick:'Twins',
              res:'W',
              s1:8,
              s2:11,
              sport:'mlb',
              t1:'Mariners',
              t2:'Twins',
              wl1:'12-16',
              wl2:'12-15'
            },
            {
              _id:'mlb_824609',
              edge:'61%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'-118',
              o2:'-102',
              pick:'White Sox',
              res:'W',
              s1:15,
              s2:6,
              sport:'mlb',
              t1:'Angels',
              t2:'White Sox',
              wl1:'10-18',
              wl2:'12-15'
            },
            {
              _id:'mlb_822906',
              edge:'66%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'4-6',
              o1:'-185',
              o2:'+155',
              pick:'Yankees',
              res:'W',
              s1:1,
              s2:9,
              sport:'mlb',
              t1:'Yankees',
              t2:'Rangers',
              wl1:'18-9',
              wl2:'11-15'
            },
            {
              _id:'mlb_823311',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'5-5',
              o1:'-120',
              o2:'+102',
              pick:'Cubs',
              res:'L',
              s1:2,
              s2:4,
              sport:'mlb',
              t1:'Cubs',
              t2:'Padres',
              wl1:'18-9',
              wl2:'15-11'
            },
            {
              _id:'mlb_823961',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+230',
              o2:'-286',
              pick:'Marlins',
              res:'L',
              s1:11,
              s2:3,
              sport:'mlb',
              t1:'Marlins',
              t2:'Dodgers',
              wl1:'12-15',
              wl2:'16-11'
            },
            {
              _id:1778103920867,
              conf:30,
              i1:1,
              i2:2,
              l1:'7-3',
              l2:'7-3',
              o1:'-170',
              o2:'+145',
              pick:'Magic',
              res:'W',
              s1:1,
              s2:7,
              sport:'nba',
              t1:'Pistons',
              t2:'Magic',
              wl1:'61-24',
              wl2:'48-39'
            },
            {
              _id:1778103936699,
              conf:20,
              i1:2,
              i2:2,
              l1:'8-2',
              l2:'4-6',
              o1:'-525',
              o2:'+390',
              pick:'Suns',
              res:'L',
              s1:1,
              s2:7,
              sport:'nba',
              t1:'Thunder',
              t2:'Suns',
              wl1:'67-18',
              wl2:'46-41'
            },
            {
              _id:1778104078736,
              conf:24,
              i1:0,
              i2:2,
              l1:'6-4',
              l2:'7-3',
              o1:'+390',
              o2:'-525',
              pick:'Wolves',
              res:'L',
              s1:6,
              s2:4,
              sport:'nba',
              t1:'Wolves',
              t2:'Nuggets',
              wl1:'52-34',
              wl2:'55-31'
            }
          ]},
          { day:82, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:'mlb_824447',
              edge:'63%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'4-6',
              o1:'+105',
              o2:'-125',
              pick:'Rays',
              res:'W',
              s1:2,
              s2:5,
              sport:'mlb',
              t1:'Rays',
              t2:'Guardians',
              wl1:'18-9',
              wl2:'13-15'
            },
            {
              _id:'mlb_824849',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'+105',
              o2:'-125',
              pick:'Orioles',
              res:'W',
              s1:14,
              s2:10,
              sport:'mlb',
              t1:'Astros',
              t2:'Orioles',
              wl1:'11-17',
              wl2:'12-15'
            },
            {
              _id:'mlb_824526',
              edge:'61%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'5-5',
              o1:'+166',
              o2:'-192',
              pick:'Reds',
              res:'W',
              s1:13,
              s2:6,
              sport:'mlb',
              t1:'Rockies',
              t2:'Reds',
              wl1:'10-17',
              wl2:'15-12'
            },
            {
              _id:'mlb_823390',
              edge:'58%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'+146',
              o2:'-174',
              pick:'Cardinals',
              res:'W',
              s1:5,
              s2:8,
              sport:'mlb',
              t1:'Cardinals',
              t2:'Pirates',
              wl1:'15-11',
              wl2:'14-13'
            },
            {
              _id:'mlb_823473',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'+135',
              o2:'-161',
              pick:'Giants',
              res:'L',
              s1:14,
              s2:10,
              sport:'mlb',
              t1:'Giants',
              t2:'Phillies',
              wl1:'10-17',
              wl2:'12-15'
            },
            {
              _id:'mlb_822823',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+105',
              o2:'-125',
              pick:'Red Sox',
              res:'L',
              s1:13,
              s2:12,
              sport:'mlb',
              t1:'Red Sox',
              t2:'Blue Jays',
              wl1:'11-16',
              wl2:'12-16'
            },
            {
              _id:'mlb_823636',
              edge:'58%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'3-7',
              o1:'+140',
              o2:'-167',
              pick:'Nationals',
              res:'L',
              s1:12,
              s2:15,
              sport:'mlb',
              t1:'Nationals',
              t2:'Mets',
              wl1:'12-15',
              wl2:'9-17'
            },
            {
              _id:'mlb_824931',
              edge:'64%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+105',
              o2:'-125',
              pick:'Braves',
              res:'W',
              s1:4,
              s2:1,
              sport:'mlb',
              t1:'Tigers',
              t2:'Braves',
              wl1:'13-15',
              wl2:'19-9'
            },
            {
              _id:'mlb_823716',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-120',
              o2:'+100',
              pick:'Twins',
              res:'L',
              s1:8,
              s2:11,
              sport:'mlb',
              t1:'Mariners',
              t2:'Twins',
              wl1:'12-16',
              wl2:'12-15'
            },
            {
              _id:'mlb_824610',
              edge:'62%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'-135',
              o2:'+115',
              pick:'White Sox',
              res:'W',
              s1:15,
              s2:6,
              sport:'mlb',
              t1:'Angels',
              t2:'White Sox',
              wl1:'10-18',
              wl2:'12-15'
            },
            {
              _id:'mlb_823798',
              edge:'52%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+100',
              o2:'-120',
              pick:'Brewers',
              res:'W',
              s1:9,
              s2:7,
              sport:'mlb',
              t1:'D-backs',
              t2:'Brewers',
              wl1:'12-13',
              wl2:'13-12'
            },
            {
              _id:'mlb_822908',
              edge:'68%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'4-6',
              o1:'-116',
              o2:'-105',
              pick:'Yankees',
              res:'W',
              s1:1,
              s2:9,
              sport:'mlb',
              t1:'Yankees',
              t2:'Rangers',
              wl1:'18-9',
              wl2:'11-15'
            },
            {
              _id:'mlb_825017',
              edge:'55%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'-120',
              o2:'+100',
              pick:'Athletics',
              res:'L',
              s1:7,
              s2:3,
              sport:'mlb',
              t1:'Royals',
              t2:'Athletics',
              wl1:'12-15',
              wl2:'13-13'
            },
            {
              _id:'mlb_823310',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'5-5',
              o1:'-116',
              o2:'-105',
              pick:'Cubs',
              res:'W',
              s1:2,
              s2:4,
              sport:'mlb',
              t1:'Cubs',
              t2:'Padres',
              wl1:'18-9',
              wl2:'15-11'
            },
            {
              _id:'mlb_823956',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+220',
              o2:'-270',
              pick:'Marlins',
              res:'W',
              s1:11,
              s2:3,
              sport:'mlb',
              t1:'Marlins',
              t2:'Dodgers',
              wl1:'12-15',
              wl2:'16-11'
            },
            {
              _id:1778104120640,
              conf:68,
              i1:1,
              i2:1,
              l1:'4-6',
              l2:'8-2',
              o1:'+350',
              o2:'-450',
              pick:'Celtics',
              res:'L',
              s1:8,
              s2:2,
              sport:'nba',
              t1:'76ers',
              t2:'Celtics',
              wl1:'46-41',
              wl2:'59-27'
            },
            {
              _id:1778104137925,
              conf:57,
              i1:2,
              i2:0,
              l1:'5-5',
              l2:'7-3',
              o1:'+225',
              o2:'-260',
              pick:'Knicks',
              res:'W',
              s1:7,
              s2:3,
              sport:'nba',
              t1:'Hawks',
              t2:'Knicks',
              wl1:'48-38',
              wl2:'57-29'
            },
            {
              _id:1778104154527,
              conf:63,
              i1:0,
              i2:9,
              l1:'5-5',
              l2:'7-3',
              o1:'+425',
              o2:'-575',
              pick:'Spurs',
              res:'W',
              s1:8,
              s2:2,
              sport:'nba',
              t1:'Blazers',
              t2:'Spurs',
              wl1:'45-42',
              wl2:'65-21'
            }
          ]},
          { day:83, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:'mlb_824445',
              edge:'63%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'4-6',
              o1:'+101',
              o2:'-120',
              pick:'Rays',
              res:'L',
              s1:2,
              s2:5,
              sport:'mlb',
              t1:'Rays',
              t2:'Guardians',
              wl1:'18-9',
              wl2:'13-15'
            },
            {
              _id:'mlb_824608',
              edge:'61%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'-120',
              o2:'+101',
              pick:'White Sox',
              res:'W',
              s1:15,
              s2:6,
              sport:'mlb',
              t1:'Angels',
              t2:'White Sox',
              wl1:'10-18',
              wl2:'12-15'
            },
            {
              _id:'mlb_823717',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-125',
              o2:'+106',
              pick:'Twins',
              res:'L',
              s1:8,
              s2:11,
              sport:'mlb',
              t1:'Mariners',
              t2:'Twins',
              wl1:'12-16',
              wl2:'12-15'
            },
            {
              _id:'mlb_822907',
              edge:'69%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'4-6',
              o1:'-110',
              o2:'-106',
              pick:'Yankees',
              res:'L',
              s1:1,
              s2:9,
              sport:'mlb',
              t1:'Yankees',
              t2:'Rangers',
              wl1:'18-9',
              wl2:'11-15'
            },
            {
              _id:'mlb_822821',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+110',
              o2:'-132',
              pick:'Red Sox',
              res:'L',
              s1:13,
              s2:12,
              sport:'mlb',
              t1:'Red Sox',
              t2:'Blue Jays',
              wl1:'11-16',
              wl2:'12-16'
            },
            {
              _id:'mlb_823958',
              edge:'61%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+165',
              o2:'-200',
              pick:'Dodgers',
              res:'L',
              s1:11,
              s2:3,
              sport:'mlb',
              t1:'Marlins',
              t2:'Dodgers',
              wl1:'12-15',
              wl2:'16-11'
            },
            {
              _id:'mlb_823312',
              edge:'55%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'5-5',
              o1:'-111',
              o2:'-111',
              pick:'Cubs',
              res:'W',
              s1:2,
              s2:4,
              sport:'mlb',
              t1:'Cubs',
              t2:'Padres',
              wl1:'18-9',
              wl2:'15-11'
            },
            {
              _id:'mlb_824525',
              edge:'63%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'5-5',
              o1:'+115',
              o2:'-135',
              pick:'Reds',
              res:'L',
              s1:13,
              s2:6,
              sport:'mlb',
              t1:'Rockies',
              t2:'Reds',
              wl1:'10-17',
              wl2:'15-12'
            },
            {
              _id:'mlb_823392',
              edge:'57%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'+115',
              o2:'-135',
              pick:'Cardinals',
              res:'W',
              s1:5,
              s2:8,
              sport:'mlb',
              t1:'Cardinals',
              t2:'Pirates',
              wl1:'15-11',
              wl2:'14-13'
            },
            {
              _id:'mlb_823633',
              edge:'57%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'3-7',
              o1:'+125',
              o2:'-152',
              pick:'Nationals',
              res:'W',
              s1:12,
              s2:15,
              sport:'mlb',
              t1:'Nationals',
              t2:'Mets',
              wl1:'12-15',
              wl2:'9-17'
            },
            {
              _id:'mlb_824930',
              edge:'65%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'-132',
              o2:'+110',
              pick:'Braves',
              res:'W',
              s1:4,
              s2:1,
              sport:'mlb',
              t1:'Tigers',
              t2:'Braves',
              wl1:'13-15',
              wl2:'19-9'
            },
            {
              _id:'mlb_823796',
              edge:'52%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+100',
              o2:'-120',
              pick:'Brewers',
              res:'L',
              s1:9,
              s2:7,
              sport:'mlb',
              t1:'D-backs',
              t2:'Brewers',
              wl1:'12-13',
              wl2:'13-12'
            },
            {
              _id:'mlb_825015',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+105',
              o2:'-125',
              pick:'Athletics',
              res:'W',
              s1:7,
              s2:3,
              sport:'mlb',
              t1:'Royals',
              t2:'Athletics',
              wl1:'12-15',
              wl2:'13-13'
            },
            {
              _id:'mlb_823471',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'+150',
              o2:'-170',
              pick:'Giants',
              res:'L',
              s1:14,
              s2:10,
              sport:'mlb',
              t1:'Giants',
              t2:'Phillies',
              wl1:'10-17',
              wl2:'12-15'
            },
            {
              _id:'mlb_824850',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'+150',
              o2:'-170',
              pick:'Astros',
              res:'W',
              s1:14,
              s2:10,
              sport:'mlb',
              t1:'Astros',
              t2:'Orioles',
              wl1:'11-17',
              wl2:'12-15'
            },
            {
              _id:1778104216491,
              conf:30,
              i1:2,
              i2:1,
              l1:'7-3',
              l2:'6-4',
              o1:'+350',
              o2:'-450',
              pick:'Magic',
              res:'L',
              s1:5,
              s2:1,
              sport:'nba',
              t1:'Magic',
              t2:'Pistons',
              wl1:'49-39',
              wl2:'61-25'
            },
            {
              _id:1778104248411,
              conf:51,
              i1:3,
              i2:1,
              l1:'6-4',
              l2:'7-3',
              o1:'+320',
              o2:'-400',
              pick:'Cavaliers',
              res:'W',
              s1:6,
              s2:4,
              sport:'nba',
              t1:'Raptors',
              t2:'Cavaliers',
              wl1:'48-38',
              wl2:'54-32'
            },
            {
              _id:1778104266460,
              conf:32,
              i1:3,
              i2:2,
              l1:'6-4',
              l2:'6-4',
              o1:'+130',
              o2:'-155',
              pick:'Lakers',
              res:'L',
              s1:5,
              s2:3,
              sport:'nba',
              t1:'Rockets',
              t2:'Lakers',
              wl1:'53-33',
              wl2:'56-30'
            }
          ]},
          { day:84, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:'mlb_824929',
              edge:'64%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'-105',
              o2:'-112',
              pick:'Braves',
              res:'L',
              s1:4,
              s2:1,
              sport:'mlb',
              t1:'Tigers',
              t2:'Braves',
              wl1:'13-15',
              wl2:'19-9'
            },
            {
              _id:'mlb_824848',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'+104',
              o2:'-120',
              pick:'Orioles',
              res:'W',
              s1:14,
              s2:10,
              sport:'mlb',
              t1:'Astros',
              t2:'Orioles',
              wl1:'11-17',
              wl2:'12-15'
            },
            {
              _id:'mlb_823391',
              edge:'59%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'+180',
              o2:'-221',
              pick:'Cardinals',
              res:'W',
              s1:5,
              s2:8,
              sport:'mlb',
              t1:'Cardinals',
              t2:'Pirates',
              wl1:'15-11',
              wl2:'14-13'
            },
            {
              _id:'mlb_823472',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'+120',
              o2:'-142',
              pick:'Phillies',
              res:'W',
              s1:14,
              s2:10,
              sport:'mlb',
              t1:'Giants',
              t2:'Phillies',
              wl1:'10-17',
              wl2:'12-15'
            },
            {
              _id:'mlb_824524',
              edge:'62%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'5-5',
              o1:'+138',
              o2:'-165',
              pick:'Reds',
              res:'W',
              s1:13,
              s2:6,
              sport:'mlb',
              t1:'Rockies',
              t2:'Reds',
              wl1:'10-17',
              wl2:'15-12'
            },
            {
              _id:'mlb_823634',
              edge:'59%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'3-7',
              o1:'+190',
              o2:'-230',
              pick:'Nationals',
              res:'W',
              s1:12,
              s2:15,
              sport:'mlb',
              t1:'Nationals',
              t2:'Mets',
              wl1:'12-15',
              wl2:'9-17'
            },
            {
              _id:'mlb_823795',
              edge:'52%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+104',
              o2:'-122',
              pick:'Brewers',
              res:'W',
              s1:9,
              s2:7,
              sport:'mlb',
              t1:'D-backs',
              t2:'Brewers',
              wl1:'12-13',
              wl2:'13-12'
            },
            {
              _id:'mlb_825016',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+110',
              o2:'-130',
              pick:'Athletics',
              res:'W',
              s1:7,
              s2:3,
              sport:'mlb',
              t1:'Royals',
              t2:'Athletics',
              wl1:'12-15',
              wl2:'13-13'
            },
            {
              _id:'mlb_823714',
              edge:'52%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-136',
              o2:'+116',
              pick:'Twins',
              res:'W',
              s1:12,
              s2:11,
              sport:'mlb',
              t1:'Blue Jays',
              t2:'Twins',
              wl1:'12-16',
              wl2:'12-15'
            },
            {
              _id:1778104336852,
              conf:60,
              i1:0,
              i2:2,
              l1:'7-3',
              l2:'4-6',
              o1:'-150',
              o2:'+125',
              pick:'Knicks',
              res:'W',
              s1:3,
              s2:7,
              sport:'nba',
              t1:'Knicks',
              t2:'Hawks',
              wl1:'58-29',
              wl2:'48-39'
            },
            {
              _id:1778104356484,
              conf:59,
              i1:1,
              i2:1,
              l1:'7-3',
              l2:'5-5',
              o1:'-230',
              o2:'+190',
              pick:'Celtics',
              res:'L',
              s1:2,
              s2:8,
              sport:'nba',
              t1:'Celtics',
              t2:'76ers',
              wl1:'59-28',
              wl2:'47-41'
            },
            {
              _id:1778104372485,
              conf:24,
              i1:2,
              i2:0,
              l1:'7-3',
              l2:'6-4',
              o1:'-300',
              o2:'+240',
              pick:'Wolves',
              res:'W',
              s1:4,
              s2:6,
              sport:'nba',
              t1:'Nuggets',
              t2:'Wolves',
              wl1:'56-31',
              wl2:'52-35'
            }
          ]},
          { day:85, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:'mlb_824686',
              edge:'63%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+111',
              o2:'-132',
              pick:'Cubs',
              res:'W',
              s1:9,
              s2:2,
              sport:'mlb',
              t1:'D-backs',
              t2:'Cubs',
              wl1:'12-13',
              wl2:'18-9'
            },
            {
              _id:'mlb_824287',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-105',
              o2:'-113',
              pick:'Tigers',
              res:'L',
              s1:9,
              s2:4,
              sport:'mlb',
              t1:'Rangers',
              t2:'Tigers',
              wl1:'11-15',
              wl2:'13-15'
            },
            {
              _id:'mlb_823389',
              edge:'53%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'+103',
              o2:'-122',
              pick:'Reds',
              res:'L',
              s1:6,
              s2:8,
              sport:'mlb',
              t1:'Reds',
              t2:'Pirates',
              wl1:'15-12',
              wl2:'14-13'
            },
            {
              _id:'mlb_822744',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'4-6',
              o1:'-152',
              o2:'+125',
              pick:'Nationals',
              res:'L',
              s1:7,
              s2:12,
              sport:'mlb',
              t1:'Brewers',
              t2:'Nationals',
              wl1:'13-12',
              wl2:'12-15'
            },
            {
              _id:'mlb_823557',
              edge:'68%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+145',
              o2:'-172',
              pick:'Yankees',
              res:'W',
              s1:10,
              s2:1,
              sport:'mlb',
              t1:'Orioles',
              t2:'Yankees',
              wl1:'12-15',
              wl2:'18-9'
            },
            {
              _id:'mlb_824772',
              edge:'51%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'-111',
              o2:'-111',
              pick:'Red Sox',
              res:'W',
              s1:14,
              s2:13,
              sport:'mlb',
              t1:'Astros',
              t2:'Red Sox',
              wl1:'11-17',
              wl2:'11-16'
            },
            {
              _id:'mlb_822990',
              edge:'73%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'6-4',
              o1:'+110',
              o2:'-130',
              pick:'Rays',
              res:'W',
              s1:14,
              s2:2,
              sport:'mlb',
              t1:'Giants',
              t2:'Rays',
              wl1:'10-17',
              wl2:'18-9'
            },
            {
              _id:'mlb_823877',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-125',
              o2:'+105',
              pick:'Marlins',
              res:'L',
              s1:10,
              s2:11,
              sport:'mlb',
              t1:'Phillies',
              t2:'Marlins',
              wl1:'12-15',
              wl2:'12-15'
            },
            {
              _id:'mlb_823713',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+100',
              o2:'-120',
              pick:'Blue Jays',
              res:'W',
              s1:12,
              s2:11,
              sport:'mlb',
              t1:'Blue Jays',
              t2:'Twins',
              wl1:'12-16',
              wl2:'12-15'
            },
            {
              _id:'mlb_823066',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'-161',
              o2:'+135',
              pick:'Cardinals',
              res:'W',
              s1:3,
              s2:5,
              sport:'mlb',
              t1:'Dodgers',
              t2:'Cardinals',
              wl1:'16-11',
              wl2:'15-11'
            },
            {
              _id:'mlb_824366',
              edge:'73%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'3-7',
              o1:'-200',
              o2:'+165',
              pick:'Braves',
              res:'W',
              s1:1,
              s2:13,
              sport:'mlb',
              t1:'Braves',
              t2:'Rockies',
              wl1:'19-9',
              wl2:'10-17'
            },
            {
              _id:'mlb_824041',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'3-7',
              o1:'-116',
              o2:'-105',
              pick:'Angels',
              res:'L',
              s1:15,
              s2:15,
              sport:'mlb',
              t1:'Mets',
              t2:'Angels',
              wl1:'9-17',
              wl2:'10-18'
            },
            {
              _id:'mlb_825012',
              edge:'52%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'-105',
              o2:'-116',
              pick:'Athletics',
              res:'L',
              s1:5,
              s2:3,
              sport:'mlb',
              t1:'Guardians',
              t2:'Athletics',
              wl1:'13-15',
              wl2:'13-13'
            },
            {
              _id:'mlb_823309',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+120',
              o2:'-141',
              pick:'White Sox',
              res:'W',
              s1:6,
              s2:4,
              sport:'mlb',
              t1:'White Sox',
              t2:'Padres',
              wl1:'12-15',
              wl2:'15-11'
            },
            {
              _id:'mlb_823146',
              edge:'52%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+120',
              o2:'-141',
              pick:'Royals',
              res:'W',
              s1:7,
              s2:8,
              sport:'mlb',
              t1:'Royals',
              t2:'Mariners',
              wl1:'12-15',
              wl2:'12-16'
            },
            {
              _id:1778104417748,
              conf:23,
              i1:1,
              i2:2,
              l1:'6-4',
              l2:'6-4',
              o1:'-160',
              o2:'+135',
              pick:'Magic',
              res:'L',
              s1:1,
              s2:5,
              sport:'nba',
              t1:'Pistons',
              t2:'Magic',
              wl1:'62-25',
              wl2:'49-40'
            },
            {
              _id:1778104434550,
              conf:48,
              i1:1,
              i2:3,
              l1:'7-3',
              l2:'5-5',
              o1:'-200',
              o2:'+165',
              pick:'Cavaliers',
              res:'L',
              s1:4,
              s2:6,
              sport:'nba',
              t1:'Cavaliers',
              t2:'Raptors',
              wl1:'55-32',
              wl2:'48-39'
            },
            {
              _id:1778104452701,
              conf:29,
              i1:2,
              i2:3,
              l1:'6-4',
              l2:'6-4',
              o1:'+155',
              o2:'-185',
              pick:'Lakers',
              res:'W',
              s1:3,
              s2:5,
              sport:'nba',
              t1:'Lakers',
              t2:'Rockets',
              wl1:'56-31',
              wl2:'54-33'
            }
          ]},
          { day:86, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:'mlb_823554',
              edge:'68%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+127',
              o2:'-152',
              pick:'Yankees',
              res:'W',
              s1:10,
              s2:1,
              sport:'mlb',
              t1:'Orioles',
              t2:'Yankees',
              wl1:'12-15',
              wl2:'18-9'
            },
            {
              _id:'mlb_823715',
              edge:'52%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-130',
              o2:'+110',
              pick:'Twins',
              res:'L',
              s1:12,
              s2:11,
              sport:'mlb',
              t1:'Blue Jays',
              t2:'Twins',
              wl1:'12-16',
              wl2:'12-15'
            },
            {
              _id:'mlb_824685',
              edge:'62%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+136',
              o2:'-162',
              pick:'Cubs',
              res:'W',
              s1:9,
              s2:2,
              sport:'mlb',
              t1:'D-backs',
              t2:'Cubs',
              wl1:'12-13',
              wl2:'18-9'
            },
            {
              _id:'mlb_825014',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+115',
              o2:'-135',
              pick:'Guardians',
              res:'W',
              s1:5,
              s2:3,
              sport:'mlb',
              t1:'Guardians',
              t2:'Athletics',
              wl1:'13-15',
              wl2:'13-13'
            },
            {
              _id:'mlb_823388',
              edge:'53%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'+110',
              o2:'-132',
              pick:'Reds',
              res:'L',
              s1:6,
              s2:8,
              sport:'mlb',
              t1:'Reds',
              t2:'Pirates',
              wl1:'15-12',
              wl2:'14-13'
            },
            {
              _id:'mlb_822746',
              edge:'57%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'4-6',
              o1:'-116',
              o2:'-105',
              pick:'Brewers',
              res:'W',
              s1:7,
              s2:12,
              sport:'mlb',
              t1:'Brewers',
              t2:'Nationals',
              wl1:'13-12',
              wl2:'12-15'
            },
            {
              _id:'mlb_824771',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'+105',
              o2:'-125',
              pick:'Astros',
              res:'W',
              s1:14,
              s2:13,
              sport:'mlb',
              t1:'Astros',
              t2:'Red Sox',
              wl1:'11-17',
              wl2:'11-16'
            },
            {
              _id:'mlb_823876',
              edge:'51%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+100',
              o2:'-120',
              pick:'Phillies',
              res:'W',
              s1:10,
              s2:11,
              sport:'mlb',
              t1:'Phillies',
              t2:'Marlins',
              wl1:'12-15',
              wl2:'12-15'
            },
            {
              _id:'mlb_822988',
              edge:'74%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'6-4',
              o1:'-116',
              o2:'-105',
              pick:'Rays',
              res:'W',
              s1:14,
              s2:2,
              sport:'mlb',
              t1:'Giants',
              t2:'Rays',
              wl1:'10-17',
              wl2:'18-9'
            },
            {
              _id:'mlb_823067',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'-135',
              o2:'+115',
              pick:'Cardinals',
              res:'W',
              s1:3,
              s2:5,
              sport:'mlb',
              t1:'Dodgers',
              t2:'Cardinals',
              wl1:'16-11',
              wl2:'15-11'
            },
            {
              _id:'mlb_824284',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+100',
              o2:'-120',
              pick:'Tigers',
              res:'W',
              s1:9,
              s2:4,
              sport:'mlb',
              t1:'Rangers',
              t2:'Tigers',
              wl1:'11-15',
              wl2:'13-15'
            },
            {
              _id:'mlb_824365',
              edge:'72%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'3-7',
              o1:'-213',
              o2:'+175',
              pick:'Braves',
              res:'W',
              s1:1,
              s2:13,
              sport:'mlb',
              t1:'Braves',
              t2:'Rockies',
              wl1:'19-9',
              wl2:'10-17'
            },
            {
              _id:'mlb_823308',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+155',
              o2:'-185',
              pick:'White Sox',
              res:'W',
              s1:6,
              s2:4,
              sport:'mlb',
              t1:'White Sox',
              t2:'Padres',
              wl1:'12-15',
              wl2:'15-11'
            },
            {
              _id:'mlb_824042',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'3-7',
              o1:'-120',
              o2:'+100',
              pick:'Angels',
              res:'W',
              s1:15,
              s2:15,
              sport:'mlb',
              t1:'Mets',
              t2:'Angels',
              wl1:'9-17',
              wl2:'10-18'
            },
            {
              _id:'mlb_823144',
              edge:'52%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+125',
              o2:'-152',
              pick:'Royals',
              res:'W',
              s1:7,
              s2:8,
              sport:'mlb',
              t1:'Royals',
              t2:'Mariners',
              wl1:'12-15',
              wl2:'12-16'
            },
            {
              _id:1778104524654,
              conf:49,
              i1:1,
              i2:1,
              l1:'6-4',
              l2:'6-4',
              o1:'+135',
              o2:'-160',
              pick:'Celtics',
              res:'L',
              s1:8,
              s2:2,
              sport:'nba',
              t1:'76ers',
              t2:'Celtics',
              wl1:'48-41',
              wl2:'59-29'
            }
          ]},
          { day:87, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:'mlb_823711',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+100',
              o2:'-118',
              pick:'Blue Jays',
              res:'L',
              s1:12,
              s2:11,
              sport:'mlb',
              t1:'Blue Jays',
              t2:'Twins',
              wl1:'12-16',
              wl2:'12-15'
            },
            {
              _id:'mlb_824769',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'4-6',
              o1:'+110',
              o2:'-132',
              pick:'Astros',
              res:'W',
              s1:14,
              s2:13,
              sport:'mlb',
              t1:'Astros',
              t2:'Red Sox',
              wl1:'11-17',
              wl2:'11-16'
            },
            {
              _id:'mlb_823387',
              edge:'53%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'+103',
              o2:'-122',
              pick:'Reds',
              res:'L',
              s1:6,
              s2:8,
              sport:'mlb',
              t1:'Reds',
              t2:'Pirates',
              wl1:'15-12',
              wl2:'14-13'
            },
            {
              _id:'mlb_823555',
              edge:'67%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+165',
              o2:'-200',
              pick:'Yankees',
              res:'W',
              s1:10,
              s2:1,
              sport:'mlb',
              t1:'Orioles',
              t2:'Yankees',
              wl1:'12-15',
              wl2:'18-9'
            },
            {
              _id:'mlb_822742',
              edge:'57%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'4-6',
              o1:'-125',
              o2:'+108',
              pick:'Brewers',
              res:'L',
              s1:7,
              s2:12,
              sport:'mlb',
              t1:'Brewers',
              t2:'Nationals',
              wl1:'13-12',
              wl2:'12-15'
            },
            {
              _id:'mlb_822987',
              edge:'73%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'6-4',
              o1:'+100',
              o2:'-119',
              pick:'Rays',
              res:'W',
              s1:14,
              s2:2,
              sport:'mlb',
              t1:'Giants',
              t2:'Rays',
              wl1:'10-17',
              wl2:'18-9'
            },
            {
              _id:'mlb_823875',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-135',
              o2:'+115',
              pick:'Marlins',
              res:'L',
              s1:10,
              s2:11,
              sport:'mlb',
              t1:'Phillies',
              t2:'Marlins',
              wl1:'12-15',
              wl2:'12-15'
            },
            {
              _id:'mlb_823065',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'-135',
              o2:'+115',
              pick:'Cardinals',
              res:'L',
              s1:3,
              s2:5,
              sport:'mlb',
              t1:'Dodgers',
              t2:'Cardinals',
              wl1:'16-11',
              wl2:'15-11'
            },
            {
              _id:'mlb_824687',
              edge:'62%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+128',
              o2:'-156',
              pick:'Cubs',
              res:'W',
              s1:9,
              s2:2,
              sport:'mlb',
              t1:'D-backs',
              t2:'Cubs',
              wl1:'12-13',
              wl2:'18-9'
            },
            {
              _id:'mlb_824364',
              edge:'73%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'3-7',
              o1:'-176',
              o2:'+146',
              pick:'Braves',
              res:'W',
              s1:1,
              s2:13,
              sport:'mlb',
              t1:'Braves',
              t2:'Rockies',
              wl1:'19-9',
              wl2:'10-17'
            },
            {
              _id:'mlb_825013',
              edge:'53%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'-120',
              o2:'+102',
              pick:'Athletics',
              res:'W',
              s1:5,
              s2:3,
              sport:'mlb',
              t1:'Guardians',
              t2:'Athletics',
              wl1:'13-15',
              wl2:'13-13'
            },
            {
              _id:'mlb_824043',
              edge:'51%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'3-7',
              o1:'-125',
              o2:'+105',
              pick:'Angels',
              res:'L',
              s1:15,
              s2:15,
              sport:'mlb',
              t1:'Mets',
              t2:'Angels',
              wl1:'9-17',
              wl2:'10-18'
            },
            {
              _id:'mlb_823145',
              edge:'51%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+100',
              o2:'-120',
              pick:'Royals',
              res:'W',
              s1:7,
              s2:8,
              sport:'mlb',
              t1:'Royals',
              t2:'Mariners',
              wl1:'12-15',
              wl2:'12-16'
            },
            {
              _id:'mlb_823307',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'5-5',
              o1:'+135',
              o2:'-161',
              pick:'White Sox',
              res:'L',
              s1:6,
              s2:4,
              sport:'mlb',
              t1:'White Sox',
              t2:'Padres',
              wl1:'12-15',
              wl2:'15-11'
            },
            {
              _id:'mlb_824285',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+105',
              o2:'-125',
              pick:'Tigers',
              res:'W',
              s1:9,
              s2:4,
              sport:'mlb',
              t1:'Rangers',
              t2:'Tigers',
              wl1:'11-15',
              wl2:'13-15'
            },
            {
              _id:1778104563074,
              conf:59,
              i1:2,
              i2:1,
              l1:'5-5',
              l2:'6-4',
              o1:'+260',
              o2:'-320',
              pick:'Pistons',
              res:'W',
              s1:6,
              s2:1,
              sport:'nba',
              t1:'Magic',
              t2:'Pistons',
              wl1:'49-41',
              wl2:'63-25'
            },
            {
              _id:1778104579692,
              conf:44,
              i1:3,
              i2:1,
              l1:'6-4',
              l2:'6-4',
              o1:'+265',
              o2:'-330',
              pick:'Cavaliers',
              res:'W',
              s1:5,
              s2:4,
              sport:'nba',
              t1:'Raptors',
              t2:'Cavaliers',
              wl1:'49-39',
              wl2:'55-33'
            }
          ]},
          { day:88, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:'mlb_824363',
              edge:'54%',
              i1:0,
              i2:0,
              l1:'3-7',
              l2:'3-7',
              o1:'-156',
              o2:'+132',
              pick:'Rockies',
              res:'L',
              s1:15,
              s2:13,
              sport:'mlb',
              t1:'Mets',
              t2:'Rockies',
              wl1:'9-17',
              wl2:'10-17'
            },
            {
              _id:'mlb_824283',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+190',
              o2:'-233',
              pick:'Red Sox',
              res:'W',
              s1:13,
              s2:4,
              sport:'mlb',
              t1:'Red Sox',
              t2:'Tigers',
              wl1:'11-16',
              wl2:'13-15'
            },
            {
              _id:'mlb_822984',
              edge:'69%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+100',
              o2:'-120',
              pick:'Rays',
              res:'W',
              s1:12,
              s2:2,
              sport:'mlb',
              t1:'Blue Jays',
              t2:'Rays',
              wl1:'12-16',
              wl2:'18-9'
            },
            {
              _id:'mlb_823874',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-116',
              o2:'-102',
              pick:'Marlins',
              res:'L',
              s1:10,
              s2:11,
              sport:'mlb',
              t1:'Phillies',
              t2:'Marlins',
              wl1:'12-15',
              wl2:'12-15'
            },
            {
              _id:'mlb_823552',
              edge:'67%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+160',
              o2:'-192',
              pick:'Yankees',
              res:'W',
              s1:10,
              s2:1,
              sport:'mlb',
              t1:'Orioles',
              t2:'Yankees',
              wl1:'12-15',
              wl2:'18-9'
            },
            {
              _id:'mlb_824684',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'6-4',
              o1:'+165',
              o2:'-200',
              pick:'Reds',
              res:'L',
              s1:6,
              s2:2,
              sport:'mlb',
              t1:'Reds',
              t2:'Cubs',
              wl1:'15-12',
              wl2:'18-9'
            },
            {
              _id:'mlb_824120',
              edge:'52%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+100',
              o2:'-120',
              pick:'Guardians',
              res:'L',
              s1:5,
              s2:7,
              sport:'mlb',
              t1:'Guardians',
              t2:'Royals',
              wl1:'13-15',
              wl2:'12-15'
            },
            {
              _id:'mlb_823064',
              edge:'55%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'5-5',
              o1:'-111',
              o2:'-111',
              pick:'Cardinals',
              res:'W',
              s1:7,
              s2:5,
              sport:'mlb',
              t1:'Brewers',
              t2:'Cardinals',
              wl1:'13-12',
              wl2:'15-11'
            },
            {
              _id:'mlb_824201',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'3-7',
              o1:'-200',
              o2:'+165',
              pick:'Astros',
              res:'L',
              s1:3,
              s2:14,
              sport:'mlb',
              t1:'Dodgers',
              t2:'Astros',
              wl1:'16-11',
              wl2:'11-17'
            },
            {
              _id:'mlb_824039',
              edge:'63%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'3-7',
              o1:'+137',
              o2:'-166',
              pick:'White Sox',
              res:'W',
              s1:6,
              s2:15,
              sport:'mlb',
              t1:'White Sox',
              t2:'Angels',
              wl1:'12-15',
              wl2:'10-18'
            },
            {
              _id:'mlb_823143',
              edge:'70%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'4-6',
              o1:'+135',
              o2:'-156',
              pick:'Braves',
              res:'L',
              s1:1,
              s2:8,
              sport:'mlb',
              t1:'Braves',
              t2:'Mariners',
              wl1:'19-9',
              wl2:'12-16'
            },
            {
              _id:'mlb_823228',
              edge:'67%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'3-7',
              o1:'-135',
              o2:'+115',
              pick:'Padres',
              res:'L',
              s1:4,
              s2:14,
              sport:'mlb',
              t1:'Padres',
              t2:'Giants',
              wl1:'15-11',
              wl2:'10-17'
            },
            {
              _id:1778104607807,
              conf:63,
              i1:1,
              i2:0,
              l1:'7-3',
              l2:'7-3',
              o1:'+230',
              o2:'-280',
              pick:'Knicks',
              res:'W',
              s1:6,
              s2:2,
              sport:'nba',
              t1:'76ers',
              t2:'Knicks',
              wl1:'49-41',
              wl2:'59-29'
            },
            {
              _id:1778104624242,
              conf:55,
              i1:0,
              i2:9,
              l1:'7-3',
              l2:'7-3',
              o1:'+325',
              o2:'-425',
              pick:'Spurs',
              res:'L',
              s1:6,
              s2:2,
              sport:'nba',
              t1:'Wolves',
              t2:'Spurs',
              wl1:'53-35',
              wl2:'66-21'
            }
          ]},
          { day:89, date:'', type:'REAL', overall:'', unlocked:true, games:[
            {
              _id:'mlb_824281',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+152',
              o2:'-180',
              pick:'Red Sox',
              res:'W',
              s1:13,
              s2:4,
              sport:'mlb',
              t1:'Red Sox',
              t2:'Tigers',
              wl1:'11-16',
              wl2:'13-15'
            },
            {
              _id:'mlb_822986',
              edge:'69%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+105',
              o2:'-125',
              pick:'Rays',
              res:'W',
              s1:12,
              s2:2,
              sport:'mlb',
              t1:'Blue Jays',
              t2:'Rays',
              wl1:'12-16',
              wl2:'18-9'
            },
            {
              _id:'mlb_823469',
              edge:'60%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'4-6',
              o1:'+150',
              o2:'-182',
              pick:'Athletics',
              res:'L',
              s1:3,
              s2:10,
              sport:'mlb',
              t1:'Athletics',
              t2:'Phillies',
              wl1:'13-13',
              wl2:'12-15'
            },
            {
              _id:'mlb_823873',
              edge:'51%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'+100',
              o2:'-120',
              pick:'Orioles',
              res:'W',
              s1:10,
              s2:11,
              sport:'mlb',
              t1:'Orioles',
              t2:'Marlins',
              wl1:'12-15',
              wl2:'12-15'
            },
            {
              _id:'mlb_822743',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-105',
              o2:'-116',
              pick:'Twins',
              res:'W',
              s1:11,
              s2:12,
              sport:'mlb',
              t1:'Twins',
              t2:'Nationals',
              wl1:'12-15',
              wl2:'12-15'
            },
            {
              _id:'mlb_823553',
              edge:'68%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'6-4',
              o1:'+105',
              o2:'-125',
              pick:'Yankees',
              res:'W',
              s1:9,
              s2:1,
              sport:'mlb',
              t1:'Rangers',
              t2:'Yankees',
              wl1:'11-15',
              wl2:'18-9'
            },
            {
              _id:'mlb_824682',
              edge:'57%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'6-4',
              o1:'+132',
              o2:'-156',
              pick:'Cubs',
              res:'W',
              s1:6,
              s2:2,
              sport:'mlb',
              t1:'Reds',
              t2:'Cubs',
              wl1:'15-12',
              wl2:'18-9'
            },
            {
              _id:'mlb_824119',
              edge:'51%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'4-6',
              o1:'-116',
              o2:'-105',
              pick:'Guardians',
              res:'L',
              s1:5,
              s2:7,
              sport:'mlb',
              t1:'Guardians',
              t2:'Royals',
              wl1:'13-15',
              wl2:'12-15'
            },
            {
              _id:'mlb_824200',
              edge:'50%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'3-7',
              o1:'-209',
              o2:'+173',
              pick:'Astros',
              res:'W',
              s1:3,
              s2:14,
              sport:'mlb',
              t1:'Dodgers',
              t2:'Astros',
              wl1:'16-11',
              wl2:'11-17'
            },
            {
              _id:'mlb_824040',
              edge:'61%',
              i1:0,
              i2:0,
              l1:'4-6',
              l2:'3-7',
              o1:'+105',
              o2:'-125',
              pick:'White Sox',
              res:'L',
              s1:6,
              s2:15,
              sport:'mlb',
              t1:'White Sox',
              t2:'Angels',
              wl1:'12-15',
              wl2:'10-18'
            },
            {
              _id:'mlb_825092',
              edge:'53%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'4-6',
              o1:'+105',
              o2:'-125',
              pick:'Pirates',
              res:'L',
              s1:8,
              s2:9,
              sport:'mlb',
              t1:'Pirates',
              t2:'D-backs',
              wl1:'14-13',
              wl2:'12-13'
            },
            {
              _id:'mlb_823142',
              edge:'70%',
              i1:0,
              i2:0,
              l1:'6-4',
              l2:'4-6',
              o1:'+120',
              o2:'-141',
              pick:'Braves',
              res:'W',
              s1:1,
              s2:8,
              sport:'mlb',
              t1:'Braves',
              t2:'Mariners',
              wl1:'19-9',
              wl2:'12-16'
            },
            {
              _id:'mlb_823227',
              edge:'70%',
              i1:0,
              i2:0,
              l1:'5-5',
              l2:'3-7',
              o1:'+120',
              o2:'-141',
              pick:'Padres',
              res:'W',
              s1:4,
              s2:14,
              sport:'mlb',
              t1:'Padres',
              t2:'Giants',
              wl1:'15-11',
              wl2:'10-17'
            },
            {
              _id:1778104660811,
              conf:41,
              i1:1,
              i2:1,
              l1:'6-4',
              l2:'7-3',
              o1:'+135',
              o2:'-160',
              pick:'Pistons',
              res:'W',
              s1:4,
              s2:1,
              sport:'nba',
              t1:'Cavaliers',
              t2:'Pistons',
              wl1:'56-33',
              wl2:'64-25'
            },
            {
              _id:1778104683918,
              conf:55,
              i1:2,
              i2:2,
              l1:'7-3',
              l2:'8-2',
              o1:'+600',
              o2:'-900',
              pick:'Thunder',
              res:'W',
              s1:3,
              s2:1,
              sport:'nba',
              t1:'Lakers',
              t2:'Thunder',
              wl1:'57-31',
              wl2:'68-18'
            }
          ]},
          { day:90, date:'', type:'', overall:'', unlocked:true, games:[
            {
              _id:1778104797356,
              conf:66,
              i1:1,
              i2:0,
              l1:'6-4',
              l2:'7-3',
              o1:'+350',
              o2:'-450',
              pick:'Knicks',
              res:'pending',
              s1:6,
              s2:2,
              sport:'nba',
              t1:'76ers',
              t2:'Knicks',
              wl1:'49-42',
              wl2:'60-29'
            },
            {
              _id:1778104817340,
              conf:55,
              i1:0,
              i2:9,
              l1:'7-3',
              l2:'7-3',
              o1:'+325',
              o2:'-425',
              pick:'Spurs',
              res:'pending',
              s1:6,
              s2:2,
              sport:'nba',
              t1:'Wolves',
              t2:'Spurs',
              wl1:'54-35',
              wl2:'66-22'
            },
            {
              _id:1778104857740,
              edge:'56.00%',
              i1:7,
              i2:3,
              l1:'5-5',
              l2:'7-3',
              o1:'-115',
              o2:'-105',
              pick:'Cardinals',
              res:'pending',
              s1:7,
              s2:5,
              sport:'mlb',
              t1:'Brewers',
              t2:'Cardinals',
              wl1:'19-16',
              wl2:'21-15'
            },
            {
              _id:1778104875490,
              edge:'57.00%',
              i1:12,
              i2:14,
              l1:'5-5',
              l2:'5-5',
              o1:'-220',
              o2:'+180',
              pick:'Dodgers',
              res:'pending',
              s1:3,
              s2:14,
              sport:'mlb',
              t1:'Dodgers',
              t2:'Astros',
              wl1:'23-14',
              wl2:'15-23'
            },
            {
              _id:1778104916627,
              edge:'60.00%',
              i1:11,
              i2:6,
              l1:'3-7',
              l2:'4-6',
              o1:'+100',
              o2:'-120',
              pick:'Padres',
              res:'pending',
              s1:14,
              s2:4,
              sport:'mlb',
              t1:'Giants',
              t2:'Padres',
              wl1:'14-22',
              wl2:'21-14'
            },
            {
              _id:1778104940613,
              edge:'55.00%',
              i1:11,
              i2:7,
              l1:'6-4',
              l2:'2-8',
              o1:'-115',
              o2:'-105',
              pick:'White Sox',
              res:'pending',
              s1:6,
              s2:15,
              sport:'mlb',
              t1:'White Sox',
              t2:'Angels',
              wl1:'17-19',
              wl2:'14-23'
            },
            {
              _id:1778104963780,
              edge:'57.00%',
              i1:9,
              i2:10,
              l1:'7-3',
              l2:'5-5',
              o1:'+115',
              o2:'-135',
              pick:'Braves',
              res:'pending',
              s1:1,
              s2:8,
              sport:'mlb',
              t1:'Braves',
              t2:'Mariners',
              wl1:'26-11',
              wl2:'17-20'
            },
            {
              _id:1778104996781,
              edge:'61.00%',
              i1:11,
              i2:9,
              l1:'5-5',
              l2:'9-1',
              o1:'+110',
              o2:'-130',
              pick:'Rays',
              res:'pending',
              s1:12,
              s2:2,
              sport:'mlb',
              t1:'Blue Jays',
              t2:'Rays',
              wl1:'16-21',
              wl2:'24-12'
            },
            {
              _id:1778105022509,
              edge:'53.00%',
              i1:9,
              i2:14,
              l1:'6-4',
              l2:'4-6',
              o1:'-110',
              o2:'-110',
              pick:'Red Sox',
              res:'pending',
              s1:13,
              s2:4,
              sport:'mlb',
              t1:'Red Sox',
              t2:'Tigers',
              wl1:'15-21',
              wl2:'18-19'
            },
            {
              _id:1778105037788,
              edge:'51.00%',
              i1:11,
              i2:4,
              l1:'3-7',
              l2:'2-8',
              o1:'+115',
              o2:'-135',
              pick:'Marlins',
              res:'pending',
              s1:10,
              s2:11,
              sport:'mlb',
              t1:'Orioles',
              t2:'Marlins',
              wl1:'16-20',
              wl2:'16-20'
            },
            {
              _id:1778105062162,
              edge:'53.00%',
              i1:3,
              i2:3,
              l1:'5-5',
              l2:'9-1',
              o1:'+145',
              o2:'-170',
              pick:'Phillies',
              res:'pending',
              s1:3,
              s2:10,
              sport:'mlb',
              t1:'Athletics',
              t2:'Phillies',
              wl1:'18-17',
              wl2:'16-20'
            },
            {
              _id:1778105077197,
              edge:'55.00%',
              i1:6,
              i2:7,
              l1:'4-6',
              l2:'5-5',
              o1:'-120',
              o2:'+100',
              pick:'Twins',
              res:'pending',
              s1:11,
              s2:12,
              sport:'mlb',
              t1:'Twins',
              t2:'Nationals',
              wl1:'16-20',
              wl2:'16-20'
            },
            {
              _id:1778105098003,
              edge:'62.00%',
              i1:9,
              i2:5,
              l1:'3-7',
              l2:'8-2',
              o1:'+150',
              o2:'-180',
              pick:'Yankees',
              res:'pending',
              s1:9,
              s2:1,
              sport:'mlb',
              t1:'Rangers',
              t2:'Yankees',
              wl1:'16-19',
              wl2:'25-11'
            },
            {
              _id:1778105113021,
              edge:'54.00%',
              i1:3,
              i2:5,
              l1:'3-7',
              l2:'8-2',
              o1:'+120',
              o2:'-140',
              pick:'Royals',
              res:'pending',
              s1:5,
              s2:7,
              sport:'mlb',
              t1:'Guardians',
              t2:'Royals',
              wl1:'18-19',
              wl2:'17-19'
            },
            {
              _id:1778105128756,
              edge:'60.00%',
              i1:6,
              i2:10,
              l1:'3-7',
              l2:'7-3',
              o1:'+145',
              o2:'-170',
              pick:'Cubs',
              res:'pending',
              s1:6,
              s2:2,
              sport:'mlb',
              t1:'Reds',
              t2:'Cubs',
              wl1:'20-16',
              wl2:'24-12'
            },
            {
              _id:1778105146408,
              edge:'51.00%',
              i1:12,
              i2:6,
              l1:'4-6',
              l2:'4-6',
              o1:'-150',
              o2:'+125',
              pick:'Mets',
              res:'pending',
              s1:15,
              s2:13,
              sport:'mlb',
              t1:'Mets',
              t2:'Rockies',
              wl1:'13-22',
              wl2:'14-22'
            },
            {
              _id:1778105168777,
              edge:'53.00%',
              i1:1,
              i2:10,
              l1:'4-6',
              l2:'1-9',
              o1:'-125',
              o2:'+105',
              pick:'Pirates',
              res:'pending',
              s1:8,
              s2:9,
              sport:'mlb',
              t1:'Pirates',
              t2:'Diamondbacks',
              wl1:'19-17',
              wl2:'17-17'
            }
          ]},
          { day:91, date:'', type:'', overall:'', unlocked:false, games:[]},
          { day:92, date:'', type:'', overall:'', unlocked:false, games:[]},
          { day:93, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:94, date:'', type:'', overall:'', unlocked:false, games:[]},
          { day:95, date:'', type:'', overall:'', unlocked:false, games:[]},
          { day:96, date:'', type:'', overall:'', unlocked:false, games:[]},
          { day:97, date:'', type:'', overall:'', unlocked:false, games:[]},
          { day:98, date:'', type:'', overall:'', unlocked:false, games:[]},
          { day:99, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:100, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:101, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:102, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:103, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:104, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:105, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:106, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:107, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:108, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:109, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:110, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:111, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:112, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:113, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:114, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:115, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:116, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:117, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:118, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:119, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:120, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:121, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:122, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:123, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:124, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:125, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:126, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:127, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:128, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:129, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:130, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:131, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:132, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:133, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:134, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:135, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
          { day:136, date:'', type:'', overall:'', unlocked:false, games:[
          ]},
        ]; // closes placeholder array

        // Calculate current day number (Feb 1, 2026 = Day 1)
        const seasonStart = new Date('2026-02-01');
        const today = new Date();
        const diffTime = today - seasonStart;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const currentDayNumber = Math.max(1, diffDays + 1);

        // One shared day counter for all sports (by calendar date)
        let activeBetDay = currentDayNumber;

        // ===== FIREBASE PERSISTENCE =====
        let db, dbRef;

        function initFirebase() { /* no-op, using REST */ }

        const FB_URL = 'https://vegas-bet-default-rtdb.firebaseio.com/vegasbeta';
        const BACKEND_URL = 'https://v3gas-b3ta-backend.onrender.com';

        // Load MLB standings from Render backend (after BACKEND_URL is defined)
        fetch(BACKEND_URL + '/api/mlb/standings')
            .then(r => r.json())
            .then(data => {
                if (data && data.al && data.nl) {
                    mlbStandings = data;
                    // Assign rank by wins within each league
                    ['al','nl'].forEach(lg => {
                        mlbStandings[lg].sort((a,b) => b.wins - a.wins || a.losses - b.losses);
                        mlbStandings[lg].forEach((t,i) => t.rank = i + 1);
                    });
                    console.log('✅ MLB standings loaded:', data.al.length, 'AL teams,', data.nl.length, 'NL teams');
                    reapplyMLBStandingsFromBetLog();
                    renderStandings(currentMLBLeague || 'al');
                    calculateBaseballEdge();
                }
            })
            .catch(e => console.warn('MLB standings fetch failed', e));

        // ===== AUTO INJURY FETCH =====
        let pendingLogbookEntries = null;
        let savedLogbookEntries = null;
        let cachedInjuries = {};

        const MLB_TEAM_IDS = {
            'Diamondbacks': '29', 'Braves': '15', 'Orioles': '1', 'Red Sox': '2',
            'Cubs': '16', 'White Sox': '4', 'Reds': '17', 'Guardians': '5',
            'Rockies': '27', 'Tigers': '6', 'Astros': '18', 'Royals': '7',
            'Angels': '3', 'Dodgers': '19', 'Marlins': '28', 'Brewers': '8',
            'Twins': '9', 'Mets': '21', 'Yankees': '10', 'Athletics': '11',
            'Phillies': '22', 'Pirates': '23', 'Padres': '25', 'Giants': '26',
            'Mariners': '12', 'Cardinals': '24', 'Rays': '30', 'Rangers': '13',
            'Blue Jays': '14', 'Nationals': '20'
        };

        const cachedMLBStats = {};
        const cachedMLBBatting = {};

        const MLB_FULL_NAMES = {
            'Diamondbacks': 'Arizona Diamondbacks', 'Braves': 'Atlanta Braves',
            'Orioles': 'Baltimore Orioles', 'Red Sox': 'Boston Red Sox',
            'Cubs': 'Chicago Cubs', 'White Sox': 'Chicago White Sox',
            'Reds': 'Cincinnati Reds', 'Guardians': 'Cleveland Guardians',
            'Rockies': 'Colorado Rockies', 'Tigers': 'Detroit Tigers',
            'Astros': 'Houston Astros', 'Royals': 'Kansas City Royals',
            'Angels': 'Los Angeles Angels', 'Dodgers': 'Los Angeles Dodgers',
            'Marlins': 'Miami Marlins', 'Brewers': 'Milwaukee Brewers',
            'Twins': 'Minnesota Twins', 'Mets': 'New York Mets',
            'Yankees': 'New York Yankees', 'Athletics': 'Athletics',
            'Phillies': 'Philadelphia Phillies', 'Pirates': 'Pittsburgh Pirates',
            'Padres': 'San Diego Padres', 'Giants': 'San Francisco Giants',
            'Mariners': 'Seattle Mariners', 'Cardinals': 'St_ Louis Cardinals',
            'Rays': 'Tampa Bay Rays', 'Rangers': 'Texas Rangers',
            'Blue Jays': 'Toronto Blue Jays', 'Nationals': 'Washington Nationals'
        };

        async function fetchMLBPitchingStats(teamName, side) {
            console.log('🔄 Fetching MLB pitching for:', teamName, '(side:', side + ')');
            try {
                const fullName = MLB_FULL_NAMES[teamName] || teamName;
                const cleanName = fullName.replace(/[.$#\[\]/]/g, '_').trim();
                console.log('🔄 Requesting:', BACKEND_URL + '/api/mlb/pitching/' + encodeURIComponent(cleanName));
                const r = await fetch(BACKEND_URL + '/api/mlb/pitching/' + encodeURIComponent(cleanName));
                const d = await r.json();
                console.log('📥 Received pitching data for', teamName, ':', d);
                if (!d) { console.warn('No Firebase starter data for', teamName); return; }
                const result = {
                    starterERA: d.starterERA || 4.00,
                    starterIP: d.ip || 5.5,
                    bullpenERA: d.bullpenERA || 4.00,
                    starterName: d.starter || ''
                };
                // Cache by team name
                cachedMLBStats[teamName] = result;
                // Store directly on selected team object
                if (side === 'away' && selectedBBAwayTeam) selectedBBAwayTeam._pitching = result;
                if (side === 'home' && selectedBBHomeTeam) selectedBBHomeTeam._pitching = result;
                console.log('✅ MLB pitching from Firebase:', teamName, result);
                applyMLBPitchingStats(result, side);
            } catch(e) {
                console.warn('MLB pitching Firebase fetch failed for', teamName, e);
            }
        }

        async function fetchMLBPitchingStats_OLD(teamName, side) {
            const today = new Date().toISOString().split('T')[0];
            const cacheKey = teamName + '_pitch_' + today;
            if (cachedMLBStats[cacheKey]) {
                applyMLBPitchingStats(cachedMLBStats[cacheKey], side);
                return;
            }
            try {
                const teamID = MLB_TEAM_IDS[teamName];
                if (!teamID) { console.warn('No ESPN MLB ID for:', teamName); return; }

                // Step 1: Get today's scoreboard to find probable starter
                const dateStr = today.replace(/-/g, '');
                const sbRes = await fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard?dates=' + dateStr);
                const sbData = await sbRes.json();
                const events = sbData?.events || [];

                // Find this team's game
                let probablePitcherID = null;
                let probablePitcherName = null;
                for (const event of events) {
                    const comps = event?.competitions?.[0];
                    const competitors = comps?.competitors || [];
                    const thisTeam = competitors.find(c => c?.team?.id === teamID);
                    if (thisTeam) {
                        // probable pitcher is in the event details
                        const prob = thisTeam?.probables?.[0];
                        if (prob) {
                            probablePitcherID = prob?.athlete?.id;
                            probablePitcherName = prob?.athlete?.displayName;
                        }
                        break;
                    }
                }

                let starterERA = 4.00, starterIP = 5.5, bullpenERA = 4.00, injuryCount = 0;

                // Step 2: If we found a probable pitcher, get their season stats
                if (probablePitcherID) {
                    const pitcherRes = await fetch('https://site.web.api.espn.com/apis/site/v2/sports/baseball/mlb/athletes/' + probablePitcherID + '/stats?season=2026');
                    const pitcherData = await pitcherRes.json();
                    const splits = pitcherData?.splits?.categories || [];
                    const pitching = splits.find(c => c.name === 'pitching');
                    if (pitching) {
                        const stats = pitching.stats || [];
                        const eraVal = stats.find(s => s.name === 'ERA')?.value;
                        const ipVal  = stats.find(s => s.name === 'inningsPitched')?.value;
                        const gsVal  = stats.find(s => s.name === 'gamesStarted')?.value || 1;
                        if (eraVal) starterERA = Math.round(parseFloat(eraVal) * 100) / 100;
                        if (ipVal && gsVal) starterIP = Math.round((parseFloat(ipVal) / parseFloat(gsVal)) * 10) / 10;
                    }
                    console.log('✅ Probable starter for', teamName + ':', probablePitcherName, 'ERA:', starterERA, 'avg IP:', starterIP);
                }

                // Step 3: Get bullpen ERA + injuries from team roster
                const rosterRes = await fetch('https://site.web.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/' + teamID + '?enable=roster,injuries');
                const rosterData = await rosterRes.json();
                const athletes = rosterData?.team?.athletes || [];
                let bullpenERAs = [];
                for (const athlete of athletes) {
                    if (athlete.injuries && athlete.injuries.length > 0) injuryCount++;
                    const pos = athlete?.position?.abbreviation || '';
                    if (pos === 'RP') {
                        const stats = athlete?.statistics?.[0]?.splits?.[0]?.stats || [];
                        const era = parseFloat(stats.find(s => s.name === 'ERA')?.value || 0);
                        if (era > 0 && era < 10) bullpenERAs.push(era);
                    }
                }
                if (bullpenERAs.length) bullpenERA = Math.round((bullpenERAs.reduce((a,b)=>a+b)/bullpenERAs.length) * 100) / 100;

                const result = { starterERA, starterIP, bullpenERA, injuries: injuryCount, starterName: probablePitcherName };
                cachedMLBStats[cacheKey] = result;
                console.log('✅ MLB pitching full result for', teamName, result);
                applyMLBPitchingStats(result, side);
            } catch(e) {
                console.warn('MLB pitching fetch failed for', teamName, e);
            }
        } // end fetchMLBPitchingStats_OLD

        function applyMLBPitchingStats(stats, side) {
            const prefix = side === 'away' ? 'bbAway' : 'bbHome';
            const eraEl = document.getElementById(prefix + 'StarterERA');
            const ipEl  = document.getElementById(prefix + 'StarterIP');
            const bpEl  = document.getElementById(prefix + 'BullpenERA');
            const injEl = document.getElementById(prefix + 'Inj');
            if (eraEl) eraEl.value = stats.starterERA;
            if (ipEl)  ipEl.value  = stats.starterIP;
            if (bpEl)  bpEl.value  = stats.bullpenERA;
            // injuries now handled by fetchMLBInjuries from Firebase
            // show pitcher name in pitching label
            if (stats.starterName) {
                const labelId = prefix + 'PitchPct';
                const el = document.getElementById(labelId);
                if (el) el.textContent = stats.starterName + ' — ' + stats.starterERA + ' ERA';
                // Always-visible pitcher box
                const pitcherBoxId = prefix === 'bbAway' ? 'bbAwayPitcherBox' : 'bbHomePitcherBox';
                const pitcherBox = document.getElementById(pitcherBoxId);
                if (pitcherBox) pitcherBox.textContent = stats.starterName;
            }
            calculateBaseballEdge();
        }

        const NBA_TEAM_IDS = {
            'Hawks': '1', 'Celtics': '2', 'Nets': '17', 'Hornets': '30', 'Bulls': '4',
            'Cavaliers': '5', 'Mavericks': '6', 'Nuggets': '7', 'Pistons': '8', 'Warriors': '9',
            'Rockets': '10', 'Pacers': '11', 'Clippers': '12', 'Lakers': '13', 'Grizzlies': '29',
            'Heat': '14', 'Bucks': '15', 'Timberwolves': '16', 'Pelicans': '3', 'Knicks': '18',
            'Thunder': '25', 'Magic': '19', '76ers': '20', 'Suns': '21', 'Trail Blazers': '22',
            'Kings': '26', 'Spurs': '23', 'Raptors': '28', 'Jazz': '27', 'Wizards': '24'
        };

        const NBA_2K26_OVERALLS = {
            'Thunder': 85, 'Knicks': 84, 'Clippers': 83, 'Lakers': 83, 'Cavaliers': 83,
            'Nuggets': 83, 'Mavericks': 83, 'Rockets': 83, 'Pacers': 82, 'Timberwolves': 82,
            'Celtics': 82, 'Hawks': 82, 'Spurs': 82, 'Warriors': 81, 'Magic': 81,
            '76ers': 81, 'Trail Blazers': 81, 'Grizzlies': 81, 'Pelicans': 81, 'Kings': 81,
            'Heat': 81, 'Bucks': 80, 'Pistons': 80, 'Raptors': 80, 'Suns': 79,
            'Hornets': 79, 'Jazz': 79, 'Bulls': 79, 'Wizards': 78, 'Nets': 77
        };

        async function fetchMLBInjuries(teamName, side) {
            try {
                const fullName = MLB_FULL_NAMES[teamName] || teamName;
                const cleanName = fullName.replace(/[.$#\[\]/]/g, '_').trim();
                const r = await fetch(BACKEND_URL + '/api/mlb/injuries/' + encodeURIComponent(cleanName));
                const d = await r.json();
                const count = d ? (d.count || 0) : 0;
                console.log('✅ MLB ' + teamName + ' (' + fullName + ') injuries from Firebase: ' + count);
                const injEl = document.getElementById(side === 'away' ? 'bbAwayInjDisplay' : 'bbHomeInjDisplay');
                if (injEl) { injEl.textContent = count; calculateBaseballEdge(); }
            } catch(e) {
                console.warn('MLB injury Firebase fetch failed for', teamName, e);
            }
        }

        async function fetchMLBSeries(teamName) {
            try {
                const fullName = MLB_FULL_NAMES[teamName] || teamName;
                const cleanName = fullName.replace(/[.$#\[\]/]/g, '_').trim();
                const FB_URL = 'https://vegas-bet-default-rtdb.firebaseio.com/mlbSeries/' + encodeURIComponent(cleanName) + '.json';
                const r = await fetch(FB_URL);
                const d = await r.json();
                if (!d) return;
                const gamesEl = document.getElementById('bbSeriesGames');
                const games2El = document.getElementById('bbSeriesGames2');
                if (gamesEl) gamesEl.value = d.gamesInSeries || 3;
                if (games2El) games2El.value = d.gamesInSeries || 3;
                calculateBaseballEdge();
                console.log('✅ MLB series from Firebase:', teamName, d);
            } catch(e) {
                console.warn('MLB series fetch failed for', teamName, e);
            }
        }

        async function fetchMLBBatting(teamName, side) {
            console.log('🔄 Fetching MLB batting for:', teamName, '(side:', side + ')');
            try {
                const fullName = MLB_FULL_NAMES[teamName] || teamName;
                const cleanName = fullName.replace(/[.$#\[\]/]/g, '_').trim();
                const r = await fetch(BACKEND_URL + '/api/mlb/batting/' + encodeURIComponent(cleanName));
                const d = await r.json();
                console.log('📥 Received batting data for', teamName, ':', d);
                if (!d) { console.warn('No Firebase batting data for', teamName); return; }
                // Cache the batting data
                cachedMLBBatting[teamName] = { avg: d.avg || 0, obp: d.obp || 0, slg: d.slg || 0 };
                // Store directly on selected team object
                if (side === 'away' && selectedBBAwayTeam) selectedBBAwayTeam._batting = { avg: d.avg || 0, obp: d.obp || 0, slg: d.slg || 0 };
                if (side === 'home' && selectedBBHomeTeam) selectedBBHomeTeam._batting = { avg: d.avg || 0, obp: d.obp || 0, slg: d.slg || 0 };
                const prefix = side === 'away' ? 'bbAway' : 'bbHome';
                const avgEl = document.getElementById(prefix + 'Avg');
                const obpEl = document.getElementById(prefix + 'OBP');
                const slgEl = document.getElementById(prefix + 'SLG');
                if (avgEl && d.avg) avgEl.value = d.avg;
                if (obpEl && d.obp) obpEl.value = d.obp;
                if (slgEl && d.slg) slgEl.value = d.slg;
                calculateBaseballEdge();
                console.log('✅ MLB batting from Firebase:', teamName, d);
            } catch(e) {
                console.warn('MLB batting Firebase fetch failed for', teamName, e);
            }
        }

        async function fetchInjuryForTeam(teamName) {
            const today = new Date().toISOString().split('T')[0];
            if (cachedInjuries[teamName] !== undefined && cachedInjuries[teamName + '_date'] === today) {
                return cachedInjuries[teamName];
            }
            try {
                const teamID = NBA_TEAM_IDS[teamName];
                if (!teamID) { console.warn('No ESPN ID for team:', teamName); return 0; }
                const r = await fetch('https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/teams/' + teamID + '?enable=roster,injuries');
                const d = await r.json();
                const athletes = d?.team?.athletes || [];
                let count = 0;
                for (const athlete of athletes) {
                    if (athlete.injuries && athlete.injuries.length > 0) count += athlete.injuries.length;
                }
                cachedInjuries[teamName] = count;
                cachedInjuries[teamName + '_date'] = today;
                console.log('✅ ' + teamName + ' injuries: ' + count);
                return count;
            } catch(e) {
                console.warn('Injury fetch failed for', teamName, e);
                return 0;
            }
        }

        // Initialize empty betLogs for other sports
        betLogs.mlb = [];
        betLogs.nfl = [];
        betLogs.cbb = [];
        betLogs.cfb = [];
        betLogs.nhl = [];
        betLogs.soccer = [];
        betLogs.enba = [];

        // Active betLog pointer - points to current sport's betLog
        let betLog = betLogs.nba;

        // Function to get the active betLog based on current sport
        function getActiveBetLog() {
            // Auto-create betLog for sport if it doesn't exist
            if (!betLogs[currentSport]) {
                betLogs[currentSport] = [];
            }
            return betLogs[currentSport];
        }

        // Function to set active betLog when switching sports
        function switchBetLog(sport) {
            // Auto-create if doesn't exist
            if (!betLogs[sport]) {
                betLogs[sport] = [];
            }
            betLog = betLogs[sport];
        }

        function saveAppState() {
            try {
                // Get the active betLog for current sport
                const activeBetLog = getActiveBetLog();
                const betLogState = activeBetLog.map(d => ({
                    day: d.day,
                    unlocked: d.unlocked || false,
                    type: d.type || '',
                    overall: d.overall || '',
                    games: d.games.map(g => ({...g, res: g.res === null ? 'pending' : g.res}))
                }));
                const logContent = document.getElementById('logContent');
                const logbookEntries = [];
                if (logContent) {
                    logContent.querySelectorAll('.log-entry:not(.permanent-example)').forEach(entry => {
                        const spans = entry.querySelectorAll('span');
                        const teamName = spans[0] ? spans[0].textContent.trim() : '';
                        const odds = entry.getAttribute('data-odds') || '';
                        const betType = entry.getAttribute('data-bet-type') || '';
                        const confidence = entry.getAttribute('data-confidence') || '0';
                        const betInput = entry.querySelector('.bet-amount-input');
                        const betAmount = betInput ? betInput.value : '';
                        logbookEntries.push({ teamName, odds, betType, confidence, betAmount });
                    });
                }
                const payload = {
                    betLog: betLogState,
                    activeBetDay: activeBetDay,
                    bankroll: localStorage.getItem('bankroll') || '$25',
                    bankrollGoal: localStorage.getItem('bankrollGoal') || '$0',
                    previousBankroll: localStorage.getItem('previousBankroll') || '$25',
                    gwBankroll: localStorage.getItem('gwBankroll') || '',
                    logbookEntries: logbookEntries
                };
                localStorage.setItem('appState_' + currentSport, JSON.stringify(payload));
                // Save to sport-specific Firebase path
                const sportEndpoint = BACKEND_URL + '/api/state/' + currentSport;
                fetch(sportEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                .then(r => {
                    if (!r.ok) throw new Error('Save failed: ' + r.status);
                    console.log('✅ ' + currentSport.toUpperCase() + ' state saved to Firebase');
                })
                .catch(err => {
                    console.error('❌ Save to Firebase failed:', err);
                    // Retry once after 2 seconds
                    setTimeout(() => {
                        fetch(sportEndpoint, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        })
                        .then(() => console.log('✅ Retry successful'))
                        .catch(() => console.error('❌ Retry also failed - state only in localStorage'));
                    }, 2000);
                });
            } catch(e) { console.warn('save failed', e); }
        }


        let deletedLogbookTeams = [];

        function loadAppState(callback) {
            // First load deleted logbook teams so we can filter them out
            // Deleted logbook removed - no longer needed
            // fetch(BACKEND_URL + '/api/deletedLogbook')
            //     .then(r => r.json())
            //     .then(deleted => { if (Array.isArray(deleted)) deletedLogbookTeams = deleted; })
            //     .catch(() => {});

            // Load sport-specific betLog from Firebase
            const loadEndpoint = BACKEND_URL + '/api/state/' + currentSport;
            fetch(loadEndpoint)
                .then(r => r.json())
                .then(data => {
                    console.log('🔥 FIREBASE DATA LOADED:', {
                        hasBetLog: !!data.betLog,
                        isArray: Array.isArray(data.betLog),
                        totalDays: data.betLog ? data.betLog.length : 0,
                        firstDay: data.betLog && data.betLog[0] ? data.betLog[0] : 'none',
                        day32: data.betLog ? data.betLog.find(d => d.day === 32) : 'not found'
                    });
                    // Backend already transforms data to correct format, just load it
                    if (data && data.betLog && Array.isArray(data.betLog)) {
                        const activeBetLog = getActiveBetLog();
                        activeBetLog.length = 0; // Clear existing
                        // Load all days from backend (already in correct format)
                        data.betLog.forEach(day => activeBetLog.push(day));
                        betLog = activeBetLog;
                        console.log('✅ BETLOG LOADED:', betLog.length, 'days');
                    } else {
                        console.error('❌ BETLOG NOT LOADED - data structure wrong');
                    }
                    if (data && data.activeBetDay) activeBetDay = data.activeBetDay;
                    if (data && data.bankroll) localStorage.setItem('bankroll', data.bankroll);
                    if (data && data.bankrollGoal) localStorage.setItem('bankrollGoal', data.bankrollGoal);
                    if (data && data.previousBankroll) localStorage.setItem('previousBankroll', data.previousBankroll);
                    if (data && data.gwBankroll) localStorage.setItem('gwBankroll', data.gwBankroll);
                    if (data && data.logbookEntries && data.logbookEntries.length > 0) {
                        savedLogbookEntries = data.logbookEntries;
                        pendingLogbookEntries = data.logbookEntries;
                        const logContent = document.getElementById('logContent');
                        if (logContent && logContent.querySelectorAll('.permanent-example').length > 0) {
                            logContent.querySelectorAll('.log-entry:not(.permanent-example)').forEach(e => e.remove());
                            restoreLogbookEntries(data.logbookEntries);
                            pendingLogbookEntries = null;
                        }
                    }
                    if (callback) callback();
                })
                .catch(() => {
                    try {
                        const raw = localStorage.getItem('appState');
                        if (raw) {
                            const data = JSON.parse(raw);
                            if (data.betLog) {
                                data.betLog.forEach(saved => {
                                    const day = betLog.find(d => d.day === saved.day);
                                    if (day) {
                                        day.unlocked = saved.unlocked;
                                        if (saved.games && saved.games.length > 0) {
                                            if (day.games.length === 0) {
                                                day.games = saved.games.map(g => ({...g, res: (g.res === undefined || g.res === 'pending') ? null : g.res}));
                                            } else {
                                                saved.games.forEach(sg => {
                                                    const match = day.games.find(g => g._id == sg._id);
                                                    if (match) match.res = (sg.res === undefined || sg.res === 'pending') ? null : sg.res;
                                                });
                                            }
                                        }
                                        if (saved.type) day.type = saved.type;
                                        if (saved.overall) day.overall = saved.overall;
                                    }
                                });
                            }
                            if (data.activeBetDay) activeBetDay = data.activeBetDay;
                        }
                    } catch(e) {}
                    if (callback) callback();
                });
        }

        function restoreLogbookEntries(entries, skipSort = false) {
            if (!entries || entries.length === 0) return;
            const logContent = document.getElementById('logContent');
            if (!logContent) return;
            logEntryOrder = [];
            // Remove any previously restored entries before re-adding
            logContent.querySelectorAll('.log-entry:not(.permanent-example)').forEach(e => e.remove());
            const permanentExamples = logContent.querySelectorAll('.log-entry.permanent-example');
            entries.forEach((saved, idx) => {
                // Skip if this team was deleted
                if (deletedLogbookTeams.includes(saved.teamName)) return;
                let matchingExample = null;
                permanentExamples.forEach(example => {
                    const span = example.querySelector('span');
                    if (span && span.textContent.trim() === saved.teamName) matchingExample = example;
                });
                if (!matchingExample) return;
                const logEntry = matchingExample.cloneNode(true);
                logEntry.classList.remove('permanent-example');
                logEntry.style.display = 'grid';
                logEntry.setAttribute('data-bet-type', saved.betType);
                logEntry.setAttribute('data-odds', saved.odds);
                logEntry.setAttribute('data-confidence', saved.confidence);
                logEntry.setAttribute('data-kelly', calcKelly(saved.odds, parseInt(saved.confidence) / 100).toFixed(4));
                logEntry.setAttribute('data-order', ++logEntryCounter);
                logEntryOrder.unshift(logEntry);
                const oddsSpans = logEntry.querySelectorAll('span');
                if (oddsSpans.length >= 2) oddsSpans[1].textContent = saved.odds;
                const betInput = logEntry.querySelector('input');
                if (betInput) {
                    betInput.removeAttribute('disabled');
                    betInput.classList.add('bet-amount-input');
                    betInput.setAttribute('readonly', 'true');
                    betInput.style.cursor = 'default';
                    if (saved.betAmount) betInput.value = saved.betAmount;
                }
                logContent.insertBefore(logEntry, logContent.firstChild);
            });
            if (!skipSort) sortLogByConfidence();
            setTimeout(() => { calculateBetAmounts(); renderConfChips(); }, 50);
        }

        function cleanupDuplicateGames() {
            let totalRemoved = 0;
            betLog.forEach(day => {
                if (!day.games || day.games.length === 0) return;

                const seen = new Map();
                const toKeep = [];

                day.games.forEach(game => {
                    const key = `${game.t1}_${game.t2}`;
                    const reverseKey = `${game.t2}_${game.t1}`;

                    if (seen.has(key) || seen.has(reverseKey)) {
                        // Duplicate matchup found
                        const existing = seen.get(key) || seen.get(reverseKey);

                        // Check if game has real data (not placeholder/default values)
                        const isPlaceholder = (g) => {
                            // No odds, no result, no edge = placeholder
                            if (!g.o1 && !g.o2 && g.res !== 'W' && g.res !== 'L' && !g.edge) {
                                // Also check for identical WL records (e.g., both teams 5-5)
                                if (g.wl1 === g.wl2 && g.wl1 && (g.wl1 === '5-5' || g.wl1 === '0-0')) return true;
                                return true;
                            }
                            return false;
                        };

                        const gameHasData = !isPlaceholder(game);
                        const existingHasData = !isPlaceholder(existing);

                        // Keep the one with more data
                        if (gameHasData && !existingHasData) {
                            // Replace existing with this one
                            const idx = toKeep.indexOf(existing);
                            if (idx !== -1) {
                                toKeep[idx] = game;
                                seen.set(key, game);
                                console.log(`Replacing blank game on day ${day.day}: ${game.t1} vs ${game.t2}`);
                                totalRemoved++;
                            }
                        } else if (!gameHasData) {
                            // This one is blank, skip it
                            console.log(`Removing blank duplicate on day ${day.day}: ${game.t1} vs ${game.t2}`);
                            totalRemoved++;
                        } else {
                            // Both have data, keep existing
                            console.log(`Keeping existing game with data on day ${day.day}: ${game.t1} vs ${game.t2}`);
                        }
                    } else {
                        // First time seeing this matchup
                        seen.set(key, game);
                        toKeep.push(game);
                    }
                });

                if (toKeep.length < day.games.length) {
                    day.games = toKeep;
                }
            });

            if (totalRemoved > 0) {
                console.log(`✅ Cleaned up ${totalRemoved} duplicate/blank games`);
                saveAppState();
            }
            return totalRemoved;
        }

        function reapplyMLBStandingsFromBetLog() {
            const allMLB = [...(mlbStandings.al || []), ...(mlbStandings.nl || [])];
            if (!allMLB.length) return;

            // reset _allResults for each team
            allMLB.forEach(t => { t._allResults = t._allResults || []; t._allResults = []; });

            // Only update last10 from bet log — W-L and rankings stay as Firebase has them
            betLog.forEach(day => {
                day.games.forEach(g => {
                    if (g.sport !== 'mlb') return;
                    if (g.res !== 'W' && g.res !== 'L') return;
                    const pickWon = g.res === 'W';
                    const opponent = g.pick === g.t1 ? g.t2 : g.t1;
                    const pickTeam = allMLB.find(t => t.abbr === g.pick || t.name.toLowerCase().includes(g.pick.toLowerCase()));
                    const oppTeam  = allMLB.find(t => t.abbr === opponent || t.name.toLowerCase().includes(opponent.toLowerCase()));
                    if (pickTeam) pickTeam._allResults.push(pickWon ? 'W' : 'L');
                    if (oppTeam)  oppTeam._allResults.push(pickWon ? 'L' : 'W');
                });
            });

            // Only apply last10 — leave wins/losses/rank untouched
            allMLB.forEach(t => {
                if (t._allResults && t._allResults.length > 0) {
                    t.last10 = t._allResults.slice(-10);
                }
            });
            console.log('✅ MLB standings updated from bet log');
        }

        function calcCurrentSeriesCount() {
            if (!selectedBBAwayTeam || !selectedBBHomeTeam) return;
            const awayAbbr = selectedBBAwayTeam.prefix;
            const homeAbbr = selectedBBHomeTeam.prefix;
            const awayName = selectedBBAwayTeam.name;
            const homeName = selectedBBHomeTeam.name;

            // Get all MLB games only, sorted by day
            const mlbGames = [];
            betLog.forEach(day => {
                day.games.forEach(g => {
                    if (g.sport !== 'mlb') return;
                    if (g.res !== 'W' && g.res !== 'L') return;
                    // Check if this game involves both selected teams
                    const teams = [g.t1, g.t2];
                    const hasAway = teams.some(t => t === awayName || t === awayAbbr || t.includes(awayName) || awayName.includes(t));
                    const hasHome = teams.some(t => t === homeName || t === homeAbbr || t.includes(homeName) || homeName.includes(t));
                    if (hasAway && hasHome) {
                        mlbGames.push({ day: day.day, pick: g.pick, res: g.res, t1: g.t1, t2: g.t2 });
                    }
                });
            });

            if (!mlbGames.length) {
                // No games found — reset to 0-0
                const sc1 = document.getElementById('bbSeriesCount');
                const sc2 = document.getElementById('bbSeriesCount2');
                if (sc1) sc1.value = '0-0';
                if (sc2) sc2.value = '0-0';
                calculateBaseballEdge();
                return;
            }

            // Find the current series — consecutive games within 1 day gaps
            // Work backwards from most recent game
            const sorted = mlbGames.sort((a,b) => a.day - b.day);
            let seriesGames = [sorted[sorted.length - 1]];
            for (let i = sorted.length - 2; i >= 0; i--) {
                if (seriesGames[0].day - sorted[i].day <= 1) {
                    seriesGames.unshift(sorted[i]);
                } else break;
            }

            // Count home wins and away wins in this series
            let homeWins = 0, awayWins = 0;
            seriesGames.forEach(g => {
                const pickIsHome = g.pick === homeName || g.pick === homeAbbr || g.pick.includes(homeName) || homeName.includes(g.pick);
                const pickIsAway = g.pick === awayName || g.pick === awayAbbr || g.pick.includes(awayName) || awayName.includes(g.pick);
                if (pickIsHome && g.res === 'W') homeWins++;
                else if (pickIsHome && g.res === 'L') awayWins++;
                else if (pickIsAway && g.res === 'W') awayWins++;
                else if (pickIsAway && g.res === 'L') homeWins++;
            });

            const seriesStr = homeWins + '-' + awayWins;
            const sc1 = document.getElementById('bbSeriesCount');
            const sc2 = document.getElementById('bbSeriesCount2');
            if (sc1) sc1.value = seriesStr;
            if (sc2) sc2.value = seriesStr;
            console.log('✅ Current series:', awayName, 'vs', homeName, '→', seriesStr, '(home-away)');
            calculateBaseballEdge();
        }

        function calcMLBLast5Series(teamAbbr) {
            // Group MLB bet log games into series (same two teams, consecutive days)
            const mlbGames = [];
            betLog.forEach(day => {
                day.games.forEach(g => {
                    if (g.sport !== 'mlb') return;
                    if (g.res !== 'W' && g.res !== 'L') return;
                    mlbGames.push({ day: day.day, t1: g.t1, t2: g.t2, pick: g.pick, res: g.res });
                });
            });

            if (!mlbGames.length) return { wins: 0, losses: 0 };

            // Group into series — same two teams within 4 day window
            const series = [];
            let current = null;
            for (const game of mlbGames) {
                const teams = [game.t1, game.t2].sort().join('|');
                if (current && current.teams === teams && game.day - current.lastDay <= 1) {
                    current.games.push(game);
                    current.lastDay = game.day;
                } else {
                    if (current) series.push(current);
                    current = { teams, games: [game], lastDay: game.day };
                }
            }
            if (current) series.push(current);

            // Find series involving this team
            const allMLB = [...(mlbStandings.al || []), ...(mlbStandings.nl || [])];
            const teamObj = allMLB.find(t => t.abbr === teamAbbr);
            if (!teamObj) return { wins: 0, losses: 0 };
            const teamName = teamObj.name.split(' ').pop(); // last word e.g. "Giants"

            const teamSeries = series.filter(s => s.teams.includes(teamAbbr) || s.games.some(g => g.t1.includes(teamName) || g.t2.includes(teamName)));
            const last5 = teamSeries.slice(-5);

            let wins = 0, losses = 0;
            for (const s of last5) {
                const teamWins  = s.games.filter(g => (g.pick.includes(teamName) || g.pick === teamAbbr) && g.res === 'W').length;
                const teamLosses = s.games.filter(g => (g.pick.includes(teamName) || g.pick === teamAbbr) && g.res === 'L').length;
                const oppWins   = s.games.filter(g => (!g.pick.includes(teamName) && g.pick !== teamAbbr) && g.res === 'W').length;
                if (teamWins > oppWins) wins++;
                else if (oppWins > teamWins) losses++;
            }
            return { wins, losses };
        }

        function reapplyStandingsFromBetLog() {
            // Reset to 3/16 baseline, then apply day 39+ for W-L
            // Full bet log used for last10
            [...nbaStandings.east, ...nbaStandings.west].forEach(t => {
                t.wins = t._baseWins;
                t.losses = t._baseLosses;
                t.last10 = [...t._baseLast10];
                t._allResults = [];
            });
            betLog.forEach(day => {
                day.games.forEach(g => {
                    if (g.res !== 'W' && g.res !== 'L') return;
                    const pickWon = g.res === 'W';
                    const opponent = g.pick === g.t1 ? g.t2 : g.t1;
                    const allTeams = [...nbaStandings.east, ...nbaStandings.west];
                    const pickTeam = allTeams.find(t => t.name.toLowerCase() === g.pick.toLowerCase());
                    const oppTeam = allTeams.find(t => t.name.toLowerCase() === opponent.toLowerCase());
                    if (pickTeam) {
                        if (day.day >= 24) { if (pickWon) pickTeam.wins++; else pickTeam.losses++; }
                        pickTeam._allResults.push(pickWon ? 'W' : 'L');
                    }
                    if (oppTeam) {
                        if (day.day >= 24) { if (pickWon) oppTeam.losses++; else oppTeam.wins++; }
                        oppTeam._allResults.push(pickWon ? 'L' : 'W');
                    }
                });
            });
            [...nbaStandings.east, ...nbaStandings.west].forEach(t => {
                if (t._allResults.length > 0) t.last10 = t._allResults.slice(-10);
                t.pct = t.wins / (t.wins + t.losses);
            });
            ['east','west'].forEach(conf => {
                nbaStandings[conf].sort((a,b) => b.wins - a.wins || a.losses - b.losses);
                nbaStandings[conf].forEach((t,i) => t.rank = i+1);
            });
            syncTeamsFromStandings();
        }

        function updateBetLogSubtitle() {
            const day = betLog.find(d => d.day === activeBetDay);
            if (!day) return;
            // daily record
            const sportFilter = g => {
                const gameSport = g.sport || 'nba';  // default old games to 'nba'
                return gameSport === currentSport;
            };
            let dW = 0, dL = 0;
            day.games.filter(sportFilter).forEach(g => { if(g.res==='W') dW++; else if(g.res==='L') dL++; });
            // overall up to and including this day
            let tw = 0, tl = 0;
            betLog.forEach(d => {
                if (d.day <= activeBetDay) {
                    d.games.filter(sportFilter).forEach(g => { if(g.res==='W') tw++; else if(g.res==='L') tl++; });
                }
            });
            const tp = tw+tl > 0 ? Math.round((tw/(tw+tl))*100) : 0;
            const overallColor = tp>=80?'#22c55e':tp>=70?'#f59e0b':'#ef4444';
            const dailyColor = dW>dL?'#22c55e':dL>dW?'#ef4444':'#aaa';
            // update subtitle bar
            const dateEl = document.getElementById('betLogSubDate');
            const overallEl = document.getElementById('betLogSubOverall');
            if (dateEl) dateEl.textContent = day.date;
            if (overallEl) { overallEl.textContent = tw+tl > 0 ? `${tw}-${tl} (${tp}%)` : ''; overallEl.style.color = overallColor; }
            // update header left side (where bankroll was)
            const headerLeft = document.getElementById('logBankroll');
            if (headerLeft && document.getElementById('betLogContent').style.display !== 'none') {
                headerLeft.contentEditable = 'false';
                headerLeft.style.cursor = 'default';
                headerLeft.innerHTML = `
                    <div class="bet-log-stat" style="line-height:1.3;font-family:monospace;">
                        <div style="font-size:13px;font-weight:900;color:#fff;letter-spacing:2px;text-shadow:0 0 10px rgba(255,255,255,0.6);">${day.date}</div>
                        <div style="font-size:11px;font-weight:900;color:${dailyColor};letter-spacing:2px;text-shadow:0 0 8px ${dailyColor};">${dW}-${dL}</div>
                        <div style="font-size:9px;font-weight:700;color:${overallColor};letter-spacing:1px;opacity:0.9;text-shadow:0 0 6px ${overallColor};">${tw+tl>0?`${tw}-${tl} (${tp}%)`:'—'}</div>
                    </div>`;
            }
        }

        function renderBetLog() {
            const nav = document.getElementById('betLogDayNav');
            const cards = document.getElementById('betLogCards');

            nav.innerHTML = betLog.map(d => {
                // Calendar day system: Day 1 = Jan 1, Day 32 = Feb 1, Day 365 = Dec 31
                // Convert calendar day to actual date
                const date = new Date(2026, 0, d.day); // Jan 1 + (day - 1) days
                const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
                const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                const monthStr = monthNames[date.getMonth()];
                const dayStr = dayNames[date.getDay()];

                return `
                <div onclick="selectBetDay(${d.day})" id="betDayBtn${d.day}" style="
                    flex-shrink:0; padding:10px 16px; border-radius:18px; cursor:pointer;
                    background:${d.day===activeBetDay?'#fff':'#1e1e1e'};
                    color:${d.day===activeBetDay?'#000':'#aaa'};
                    border:1px solid ${d.day===activeBetDay?'#fff':'#333'};
                    white-space:nowrap; text-align:center;
                ">
                    <div style="font-size:9px;font-weight:600;opacity:0.6;">Day ${d.day}</div>
                    <div style="font-size:13px;font-weight:800;">${monthStr} ${date.getDate()}</div>
                    <div style="font-size:10px;font-weight:500;opacity:0.7;">${dayStr}</div>
                </div>
                `;
            }).join('');

            // scroll active day into view
            setTimeout(() => {
                const activeBtn = document.getElementById('betDayBtn' + activeBetDay);
                if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }, 50);

            updateBetLogSubtitle();
            renderBetDayCards();
        }

        function selectBetDay(dayNum) {
            activeBetDay = dayNum;
            document.querySelectorAll('[id^="betDayBtn"]').forEach(el => {
                const isActive = el.id === `betDayBtn${dayNum}`;
                el.style.background = isActive ? '#fff' : '#1e1e1e';
                el.style.color = isActive ? '#000' : '#aaa';
                el.style.borderColor = isActive ? '#fff' : '#333';
            });
            const activeBtn = document.getElementById('betDayBtn' + dayNum);
            if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            saveAppState();
            updateBetLogSubtitle();
            renderBetDayCards();
            renderGameLogForDay(dayNum);
            updatePlayoffSeriesUI();
        }

        const appendTaps = {};

        function saveStandings() {
            localStorage.setItem('nbaStandingsData', JSON.stringify({
                east: nbaStandings.east,
                west: nbaStandings.west
            }));
        }

        function loadStandings() {
            try {
                const raw = localStorage.getItem('nbaStandingsData');
                if (raw) {
                    const data = JSON.parse(raw);
                    if (data.east && data.east.length > 0) nbaStandings.east = data.east;
                    if (data.west && data.west.length > 0) nbaStandings.west = data.west;
                }
            } catch(e) {}
        }

        function updateStandings(teamName, result) {
            // result = 'W' or 'L' for that team
            const allTeams = [...nbaStandings.east, ...nbaStandings.west];
            const team = allTeams.find(t => t.name.toLowerCase() === teamName.toLowerCase());
            if (!team) return;
            if (result === 'W') { team.wins++; } else { team.losses++; }
            team.pct = team.wins / (team.wins + team.losses);
            team.last10.push(result);
            if (team.last10.length > 10) team.last10.shift();
            // re-sort conference by wins
            ['east','west'].forEach(conf => {
                nbaStandings[conf].sort((a,b) => b.wins - a.wins || a.losses - b.losses);
                nbaStandings[conf].forEach((t,i) => t.rank = i+1);
            });
            // save to localStorage so it persists
            saveStandings();
            // re-render standings if open
            if (document.getElementById('standingsContent').style.display !== 'none') {
                renderStandings(currentConference);
            }
            syncTeamsFromStandings();
        }

        async function setBetResult(dayNum, betId, result) {
            const day = betLog.find(d => d.day === dayNum);
            if (!day) return;
            const game = day.games.find(g => g._id == betId);
            if (!game) return;
            game.res = result;
            const pickWon = result === 'W';
            const opponent = game.pick === game.t1 ? game.t2 : game.t1;
            updateStandings(game.pick, pickWon ? 'W' : 'L');
            updateStandings(opponent, pickWon ? 'L' : 'W');

            // Automatically update playoff series stepper for NBA playoffs (days 71-133)
            const gameSport = game.sport || currentSport;
            console.log('🔍 Checking playoff auto-update:', { gameSport, dayNum, isNBA: gameSport === 'nba', isPlayoffDay: dayNum >= 71 && dayNum <= 133 });

            if (gameSport === 'nba' && dayNum >= 71 && dayNum <= 133) {
                const actualWinner = pickWon ? game.pick : opponent;
                const actualLoser = pickWon ? opponent : game.pick;

                // Get series key
                const seriesKey = getSeriesKey(game.t1, game.t2);

                console.log('🏀 Playoff game detected:', {
                    t1: game.t1,
                    t2: game.t2,
                    pick: game.pick,
                    result,
                    actualWinner,
                    seriesKey
                });

                try {
                    // Load current series state from backend
                    const response = await fetch(`${BACKEND_URL}/api/nba/playoffSeries/${encodeURIComponent(seriesKey)}`);
                    let seriesData = null;

                    if (response.ok) {
                        seriesData = await response.json();
                    }

                    // Initialize if no existing data
                    if (!seriesData) {
                        seriesData = {
                            awayTeam: game.t1,
                            awayWins: 0,
                            homeTeam: game.t2,
                            homeWins: 0,
                            homeCourtTeam: game.t1 // Default, will be overridden
                        };
                    }

                    // Increment the winner's count (case-insensitive matching)
                    console.log('🎯 Matching winner:', {
                        actualWinner,
                        seriesAwayTeam: seriesData.awayTeam,
                        seriesHomeTeam: seriesData.homeTeam,
                        matchesAway: actualWinner.toLowerCase() === seriesData.awayTeam.toLowerCase(),
                        matchesHome: actualWinner.toLowerCase() === seriesData.homeTeam.toLowerCase()
                    });

                    if (actualWinner.toLowerCase() === seriesData.awayTeam.toLowerCase()) {
                        seriesData.awayWins = Math.min(4, (seriesData.awayWins || 0) + 1);
                        console.log('✅ Incremented away team wins to', seriesData.awayWins);
                    } else if (actualWinner.toLowerCase() === seriesData.homeTeam.toLowerCase()) {
                        seriesData.homeWins = Math.min(4, (seriesData.homeWins || 0) + 1);
                        console.log('✅ Incremented home team wins to', seriesData.homeWins);
                    } else {
                        console.warn('⚠️ Winner name did not match either team in series data!');
                    }

                    // Save updated series state to backend
                    await fetch(`${BACKEND_URL}/api/nba/playoffSeries/${encodeURIComponent(seriesKey)}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            awayTeam: seriesData.awayTeam,
                            awayWins: seriesData.awayWins,
                            homeTeam: seriesData.homeTeam,
                            homeWins: seriesData.homeWins,
                            homeCourtTeam: seriesData.homeCourtTeam,
                            lastUpdated: new Date().toISOString()
                        })
                    });

                    console.log('✅ Auto-updated playoff series:', seriesKey, seriesData);

                    // If currently viewing this matchup, update the UI inputs
                    if (selectedAwayTeam && selectedHomeTeam) {
                        const currentSeriesKey = getSeriesKey(selectedAwayTeam.name, selectedHomeTeam.name);
                        if (currentSeriesKey === seriesKey) {
                            // Reload series state to update inputs
                            await loadSeriesState(selectedAwayTeam.name, selectedHomeTeam.name);
                        }
                    }
                } catch (e) {
                    console.error('Failed to auto-update playoff series:', e);
                }
            }

            saveAppState();
            updateBetLogSubtitle();
            renderBetDayCards();
            if (monthChartInstance) buildMonthChart(currentMonthTab);
        }

        // swipe-to-delete state
        const swipeState = {};
        function startSwipe(e, id) {
            swipeState[id] = { startX: e.touches ? e.touches[0].clientX : e.clientX };
        }
        function moveSwipe(e, id) {
            if (!swipeState[id]) return;
            const x = e.touches ? e.touches[0].clientX : e.clientX;
            const dx = swipeState[id].startX - x;
            const el = document.getElementById('betCard'+id);
            if (!el) return;
            if (dx > 0) el.style.transform = `translateX(-${Math.min(dx, 100)}px)`;
        }
        function showLockedDeletePrompt() {
            const popup = document.createElement('div');
            popup.className = 'delete-popup';
            popup.innerHTML = `
                <div class="delete-popup-content">
                    <div class="delete-popup-title">locked 🔒</div>
                    <div class="delete-popup-text">can't delete a decided bet</div>
                    <div class="delete-popup-buttons">
                        <button class="delete-popup-btn cancel">got it</button>
                    </div>
                </div>
            `;
            document.body.appendChild(popup);
            setTimeout(() => popup.classList.add('show'), 10);
            popup.querySelector('.cancel').addEventListener('click', () => {
                popup.classList.remove('show');
                setTimeout(() => popup.remove(), 300);
            });
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    popup.classList.remove('show');
                    setTimeout(() => popup.remove(), 300);
                }
            });
        }

        function endSwipe(e, id, dayNum) {
            if (!swipeState[id]) return;
            const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
            const dx = swipeState[id].startX - x;
            delete swipeState[id];
            const el = document.getElementById('betCard'+id);
            if (!el) return;
            if (dx > 60) {
                const day = betLog.find(d => d.day === dayNum);
                const game = day && day.games.find(g => g._id == id);
                if (game && (game.res === 'W' || game.res === 'L')) {
                    el.style.transition = 'transform 0.2s';
                    el.style.transform = 'translateX(0)';
                    showLockedDeletePrompt();
                    return;
                }
                // Hold card open
                el.style.transition = 'transform 0.2s';
                el.style.transform = 'translateX(-80px)';
                el.style.position = 'relative';

                // Remove any existing trash
                el.querySelectorAll('.swipe-trash-btn').forEach(b => b.remove());

                // Create trash container positioned outside card (like logbook)
                const trashContainer = document.createElement('div');
                trashContainer.className = 'swipe-trash-btn';
                trashContainer.style.cssText = 'position:absolute;top:0;left:100%;width:80px;height:100%;display:flex;align-items:center;justify-content:center;z-index:100;';
                
                const trashBtn = document.createElement('div');
                trashBtn.style.cssText = 'width:60px;height:60px;background:linear-gradient(135deg,#ef4444,#dc2626);display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;border-radius:8px;border:3px solid #fff;box-shadow:0 4px 12px rgba(239,68,68,0.5);';
                trashBtn.textContent = '🗑️';
                trashContainer.appendChild(trashBtn);
                el.appendChild(trashContainer);
                trashContainer.addEventListener('touchstart', (ev) => { ev.stopPropagation(); });

                const resetCard = () => {
                    el.style.transition = 'transform 0.2s';
                    el.style.transform = 'translateX(0)';
                    trashContainer.remove();
                };

                trashBtn.addEventListener('touchstart', (ev) => { ev.stopPropagation(); });
                trashBtn.addEventListener('touchend', (ev) => { ev.preventDefault(); ev.stopPropagation(); trashBtn.click(); });
                trashBtn.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    resetCard();
                    const overlay = document.getElementById('modalOverlay');
                    const modal = document.getElementById('confirmModal');
                    overlay.classList.add('show');
                    modal.classList.add('show');
                    document.getElementById('confirmDelete').onclick = () => {
                        overlay.classList.remove('show');
                        modal.classList.remove('show');
                        const delEl = document.getElementById('betCard'+id);
                        if (delEl) {
                            delEl.style.transition = 'transform 0.2s, opacity 0.2s';
                            delEl.style.transform = 'translateX(-100%)';
                            delEl.style.opacity = '0';
                        }
                        setTimeout(() => {
                            if (day) day.games = day.games.filter(g => g._id != id);
                            saveAppState();
                            // Force push deletion to backend immediately
                            try {
                                const betLogState = betLog.map(d => ({
                                    day: d.day, unlocked: d.unlocked || false,
                                    type: d.type || '', overall: d.overall || '',
                                    games: d.games.map(g => ({...g, res: g.res === null ? 'pending' : g.res}))
                                }));
                                fetch(BACKEND_URL + '/api/state/' + currentSport, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ betLog: betLogState })
                                });
                            } catch(e) {}
                            renderBetDayCards();
                        }, 220);
                    };
                    document.getElementById('cancelDelete').onclick = () => {
                        overlay.classList.remove('show');
                        modal.classList.remove('show');
                    };
                });

                // Tap anywhere else resets
                const onOutside = (ev) => {
                    if (!ev.target.closest('.swipe-trash-btn')) {
                        resetCard();
                        document.removeEventListener('touchstart', onOutside);
                        document.removeEventListener('mousedown', onOutside);
                    }
                };
                setTimeout(() => {
                    document.addEventListener('touchstart', onOutside);
                    document.addEventListener('mousedown', onOutside);
                }, 100);
            } else {
                el.style.transition = 'transform 0.2s';
                el.style.transform = 'translateX(0)';
            }
        }

        function tapAppend(dayNum) {
            if (!appendTaps[dayNum]) appendTaps[dayNum] = 0;
            appendTaps[dayNum]++;
            const remaining = 5 - appendTaps[dayNum];
            const block = document.getElementById('appendBlock' + dayNum);

            // SHAKE + CRACK animation on each tap
            const shakeIntensity = (6 - remaining) * 4;
            block.style.transition = 'none';
            block.style.transform = `translateX(${shakeIntensity}px)`;
            setTimeout(() => { block.style.transform = `translateX(-${shakeIntensity}px)`; }, 60);
            setTimeout(() => { block.style.transform = `translateX(${shakeIntensity * 0.6}px)`; }, 120);
            setTimeout(() => { block.style.transform = `translateX(-${shakeIntensity * 0.3}px)`; }, 180);
            setTimeout(() => { block.style.transform = 'translateX(0)'; }, 240);

            // crack effect - border gets more intense each tap
            const crackColors = ['#333','#555','#888','#ef4444','#ff0000'];
            const glowColors = ['none','0 0 8px rgba(239,68,68,0.2)','0 0 12px rgba(239,68,68,0.4)','0 0 20px rgba(239,68,68,0.7), 0 0 15px rgba(255,255,255,0.6)','0 0 30px rgba(239,68,68,1)'];
            block.style.borderColor = crackColors[appendTaps[dayNum] - 1] || '#ef4444';
            block.style.boxShadow = glowColors[appendTaps[dayNum] - 1] || 'none';

            // haptic-style flash
            block.style.background = '#1a0000';
            setTimeout(() => { block.style.background = '#0d0d0d'; }, 150);

            if (remaining <= 0) {
                // BREAK OPEN
                block.style.transition = 'all 0.15s ease';
                block.style.transform = 'scale(1.05)';
                block.style.boxShadow = '0 0 40px rgba(34,197,94,1), 0 0 80px rgba(34,197,94,0.5)';
                block.style.borderColor = '#22c55e';
                block.style.background = '#001a00';
                setTimeout(() => {
                    block.style.transform = 'scale(0.98)';
                    block.style.background = '#0d0d0d';
                }, 150);
                setTimeout(() => {
                    const day = betLog.find(d => d.day === dayNum);
                    if (day) day.unlocked = true;
                    block.innerHTML = `<span style="font-size:28px;">💥</span><span style="font-size:15px;font-weight:900;color:#22c55e;letter-spacing:3px;">UNLOCKED 🔓</span>`;
                    block.style.borderColor = '#22c55e';
                    block.style.boxShadow = '0 0 30px rgba(34,197,94,0.5)';
                    block.style.cursor = 'default';
                    renderBetDayCards();
                }, 300);
                setTimeout(() => { block.style.display = 'none'; }, 1500);
            } else {
                const crackEmojis = ['⛓️🔒⛓️', '💢🔒💢', '⚡🔒⚡', '🔥🔒🔥'];
                const emoji = crackEmojis[appendTaps[dayNum] - 1] || '🔥🔒🔥';
                block.innerHTML = `<span style="font-size:22px;">${emoji}</span><span style="font-size:15px;font-weight:900;color:#ef4444;letter-spacing:3px;">APPEND</span><span style="font-size:11px;color:#666;">${remaining} more</span>`;
            }
        }

        function renderBetDayCards() {
            const cards = document.getElementById('betLogCards');
            const day = betLog.find(d => d.day === activeBetDay);
            if (!day) return;
            const isReal = day.type.includes('REAL');

            // Filter games by current sport
            const filteredGames = day.games.filter(g => {
                const gameSport = g.sport || 'nba';  // default old games to 'nba'
                return gameSport === currentSport;
            });

            const isBlank = filteredGames.length === 0 && !day.unlocked;

            // daily record for this day (filtered)
            let dW = 0, dL = 0;
            filteredGames.forEach(g => { if(g.res==='W') dW++; else if(g.res==='L') dL++; });

            // compute live overall accuracy from all decided games (filtered by sport)
            let totalW = 0, totalL = 0;
            betLog.forEach(d => d.games.filter(g => {
                const gameSport = g.sport || 'nba';  // default old games to 'nba'
                return gameSport === currentSport;
            }).forEach(g => {
                if (g.res === 'W') totalW++;
                else if (g.res === 'L') totalL++;
            }));
            const totalGames = totalW + totalL;
            const pct = totalGames > 0 ? Math.round((totalW / totalGames) * 100) : 0;
            const overallStr = totalGames > 0 ? `${totalW}-${totalL} (${pct}%)` : '';

            // section config
            let sectionLabel, sectionColor, showOverall;
            if (day.day >= 1 && day.day <= 12) {
                sectionLabel = '📄 PAPER — 2/1–2/12';
                sectionColor = '#555';
                showOverall = false;
            } else if (day.day >= 13 && day.day <= 23) {
                sectionLabel = '📄 UPDATED PAPER — 2/19–2/29';
                sectionColor = '#888';
                showOverall = true;
            } else {
                sectionLabel = '💰 REAL MONEY — 3/1–PRESENT';
                sectionColor = '#f59e0b';
                showOverall = true;
            }

            cards.innerHTML = `
                ${isBlank ? `
                <div id="appendBlock${day.day}" onclick="tapAppend(${day.day})" style="
                    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px;
                    background:#0d0d0d; border:2px solid #333; border-radius:14px;
                    padding:28px 20px; margin-bottom:14px; cursor:pointer;
                    box-shadow: 0 0 20px rgba(0,0,0,0.5), 0 0 15px rgba(255,255,255,0.6); transition: all 0.15s ease;
                ">
                    <span style="font-size:28px;">⛓️🔒⛓️</span>
                    <span style="font-size:15px;font-weight:900;color:#888;letter-spacing:3px;">APPEND</span>
                    <span style="font-size:10px;color:#444;">tap 5x to unlock</span>
                </div>` : ''}
                ${filteredGames.length > 0 ? `
                <div style="margin-bottom:10px;padding:8px 12px;background:#0a0a0a;border-radius:10px;border:1px solid #1a1a1a;">
                    <div style="font-size:10px;font-weight:700;color:${sectionColor};margin-bottom:5px;">${sectionLabel}</div>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        ${showOverall ? `<span style="font-size:11px;font-weight:800;color:#fff;">${day.overall}</span>` : ''}
                        <span style="font-size:11px;font-weight:700;color:${dW>dL?'#22c55e':dL>dW?'#ef4444':'#aaa'};">daily: ${dW}-${dL}</span>
                    </div>
                </div>
                ${filteredGames.map(g => {
                    const won = g.res === 'W';
                    const pickOdds = g.pick === g.t1 ? g.o1 : g.o2;
                    const gid = g._id || '';
                    return `<div style="position:relative;margin-bottom:8px;overflow:hidden;border-radius:10px;">
                        <div style="position:absolute;right:0;top:0;bottom:0;width:80px;background:#ef4444;display:flex;align-items:center;justify-content:center;font-size:20px;border-radius:0 10px 10px 0;">🗑️</div>
                        <div id="betCard${gid}" style="position:relative;background:#111;border-radius:10px;touch-action:pan-y;"
                            ontouchstart="startSwipe(event,'${gid}')" ontouchmove="moveSwipe(event,'${gid}')" ontouchend="endSwipe(event,'${gid}',${day.day})"
                            onmousedown="startSwipe(event,'${gid}')" onmousemove="moveSwipe(event,'${gid}')" onmouseup="endSwipe(event,'${gid}',${day.day})">
                            <div style="padding:12px 14px;">
                                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                                    <div style="display:flex;align-items:center;gap:6px;">
                                        <span style="font-size:10px;font-weight:700;color:#555;">#${g.s1}</span>
                                        <span style="font-size:13px;font-weight:${g.pick===g.t1?'800':'500'};color:${g.pick===g.t1?'#fff':'#777'};">${g.t1}</span>
                                    </div>
                                    <span style="font-size:12px;color:#555;">${(()=>{const t=[...nbaStandings.east,...nbaStandings.west].find(t=>t.name===g.t1);return t?`${t.wins}-${t.losses}`:g.wl1;})()}  <span style="color:#444;">${(()=>{const t=[...nbaStandings.east,...nbaStandings.west].find(t=>t.name===g.t1);if(!t)return g.l1;const w=t.last10.filter(x=>x==='W').length;return `${w}-${10-w}`;})()}</span></span>
                                </div>
                                <div style="display:flex;justify-content:space-between;align-items:center;">
                                    <div style="display:flex;align-items:center;gap:6px;">
                                        <span style="font-size:10px;font-weight:700;color:#555;">#${g.s2}</span>
                                        <span style="font-size:13px;font-weight:${g.pick===g.t2?'800':'500'};color:${g.pick===g.t2?'#fff':'#777'};">${g.t2}</span>
                                    </div>
                                    <span style="font-size:12px;color:#555;">${(()=>{const t=[...nbaStandings.east,...nbaStandings.west].find(t=>t.name===g.t2);return t?`${t.wins}-${t.losses}`:g.wl2;})()}  <span style="color:#444;">${(()=>{const t=[...nbaStandings.east,...nbaStandings.west].find(t=>t.name===g.t2);if(!t)return g.l2;const w=t.last10.filter(x=>x==='W').length;return `${w}-${10-w}`;})()}</span></span>
                                </div>
                            </div>
                            <div style="background:#0a0a0a;padding:8px 14px;display:flex;justify-content:space-between;align-items:center;">
                                <span style="font-size:11px;color:#444;">🩹${g.i1}/${g.i2}</span>
                                ${g.res === null ? `
                                <div style="display:flex;gap:8px;">
                                    <button onclick="setBetResult(${day.day}, '${gid}', 'W')" style="background:#22c55e;color:#000;border:none;border-radius:6px;padding:5px 14px;font-size:12px;font-weight:900;cursor:pointer;">W</button>
                                    <button onclick="setBetResult(${day.day}, '${gid}', 'L')" style="background:#ef4444;color:#fff;border:none;border-radius:6px;padding:5px 14px;font-size:12px;font-weight:900;cursor:pointer;">L</button>
                                </div>` : `<span style="font-size:12px;font-weight:800;color:${g.res==='W'?'#22c55e':'#ef4444'};">${g.pick} ${pickOdds} ${g.res==='W'?'✅':'❌'}</span>`}
                            </div>
                        </div>
                    </div>`;
                }).join('')}` : ''}
            `;
        }

        // Nav switching

        function fatKeyPress(key) {
            const input = document.getElementById('teamSearch');
            if (!input) return;
            if (key === '⌫') {
                input.value = input.value.slice(0, -1);
            } else {
                input.value += key;
            }
            input.dispatchEvent(new Event('input'));
        }

        let currentLogSort = 'confidence';
        let logEntryCounter = 0;
        let logEntryOrder = [];

        function renderGameLogForDay(dayNum) {
            const logContent = document.getElementById('logContent');
            if (!logContent) return;

            // Remove all non-permanent cards
            const existing = logContent.querySelectorAll('.log-entry:not(.permanent-example):not(.mlb-permanent-example)');
            existing.forEach(el => el.remove());

            const day = betLog.find(d => d.day === dayNum);
            if (!day || !day.games) return;

            day.games.filter(g => (g.sport || "nba") === currentSport).forEach(game => {
                const pickName = game.pick;
                const pickIsHome = game.pick === game.t2;
                const pickOdds = pickIsHome ? game.o2 : game.o1;
                const oppOdds  = pickIsHome ? game.o1 : game.o2;
                const sport = game.sport || 'nba';

                // Recalculate confidence from matchup data
                const pickSeed = pickIsHome ? (game.s2||0) : (game.s1||0);
                const oppSeed  = pickIsHome ? (game.s1||0) : (game.s2||0);
                const pickWL   = (pickIsHome ? game.wl2 : game.wl1) || '0-0';
                const oppWL    = (pickIsHome ? game.wl1 : game.wl2) || '0-0';
                const pickL10  = (pickIsHome ? game.l2 : game.l1) || '0-0';
                const oppL10   = (pickIsHome ? game.l1 : game.l2) || '0-0';
                const pickInj  = pickIsHome ? (game.i2||0) : (game.i1||0);
                const oppInj   = pickIsHome ? (game.i1||0) : (game.i2||0);

                const parseWins = wl => parseInt((wl||'0-0').split('-')[0]) || 0;
                const parseLoss = wl => parseInt((wl||'0-0').split('-')[1]) || 0;
                const parseOddsVal = o => { const n = parseInt((o||'0').replace(/[^0-9\-]/g,'')); return isNaN(n)?0:n; };

                const seedGap = (oppSeed - pickSeed);
                const seedScore = Math.min(25, Math.max(-25, seedGap * 2));
                const pickWins = parseWins(pickWL); const pickLoss = parseLoss(pickWL);
                const oppWins  = parseWins(oppWL);  const oppLoss  = parseLoss(oppWL);
                const recordScore = Math.min(20, Math.max(-20, (pickWins - oppWins) * 0.5));
                const pickL10w = parseWins(pickL10); const oppL10w = parseWins(oppL10);
                const l10Score = Math.min(15, Math.max(-15, (pickL10w - oppL10w) * 1.5));
                const pickOddsV = parseOddsVal(pickOdds);
                const oddsScore = pickOddsV < 0 ? Math.min(15, Math.abs(pickOddsV)/20) : Math.max(-15, -pickOddsV/20);
                const injScore = Math.min(10, Math.max(-10, (oppInj - pickInj) * 1.5));
                const conf = Math.max(0, Math.min(100, Math.round(50 + seedScore + recordScore + l10Score + oddsScore + injScore)));

                // Find the template card by data-team-name or text content
                const allTemplates = logContent.querySelectorAll('.permanent-example, .mlb-permanent-example');
                let template = null;
                const pickNameLower = pickName.toLowerCase().replace('diamondbacks', 'd-backs');
                allTemplates.forEach(el => {
                    const name = (el.getAttribute('data-team-name') || el.textContent || '').toLowerCase();
                    if (name.includes(pickNameLower) || pickNameLower.includes(name.split(' ')[0])) template = el;
                });

                if (template) {
                    const card = template.cloneNode(true);
                    card.classList.remove('permanent-example', 'mlb-permanent-example');
                    card.style.display = 'grid';
                    card.setAttribute('data-confidence', conf);
                    card.setAttribute('data-odds', pickOdds || '+100');
                    // Update odds display
                    const spans = card.querySelectorAll('span');
                    if (spans.length >= 2) spans[1].textContent = pickOdds || '+100';
                    logContent.appendChild(card);
                }
            });

            sortGameLog(currentLogSort);
        }
        function sortGameLog(type) {
            currentLogSort = type;
            const setTab = (id, active) => {
                const el = document.getElementById(id);
                if (!el) return;
                el.style.background = active ? 'rgba(255,255,255,0.15)' : 'transparent';
                el.style.color = active ? '#fff' : '#555';
                el.style.border = active ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent';
            };
            setTab('tabConfidence', type === 'confidence');
            setTab('tabOdds', type === 'odds');
            setTab('tabKelly', type === 'kelly');

            const logContent = document.getElementById('logContent');
            const cards = Array.from(logContent.querySelectorAll('.log-entry:not(.permanent-example):not(.mlb-permanent-example)'));

            if (type === 'confidence') {
                // EQUAL: restore insertion order, deduplicated
                const seen = new Set();
                const ordered = logEntryOrder.length > 0 ? logEntryOrder
                    : cards.slice().sort((a,b) => parseInt(b.getAttribute('data-order')||'0') - parseInt(a.getAttribute('data-order')||'0'));
                ordered.forEach(entry => {
                    if (!seen.has(entry) && entry.parentNode) {
                        seen.add(entry);
                        logContent.appendChild(entry);
                    }
                });
            } else {
                if (type === 'kelly') calculateBetAmounts();
                cards.sort((a, b) => {
                    if (type === 'kelly') {
                        const amtA = parseFloat((a.querySelector('input')?.value || '0').replace(/[^0-9.]/g,'')) || 0;
                        const amtB = parseFloat((b.querySelector('input')?.value || '0').replace(/[^0-9.]/g,'')) || 0;
                        return amtB - amtA;
                    } else {
                        const toNum = el => parseInt((el.getAttribute('data-odds') || '0').replace(/[^0-9+\-]/g,'')) || 0;
                        return toNum(b) - toNum(a);
                    }
                });
                cards.forEach(card => logContent.removeChild(card));
                cards.forEach(card => logContent.appendChild(card));
            }
            if (type !== 'kelly') calculateBetAmounts();
        }

        function goToLogbook() {
            document.getElementById('logPanelContent').style.display = 'block';
            document.getElementById('standingsContent').style.display = 'none';
            document.getElementById('betLogContent').style.display = 'none';
            document.getElementById('moneyContent').style.display = 'none';
            document.getElementById('logNavStandings').classList.remove('active');
            document.getElementById('logNavBetLog').classList.remove('active');
            document.getElementById('logNavMoney').classList.remove('active');
            const headerLeft = document.getElementById('logBankroll');
            if (headerLeft) {
                headerLeft.contentEditable = 'true';
                headerLeft.style.cursor = '';
                const gwBankroll = document.getElementById('bankrollAmount');
                headerLeft.textContent = gwBankroll ? gwBankroll.textContent : '$0';
            }
            document.getElementById('logBankroll').style.visibility = 'visible';
            scrambleText(document.getElementById('logTitle'), 'game log', 1200);
            document.getElementById('logBackBtn').style.display = 'none';
            document.getElementById('logParlayBtn').style.display = '';
            renderGameLogForDay(activeBetDay);
        }

        // Fix any bad team name abbreviations in bet log and save back to Firebase
        function fixTeamNames() {
            const nameMap = { 'OKC': 'Thunder', 'Mavs': 'Mavericks', 'Cavs': 'Cavaliers' };
            let changed = false;
            betLog.forEach(day => {
                day.games.forEach(g => {
                    ['t1','t2','pick'].forEach(key => {
                        if (nameMap[g[key]]) {
                            g[key] = nameMap[g[key]];
                            changed = true;
                        }
                    });
                });
            });
            if (changed) saveAppState();
        }
        // Auto-clear corrupted localStorage (one-time fix for duplicate blank games)
        try {
            const localState = localStorage.getItem('appState');
            if (localState) {
                localStorage.removeItem('appState');
                console.log('🔧 Cleared localStorage to force fresh load from Firebase');
            }
        } catch(e) {}

        loadAppState(() => {
            cleanupDuplicateGames();
            fixTeamNames();
            reapplyStandingsFromBetLog();
            reapplyMLBStandingsFromBetLog();
            renderBetLog();
            renderStandings(currentConference);
        });

        // Save on close/background, reload on open/foreground
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                saveAppState();
            } else {
                loadAppState(() => {
                    cleanupDuplicateGames();
                    fixTeamNames();
                    reapplyStandingsFromBetLog();
                    reapplyMLBStandingsFromBetLog();
                    renderBetLog();
                    renderStandings(currentConference);
                });
            }
        });
        window.addEventListener('beforeunload', () => saveAppState());
        window.addEventListener('pagehide', () => saveAppState());

        document.getElementById('logBackBtn').addEventListener('click', goToLogbook);

        

        // ===== MONTH MONEY CHART =====
        let currentMonthTab = 'mar';
        let monthChartInstance = null;
        let currentMoneyTab = 'mar'; // legacy compat

        const MONTH_RANGES = {
            feb: { label: 'February', startDay: 1,   endDay: 28  },
            mar: { label: 'March',    startDay: 29,  endDay: 59  },
            apr: { label: 'April',    startDay: 60,  endDay: 89  },
            may: { label: 'May',      startDay: 90,  endDay: 120 },
            jun: { label: 'June',     startDay: 121, endDay: 150 },
        };

        let monthStartOverrides = { nba: { robego: {}, justin: {} }, mlb: { robego: {}, justin: {} } };

        function loadMonthStarts() {
            try {
                const saved = localStorage.getItem('monthStartOverrides3');
                if (saved) monthStartOverrides = JSON.parse(saved);
                if (!monthStartOverrides.nba) monthStartOverrides.nba = { robego: {}, justin: {} };
                if (!monthStartOverrides.mlb) monthStartOverrides.mlb = { robego: {}, justin: {} };
                if (!monthStartOverrides.nba.robego) monthStartOverrides.nba.robego = {};
                if (!monthStartOverrides.nba.justin) monthStartOverrides.nba.justin = {};
                if (!monthStartOverrides.mlb.robego) monthStartOverrides.mlb.robego = {};
                if (!monthStartOverrides.mlb.justin) monthStartOverrides.mlb.justin = {};
                if (monthStartOverrides.nba.robego['apr'] === undefined) monthStartOverrides.nba.robego['apr'] = 100;
                if (monthStartOverrides.nba.justin['apr'] === undefined) monthStartOverrides.nba.justin['apr'] = 100;
                if (monthStartOverrides.mlb.robego['apr'] === undefined) monthStartOverrides.mlb.robego['apr'] = 100;
                if (monthStartOverrides.mlb.justin['apr'] === undefined) monthStartOverrides.mlb.justin['apr'] = 100;
            } catch(e) {
                monthStartOverrides = { nba: { robego: { apr: 100 }, justin: { apr: 100 } }, mlb: { robego: { apr: 100 }, justin: { apr: 100 } } };
            }
        }

        function saveMonthStarts() {
            try {
                localStorage.setItem('monthStartOverrides3', JSON.stringify(monthStartOverrides));
                fetch(BACKEND_URL + '/api/state', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ monthStartOverrides })
                });
            } catch(e) {}
        }

        function calcKellyEdge(oddsStr, winProb) {
            if (!winProb || winProb <= 0 || winProb >= 1) return 0;
            const odds = parseInt(oddsStr);
            if (!odds) return 0;
            const b = odds > 0 ? odds / 100 : 100 / Math.abs(odds);
            return (b * winProb - (1 - winProb)) / b;
        }

        function calcKelly(oddsStr, winProb) {
            return Math.max(0, Math.min(calcKellyEdge(oddsStr, winProb), 0.25));
        }

        function oddsImpliedProb(oddsStr) {
            const o = parseInt(oddsStr);
            if (!o) return 0.5;
            return o > 0 ? 100 / (o + 100) : Math.abs(o) / (Math.abs(o) + 100);
        }

        function calcKellyData(month) {
            const range = MONTH_RANGES[month];
            let bankroll = 100;
            const data = [{ date: MONTH_RANGES[month].label + ' start', bankroll }];
            betLog.forEach(day => {
                if (day.day < range.startDay || day.day > range.endDay) return;
                const decided = day.games.filter(g => (g.res === 'W' || g.res === 'L') && (g.sport || 'nba') === currentSport);
                if (decided.length === 0) return;
                if (bankroll <= 0) bankroll = 100;
                const kellyFracs = decided.map(g => {
                    const oddsStr = g.pick === g.t1 ? g.o1 : g.o2;
                    const conf = g.conf || (g.edge ? parseFloat(g.edge) : 0);
                    const winProb = conf > 0 ? conf / 100 : oddsImpliedProb(oddsStr) + 0.05;
                    return Math.max(0, calcKellyEdge(oddsStr, Math.min(winProb, 0.99)));
                });
                const totalFrac = kellyFracs.reduce((s, f) => s + f, 0);
                let newBankroll = bankroll;
                decided.forEach((g, i) => {
                    const oddsStr = g.pick === g.t1 ? g.o1 : g.o2;
                    const frac = totalFrac > 0 ? kellyFracs[i] / totalFrac : 1 / decided.length;
                    const stake = bankroll * Math.min(frac, 0.4);
                    const o = parseInt(oddsStr);
                    if (g.res === 'W') newBankroll += o > 0 ? stake * (o / 100) : stake * (100 / Math.abs(o));
                    else newBankroll -= stake;
                });
                bankroll = Math.round(Math.max(0, newBankroll) * 100) / 100;
                if (bankroll <= 0) bankroll = 100;
                data.push({ date: day.date, bankroll });
            });
            return data;
        }

        function calcMonthEndBankroll(month, sub) {
            const range = MONTH_RANGES[month];
            let bankroll = getMonthStart(month, sub);
            betLog.forEach(day => {
                if (day.day < range.startDay || day.day > range.endDay) return;
                const decided = day.games.filter(g => (g.res === 'W' || g.res === 'L') && (g.sport || 'nba') === currentSport);
                if (decided.length === 0 || bankroll <= 0) return;
                const n = decided.length;
                const stake = bankroll / n;
                let newBankroll = 0;
                decided.forEach((g, i) => {
                    const s = i === n - 1 ? bankroll - (stake * (n - 1)) : stake;
                    const o = parseInt(g.pick === g.t1 ? g.o1 : g.o2);
                    if (g.res === 'W') newBankroll += o > 0 ? s + s * (o / 100) : s + s * (100 / Math.abs(o));
                });
                bankroll = Math.round(newBankroll * 100) / 100;
                if (bankroll < 0) bankroll = 0;
            });
            return bankroll;
        }

        function getMonthStart(month, sub) {
            sub = sub || currentMoneySubTab;
            const sport = currentSport === 'mlb' ? 'mlb' : 'nba';
            const overrides = (monthStartOverrides[sport] && monthStartOverrides[sport][sub]) || {};
            if (overrides[month] !== undefined) return overrides[month];
            const order = ['feb', 'mar', 'apr', 'may', 'jun'];
            const idx = order.indexOf(month);
            if (idx === 0) return 100;
            return calcMonthEndBankroll(order[idx - 1], sub);
        }

        function fmtMoney(val) {
            if (val >= 1000000) return '$' + (val / 1000000).toFixed(2) + 'M';
            if (val >= 1000) return '$' + (val / 1000).toFixed(2) + 'k';
            return '$' + val.toFixed(2);
        }

        // Deposits per sport per person: { sport: { person: { dayNumber: amount } } }
        const BANKROLL_DEPOSITS = {
            nba: {
                robego: { 69: 100, 75: 100, 76: 100, 77: 100 }, // 4/16: +$100, 4/22: +$100, 4/23: +$100, 4/24: +$100
                justin: { 69: 100 }            // 4/16: +$100
            },
            mlb: {
                robego: {},
                justin: {}
            }
        };
        function getDeposits(sub) {
            const sport = currentSport === 'mlb' ? 'mlb' : 'nba';
            return (BANKROLL_DEPOSITS[sport] && BANKROLL_DEPOSITS[sport][sub]) || {};
        }

        function calcMonthData(month) {
            const range = MONTH_RANGES[month];
            const startAmount = getMonthStart(month);
            let bankroll = startAmount;
            const data = [{ date: MONTH_RANGES[month].label + ' start', bankroll: startAmount }];
            betLog.forEach(day => {
                if (day.day < range.startDay || day.day > range.endDay) return;
                // Apply any deposit for this day
                const dep = getDeposits('robego')[day.day];
                if (dep) { bankroll += dep; bankroll = Math.round(bankroll * 100) / 100; }
                const decided = day.games.filter(g => (g.res === 'W' || g.res === 'L') && (g.sport || 'nba') === currentSport);
                if (decided.length === 0) { 
                    const dep2 = getDeposits('robego')[day.day];
                    if (dep2) data.push({ date: day.date + ' (+$' + dep2 + ')', bankroll });
                    return; 
                }
                if (bankroll <= 0) { data.push({ date: day.date, bankroll: 0 }); return; }
                const n = decided.length;
                const stake = bankroll / n;
                let newBankroll = 0;
                decided.forEach((g, i) => {
                    const s = i === n - 1 ? bankroll - (stake * (n - 1)) : stake;
                    const o = parseInt(g.pick === g.t1 ? g.o1 : g.o2);
                    if (g.res === 'W') newBankroll += o > 0 ? s + s * (o / 100) : s + s * (100 / Math.abs(o));
                });
                bankroll = Math.round(newBankroll * 100) / 100;
                if (bankroll < 0) bankroll = 0;
                data.push({ date: day.date, bankroll });
            });
            return data;
        }

        function calcJustinData(month) {
            // Justin logic: top 5 games by most positive odds, 20% stake each
            const range = MONTH_RANGES[month];
            const startAmount = getMonthStart(month, 'justin');
            let bankroll = startAmount;
            const data = [{ date: MONTH_RANGES[month].label + ' start', bankroll: startAmount }];
            betLog.forEach(day => {
                if (day.day < range.startDay || day.day > range.endDay) return;
                const jdep = getDeposits('justin')[day.day];
                if (jdep) bankroll = Math.round((bankroll + jdep) * 100) / 100;
                const decided = day.games.filter(g => (g.res === 'W' || g.res === 'L') && (g.sport || 'nba') === currentSport);
                const jdep2 = getDeposits('justin')[day.day];
                if (decided.length === 0) { if (jdep2) data.push({ date: day.date + ' (+$' + jdep2 + ')', bankroll }); return; }
                if (bankroll <= 0) { data.push({ date: day.date, bankroll: 0 }); return; }
                // Sort by odds descending (most positive first)
                const sorted = [...decided].sort((a, b) => {
                    const oA = parseInt(a.pick === a.t1 ? a.o1 : a.o2);
                    const oB = parseInt(b.pick === b.t1 ? b.o1 : b.o2);
                    return oB - oA;
                });
                const selected = sorted.slice(0, 5);
                let newBankroll = bankroll;
                selected.forEach(g => {
                    const stake = bankroll * 0.20;
                    const o = parseInt(g.pick === g.t1 ? g.o1 : g.o2);
                    if (g.res === 'W') newBankroll += o > 0 ? stake * (o / 100) : stake * (100 / Math.abs(o));
                    else newBankroll -= stake;
                });
                bankroll = Math.round(newBankroll * 100) / 100;
                if (bankroll < 0) bankroll = 0;
                data.push({ date: day.date, bankroll });
            });
            return data;
        }

        function buildMonthChart(month) {
            const canvas = document.getElementById('monthChart');
            if (!canvas) return;
            if (monthChartInstance) { monthChartInstance.destroy(); monthChartInstance = null; }
            const data = currentMoneySubTab === 'kelly' ? calcKellyData(month) : currentMoneySubTab === 'justin' ? calcJustinData(month) : calcMonthData(month);
            const startAmount = currentMoneySubTab === 'kelly' ? 100 : getMonthStart(month);
            const ctx = canvas.getContext('2d');
            const labels = data.map(d => d.date);
            const values = data.map(d => d.bankroll);
            const chartColor = currentMoneySubTab === 'robego' ? '#ef4444' : currentMoneySubTab === 'kelly' ? '#22c55e' : '#3b82f6';
            const chartColorRgb = currentMoneySubTab === 'robego' ? '239,68,68' : currentMoneySubTab === 'kelly' ? '34,197,94' : '59,130,246';
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, `rgba(${chartColorRgb},0.4)`);
            gradient.addColorStop(1, `rgba(${chartColorRgb},0)`);
            monthChartInstance = new Chart(ctx, {
                type: 'line',
                data: { labels, datasets: [{ data: values, borderColor: chartColor, borderWidth: 2.5, backgroundColor: gradient, pointBackgroundColor: values.map((v,i) => i > 0 && v < data[i-1].bankroll ? '#555' : chartColor), pointRadius: 5, pointHitRadius: 30, pointHoverRadius: 7, tension: 0.35, fill: true }] },
                options: { responsive: true, interaction: { mode: 'nearest', axis: 'x', intersect: false }, plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => fmtMoney(ctx.raw) }, backgroundColor: '#111', borderColor: chartColor, borderWidth: 1, titleColor: '#fff', bodyColor: chartColor } }, scales: { x: { ticks: { color: '#555', font: { size: 10 } }, grid: { color: '#111' } }, y: { ticks: { color: '#555', font: { size: 10 }, callback: v => fmtMoney(v) }, grid: { color: '#1a1a1a' } } } }
            });
            const startInput = document.getElementById('monthStartInput');
            if (startInput) {
                startInput.textContent = fmtMoney(startAmount);
                startInput.style.color = currentMoneySubTab === 'robego' ? '#ef4444' : '#3b82f6';
            }
            const robegoTab = document.getElementById('subTabRobego');
            const justinTab = document.getElementById('subTabJustin');
            const kellyTab = document.getElementById('subTabKelly');
            if (robegoTab) { robegoTab.style.color = currentMoneySubTab === 'robego' ? '#ef4444' : '#555'; robegoTab.style.borderBottomColor = currentMoneySubTab === 'robego' ? '#ef4444' : 'transparent'; }
            if (justinTab) { justinTab.style.color = currentMoneySubTab === 'justin' ? '#3b82f6' : '#555'; justinTab.style.borderBottomColor = currentMoneySubTab === 'justin' ? '#3b82f6' : 'transparent'; }
            if (kellyTab) { kellyTab.style.color = currentMoneySubTab === 'kelly' ? '#22c55e' : '#555'; kellyTab.style.borderBottomColor = currentMoneySubTab === 'kelly' ? '#22c55e' : 'transparent'; }
            const current = values[values.length - 1] || startAmount;
            const gain = current - startAmount;
            const gainPct = startAmount > 0 ? Math.round((gain / startAmount) * 100) : 0;
            const headerProgress = document.getElementById('monthHeaderProgress');
            if (headerProgress) headerProgress.innerHTML = `<div style="font-size:18px;font-weight:900;color:${gain>=0?'#22c55e':'#ef4444'};font-family:monospace;">$${current.toFixed(2)}</div><div style="font-size:10px;color:${gain>=0?'#22c55e':'#ef4444'};opacity:0.8;">${gain>=0?'+':''}$${gain.toFixed(2)} (${gainPct}%)</div>`;
            const summaryEl = document.getElementById('monthSummary');
            if (summaryEl) summaryEl.innerHTML = `<div style="font-size:10px;color:#555;letter-spacing:2px;">CURRENT BANKROLL</div><div style="font-size:28px;font-weight:900;color:${gain>=0?'#22c55e':'#ef4444'};font-family:monospace;text-shadow:0 0 12px rgba(34,197,94,0.5);">$${current.toFixed(2)}</div><div style="font-size:11px;color:${gain>=0?'#22c55e':'#ef4444'};opacity:0.7;">${gain>=0?'+':''}$${gain.toFixed(2)} (${gainPct}%) in ${MONTH_RANGES[month].label}</div>`;
            const peak = Math.max(...values);
            const peakDay = data.find(d => d.bankroll === peak)?.date || '';
            let bestDiff = 0, bestDay = '';
            data.slice(1).forEach((d, i) => { const diff = d.bankroll - data[i].bankroll; if (diff > bestDiff) { bestDiff = diff; bestDay = d.date; } });
            const peakEl = document.getElementById('monthStatPeak');
            const peakDayEl = document.getElementById('monthStatPeakDay');
            const bestEl = document.getElementById('monthStatBest');
            const bestDayEl = document.getElementById('monthStatBestDay');
            if (peakEl) peakEl.textContent = fmtMoney(peak);
            if (peakDayEl) peakDayEl.textContent = peakDay;
            if (bestEl) bestEl.textContent = bestDiff > 0 ? '+' + fmtMoney(bestDiff) : '—';
            if (bestDayEl) bestDayEl.textContent = bestDay || '—';
            const breakdown = document.getElementById('monthBreakdown');
            if (breakdown) {
                const rows = data.slice(1).map((d, i) => { const prev = data[i].bankroll; const diff = d.bankroll - prev; const color = diff >= 0 ? '#22c55e' : '#ef4444'; const sign = diff >= 0 ? '+' : '-'; return `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 10px;background:#0a0a0a;border-radius:8px;border-left:3px solid ${color};"><span style="font-size:11px;font-weight:700;color:#fff;">${d.date}</span><span style="font-size:11px;font-weight:900;color:${color};font-family:monospace;">${sign}${fmtMoney(Math.abs(diff))}</span><span style="font-size:11px;font-weight:800;color:#aaa;font-family:monospace;">${fmtMoney(d.bankroll)}</span></div>`; }).join('');
                breakdown.innerHTML = `<div style="font-size:9px;color:#444;letter-spacing:2px;margin-bottom:4px;">DAY BY DAY</div>${rows}`;
            }
        }

        let currentMoneySubTab = 'robego';
        const MONTH_ORDER = ['feb', 'mar', 'apr', 'may', 'jun'];
        const MONTH_LABELS = { feb: 'FEBRUARY', mar: 'MARCH', apr: 'APRIL', may: 'MAY', jun: 'JUNE' };

        function prevMonth() {
            const idx = MONTH_ORDER.indexOf(currentMonthTab);
            if (idx > 0) showMonthTab(MONTH_ORDER[idx - 1]);
        }

        function nextMonth() {
            const idx = MONTH_ORDER.indexOf(currentMonthTab);
            if (idx < MONTH_ORDER.length - 1) showMonthTab(MONTH_ORDER[idx + 1]);
        }

        function showMonthTab(month) {
            currentMonthTab = month;
            const label = document.getElementById('monthLabel');
            if (label) label.textContent = MONTH_LABELS[month] || month.toUpperCase();
            setTimeout(() => buildMonthChart(month), 50);
        }

        function showMoneySubTab(sub) {
            currentMoneySubTab = sub;
            const robegoTab = document.getElementById('subTabRobego');
            const justinTab = document.getElementById('subTabJustin');
            const kellyTab = document.getElementById('subTabKelly');
            const startInput = document.getElementById('monthStartInput');
            if (robegoTab) { robegoTab.style.color = sub === 'robego' ? '#ef4444' : '#555'; robegoTab.style.borderBottomColor = sub === 'robego' ? '#ef4444' : 'transparent'; }
            if (justinTab) { justinTab.style.color = sub === 'justin' ? '#3b82f6' : '#555'; justinTab.style.borderBottomColor = sub === 'justin' ? '#3b82f6' : 'transparent'; }
            if (kellyTab) { kellyTab.style.color = sub === 'kelly' ? '#22c55e' : '#555'; kellyTab.style.borderBottomColor = sub === 'kelly' ? '#22c55e' : 'transparent'; }
            if (startInput) startInput.style.color = sub === 'robego' ? '#ef4444' : sub === 'kelly' ? '#22c55e' : '#3b82f6';
            setTimeout(() => buildMonthChart(currentMonthTab), 50);
        }

        function showMoneyTab(tab) { showMonthTab(currentMonthTab); }
        function buildRobegoChart() {}

        setTimeout(() => {
            loadMonthStarts();
            const startInput = document.getElementById('monthStartInput');
            if (startInput) {
                startInput.addEventListener('blur', () => {
                    const val = parseFloat(startInput.textContent.replace(/[^0-9.]/g,''));
                    if (!isNaN(val) && val >= 0) {
                        const _sport = currentSport === 'mlb' ? 'mlb' : 'nba';
                        if (!monthStartOverrides[_sport]) monthStartOverrides[_sport] = {};
                        if (!monthStartOverrides[_sport][currentMoneySubTab]) monthStartOverrides[_sport][currentMoneySubTab] = {};
                        monthStartOverrides[_sport][currentMoneySubTab][currentMonthTab] = val;
                        saveMonthStarts();
                        buildMonthChart(currentMonthTab);
                    }
                });
                startInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); startInput.blur(); } });
            }
        }, 1000);

        document.getElementById('logNavMoney').addEventListener('click', () => {
            document.getElementById('logPanelContent').style.display = 'none';
            document.getElementById('standingsContent').style.display = 'none';
            document.getElementById('betLogContent').style.display = 'none';
            document.getElementById('moneyContent').style.display = 'flex';
            document.getElementById('logNavMoney').classList.add('active');
            document.getElementById('logNavStandings').classList.remove('active');
            document.getElementById('logNavBetLog').classList.remove('active');
            document.getElementById('logBankroll').style.visibility = 'hidden';
            scrambleText(document.getElementById('logTitle'), 'money', 1200);
            document.getElementById('logBackBtn').style.display = '';
            document.getElementById('logParlayBtn').style.display = 'none';
            loadMonthStarts();
            showMonthTab(currentMonthTab);
        });
        document.getElementById('logNavStandings').addEventListener('click', () => {
            document.getElementById('logPanelContent').style.display = 'none';
            document.getElementById('standingsContent').style.display = 'flex';
            document.getElementById('betLogContent').style.display = 'none';
            document.getElementById('moneyContent').style.display = 'none';
            document.getElementById('logNavStandings').classList.add('active');
            document.getElementById('logNavBetLog').classList.remove('active');
            document.getElementById('logBankroll').style.visibility = 'hidden';
            scrambleText(document.getElementById('logTitle'), 'standings', 1200);
            document.getElementById('logBackBtn').style.display = '';
            document.getElementById('logParlayBtn').style.display = 'none';
            // Auto-refresh MLB standings when opening standings tab
            if (currentSport === 'mlb') {
                fetch(BACKEND_URL + '/api/mlb/standings')
                    .then(r => r.json())
                    .then(data => {
                        if (data && data.al && data.nl) {
                            mlbStandings = data;
                            reapplyMLBStandingsFromBetLog();
                            renderStandings(currentMLBLeague || 'al');
                        }
                    })
                    .catch(e => console.warn('MLB standings refresh failed', e));
            }
            showConference(currentSport === 'mlb' ? currentMLBLeague : currentConference);
        });
        document.getElementById('logNavBetLog').addEventListener('click', () => {
            document.getElementById('logPanelContent').style.display = 'none';
            document.getElementById('standingsContent').style.display = 'none';
            document.getElementById('betLogContent').style.display = 'flex';
            document.getElementById('moneyContent').style.display = 'none';
            document.getElementById('logNavBetLog').classList.add('active');
            document.getElementById('logNavStandings').classList.remove('active');
            document.getElementById('logBankroll').style.visibility = 'visible';
            scrambleText(document.getElementById('logTitle'), 'bet log', 1200);
            document.getElementById('logBackBtn').style.display = '';
            document.getElementById('logParlayBtn').style.display = 'none';
            renderBetLog();
            setTimeout(() => updateBetLogSubtitle(), 100);
        });

        // ===== CUSTOM KEYPAD =====
        let keypadTarget = null; // 'awayOdds' | 'homeOdds' | 'awayInj' | 'homeInj'
        let keypadValue = '';

        function openCustomKeypad(target) {
            keypadTarget = target;
            // odds: always clear on open. inj: pre-fill current value
            if (target === 'awayOdds' || target === 'homeOdds' || target === 'bbAwayOdds' || target === 'bbHomeOdds') keypadValue = '';
            else if (target === 'awayInj') keypadValue = String(awayInjuries || 0);
            else if (target === 'homeInj') keypadValue = String(homeInjuries || 0);
            updateKeypadDisplay();
            document.getElementById('customKeypad').style.display = 'block';
            document.getElementById('customKeypadOverlay').style.display = 'block';
            // show +/- only for odds
            document.getElementById('kbtnSign').style.display = (target === 'awayOdds' || target === 'homeOdds' || target === 'bbAwayOdds' || target === 'bbHomeOdds') ? '' : 'none';
        }

        function closeCustomKeypad() {
            document.getElementById('customKeypad').style.display = 'none';
            document.getElementById('customKeypadOverlay').style.display = 'none';
            keypadTarget = null;
            keypadValue = '';
        }

        function updateKeypadDisplay() {
            document.getElementById('keypadDisplay').textContent = keypadValue || '—';
        }

        function keypadPress(num) {
            if (keypadValue.length >= 6) return;
            // don't allow multiple leading zeros
            if (keypadValue === '0') keypadValue = num;
            else if (keypadValue === '+0' || keypadValue === '-0') keypadValue = keypadValue[0] + num;
            else keypadValue += num;
            updateKeypadDisplay();
        }

        function keypadToggleSign() {
            if (keypadValue.startsWith('-')) keypadValue = '+' + keypadValue.slice(1);
            else if (keypadValue.startsWith('+')) keypadValue = '-' + keypadValue.slice(1);
            else keypadValue = '+' + keypadValue;
            updateKeypadDisplay();
        }

        function keypadBackspace() {
            keypadValue = keypadValue.slice(0, -1);
            updateKeypadDisplay();
        }

        function keypadConfirm() {
            if (!keypadTarget) return;
            const val = keypadValue.trim();
            if (keypadTarget === 'awayOdds') {
                document.getElementById('awayTeamOdds').value = val;
                selectedOddsInput = document.getElementById('awayTeamOdds');
                document.getElementById('awayTeamOdds').style.outline = 'none';
            } else if (keypadTarget === 'homeOdds') {
                document.getElementById('homeTeamOdds').value = val;
                selectedOddsInput = document.getElementById('homeTeamOdds');
                document.getElementById('homeTeamOdds').style.outline = 'none';
            } else if (keypadTarget === 'awayInj') {
                const n = Math.max(0, parseInt(val) || 0);
                awayInjuries = n;
                document.getElementById('awayTeamInjDisplay').textContent = n;
            } else if (keypadTarget === 'homeInj') {
                const n = Math.max(0, parseInt(val) || 0);
                homeInjuries = n;
                document.getElementById('homeTeamInjDisplay').textContent = n;
            }
            if (keypadTarget === 'bbAwayOdds') {
                const el = document.getElementById('bbAwayOdds');
                if (el) { el.value = val; calculateBaseballEdge(); }
            } else if (keypadTarget === 'bbHomeOdds') {
                const el = document.getElementById('bbHomeOdds');
                if (el) { el.value = val; calculateBaseballEdge(); }
            }
            calculateGameWinnerEdge();
            closeCustomKeypad();
        }
