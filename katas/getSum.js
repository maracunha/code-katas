/**
 * Given two integers a and b, which can be positive or negative,
 * find the sum of all the integers between and including them and return it.
 * If the two numbers are equal return a or b.
 * 
 * Note: a and b are not ordered!
 */
function getSum( a,b ){
    if (parseFloat(a) === parseFloat(b)) return a

    let biggerN = a > b ? a : b //?
    let smallerN = biggerN == a ? b : a //?

    let sum = 0
    for (let i = smallerN; i <= biggerN; i++) {
        sum += i
    }
    return sum
 }

 getSum(-475,-556) //?
 getSum(3,6) //?
 getSum(-5, -5) //?

//  -42271

//  3 5 

//  3 4 5 6 = 18

//  3 - 1 

//  incremendo 2 vezes
