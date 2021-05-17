/**
 * 
 * str Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces. 
 */

function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']; 
  let count = 0;

  for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index])) count += 1;
  }
  
  return count;
}

const a = [1,2,4];
a;
console.log(getCount('abracadabra'), 5); 