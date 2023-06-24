const fibs = function fibs(desiredLength) {
  let first = 0;
  let second = 1;

  const result = [];
  for (let i = 0; i < desiredLength; i++) {
    const newNumber = first + second;
    first = second;
    second = newNumber;

    result.push(newNumber);
  }

  return result;
};

console.log(fibs(7));
console.log(fibs(40));
