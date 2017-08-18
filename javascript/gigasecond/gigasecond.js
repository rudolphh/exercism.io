
function Gigasecond(date){

  this.date = function() {
    return new Date(date.getTime() + Math.pow(10,12));
  }
}

module.exports = Gigasecond;
