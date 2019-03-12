var verses = require('assets/verses.json')

export function getVerseToday () {
  // https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
  var now = new Date()
  var start = new Date(now.getFullYear(), 0, 0)
  var diff = now - start
  var oneDay = 1000 * 60 * 60 * 24
  var day = Math.floor(diff / oneDay)

  var i = day % verses.length
  return verses[i]
}
