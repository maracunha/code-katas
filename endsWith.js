function solution(str, ending){
  if (!ending.length) return true;

  if (str[str.length -1] === ending[ending.length -1]) {
    var newStr = str.slice(0, -1);
    var newEnding = ending.slice(0, -1);
    return solution(newStr, newEnding);
  }
  
  return false;
}

// or
// return str.endsWith(ending);


console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);
console.log(solution('sumo', 'omo'), false);
console.log(solution('ails', 'fails'), false);

console.log(solution('ails', 'fails'));


