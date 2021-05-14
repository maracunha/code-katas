function maskify(cc) {
  if (cc.length <= 4) return cc
  return `${'#'.repeat(cc.length -4)}${cc.slice(-4)}`
}


maskify('4556364607935616') //?
maskify('455') //?