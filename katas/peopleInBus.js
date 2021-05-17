//Number of People in the Bus

function peopleInBus(arr) {
  let peopleIn = 0
  let peopleOut = 0

  arr.forEach(stop => {
    peopleIn += stop[0]
    peopleOut += stop[1]
  })
  return peopleIn - peopleOut
}

//5
peopleInBus([[10,0],[3,5],[5,8]]) //?
