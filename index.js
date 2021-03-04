class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ''']+/g, '')
  }

  static titleize(string) {
    let words = string.split(' ')
    let newWords = [];
    let firstWord = true
    const noCapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let word of words) {
      if (noCapWords.indexOf(word) === -1 || firstWord) {
        firstWord = false
        newWords.push(this.capitalize(word))
      } else {
        newWords.push(word)
      }
    }
    return newWords.join(' ')
  }
}