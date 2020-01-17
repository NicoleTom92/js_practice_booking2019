
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required");
  let total = 0;
  arr.forEach(n => {
    if (n % 5 === 0 || n % 3 === 0) {
      total += n;
    }
  });
  return total;
};

const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("a string is required");
  let isDNA = false;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "A") {
      isDNA = true;
    } else if (str.charAt(i) === "T") {
      isDNA = true;
    } else if (str.charAt(i) === "G") {
      isDNA = true;
    } else if (str.charAt(i) === "C") {
      isDNA = true;
    } else {
      isDNA = false;
      return isDNA;
    }
  }
  return isDNA;
};

const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("a string is required");
  if (isValidDNA(str) === false) throw new Error("not a valid DNA string");
  let complementArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "A") {
      complementArray.push("T");
    } else if (str.charAt(i) === "T") {
      complementArray.push("A");
    } else if (str.charAt(i) === "G") {
      complementArray.push("C");
    } else if (str.charAt(i) === "C") {
      complementArray.push("G");
    }
  }
  return complementArray.join("");
};


const isItPrime = i => {
  if (i === undefined) throw new Error("n is required");
  if (!Number.isInteger(i)) throw new Error("a number is required")
  if (i <= 1) {
    return false;
  }
  for (let i = 2; i < (Math.sqrt(i)); i++) {
    if (i % i === 0) {
      return false;
    }
  }
  return true;
};


const createMatrix = (i, fill) => {
  if (i === undefined) throw new Error("n is required");
  if (!Number.isInteger(i)) throw new Error("a number is required")
  if (fill === undefined) throw new Error("fill is required");
  return Array(i).fill(Array(i).fill(fill));
};


const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let noOfStaff = 0;

  staff.forEach((person) => {
    for (let i = 0; i < person.rota.length; i++) {
      if (person.rota[i] === day) {
        noOfStaff++;
      }
    }
  });
  let Coveravail = false;
  if (noOfStaff >= 3) {
    Coveravail = true;
  }
  return Coveravail;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
