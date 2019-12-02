function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  function greaterthanone(number) {
    return number < 1;
  }

  let select = nums.filter(greaterthanone);
  return (select);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let findNamesBeginningWith = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === char) {
      findNamesBeginningWith.push(names[i]);
    }
  }
  return findNamesBeginningWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let wordswithverbs = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ") === true) {
      wordswithverbs.push(words[i]);
    }
  }
  return wordswithverbs;
}


function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let findIntegers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i]) === true) {
      findIntegers.push(nums[i]);
    }
  }
  return findIntegers
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  var cities = users.map(info => info.data.city.displayName);
  return cities;
}


function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(i => {
    var root = Math.sqrt(i);
    return Number(root.toFixed(2));
  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  var sentencescontaining = [];
  for (let i = 0; i < sentences.length; i++) {

    if (sentences[i].toLowerCase().indexOf(str.toLowerCase()) >= 0) {
      sentencescontaining.push(sentences[i]);
    }
  }
  return sentencescontaining;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
var largesides = [];
for (let i = 0; i < triangles.length; i++) {
  let biggest = Math.max.apply(Math, triangles[i]);
  largesides.push(biggest);
}
return largesides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
