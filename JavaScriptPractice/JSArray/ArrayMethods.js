console.log("---------- Array Methods ----------------");

//1. Lenght
var arr = [2,5,4,4,1,7,8,9]

console.log("Lenght of Array is:-", arr.length)
console.log("--------------------------------------------------");

//2. toString - Convert array into String
var arr1 = [2,5,4,4,1,7,8,9]

console.log("Convert Array into String is:-", arr1, arr1.toString())
console.log("--------------------------------------------------");

//3. at - Access element using index
var arr2 = [11,21,2,5,7,8,9,1]
console.log(arr2.at(1));
console.log("--------------------------------------------------");

//4. push - to add element add end of an array
 var arr3 = [10, 40];
 arr3.push(70);
 console.log(arr3);
console.log("--------------------------------------------------");

//5. pop - Remove element from end of array
var arr4 = [20, 40, 60, 90]
arr4.pop();
console.log(arr4);
console.log("--------------------------------------------------");

//6. unshift - to add element at begining of array
var arr5 = [90, 50, 40];
arr5.unshift(100);
console.log(arr5);
console.log("--------------------------------------------------");

//7. shift - remove first element from an array
var arr6 = [190, 250, 410];
arr6.shift();
console.log(arr6);
console.log("--------------------------------------------------");

//8. splice - Add or Remove element from array at specific index value
var a1 = [3,5,6,7,8,'p','q','r','s'];
a1.splice(2,0,110);
console.log(a1);
console.log("++");
a1.splice(5,1)
console.log(a1);
console.log("--------------------------------------------------");

//9. concat - Joind two array
var b1 = [10, 20]
var b2 = [30, 40]
var c = b1.concat(b2);
console.log(c);
console.log("--------------------------------------------------");

//10. slice

console.log("--------------------------------------------------");
//11. flat

console.log("--------------------------------------------------");
//12. Indexof

console.log("--------------------------------------------------");
//13. Includes
//14. Find
//15. sort
//16. Reverse
//17. Join