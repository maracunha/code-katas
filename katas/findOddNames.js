function findOddNames(list) {
  
  function isOdd(v) {
    return v % 2 != 0
  }

  function hasOddName(obj) {
    let name = obj.firstName.split('')
    let sum = 0
    name.forEach(char => sum += char.charCodeAt(0))
    return isOdd(sum)
  }

  return list.filter(hasOddName) //?
}

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

var answer1 = [
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

findOddNames(list1) //?


// var list2 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
// ];

// var answer2 = [];

// findOddNames(list2)
