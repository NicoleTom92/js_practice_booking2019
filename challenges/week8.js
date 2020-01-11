const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let nextnum = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.length - 1) {
      nextnum = null;
    } else if (nums.indexOf(nums[i]) !== nums.length - 1) {
      if (nums[i] === n) {
        return nextnum = nums[i + 1];
      }
    }
  }
  return nextnum;
};


const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let number = { 
    1 : 0,
    0 : 0
  }
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "1") {
      number[1] += 1;
    } else {
      number[0] += 1;
    }
  }
  return number;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let reverseNum = parseInt(n.toString().split("").reverse().join(""));
  return reverseNum;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  for (let i = 0; i < arrs.length; i++) {
    arrs[i].forEach((i) => {
      total += i;
    });
  }
  return total;
};


const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  } else {
    return arr;
  }
    return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  let Needle = false;

  for (let key in haystack) {
    if (typeof haystack[key] === "string") {
        if (haystack[key].toLowerCase().includes(searchTerm.toLowerCase())){
          Needle = true;
        }
    }
  }
  return Needle;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  let wordfreq = str.replace(/[^\w\s]/gi, '').toLowerCase().split(' ')
  const obj = {};
  wordfreq.forEach(n => {
  obj[n] = obj[n] ? obj[n] + 1 : 1;
  });
  return obj

};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
