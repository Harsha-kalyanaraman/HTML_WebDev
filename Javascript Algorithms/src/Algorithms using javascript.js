console.log("------------------------------------------------------");
console.log("\nBUBBLE SORT:");
/**
 * Declaring an unsorted Array
 */
let Array = ["adam","sox","denver","fox","boston","hat","madam","peel","goat","rug"];
console.log("\nUnsorted Array: \n"+Array);
/**
 * Bubble sorts the passed array in ascending order
 * @param {String[]} array - this is a string array
 * @type {String}
 */
function bubbleSort(array){
  /**
   * 
   * @type {boolean}
   */
  let right = array.length - 1;
  for ( let i = 0; i < right ; i++)
  {
    for(let j =0, k = 1; j < right ; j++,k++)
    {
      // console.log(i);
      // console.log(right);
      // console.log(j);
      if(array[j] > array[k]){ 
        console.log("\nswapped "+array[j]+" and "+array[k]);
        [array[j], array[k]] = [array[k], array[j]];
        console.log("Array after iteration\n" + array);
      }   
    }
    // console.log("i value"+i);
    // console.log("right value"+right);
    console.log("\n x----------------- Sorted Element "+array[right-i]+" -----------x\n");
  }
  console.log("\n x----------------- Sorted element "+ array[0]+" -----------x\n");
}
/**
 * @type {Object} bubbleSort
 * @property {String[]} param.Array - this is String Array param.
 */
  bubbleSort(Array);
 /**
  * Swaps the argument when out of order
  * @param {flag} swapped - accepts a flag when args are swapped
  */ 
console.log("\nSorted Array: \n"+Array);
/**
 * Binary search, Searches for a passed string element in the passed array
 * @param {String[]} arr - this is a sorted string array
 * @type {String}
 * @param {String} value - The element to be searched
 * @type {String}
 */
function binary_search(arr, value){
  console.log("\nElement to be found: "+value);
  let right = arr.length -1;
  let left = 0;
  let mid = 0;
  while(left <= right)
  {
    mid = Math.floor((right+left)/2)
    //if middle == value being searched
    if(arr[mid] == value){
      //return value
      return arr[mid];
    }
    else if(value > arr[mid]){
      // move the left mid + 1
      left = mid + 1;
    }
    else{
      // move the right mid - 1
      right = mid - 1;
    }
  }
  return "not found";
}
console.log("------------------------------------------------------");
console.log("BINARY SEARCH:")
/**
 * Binary search, Searches for a passed string element in the passed array
 * @param {Object} found - this is object param.
 * @param {String[]} param.Array - this is String Array param.
 * @param {String} "hat" - this is String param.
 */
let found  = binary_search(Array, "hat");
/**
 * Gets the index of the passed String element in the array
 * @param {String} found - this is String param.
 */
var a = Array.indexOf(found);
if(found !== "not found"){
console.log("Element '"+found+"' found in the index: "+a);}
else{
  console.log("Element not found, please enter an element in the array")
}
console.log("------------------------------------------------------");
console.log("\nPALINDROME: ")
console.log("\nChecking if the given input of Strings is a Palindrome: ")
/**
 * Checks each element of the passed string array is palindrome or not
 * @param {String[]} str - this is String Array param.
 */
function palindrome(str){
str=str.toLowerCase();
for(let i=0;i<str.length;i++){
  str=str.replace(' ','');
  str=str.replace(',','');
  str=str.replace('.','');
  str=str.replace('/','');
  str=str.replace('_','');
  str=str.replace('-','');
}
let copy = str.split('').reverse().join('');
if(copy===str){
  console.log("\n"+str+" reversed as "+copy,": The string is palindrome\n");
  return true;
}
console.log("\n"+str+" reversed as "+copy,": The string is not a palindrome\n");
return false;
}
for(i=0; i< Array.length;i++)
/**
 * Checks each element of the passed string array is palindrome or not
 * @param {Object} palindrome - this is object param.
 * @param {String[]} str - this is String Array param.
 */
  palindrome(Array[i]);