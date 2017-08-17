
var a_ascii = 'a'.charCodeAt(0);// 97 - 0
var z_ascii = 'z'.charCodeAt(0);// 122 - 25

function Cipher(key){

  this.key = (typeof key !== 'undefined') ? validate(key) : randomKey(100);

  function validate (key){
    if(!key.match(/^[a-z]+$/)) throw new Error('Bad key');
    else return key;
  }

  function randomKey(length) {
    var key = "",
        range = z_ascii - a_ascii;
    for(var i = 0; i < length; i++) {
        key += String.fromCharCode(Math.floor(Math.random() * range + a_ascii));
    }
    return key;
  }
}

Cipher.prototype.encode = function(plaintext){
  return plaintext.split('').map((letter, i) => {
    // get the new letter ascii code, keeping in mind the key maybe shorter
    // than the plaintext so mod index by the key length
    var charCode = letter.charCodeAt(0) + this.key[i%this.key.length].charCodeAt(0);
    charCode -= 2 * a_ascii;// remove how we've basically added 97 (a_ascii) twice
    // now remainder 26 (not same as modulo). this way to leave open for keys
    // with a wider range of ascii values if we want in the future
    charCode %= z_ascii - a_ascii + 1;
    charCode += a_ascii; // now get it back to ascii equivalent

    return String.fromCharCode(charCode);
  }).join('');
}

Cipher.prototype.decode = function(encoded){
  // because % is remainder and not true modulo (dealing w/ negatives)
  function mod(n, m) { return ((n % m) + m) % m; }

  return encoded.split('').map((letter, i) => {
    var charCode = letter.charCodeAt(0) - this.key[i%this.key.length].charCodeAt(0);
    charCode = mod(charCode, z_ascii - a_ascii + 1);
    charCode += a_ascii;
    return String.fromCharCode(charCode);
  }).join('');
}

module.exports = Cipher;
