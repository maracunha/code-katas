function tribonacci(signature,n){
  // if(n === 1) return [signature[0]]
  // if(n === 2) return [signature[0], signature[1]]
  // if(n === 3) return [signature[0], signature[1], signature[2]]
  if(n <= 3) {
    return signature.slice(0, n);
  }
  
  let values = [...signature];
  let index = 0;

  while(index < n - 3) {
    index++;
    let sun = values[values.length -1] + values[values.length -2] + values[values.length -3];
    values.push(sun);
  }
  return values;
}

console.log(tribonacci([1,1,1],10));
console.log(tribonacci([1,1,1],4));
console.log(tribonacci([300,200,100],0));
