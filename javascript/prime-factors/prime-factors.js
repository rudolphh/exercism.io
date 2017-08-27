
function PrimeFactors(){}

PrimeFactors.prototype.for = function(number){
  if(number === 1) return [];
  let factors = [];

  for(let i = 2; i <= number; i++){
    while(number % i === 0){
      factors.push(i);
      number /= i;
    }
  }
  return factors;
}

module.exports = new PrimeFactors();
