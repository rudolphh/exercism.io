
function Matrix(matrix){
  this.rows = matrix.split('\n').map( row => row.split(' ').map(num => +num) );
  this.columns = this.rows.reduce((cols, curr, i) => {
    cols[i] = this.rows.map(row => row[i]);
    return cols;
  }, []);
}

module.exports = Matrix;
