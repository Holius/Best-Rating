console.log('===========================\n',`Clark's solution\n`, '============================' )

// Keep the broncos its own object, there is no need to imbed a function
// this is part of good OOD sense
// this would be accecptable if you made broncos a class
let broncos = {
  players: {
    qb: [
      {name: 'John Elway', rating: 100},
      {name: 'Jake Plummer', rating: 90},
      {name: 'Tim Tebow', rating: 80}
    ],
    wr: [
      {name: 'f', rating: 100},
      {name: 'the', rating: 90},
      {name: `b's`, rating: 180}
    ]
  }
}

// function that can be used to find any of goat the players
// you would make sure to pass broncos.players.qb
const findBestPlayers = (array) => {

  // this is checking to make sure anything we pass to this function
  // has the right stuff
  if(typeof Array && array[0] && array[0].name && array[0].rating) {

    // I'll link you an article on the .reduce function
    // this is getting into promise territory
    return array.reduce(function(best, player) {
      return (best.rating || 0) > player.rating ? best : player;
    }, {})
  } else {
    return `You didn't input an array of players `
  }
}

// new es6 syntax sugar
let { wr, qb } = broncos.players

console.log('Const broncos\n --------------\n', broncos, '\n')
console.log('findBestPlayers(wr)\n -------------------')
console.log(findBestPlayers(wr), '\n\n')
console.log('findBestPlayers(qb)\n -------------------')
console.log(findBestPlayers(qb))
