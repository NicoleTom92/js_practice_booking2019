function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") {
    return true;
  }
  return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (people % 40 === 0) {
    return Math.floor(people / 40);
  }
  else {
    return Math.floor(people / 40) + 1;
  }
}

function countSheep(arr) {
  let count = 0;
  if (arr === undefined) throw new Error("arr is required");
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === "sheep") {
      count +=1;
    }
  }
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.postCode[1] && person.address.city === "Manchester") {
    return true;
  }
  return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
