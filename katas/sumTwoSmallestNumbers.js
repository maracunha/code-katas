function sumTwoSmallestNumbers(numbers) {  
  let n = numbers.sort((a,b) => a -b)
  return n[0] + n[1] //?
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]) //? //13