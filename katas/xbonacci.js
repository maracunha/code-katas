/**
 * Well, time to expand the family a little more: think of a Quadribonacci starting with a 
 * signature of 4 elements and each following element is the sum of the 4 previous, a 
 * Pentabonacci (well Cinquebonacci would probably sound a bit more italian,
 * but it would also sound really awful) with a signature of 5 elements and each
 *  following element is the sum of the 5 previous, and so on.
 * 
 * Well, guess what? You have to build a Xbonacci function that takes a signature 
 * of X elements - and remember each next element is the sum of the last X elements
 * and returns the first n elements of the so seeded sequence.
 */

function Xbonacci (signature, n) {
  let len = signature.length;
  let newArr = [...signature];

  if(len > n) {
    return signature.slice(0, n);
  }

  for (let i = len; i < n; i++) {
    newArr[i] = newArr.slice(i - len).reduce(function (a, b) {
      return a + b;
    });
  }

  return newArr;//?
}

// (Xbonacci([0,1],10),[0,1,1,2,3,5,8,13,21,34]); //?
// (Xbonacci([1,1],10),[1,1,2,3,5,8,13,21,34,55]);
(Xbonacci([0,0,0,0,1],10),[0,0,0,0,1,1,2,4,8,16]); //?
// (Xbonacci([1,0,0,0,0,0,1],10),[1,0,0,0,0,0,1,2,3,6]);
(Xbonacci([1,0,0,0,0,0,0,0,0,0],20),[1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]);
