//First Challenge//
const SumOfDigits = n => {
  if (n === undefined) throw new Error("n required");
  if (!Number.isInteger(n)) throw new Error("number required");
  let stringOfNumbers = n.toString();
  let digitSum = 0;
  for (let i = 0; i < stringOfNumbers.length; i++) {
    digitSum += parseInt(stringOfNumbers[i])
  }
  return digitSum;
};

//Second Challenge 
const returnRange = (Start, End, Step) => {
  if (Start === undefined) throw new Error("start is required");
  if (End === undefined) throw new Error("end is required");
  if (Step === undefined || Step < 0) {
    Step = 1;
  }
  if (Start > End) {
    Start = [End, End = Start][0];
  }
  let array = []
  for (let i = Start; i <= End; i += Step) {
    array.push(i)
  }
  if (array[array.length - 1] < End) {
    array.push(End)
  }
  return array
};

//Third Challenge// 
const getScreentimeAlertList = (Users, date) => {
  if (Users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if(!Array.isArray(Users)) throw new Error("incorrect data used");
  if (typeof date !== "string") throw new Error("date")
  let result = []
  Users.map((obj) => obj.screenTime.filter((d) => d.date === date).map((u)=>Object.values(u.usage).reduce((a,b)=>a+b))> 100 && result.push(obj.username))
 return result
};


//Fourth Challenge//
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hex String required");
  if (hexStr.length >= 8) throw new Error("there are too many characters");
  
  let hex = "";
  if (hexStr.charAt(0) === '#') {hex = hexStr.substr(1);}
  
  let values = hex.split(''), r, g, b;

  if (hex.length === 2) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = r;
    b = r;
  } else if (hex.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16);
    g = parseInt(values[1].toString() + values[1].toString(), 16);
    b = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (hex.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
      return false;
  }
  return `rgb(${r},${g},${b})`
}

//Fifth Challenge//
const findWinner = board => {
  if (board === undefined) throw new Error("board required");
  let winner = null;
  let boardArr = [];
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    for (let i = 0; i < row.length; i++) {
      boardArr.push(row[i]);
    }
  }

  for (let i = 0; i < board.length; i++) {
    if ((boardArr[0] === boardArr[1]) && (boardArr[0] === boardArr[2])) {
      winner = boardArr[0];
    } else if ((boardArr[3] === boardArr[4]) && (boardArr[3] === boardArr[5])) {
      winner = boardArr[3];
    } else if ((boardArr[6] === boardArr[7]) && (boardArr[6] === boardArr[8])) {
      winner = boardArr[6];
    } else if ((boardArr[0] === boardArr[3]) && (boardArr[0] === boardArr[6])) {
      winner = boardArr[0];
    } else if ((boardArr[1] === boardArr[4]) && (boardArr[1] === boardArr[7])) {
      winner = boardArr[1];
    } else if ((boardArr[2] === boardArr[5]) && (boardArr[2] === boardArr[8])) {
      winner = boardArr[2];
    } else if ((boardArr[0] === boardArr[4]) && (boardArr[0] === boardArr[8])) {
      winner = boardArr[0];
    } else if ((boardArr[2] === boardArr[4]) && (boardArr[2] === boardArr[6])) {
      winner = boardArr[2];
    }
  }
  return winner;
};

module.exports = {
  SumOfDigits,
  returnRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};