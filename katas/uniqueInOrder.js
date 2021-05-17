function uniqueInOrder(iterable){
  if (iterable.length < 1) return [];
  if (iterable.length < 2) return [iterable];
  
  let arr = [];

  if (Array.isArray(iterable)) {
    arr = iterable.reduce((acc, curr) => {
      if (acc[acc.length -1] !== curr){
        return [...acc, curr];
      }
      return [...acc];
    }, []);
  }

  if (!Array.isArray(iterable)) {

    arr = iterable.split('').reduce((acc, curr) => {
      if (acc[acc.length -1] !== curr){
        return [...acc, curr];
      }
      return [...acc];
    });
  }

  return arr;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('A')=== ['A']);
console.log(uniqueInOrder(''));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));