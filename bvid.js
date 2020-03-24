var bvid = (function () {
  var table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'
  var tr = {}
  for (let i = 0; i < 58; i++) {
    tr[table[i]] = i
  }
  var s = [11, 10, 3, 8, 4, 6]
  var r = ['B', 'V', '1', '', '', '4', '', '1', '', '7', '', '']
  var xor = 177451812
  var add = 8728348608

  function decode(x) {
    if (x.length !== 12 || (x[0] + x[1] + x[2] + x[5] + x[7] + x[9]).toUpperCase() !== r.join('')) {
      return null
    }
    let result = 0
    for (let i = 0; i < 6; i++) {
      result += tr[x[s[i]]] * (58 ** i)
    }
    result = ((result - add) ^ xor)
    return result > 0 && result < 1e9 ? result : null
  }


  function encode(x) {
    if (x <= 0 || x >= 1e9) {
      return null
    }
    x = (x ^ xor) + add
    let result = r.slice()
    for (let i = 0; i < 6; i++) {
      result[s[i]] = table[Math.floor(x / 58 ** i) % 58]
    }
    return result.join('')
  }

  return { encode, decode }
})()

if (typeof module !== 'undefined' && module != null) {
  module.exports = bvid
}
