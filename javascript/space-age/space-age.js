
var EARTH_YEAR = 31557600; // in seconds

function SpaceAge(seconds){
  this.seconds = seconds;
}

function toEarth(ratio) {
  return function () { // closure
    return +(this.seconds/(EARTH_YEAR*ratio)).toFixed(2);
  }
}

SpaceAge.prototype.onEarth = toEarth(1);
SpaceAge.prototype.onMercury = toEarth(0.2408467);
SpaceAge.prototype.onVenus = toEarth(0.61519726);
SpaceAge.prototype.onMars = toEarth(1.8808158);
SpaceAge.prototype.onJupiter = toEarth(11.862615);
SpaceAge.prototype.onSaturn = toEarth(29.447498);
SpaceAge.prototype.onUranus = toEarth(84.016846);
SpaceAge.prototype.onNeptune = toEarth(164.79132);

module.exports = SpaceAge;
