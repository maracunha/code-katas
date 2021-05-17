function smallEnough(a, limit){
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) return false
  }
  return true
}

//true
smallEnough([66, 101], 200) //?
smallEnough([5, 3], 3)//?
smallEnough([101, 45, 75, 105, 99, 107],107) //?

//false
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) //?
