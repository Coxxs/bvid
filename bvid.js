var bvid = (function () {
  var table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'
  tr = {}
  for (var i = 0; i < 58; i++) {
    tr[table[i]] = i
  }
  var s = [11, 10, 3, 8, 4, 6, 2, 9, 5, 7]
  var xor = BigInt('177451812')
  var add = BigInt('100618342136696320')

  function decode(x) {
    r = BigInt(0)
    for (var i = 0; i < 10; i++) {
      r += BigInt(tr[x[s[i]]]) * (BigInt(58) ** BigInt(i))
    }
    r = ((r - add) ^ xor)
    return r > 0 && r < 1e9 ? r : null
  }


  function encode(x) {
    if (x <= 0 || x >= 1e9) {
      return null
    }
    x = (BigInt(x) ^ xor) + add
    r = ['B', 'V']
    for (var i = 0; i < 10; i++) {
      r[s[i]] = table[x / BigInt(58) ** BigInt(i) % BigInt(58)]
    }
    return r.join('')
  }

  return { encode, decode }
})()

if (typeof module !== 'undefined' && module != null) {
  module.exports = bvid
}