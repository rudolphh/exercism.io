
function LinkedList(){
  let list = [];
  this.count = () => list.length;
  this.push = (val) => { list.push(val); }
  this.pop = () => list.pop();
  this.unshift = (val) => { list.unshift(val); }
  this.shift = () => list.shift();
  this.delete = (val) => { list.splice(list.indexOf(val), 1); }
}

module.exports = LinkedList;
