export function count (string) {
  const result = {};
  string
    .split('')
    .forEach( ch =>  Object.prototype.hasOwnProperty.call(result, ch) ? result[ch] ++ : result[ch] = 1);
  
  return result;
}
