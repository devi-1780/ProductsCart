//Math algorithms
//fibonnaci sequence
function fibonnaci(n) {
  let result = [];
  if (n >= 1) result.push(0);
  if (n >= 2) result.push(1);

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}
let fibonnaciSequence = fibonnaci(10);
console.log(fibonnaciSequence);

//2.factorial of number

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(6));

//3.check if the given number is prime number or not
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(2));

//4.Check if a Number is a Power of 2
function isPower(n) {
  if (n < 1) return false;
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
}
console.log(isPower(6));

//5.find GDC and LCM

function findGDC(a, b) {
  let gdc = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gdc = i;
    }
  }
  return gdc;
}
let gdc = findGDC(12, 18);
console.log(gdc);
function findLCM(a, b) {
  return (a * b) / findGDC(a, b);
}
console.log(findLCM(12, 18));

//6.Reverse the number
function reverseNum(num) {
  let str = String(num);
  let revStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    revStr.push(str[i]);
  }
  return Number(revStr.join(""));
}
let num = 123;
console.log(reverseNum(num));

//7.find sum of digits

function Sum(num) {
  let str = String(num);
  let arr = str.split("");
  let sum = arr.reduce((acc, num) => acc + Number(num), 0);
  return sum;
}
let num1 = 123;
console.log(Sum(num1));

//8.check the number is palindrome
function isNumPalindrome(num) {
  let str = String(num);
  let revStr = str.split("").reverse().join("");
  return str === revStr;
}
console.log(isNumPalindrome(122));

//9.Armstrong Number
function isArmstrongNumber(num) {
  let str = String(num);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]) ** str.length;
  }
  return num === sum;
}
console.log(isArmstrongNumber(153));

//10.Count the number of set bits (1s) in the binary representation of a given non-negative integer.
function countSetbit(num) {
  let binary = num.toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (Number(binary[i]) === 1) {
      count++;
    }
  }
  return count;
}
console.log(countSetbit(5));

//11.check if the number is power of 10
function isPowerOfTen(n) {
  if (n < 1) return false;

  while (n % 10 === 0) {
    n = n / 10;
  }

  return n === 1;
}

console.log(isPowerOfTen(100));

//12.Write a function to find the square root of a number without using any built-in methods like Math.sqrt().

function findSqrt(num) {
  if (num < 0) return NaN;
  for (let i = 1; i <= num; i++) {
    if (i * i === num) return i;
    if (i * i > num) return i - 1;
  }
}
console.log(findSqrt(10));

//arrays
//1.reverse Array
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}

const arr = [3, 5, 9, 1, 4];
let result = reverseArray(arr);
console.log(result, "....reverseArray");

//2.find Maximum and Minimum element
function findMaxAndMinVal(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return "Maximum Value = " + max + " And " + "Minimum Value = " + min;
}

const arr1 = [9, 5, 2, 4, 1];
console.log(findMaxAndMinVal(arr1));

//3.check if the array is sorted
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

let arr2 = [9, 5, 2, 4, 1, 2];
console.log(isSorted(arr2));

//4.find second largest element is array
function findSecondLargest(arr) {
  if (arr.length > 2) {
    let sortedArr = arr.sort();
    console.log(sortedArr);
    return sortedArr[arr.length - 2];
  }
}
console.log(findSecondLargest(arr2));

//5.Remove duplicates from array
function removeDuplicates(arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (!newArr.includes(arr[i])) {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr.slice(0, j + 1);
}
let newArr = removeDuplicates([1, 1, 2, 2, 3, 4, 4]);
console.log(newArr);

//6.move zeros to end
function moveZeroToEnd(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr1.push();
    }
  }
  return arr1;
}
let arr3 = [0, 5, 0, 3, 0, 0];
let zerosArr = moveZeroToEnd(arr3);
console.log(zerosArr, "...zeros array");

//Strings

//1.Reverse String without using built-in methods
function reverseString(str) {
  // let reverseStr = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverseStr = reverseStr + str[i];
  // }
  // return reverseStr;

  let arr = str.split("");
  console.log(arr);
  let arr1 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
  }
  return arr1.join("");
}
let str = "bhagi";
console.log(reverseString(str));

//2.check the string is palindrome
function isPalindrome(str) {
  if (str.length === 0) return true;
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return str === reverseStr ? true : false;
}
let palindrome = isPalindrome(str);
console.log(palindrome);

//3.count number of vowels and consonants
function countVowelsAndConsonants(str) {
  let vowelCount = 0;
  let consCount = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    } else {
      consCount++;
    }
  }
  return { vowels: vowelCount, consonants: consCount };
}
console.log(countVowelsAndConsonants("hello"));

//4.Remove duplicates from string

function removeDuplicateChars(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!newStr.includes(str[i])) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}
let newString = removeDuplicateChars("hello");
console.log(newString, "...");

//5.remove first non repeatin character from string

function firstNonReaptingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      console.log(str.indexOf(str[i]));
      console.log(str.lastIndexOf(str[i]));
      return str[i];
    }
  }
  return null;
}
console.log(firstNonReaptingChar("hello"));

//6.check two string are anagrams

function isAnagrams(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let sortedArr1 = arr1.sort();
  let sortedArr2 = arr2.sort();
  let sortedStr1 = sortedArr1.join("");
  let sortedStr2 = sortedArr2.join("");
  return sortedStr1 === sortedStr2;
}
let str1 = "hello",
  str2 = "ellohee";
let isAnagram = isAnagrams(str1, str2);
console.log(isAnagram);
//objects

//1.find the key with the maximum value in an object

