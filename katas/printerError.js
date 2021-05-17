function printerError(s) {
  let errorLetters = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', "z", 'w', 'y']
    let l = s.length
    let error = 0
    
    s.split('').forEach(char => {
      if (errorLetters.includes(char)) {
        error++
      }
    });
    
  return `${error}/${l}`
}

var ss="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
printerError(ss) //?
//"3/56"