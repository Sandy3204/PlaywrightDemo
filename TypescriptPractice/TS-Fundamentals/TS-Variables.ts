var name: string = "Sandip";
var age: number = 30;
var email: string = "sandip@example.com";

console.log(name, age, email); // Sandip 30 sandip@example.com
console.log("-------------------------------");

// Array Declaration

var Cities: string[] = ["Mumbai", "Pune", "Delhi", "Bangalore"];
console.log(Cities); //[ 'Mumbai', 'Pune', 'Delhi', 'Bangalore' ]

var phonenum: [number, string] = [9860927484, "Typescript"];
console.log(phonenum);  //[ 9860927484, 'Typescript' ]

var MixValue: any = ["Typescript", 9804040, true, false, null, [2,3,1]];
console.log(MixValue);  //[ 'Typescript', 9804040, true, false, null, [ 2, 3, 1 ] ]

var str: string = 'SandipGavali';
console.log(str);

var str1: string[] = ['A', 'B','C','D','E']
console.log(str1);

str1.entries();
console.log("-------------------------------");

console.log("----------- Object Data Types ---------");

const UserDetails: {fname: string, lname:string, age:number, address:string} = {
    fname: "Sandip", lname:"Gavali", age: 30, address: "Asegaon"
}

console.log(UserDetails);       //{ fname: 'Sandip', lname: 'Gavali', age: 30, address: 'Asegaon' }
console.log(UserDetails.fname); // Sandip
console.log(UserDetails.lname); // Gavali