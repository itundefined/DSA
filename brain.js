const colors = require("colors");

// All of the algorithms to write

// Given an array containing n integers, and an number and an number denoting a target sum, return an of those two number's index in array which can add to the target sum, and output should be in the same order as you would get the input;

// Time Complexity of this Algorithm  = O(N);
const TwoSum = (inputArray = [10, 5, 2, 3, -6, 9, 11], target = 4) => {
  // over Here we may use the one more data structure to just split the time and take time complexity from o(n^2) -> ot o(n)

  const hashmap = {};

  let indexer = -1;

  for (const element of inputArray) {
    indexer++;
    let NumToFind = target - element;

    // If we find that element in our hashmap thne we can just return

    if (hashmap[NumToFind] !== undefined) {
      console.log(colors.cyan.bold.italic.underline([hashmap[NumToFind], indexer]));
      return hashmap[NumToFind], indexer;
    }

    // else if the element is undefined which means there is no element like this exist yet;
    else if (hashmap[NumToFind] === undefined) {
      hashmap[element] = indexer;
    }
  }
};


// Given an array containing n integers, and an number  denoting a target sum; Find all distinct integers that can add to the target sum. The number in each triplet should be ordered in ascending order, and triplets should  be ordered too. *Return an empty array if no such triplet exist*

// Time complexity of this algorithm is O(N^2).
const ThreeSum = (inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], target = 18) => {

  let answer = [];

  for (let index = 0; index < inputArray.length - 2; index++) {
    let lowerValuePointer = index + 1;
    let higherValuePointer = inputArray.length - 1;
    let CurrentElement = inputArray[index];

    for (let index2 = index + 1; index2 < inputArray.length; index2++) {
        let lowerPointerActualValue = inputArray[lowerValuePointer];
        let higherPointerActualValue = inputArray[higherValuePointer];

        if (CurrentElement + lowerPointerActualValue + higherPointerActualValue > target) higherValuePointer--;
        
        else if (CurrentElement + lowerPointerActualValue + higherPointerActualValue < target)  lowerValuePointer++; 

        else if (CurrentElement + lowerPointerActualValue + higherPointerActualValue === target) {
          answer.push([CurrentElement, lowerPointerActualValue, higherPointerActualValue]);
          break;}
      }
  }

  console.log(colors.bold.italic.underline.cyan(answer));
  return answer;
};