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

const mergeSort = function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const leftHalf = array.slice(0, parseInt(array.length / 2));
  const rightHalf = array.slice(parseInt(array.length / 2), array.length);

  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  const leftSortedLength = leftSorted.length;
  const rightSortedLength = rightSorted.length;
  const totalLength = leftSortedLength + rightSortedLength;

  let leftIndex = 0;
  let rightIndex = 0;

  const resultArray = [];

  while (resultArray.length < totalLength) {
    if (leftIndex + 1 > leftSortedLength) {
      resultArray.push(rightSorted[rightIndex++]);
    } else if (rightIndex + 1 > rightSortedLength) {
      resultArray.push(leftSorted[leftIndex++]);
    } else if (leftSorted[leftIndex] < rightSorted[rightIndex]) {
      resultArray.push(leftSorted[leftIndex++]);
    } else {
      resultArray.push(rightSorted[rightIndex++]);
    }
  }

  return resultArray;
};

console.log(mergeSort([5, 2, 3, 4, 1]));
