function isVowel(char) {
  return [ 'a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// regular tail call (recursion)
function countVowels(count, str) {
  count += (isVowel(str[0]) ? 1 : 0);
  if (str.length <= 1) return count;
  return countVowels(count, str.slice(1));
}

// Trampolines for PTC (proper tail call)
function countVowelsTrampolined(count, str) {
  count += (isVowel(str[0]) ? 1 : 0);
  if (str.length <= 1) return count;
  return function f() {
    return countVowelsTrampolined(count, str.slice(1));
  }();
}

console.log(countVowels(0, 'ola'));

console.log(countVowelsTrampolined(0 , 'Quero uUmu'));
