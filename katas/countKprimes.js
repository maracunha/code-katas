//https://www.codewars.com/kata/5726f813c8dcebf5ed000a6b/train/javascript

function isPrime(n) {
  for (let i = 0; i < n; i++)
  if(n % i === 0) return false;
  return n > 1;
}

function countKprimes(k, start, nd) {
  const kPrime = []
  let i = start
  

  function findLen(n = 1) {
    let count = 0, i = 2
    while (i * i <= n) {
      while (n % i === 0) {
        count++
        n /= i
      }
      i++
    }
    if (n > 1) count++
    return count
  }

  while (i <= nd) {
    if (findLen(i) == k)
    kPrime.push(i)
    i++
  }
  return kPrime //?
}

// [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49, 51,
// 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]
// countKprimes(2, 0, 100)

//[8, 12, 18, 20, 27, 28, 30, 42, 44, 45, 50, 52, 63, 66, 68, 70, 75, 76,
//78, 92, 98, 99]
countKprimes(3, 0, 100) //? 


// *********

function puzzle(s) {
  let k2 = countKprimes(1, 0, s) //?
  let k3 = countKprimes(3, 0, s) //?
  let k7 = countKprimes(7, 0, s) //?

  let cnt = 0
  let ia = 0
    while (ia < k2.length){
      ib = 0
      while (ib < k3.length) {
        ic = 0
        while (ic < k7.length) {
          if ((k2[ia] + k3[ib] + k7[ic]) == s) cnt++
          ic++
        }
        ib++
      }
      ia++
    }
    return cnt
  // // return sum(1 for x in a for y in b for z in c if x + y + z == s)
  // let count = 0

  // for ( x in k2) {
  //   for (y in k3 ) {
  //     for (z in k7) {
  //       if ( x + y + x == s) count++
  //     }
  //   }
  // }
  
  // let i = 0, count = 0
  // while (i <= k7.length){
  //   if ((k2[i] + k3[i] + k7[i]) == s) {
  //     count++
  //   }
  //   i++
  // }
  // return count //?
}
//1
// puzzle(138) //?

//2
puzzle(143) //?

// res = 0
// for a in countKprimes(1, 1, s - 2):
//     for b in count_Kprimes(3, 1, s - a):
//         c = s - a - b
//         if c > 0 and primes(c) == 7:
//             res += 1
// return res