/* Question 00

Given a collection of game outcome records, determine who all the players are by returning an array of their names.

The array should be ordered by how the names are encountered.

Example Input:

[
  { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
  { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
  { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
  { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
  { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
]

Expected Result:

['Alishah', 'Bob', 'Maria', 'Xu Jin', 'Elise']

*/

// PURE FUNCTION
const getAllPlayers = (games) => {
    const result = []

    for (const { winner, loser } of games) {
        if(!result.includes(winner)) {
            result.push(winner)
        }

        if(!result.includes(loser)) {
            result.push(loser)
        }
    }

    return result
}

const sampleInput = [
  { winner: "Alishah", loser: "Bob", loser_points: 3 },
  { winner: "Maria", loser: "Xu Jin", loser_points: 1 },
  { winner: "Elise", loser: "Bob", loser_points: 2 },
  { winner: "Elise", loser: "Maria", loser_points: 4 },
  { winner: "Alishah", loser: "Maria", loser_points: 2 },
  { winner: "Maria", loser: "Xu Jin", loser_points: 3 },
  { winner: "Xu Jin", loser: "Elise", loser_points: 2 },
];

const players = getAllPlayers(sampleInput);
console.log(players);
