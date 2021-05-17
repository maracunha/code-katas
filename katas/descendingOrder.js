function descendingOrder(n){
  let number = Array.from(String(n), Number).sort(function(a, b) {
    return b - a;
  }).join('');

  return parseInt(number);
}

// console.log(descendingOrder(0), 0)
// console.log(descendingOrder(1), 1)
// console.log(descendingOrder(111), 111)
// console.log(descendingOrder(15), 51)
// console.log(descendingOrder(1021), 2110)
// console.log(descendingOrder(123456789), 987654321)

console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
