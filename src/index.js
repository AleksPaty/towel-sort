
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortNumb = [];

  if(matrix && matrix.length > 0) {
    for(let arr of matrix) {
      matrix.indexOf(arr) % 2
        ? sortNumb = [...sortNumb, ...arr.sort((a, b) => b-a)]
        : sortNumb = [...sortNumb, ...arr]
    }
  }
  return sortNumb;
}
