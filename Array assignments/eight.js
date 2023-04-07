//simple program to sum of 2D  array in javascript //
const twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let sum = 0;
  
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      sum += twoDArray[i][j];
    }
  }
  
  console.log(sum); 
  