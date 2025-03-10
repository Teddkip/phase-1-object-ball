function numPointsScored(playerName) {
    // Assuming players data is stored in a variable called `players`
    for (let player of players) {
        if (player.name === playerName) {
            return player.points;
        }
    }
    return 0; // Return 0 if player not found
}

function shoeSize(playerName) {
    // Assuming players data is stored in a variable called `players`
    for (let player of players) {
        if (player.name === playerName) {
            return player.shoeSize;
        }
    }
    return null; // Return null if player not found
}

function teamColors(teamName) {
    // Assuming teams data is stored in a variable called `teams`
    for (let team of teams) {
        if (team.name === teamName) {
            return team.colors;
        }
    }
    return []; // Return empty array if team not found
}

function teamNames() {
    // Assuming teams data is stored in a variable called `teams`
    return teams.map(team => team.name);
}

function playerNumbers(teamName) {
    // Assuming teams data is stored in a variable called `teams`
    for (let team of teams) {
        if (team.name === teamName) {
            return team.players.map(player => player.number);
        }
    }
    return []; // Return empty array if team not found
}

function playerStats(playerName) {
    // Assuming players data is stored in a variable called `players`
    for (let player of players) {
        if (player.name === playerName) {
            return player.stats;
        }
    }
    return {}; // Return empty object if player not found
}

function bigShoeRebounds() {
    // Assuming players data is stored in a variable called `players`
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;

    for (let player of players) {
        if (player.shoeSize > largestShoeSize) {
            largestShoeSize = player.shoeSize;
            playerWithLargestShoe = player;
        }
    }

    return playerWithLargestShoe ? playerWithLargestShoe.rebounds : 0; // Return rebounds or 0 if no player found
}

//Bonus

// Function to return the player with the most points
function mostPointsScored(players) {
    let maxPoints = 0;
    let topPlayer = '';
    players.forEach(player => {
        if (player.points > maxPoints) {
            maxPoints = player.points;
            topPlayer = player.name;
        }
    });
    return { name: topPlayer, points: maxPoints };
}

// Function to return the team with the most points
function winningTeam(teams) {
    let maxPoints = 0;
    let topTeam = '';
    teams.forEach(team => {
        if (team.points > maxPoints) {
            maxPoints = team.points;
            topTeam = team.name;
        }
    });
    return { name: topTeam, points: maxPoints };
}

// Function to return the player with the longest name
function playerWithLongestName(players) {
    let longestName = '';
    players.forEach(player => {
        if (player.name.length > longestName.length) {
            longestName = player.name;
        }
    });
    return longestName;
}

//Super Bonus

// Function to return the player with the most points
function mostPointsScored(players) {
    let maxPoints = 0;
    let topPlayer = '';
    players.forEach(player => {
        if (player.points > maxPoints) {
            maxPoints = player.points;
            topPlayer = player.name;
        }
    });
    return { name: topPlayer, points: maxPoints };
}

// Function to return the team with the most points
function winningTeam(teams) {
    let maxPoints = 0;
    let topTeam = '';
    teams.forEach(team => {
        if (team.points > maxPoints) {
            maxPoints = team.points;
            topTeam = team.name;
        }
    });
    return { name: topTeam, points: maxPoints };
}

// Function to return the player with the longest name
function playerWithLongestName(players) {
    let longestPlayer = players[0];
    players.forEach(player => {
        if (player.name.length > longestPlayer.name.length) {
            longestPlayer = player;
        }
    });
    return longestPlayer;
}

// Function to check if the player with the longest name has the most steals
function doesLongNameStealATon(players) {
    const longestPlayer = playerWithLongestName(players);
    let maxSteals = 0;
    players.forEach(player => {
        if (player.steals > maxSteals) {
            maxSteals = player.steals;
        }
    });
    return longestPlayer.steals === maxSteals;
}

