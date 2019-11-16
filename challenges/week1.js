/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  var name = firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
  return (name);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  var Calc = (originalPrice / 100 * vatRate) + originalPrice;
  var Decimals = Calc.toFixed(2);
  var num = Decimals.toString();
  var nums = num.slice(0, (num.indexOf(".")) + 3);
  var Number1 = Number(nums)
  return Number1
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  var sale = originalPrice - (originalPrice / 100 * reduction);
  var answer = Math.round(sale * 100) / 100;
  return answer
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
}


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let convertString = words.toString();
  let splitString = convertString.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  let joinArray2 = joinArray.split(",");
  let reverseArray2 = joinArray2.reverse();
  return reverseArray2;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let CountUsers = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux") {
      CountUsers++
    }
  }
  return CountUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
    let totalSum = 0;
    for (let i in scores) {
      totalSum += scores[i];
    }
    let scoreCount = scores.length;
    let average = totalSum / scoreCount;
    return Number(average.toFixed(2))
  }



function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  for (var i=1; i < 101; i++){
    if (n % 15 == 0) return ("fizzbuzz");
    else if (n % 3 == 0) return ("fizz");
    else if (n % 5 == 0) return ("buzz");
    else return(n);
}
}


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
}; 