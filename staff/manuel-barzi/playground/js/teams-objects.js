// teams

var teams = {}

teams['Chicago Bulls'] = {}
teams['Chicago Bulls']['Michael Jordan'] = {}
teams['Chicago Bulls']['Michael Jordan']['jersey']= 23
teams['Chicago Bulls']['Michael Jordan']['height']= 198 

teams['Chicago Bulls']['Scottie Pippen'] = {}
teams['Chicago Bulls']['Scottie Pippen']['jersey']= 33
teams['Chicago Bulls']['Scottie Pippen']['height']= 203

teams['Chicago Bulls']['Dennis Rodman'] = {}
teams['Chicago Bulls']['Dennis Rodman']['jersey']= 91
teams['Chicago Bulls']['Dennis Rodman']['height']= 201

teams['Los Angeles Lakers'] = {}
teams['Los Angeles Lakers']['Kobe Bryant'] = {}
teams['Los Angeles Lakers']['Kobe Bryant']['jersey']= 24
teams['Los Angeles Lakers']['Kobe Bryant']['height']= 198 

teams['Los Angeles Lakers']['Pau Gasol'] = {}
teams['Los Angeles Lakers']['Pau Gasol']['jersey']= 16
teams['Los Angeles Lakers']['Pau Gasol']['height']= 211 

teams['Los Angeles Lakers']['Lebron James'] = {}
teams['Los Angeles Lakers']['Lebron James']['jersey']= 23
teams['Los Angeles Lakers']['Lebron James']['height']= 206

teams['Boston Celtics'] = {}
teams['Boston Celtics']['Paul Pierce'] = {}
teams['Boston Celtics']['Paul Pierce']['jersey']= 34
teams['Boston Celtics']['Paul Pierce']['height']= 201

teams['Boston Celtics']['Kevin Garnett'] = {}
teams['Boston Celtics']['Kevin Garnett']['jersey']= 5
teams['Boston Celtics']['Kevin Garnett']['height']= 211

teams['Boston Celtics']['Rajon Rondo'] = {}
teams['Boston Celtics']['Rajon Rondo']['jersey']= 9
teams['Boston Celtics']['Rajon Rondo']['height']= 185

// TODO add more teams (3) and players (3 per team)
// TODO print the players in the console (showing the team, the players, and the info related to them)
/*
[Team name]
- [Player name] ([jersey], [height]cm)
- [Player name] ([jersey], [height]cm)
...
[Team name]
- [Player name] ([jersey], [height]cm)
- [Player name] ([jersey], [height]cm)
...
[Team name]
- [Player name] ([jersey], [height]cm)
- [Player name] ([jersey], [height]cm)
...
*/


//console.log(Object.keys(teams))

var teamNames = Object.keys(teams)

for (var i = 0; i < teamNames.length; i++) {
    var teamName = teamNames[i]

    console.log(teamName)

    var players = teams[teamName]

    var playerNames = Object.keys(players)

    for (var j = 0; j < playerNames.length; j++) {
        var playerName = playerNames[j]

        var player = players[playerName]
        
        var playerInline = '- ' + playerName + ' (' + player['jersey'] + ', ' + player['height'] + 'cm' + ')'

        console.log(playerInline)
    }
}