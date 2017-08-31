
function Matrix(matrix){
  this.rows = matrix.split('\n').map( row => row.split(' ').map(num => +num) );
  this.columns = [];
  this.rows.forEach((elem, i) => {
		this.columns[i] = this.rows.map(item => item[i]);
  });
}

module.exports = Matrix;
