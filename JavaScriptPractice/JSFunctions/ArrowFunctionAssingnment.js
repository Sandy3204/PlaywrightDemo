//1. Write a fuction to check whether a person is eligible to vote
console.log("Using Function");
function eligiblevotecheck(age){
    if(age>=18){
        console.log(age, "- age is eligible for voting");
    }
    else{
        console.log(age, "- age is Not eligible for voting");
    }
}
eligiblevotecheck(21);

console.log("Using Arrow Function");
 var Votercheck = (age) => {
        if(age>=18){
        console.log(age, "- age is eligible for voting");
    }
    else{
        console.log(age, "- age is Not eligible for voting");
    }
}
Votercheck(13);
console.log("--------------------------------------------------------------");

//2. Write a function to print multiplication table of given number
console.log("Using Function");
function table(num){
    console.log("Table of", num, "is:-");
    for(var i=1; i<=10; i++)
    {
        console.log(num, "*", i, "=", num*i);
    }
}
table(2);

console.log("Using Arrow Function");
var tableof = (num) => {
    console.log("Table of", num, "is:-");
    for(var i=1; i<=10; i++)
    {
        console.log(num, "*", i, "=", num*i);
    }
}
 tableof(5);
console.log("--------------------------------------------------------------");

//3. Write a function to calculate the factorial of a number.
console.log("Using Function");
function fact(num){
    var fact = 1;
    for(var i=num; i>0; i--)
       {
        fact = fact * i;
       }
       return fact;
}
var r1 = fact(6);
console.log("Factorial of given number is:-",r1);

console.log("Using Arrow Function");
var fact1 = (num1) => {
        var fact = 1;
    for(var i=num1; i>0; i--)
       {
        fact = fact * i;
       }
       return fact;
}
var r2 = fact1(5);
console.log("Factorial of given number is:-",r2);
console.log("--------------------------------------------------------------");

//4. Write a function to print number from 1 to N.
console.log("Using Function");
function printnumber(n){
    for(var i=1; i<=n; i++)
    {
        console.log(i);
    }
}
  printnumber(10);

console.log("Using Arrow Function");
 var print = (n=20) => {
    for(var i=1; i<=n; i++)
    {
        console.log(i);
    }
 }
 print();
console.log("--------------------------------------------------------------");

//5. Write a function to print number from N to 1.
console.log("Using Function");
function printnto1(n){
    for(var i=n; i>=1; i--)
    {
       console.log(i);
    }
}
  printnto1(10);

console.log("Using Arrow Function");
 var printr = (n) => {
    for(var i=n; i>=1; i--)
    {
       console.log(i);
    }
 }
   printr(5);
console.log("--------------------------------------------------------------");

//6. Write a function to to calculate the sum of number from 1 to N.
console.log("Using Function");
function sumof1ton(n){
    var sum = 0;
    for(var i=1; i<=n; i++){
         sum = sum + i;
    }
      return sum;
}
var resultsum = sumof1ton(10);
console.log(resultsum);

console.log("Using Arrow Function");

var sumof = (n) => {
    var sum = 0;
    for(var i=1; i<=n; i++){
         sum = sum + i;
    }
      return sum;
}
var sum1 = sumof(10);
console.log(sum1);
console.log("--------------------------------------------------------------");