


var DnaTranscriber = function(){

  var complement = {
    G : 'C', C : 'G', T : 'A', A : 'U'
  };

  function transcribe(dna){
    return dna.split('').map(function (nuc) {
      if (!complement.hasOwnProperty(nuc)) throw new Error('Invalid input');
      return complement[nuc];
    }).join('');
  }

  this.toRna = (dna) => transcribe(dna);
}

module.exports = DnaTranscriber;
