/* eslint-disable no-undef */
function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map (total => total * total);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var arraywords = [];
  for (let i = 1; i < words.length; i++) {
    arraywords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return words[0] + arraywords.join('');
  }

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var Numberofsubjects = 0;
  for (var i=0; i<people.length; i++) {
    Numberofsubjects += people[i]["subjects"].length;
  }
  return Numberofsubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  var includesingredients = false;

menu.forEach (Object => {
  if (Object.ingredients.some (ObjectIngredient => ObjectIngredient === ingredient)) 
  {
    includesingredients = true;
  }
})
return includesingredients;
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  var sameNumbers = arr1.filter(function (i) {
    return arr2.indexOf(i) !== -1;
  });
  var sortedNum = sameNumbers.sort();
  var uniqueSet = new Set(sortedNum);
  var backToArray = [...uniqueSet];
  return backToArray;
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
