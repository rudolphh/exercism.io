
function Binary(number){
  this.toDecimal = function(){
    if(/[^01]/.test(number)) return 0;
    return number.split('').reverse().reduce(function(sum, digit, i) {
      return sum + digit * Math.pow(2, i)
    }, 0);
  }
}

module.exports = Binary;
