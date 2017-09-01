
function LinkedList(){
  let list = [];

  const push = (val) => { list.push(val); }
  const pop = () => list.pop();

  const unshift = (val) => { list.unshift(val); }
  const shift = () => list.shift();

  const del = (val) => { if (list.indexOf(val)) list.splice(list.indexOf(val, 1)); }
}

module.exports = LinkedList;