function findMaxVal(obj) {
  let keys = Object.keys(obj);
  let maxKey = keys[0];
  let maxVal = obj[maxKey];
  for (let key in obj) {
    // console.log(obj[key]);
    if (obj[key] > maxVal) {
      maxVal = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}
let obj = { a: 2, b: 5, c: 3 };
console.log(findMaxVal(obj));
//2.check if an object is empty.

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({ a: 1 }));
//3.merge two objcts without overwriting properties

function mergeWithoutOverwrite(obj1, obj2) {
  let result = { ...obj1 };
  for (let key in obj2) {
    if (!(key in result)) {
      result[key] = obj2[key];
    }
  }
  return result;
}
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

console.log(mergeWithoutOverwrite(obj1, obj2));
//4.count the number of occurrence of each element in an arrya(using an object)

function countOccurrence(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }
  return count;
}
let array = [1, 1, 2, 3, 2, 1];
console.log(countOccurrence(["a", "a", "b"]));
//5.convert an object to an array and vice versa

let object = { a: 2, b: 1 };
let keys = Object.keys(object);
let values = Object.values(object);
let entries = Object.entries(object);
console.log(keys);
console.log(values);
console.log(entries);

let obj3 = Object.fromEntries(entries);
console.log(obj3);
//6.check if two objects are equal (deep comparison)

function isEqual(obj1, obj2) {
  return obj1 === obj2 && true;
}

console.log(isEqual({ a: 1 }, { a: 1 }), "...equal");
//medium

//1.Arrays
//1.find missing number in an array (1 to n)
function findMissingNum(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return expectedSum - sum;
}
console.log(findMissingNum([1, 2, 4, 5]));

//2.find union and intersection of two arrays

function getUnion(arr1, arr2) {
  let union = [...new Set([...arr1, ...arr2])];
  return union;
}
console.log(getUnion([1, 2, 3, 4], [3, 4, 5, 6]));

function getIntersection(arr1, arr2) {
  let intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}
console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

//3.Rotate an Array (Cyclic Rotation by K Steps)

function rotate(arr, k) {
  for (let i = 1; i <= k; i++) {
    let num = arr.pop();
    arr.unshift(num);
  }
  console.log(arr);
}
rotate([1, 2, 3, 4, 5], 2);

//4.two sum problem

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(twoSum([1, 2, 4, 7], 9));

//5.first non repeating element in array

function firstNonReaptingEle(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
  return null;
}
console.log(firstNonReaptingEle([1, 2, 1, 3]));

//string

//1.Reverse each word in a sentence

function reverseEachWord(str) {
  let sen = [];
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let arr1 = arr[i].split("");
    sen.push(arr1.reverse().join(""));
  }
  return sen.join(" ");
}
let reverseSen = reverseEachWord("hello world");
console.log(reverseSen);

//2.find the longest word in sentence

function longestWord(str) {
  let arr = str.split(" ");
  let maxWord = arr[0];
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].length);
    if (arr[i].length > maxWord.length) {
      maxWord = arr[i];
    }
  }
  return maxWord;
}
console.log(longestWord("I am a frontend developer"));

//objects

//1.Remove a Property from an Object Without Mutating the Original Object

function removeProp(obj, key) {
  let obj1 = { ...obj };
  delete obj1[key];
  return obj1;
}
const object1 = { a: 1, b: 2, c: 3 };
const key = "b";
console.log(removeProp(object1, key));

//2.find the most frequent value in an object's properties

function findFreqVal(obj) {
  let values = Object.values(obj);

  let max = 0;
  let prop = "";
  for (let i = 0; i < values.length; i++) {}
  return prop;
}
const objOne = {
  a: "apple",
  b: "banana",
  c: "apple",
  d: "orange",
  e: "banana",
  f: "apple",
};
console.log(findFreqVal(objOne));

//3.deep clone an object (without JSON methods)

function deepCloneObj(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    newObj[key] = deepCloneObj(obj[key]);
  }
  return newObj;
}
console.log(deepCloneObj({ a: 1, b: 2, c: 3 }));

//4.sort Array of objects using specific property

function sortArrayByProperty(arr, prop, bool) {
  let arr1 = arr.sort((a, b) => {
    if (bool) {
      return a[prop] - b[prop];
    } else {
      return b[prop] - a[prop];
    }
  });
  return arr1;
}
const arrOne = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 20 },
];

const sortedArr = sortArrayByProperty(arrOne, "age", false);
console.log(sortedArr);

//5.group an Array of objects By a property

function groupByProperty(arr, prop) {
  let grouped = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][prop];
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(arr[i]);
  }
  return grouped;
}

const array1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
];

const grouped = groupByProperty(array1, "age");
console.log(grouped);

//Advance

//Arrays
//1.Subarray Sum Equals K (Kadane’s Algorithm Variant);
function findSubArr(arr, k) {
  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    let subArr = [];
    for (let end = start; end < arr.length; end++) {
      subArr.push(arr[end]);
      // console.log(subArr);
      sum += arr[end];
      if (sum === k) {
        console.log(subArr);
      }
    }
  }
}
findSubArr([1, 2, 1], 3);

//find the majority Element
function findMajorityEle(arr) {
  let count = 0;
  let freEle = null;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      freEle = arr[i];
    }
    count += arr[i] === freEle ? 1 : -1;
  }
  console.log(freEle);
}
findMajorityEle([2, 2, 2, 1, 2, 3, 2, 2, 3, 1]);

//3.Find Pairs with Given Difference
function findDiffSubArr(arr, k) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && Math.abs(arr[i] - arr[j]) === k) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(res);
}
findDiffSubArr([1, 5, 3, 4, 2], 2);
