function DNAStrand(dna){

  function revert(str) {
    switch (str) {
      case 'A':
        return 'T'
      case 'T':
        return 'A'
      case 'C':
        return 'G'
      case 'G':
        return 'C'
    }
  }
return dna.split('').map(revert).join('')

} 
DNAStrand("AAAA") /*?. $*/

function DNAStrand2(dna){
  function revert(str) {
    const table = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    }
    return table[str]
  }
return dna.split('').map(revert).join('')

}
DNAStrand2("AAAA") /*?. $*/
DNAStrand2("CGAA") //?
