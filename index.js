class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }
  static titleize(str) {
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = str.split(' ')
    return words.map(word=> arr.includes(word) && word !== words[0]? word : this.capitalize(word)).join(' ');
  }
}