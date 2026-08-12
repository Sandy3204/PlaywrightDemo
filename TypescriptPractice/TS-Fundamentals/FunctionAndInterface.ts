function add(n1:number, n2: number): void {
    console.log("Addition of values is:-", n1+n2)
}
add(20,30);
console.log("-----------------------------------------------------");

function add1(n1:number, n2: number): number {
    console.log("Addition of values is:-", n1+n2)
    return n1+n2;
}
var result = add1(20,30);
console.log(result);
console.log("-----------------------------------------------------");

function greeting(msg: string){
    console.log(msg)
}
greeting("Good Morning");
console.log("-----------------------------------------------------");
 
function multiplication(a1: number, a2: number){
    return a1*a2;
}

var r1 = multiplication(20,30);
console.log("Multiplication is:- ",r1);
console.log("-----------------------------------------------------");

var arrfun = (b1:number, b2:number) => {
     return b1*b2;
}
var r2 = arrfun(10, 20);
console.log("Multiplication is:- ",r2);
console.log("-----------------------------------------------------");

//Q1:- WAP to get all prime number from given array using arrow function
var arr2 = [6, 7,8, 22, 13, 17, 19, 23]

//Q2:- WAP to count number of eaxh character types in the string using arrow function.
var str3= "Hello Learning Pragraming"

console.log("-------------------------------");

console.log("----------- Interface ---------");

interface UserDataEntry {fname: string, lname:string, age:number, address:String}

const user1: UserDataEntry = {fname: "Sandip", lname: "Gavali", age:25, address: 'Asegaon'} 
const user2: UserDataEntry = {fname: "Rajendra", lname: "Gavali", age:33, address: 'Pune'} 

console.log(user1);
console.log(user2);