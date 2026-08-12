//Array: it is collectio of element to store value in a single element

const arr = [1, 2, 3, 'A', 'B', 'C', ['Hi', 'Hello'], 8];
console.log("Array is:-",arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

//Method
//1. Lenght - Find Lenght of Array
console.log("Lenght of Array is:-", arr.length)
//2. toString - convert array into string
console.log("Conversion of array into string is:-",arr.toString());
//3. at() - access element using indexing
console.log(arr.at(1))
console.log(arr.at(6))
//4.push() - Add element into array at last index
console.log(arr.push(11));
console.log(arr)
console.log(arr.push(['im','You']));
console.log(arr)
//5.pop() -  Remove element from array from last index
console.log(arr.pop());
console.log(arr)
//6.Unshift() - Add element at starting of an array
console.log(arr.unshift(['Disco', 'Dancer']));
console.log(arr)
//7. Shift() - Remove element at starting of an array
console.log(arr.shift(['Disco', 'Dancer']));
console.log(arr)
//8. Splice() -  Add/ Remove element from an any index from an array
//9. Concat() - merge two array
const arr1 = [1,2];
const arr2 = [3,4];

const arr3 = arr1.concat(arr2);
console.log(arr1, arr2, arr3)

//10. slice - return small porting of an array
// const arr = [1, 2, 3, 'A', 'B', 'C', ['Hi', 'Hello'], 8];

console.log(arr.slice(0,3))

//11.Indexof() - Return first index if given value if multiple then it will return into first only
//             0    1    2    3    4    5    6    7    8    9    10 
const arr4 = ['a', 'b', 'c', 'd', 'a', 'a', 'f', 'g', 'g', 'a', 'z']

console.log(arr4.indexOf('a'));
console.log(arr4.indexOf('b'));
console.log(arr4.indexOf(0));

//12. Include() - given provided value available or not and then retunr true or false
//13. sort() - sorting 


