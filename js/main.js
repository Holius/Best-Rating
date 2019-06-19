console.log('===========================\n',`Justin's solution\n`, '============================' )

const broncos = {
  players: {
  QB: {
    QB0: {name: 'John Elway', rating: 100},
    QB1: {name: 'Jake Plummer', rating: 90},
    QB2: {name: 'Tim Tebow', rating: 80}
    }
  },
//Above is the obj that I want to extract the rating of all QBs into an array such that it equals this: [100, 90, 80].
  bestQBRating: function () {
  const rateArray = []
  let allQBs = Object.keys(this.players.QB);
    for (i = 0; i < allQBs.length; i++) {
  rateArray.push(this.players.QB[allQBs[i]].rating); }
   let comparison = 0;
   for (let i = 0; i < rateArray.length; i++) { if (rateArray[i] > comparison) {comparison = rateArray[i]};
   }
  for (let i = 0; i < allQBs.length; i++) {
if (this.players.QB[allQBs[i]].rating = comparison) {
  return `The player with highest QB rating is ${this.players.QB[allQBs[i]].name}, and this QB's rating is ${comparison}.`;
  ;
      }
    }
  }
};

//Above is the function that gets the following array: [100, 90, 80].
//Then, it compares the element at index 0 to the next element - and so on - returning the highest rating for QBs.
//Then, it takes the highest rating and returns the name and rating of the best QB.

console.log('Const broncos\n --------------\n', broncos, '\n')
console.log('broncos.bestQBRating\n -------------------')
console.log(broncos.bestQBRating());
