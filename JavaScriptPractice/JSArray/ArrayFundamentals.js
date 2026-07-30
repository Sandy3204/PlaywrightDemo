var arr = [3,4,5,6,7, 'Hello', [9,1,2], {a:212, b:322}, true, 1];
 
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[7]);

console.log(arr[6][1]);
console.log("-------------------------------------");

// Apply loop for array
var arr1 = [3,4,5,6,7,6,11,12];
console.log(arr1);
for(var a of arr1){
    console.log(a);
}
console.log("-------------------------------------");

// Square of an array
var arr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr2);
for(var b of arr2){
    console.log("Square of",b,"is:-", b**2);
}