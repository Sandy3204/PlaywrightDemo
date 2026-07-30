//1. WAP to calculate sum of all value in array

function AddVal(arr){
    var sum = 0;
    for(var val of arr){
        sum = sum + val;
    }
    return sum;
}

var values = [2,3,4];
var output = AddVal(values);
console.log(output);

var arr1 = [1,2,3,4]
var sum = 0;
for(var v of arr1){
    sum = sum + v;
}
console.log(sum);

//2. WAP to get combination of 2 number from array whoes sum is 10;
 
var arr2 = [1, 4, 6, 7, 3, 8, 9,2]
var output1 = [];

for(var i=0; i < arr2.length; i++){
    for(j=i+1; j < arr2.length; j++){
        if(arr2[i] + arr2[j] == 10){
            output1.push([arr2[i], arr2[j]])
        }
    }
}
console.log(output1)

//3. WAP to get square of all even values and cub of odd values
var arr4 = [1, 2, 4, 5, 7, 8];

for(var val of arr4){   
    if(val%2 == 0){
        console.log(val**2)
    }
    else{
        console.log(val**3)
    }
}