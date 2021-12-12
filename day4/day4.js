const fs = require("fs").promises;

const calls = [
  17, 11, 37, 7, 89, 48, 99, 28, 56, 55, 57, 27, 83, 59, 53, 72, 6, 87, 33, 82,
  13, 23, 35, 40, 71, 47, 78, 2, 39, 4, 51, 1, 67, 31, 79, 69, 15, 73, 80, 22,
  92, 95, 91, 43, 26, 97, 36, 34, 12, 96, 86, 52, 66, 94, 61, 76, 64, 77, 85,
  98, 42, 68, 84, 63, 60, 30, 65, 19, 54, 58, 24, 20, 25, 75, 93, 16, 18, 44,
  14, 88, 45, 10, 9, 3, 70, 74, 81, 90, 46, 38, 21, 49, 29, 50, 0, 5, 8, 32, 62,
  41,
];

const parseLines = async () => {
  const data = await fs.readFile("./data.txt", { encoding: "utf-8" });
  const formatData = data.split("\n").join(" ").split(",");

  return formatData;
};

const formatBoard = (board) => {
  const formattedBoard = board.split(" ").filter((ele) => ele.length > 0);
  const rowsAndColumns = [];

  for (let i = 0; i < 5; i++) {
    const number = i * 5;
    rowsAndColumns.push(formattedBoard.slice(number, number + 5));
  }

  return rowsAndColumns;
};

const formatData = (data) => {
  const boards = [];

  for (let board of data) {
    boards.push(formatBoard(board));
  }

  return boards;
};

const callLoop = (boards, calls) => {
  const allWinners = [];

  for (let call of calls) {
    const winner = checkIfBoardWon(boards, call);

    if (winner) {
      allWinners.push(calculateBoard(winner, call));
    }
  }

  return allWinners;
};

const checkIfBoardWon = (boards, call) => {
  for (let board of boards) {
    const addedValue = stampCall(board, call);

    if (addedValue) {
      const checkWin = didWin(board, addedValue, call);
      if (checkWin) {
        return board;
      }
    }
  }

  return false;
};

const stampCall = (board, call) => {
  for (let x = 0; x < board.length; x++) {
    const row = board[x];
    for (let y = 0; y < row.length; y++) {
      const cell = row[y];

      if (cell == call) {
        row[y] = true;
        return [x, y];
      }
    }
  }

  return false;
};

const didWin = (board, [row, column], call) => {
  let rowWon = true;
  let columnWon = true;

  for (let i = 0; i < 5; i++) {
    const cell = board[row][i];
    if (cell !== true) {
      rowWon = false;
      break;
    }
  }

  if (rowWon) return true;

  for (let i = 0; i < 5; i++) {
    const cell = board[i][column];
    if (cell !== true) {
      columnWon = false;
      break;
    }
  }

  if (columnWon) return true;

  return false;
};

const calculateBoard = (board, call) => {
  let sum = 0;

  for (let row of board) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] !== true) {
        sum += Number(row[i]);
      }
    }
  }

  return sum * call;
};

const data = parseLines()
  .then(formatData)
  .then((data) => callLoop(data, calls));

const theirBoards = [
  [
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19],
  ],

  [
    [3, 15, 0, 2, 22],
    [9, 18, 13, 17, 5],
    [19, 8, 7, 25, 23],
    [20, 11, 10, 24, 4],
    [14, 21, 16, 12, 6],
  ],

  [
    [14, 21, 17, 24, 4],
    [10, 16, 15, 9, 19],
    [18, 8, 23, 26, 20],
    [22, 11, 13, 6, 5],
    [2, 0, 12, 3, 7],
  ],
];

const theirCalls = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

// t t  t  t t
//  t t t t  t
// t  t  t t t
// t t t t  t
// t t t t  t

callLoop(theirBoards, theirCalls);
