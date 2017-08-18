
function Pangram (sentence) {
  var sentence = sentence.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

  this.isPangram = function(){
    return alphabet.every((letter) => sentence.includes(letter));
  }
}

module.exports = Pangram;
