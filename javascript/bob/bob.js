
function Bob(){}

Bob.prototype.hey = function(message){
  // if all caps
  if(message.toUpperCase() === message && /[A-Z]/.test(message))
    return 'Whoa, chill out!';
  else if (message.trim().substr(-1) === '?')
    return 'Sure.';
  else if (/[a-z]|[0-9]/.test(message.trim()))
    return 'Whatever.';
  else return 'Fine. Be that way!';
}

module.exports = Bob;
