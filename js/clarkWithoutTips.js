console.log('===========================\n',`Clark's solution\n`, '============================' )

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

const findBestPlayers = (array) => {
  if(typeof Array && array[0] && array[0].name && array[0].rating) {
    return array.reduce(function(best, player) {
      return (best.rating || 0) > player.rating ? best : player;
    }, {})
  } else {
    return `You didn't input an array of players `
  }
}

let { wr, qb } = broncos.players

console.log('Const broncos\n --------------\n', broncos, '\n')
console.log('findBestPlayers(wr)\n -------------------')
console.log(findBestPlayers(wr), '\n\n')
console.log('findBestPlayers(qb)\n -------------------')
console.log(findBestPlayers(qb))
