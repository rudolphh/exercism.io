
function Matrix(matrix){
  this.rows = [];
  this.columns = [];

  let endline = matrix.indexOf('\n');
  let remainder = matrix;
  let row;

  while( remainder !== ''){

    if(endline !== -1) {
      row = remainder.slice(0, endline);
      remainder = remainder.slice(endline+1);
      endline = remainder.slice(0).indexOf('\n');
    }
    else {
      row = remainder.slice(0);
      remainder = '';
    }

    this.rows.push(row.split(' ').map((number) => +number));
  }

  let col = [];
  for(let i = 0; i < this.rows.length; i++){
    for(let j = 0; j < this.rows.length; j++){
      col.push(this.rows[j][i]);
    }
    this.columns.push(col);
    col = [];
  }

}

module.exports = Matrix;
