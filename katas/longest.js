function longest(s1, s2) {
  let s = []
  s1.split('').forEach(str => {
    if (!s.includes(str)) s.push(str)
  });
  s2.split('').forEach(str => {
    if (!s.includes(str)) s.push(str)
  });
  return s.sort().join('') //?
}

function longest2(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('')
}


longest("aretheyhere", "yestheyarehere") //"aehrsty" //?
longest2("aretheyhere", "yestheyarehere") //?
