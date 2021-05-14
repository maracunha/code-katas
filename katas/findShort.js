function findShort(s){
    let arr = s.split(' ').map(w => w.length)
    let small = arr[0]
    arr.forEach(n => {
        if (n < small ) small = n
    })
    return small
  }

function findShort2(s){
let arr = s.split(' ').map(w => w.length)
return Math.min(...arr)
}

  findShort("bitcoin take over the world maybe who knows perhaps") //?
  
  findShort2("bitcoin take over the world maybe who knows perhaps") //?
  