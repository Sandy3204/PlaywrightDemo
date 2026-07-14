function greet(){
    return "Hello";
}
console.log(greet());

function addition(a, b){
    return a+b;
}

result = addition(10,20);
console.log(result);

function substraction(a, b){
    return a-b;
}
result = substraction(30,20);
console.log(result);

function multiplication(a,b){
    return a * b;
}
result = multiplication(10,10);
console.log(result);

console.log("#####################################################");
function Greeting(msg){
    console.log(msg);
}

Greeting("Good Morning");
Greeting("Welcome to Java Scripts");
Greeting("Good Eveninig");
console.log("----------------------------------------------------------");

var x = "Javascripts programimg";
Greeting(x)

console.log("----------------------------------------------------------");

function addition(a, b, c){
    console.log("Value of a is:-",a);
    console.log("Value of b is:-",b);
    console.log("Value of c is:-",c);
    console.log("Addition is:-", a+b+c);
}
addition(10, 20, 30);
addition(20, 20);

d = 400;
e = 500;
f = 600;
addition(d,e,f);

console.log("----------------------------------------------------------");


// Write a function to get factorial of given number

function GetFact(num){
    var fact = 1;
    for(var i=num; i>0; i--){
        fact = fact * i;
    }
    console.log("Factorial of Value:-", num, fact);
}
GetFact(5);
GetFact(7);
console.log("----------------------------------------------------------");

// Function with Default Parameter

function multiply(x1, x2=30){
    console.log("mulitplication of x1, x2:-", x1, x2, x1*x2);
}
multiply(5);
multiply(5,20);
multiply(5,0);

console.log("----------------------------------------------------------");

// Function with return type

function getSum(range){
    var sum = 0;
    for(var i=1; i<=range; i++){ 
        sum = sum + i;
    }
    return sum;
}
var output = getSum(10);
console.log("Sum is:-", output);

console.log("----------------------------------------------------------");

// Function with multiple return value

function mathOperation(v1, v2, v3){
     add = v1 + v2;
     mul = v2 * v3;
     div = v3 / v1;
     return[add, mul, div];
}
var result = mathOperation(10, 20, 30);
console.log("Math Operation is:-", result);
console.log("----------------------------------------------------------");

// WAP in function to check given number is odd or even and retun the output
function oddevencheck(num){
    if(num % 2 == 0){
       console.log(num, "is a Even number");
    } else{
        console.log(num, "is a Odd number");
    }
}
oddevencheck(7);
oddevencheck(12);

// WAP in Function to add all even values from 1 to 50;
function evensum(){
    var sum = 0;
    for(var i=1; i<=10; i++){
        if(i % 2 == 0){
            sum = sum + i;
        }
    }
       console.log("Sum of Even number from 1 to 50 is:-",sum);
}
evensum();

// WAP in function to check number is divisible by 3 and 5
function divisiblecheck(){
    for(var i=1; i<=100; i++){
        if(i%3 == 0 && i%5 == 0){
             console.log("Divisible by 3 & 5 number is:-",i);
        }
    }
}
divisiblecheck();

// WAP in function to check given number is divisible by 3 and 5
function isDivisibleBy3And5(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " is divisible by both 3 and 5.");
        }   
    }                    
}
isDivisibleBy3And5(100);