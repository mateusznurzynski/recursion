const fibs = function fibs(desiredLength) {
  let first = 0;
  let second = 1;

  const result = [];
  for (let i = 0; i < desiredLength; i++) {
    const newNumber = first + second;
    if (i === 0) {
      result.push(first);
    } else if (i === 1) {
      result.push(second);
    } else {
      first = second;
      second = newNumber;
      result.push(newNumber);
    }
  }

  return result;
};

console.log(fibs(7));
console.log(fibs(40));

const fibsRec = function fibsRec(desiredLength) {
  if (desiredLength === 1) {
    return [0];
  }
  if (desiredLength === 2) {
    const array = fibsRec(desiredLength - 1);
    array.push(1);
    return array;
  }
  const newArray = fibsRec(desiredLength - 1);
  newArray.push(newArray[newArray.length - 2] + newArray[newArray.length - 1]);
  return newArray;
};

console.log(fibsRec(7));
console.log(fibsRec(40));
