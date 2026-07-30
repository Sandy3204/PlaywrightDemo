// Arrow Functions:-

console.log("-------------------------------------------------------------");

var factorial = (num) => {
    var fact = 1;
    for(var i=num; i>0; i--){
        fact = fact * i;
    }
      return fact;
}
var result = factorial(5);
console.log("Factorial of is:-", result);
console.log("-------------------------------------------------------------");