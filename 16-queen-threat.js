const generateBoard = function(wQueen,bQueen) {
  const DIM = 8;
  let board = Array(DIM);
  for (let i = 0; i < DIM; i++) {
    board[i] = Array(DIM);
    for (let j = 0; j < DIM; j++) {
      if (wQueen[0] === i && wQueen[1] === j) board[i][j] = 1;
      else if (bQueen[0] === i && bQueen[1] === j) board[i][j] = 1;
      else board[i][j] = 0;
    }
  }
  return board;
};

const queenThreat = function(board) {
  let pos = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        pos.push([i,j]);
      }
    }
  }
  if (pos.length < 2) return false;
  if (pos[0][0] === pos[1][0] || pos[0][1] === pos[1][1] ||
    Math.abs(pos[0][0] - pos[1][0]) === Math.abs(pos[0][1] - pos[1][1])) return true;
  return false;
};

let whiteQueen = [0, 0]; // 1st number is main array, 2nd is sub array
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));