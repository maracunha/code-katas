function solution(string) {
  const regex = /([a-z])([A-Z])/g;
  const words = string.replace(regex, '$1 $2');
  return words;
}

/**
 * 
 * other solution 
 */
// const solution = string => {
//   return [...string].map((char) => {
//     return (char === char.toUpperCase()) ? ` ${char}` : char;
//   }).join('');
// }

console.log(solution('camelCasing'), '| camel Casing');
console.log(solution('camelCasingTest'), '| camel Casing Test');
 