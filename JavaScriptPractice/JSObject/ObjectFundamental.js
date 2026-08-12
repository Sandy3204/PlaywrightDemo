
const obj = {
     firstname: "Sandip",
     lastname: "Gavali",
     email: "abc@gmail.com",
     phone: 9860927484
}
console.log(obj);

console.log("-----------------------------------------------");

//1. Retrive specific data using keys
console.log("firstname:-",obj.firstname); //firstname:- Sandip
console.log("lastname:-",obj['lastname']); //lastname:- Gavali
console.log("email:-", obj.email);  //email:- abc@gmail.com

console.log("-----------------------------------------------");

//2. Add new pair to existing object
//1.
obj['address'] = 'Pune, Baner';
console.log(obj);
/* {
  firstname: 'Sandip',
  lastname: 'Gavali',
  email: 'abc@gmail.com',
  phone: 9860927484,
  address: 'Pune, Baner'
}
 */

//2.
obj.Country = 'India';
console.log(obj)
/*
{
  firstname: 'Sandip',
  lastname: 'Gavali',
  email: 'abc@gmail.com',
  phone: 9860927484,
  address: 'Pune, Baner',
  Country: 'India'
}
*/
console.log("-----------------------------------------------");

//3. Remove Data From Object
delete obj.phone;
console.log(obj);
/*
{
  firstname: 'Sandip',
  lastname: 'Gavali',
  email: 'abc@gmail.com',
  address: 'Pune, Baner',
  Country: 'India'
} 
*/
console.log("-----------------------------------------------");

//4. Update Existing Value
obj.firstname = 'Sandy';
console.log(obj);
/*
{
  firstname: 'Sandy',
  lastname: 'Gavali',
  email: 'abc@gmail.com',
  address: 'Pune, Baner',
  Country: 'India'
}
*/
console.log("-----------------------------------------------");

var ITCompany = {
    HR: [
        {name: 'Sandip', email: 'abc@ggmail.com', phone: 123123123},
        {name: 'Shiv', email: 'shiv@gmail.com', phone: 5454524522}
    ],
    Admin: [
        {name: 'Santosh', email: 'santosh@gmail.com', phone: 9878789878},
        {name: 'Prashant', email: 'pra@gmail.com', phone: 9878987898}
    ],
    Development: {
        Dev: {name: 'Rakesh', email: 'r@gmail.com'},
        QA: {name: 'Nilesh', email: 'Nilesh@gmail.com'}
    }
}
console.log(ITCompany.HR[0]); //{ name: 'Sandip', email: 'abc@ggmail.com', phone: 123123123 }
console.log(ITCompany.HR[0].phone); // 123123123
console.log(ITCompany.Admin[1].name); // Prashant
console.log(ITCompany.Development.QA.name); // Nilesh
console.log("-----------------------------------------------------------");

// Methods:
//1. Keys -  it retunn keys
//2. values - it return values
//3. entries - Returns key-value pairs as arrays.
//4. Assign - Copies properties from one object to another
//5. Freeze - Prevents modification(not able to create, update, delete)
//6. Seal - Allows updating existing properties but prevents adding/removing
var obj2 = { a: 333, b:444, c:555, d:666, e:777}
console.log("All Keys:-", Object.keys(obj2));  // All Keys:- [ 'a', 'b', 'c', 'd', 'e' ]
console.log("All Values:-", Object.values(obj2)); // All Values:- [ 333, 444, 555, 666, 777 ]

//3. entries -
var obj3 = { a: 333, b:444, c:555, d:666, e:777}
console.log(Object.entries(obj3)); //[ [ 'a', 333 ],[ 'b', 444 ],[ 'c', 555 ],[ 'd', 666 ],[ 'e', 777 ]]

// Iterate through all values of object
for(var data of Object.entries(obj3)){
    console.log(data);
}
// [ 'a', 333 ][ 'b', 444 ][ 'c', 555 ][ 'd', 666 ][ 'e', 777 ]
console.log("-----------------------------------------------------------");

// WAP to calculate the total bill of fruits purchased
var FruitPrice =     {Apple: 10, Banana: 30, Mango: 40, WaterMelon:50}
var FruitPurchased = {Apple: 100, Banana: 60, Mango: 12, WaterMelon:15}
var total_bill = 0;

for(var [fruitname, fruitquantity] of Object.entries(FruitPurchased)){
    // console.log(fruitname, fruitquantity);
    var FPrice = FruitPrice[fruitname]
    var Fbill = FPrice * fruitquantity;
    console.log(fruitname, fruitquantity, FPrice, Fbill);
    total_bill = total_bill + Fbill;
}
/*
Apple 100
Apple 100 10 1000
Banana 60
Banana 60 30 1800
Mango 12
Mango 12 40 480
WaterMelon 15
WaterMelon 15 50 750
*/
console.log("-----------------------------------------------------------");

// Home Work : Update Fruit Inventory after purchasing fruit
var FruitInventory = {Apple:100, Banana:200, Mango:300, WaterMelon:400}
var FruitPrice =     {Apple: 10, Banana: 30, Mango: 40, WaterMelon:50}
var FruitPurchased = {Apple: 100, Banana: 60, Mango: 12, WaterMelon:15}
var Total_fruit_bill = 0;

for(var [FruitName, FruitQuantity] of Object.entries(FruitPurchased)){
    console.log(FruitName, FruitQuantity);
    var FPrice = FruitPrice[FruitName];
    var FruitBill = FPrice * FruitQuantity;
    console.log(FruitName, FruitQuantity, FPrice, FruitBill);
    Total_fruit_bill = Total_fruit_bill + FruitBill;
    console.log(Total_fruit_bill);
    // Update FruitInventory
    FruitInventory[FruitName] = FruitInventory[FruitName] - FruitQuantity;
    console.log(FruitInventory);
    
}
console.log("-----------------------------------------------------------");

//4. Assign - Copies properties from one object to another
var obj4 = {a:111, b:456}
var obj5 = {p:333, q:123}
var obj6 = {name: 'sandip', age:30}

const result = Object.assign({}, obj4, obj5, obj6);
console.log("Result:-", result)
console.log("-----------------------------------------------------------");

//5. Freeze - Prevents modification
const Employee = {
    empName: 'Charan',
    empId : 1,
    empMail : 'charan@mail.com'
}
Object.freeze(Employee);
console.log(Employee); //{ empName: 'Charan', empId: 1, empMail: 'charan@mail.com' }

Employee.Phone = 12312;
console.log(Employee);

