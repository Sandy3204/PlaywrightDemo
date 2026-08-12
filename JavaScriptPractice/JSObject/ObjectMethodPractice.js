// Object Creation
 const family = {
       Fname: 'Sandip',
       Lname: 'Gavali',
       Phone: 9860927484,
       email: 'abc@gmail.com',
       address: 'Wakad, Pune'
 }

// Retrieve value from object
console.log(family);
console.log("------------------------------------------------");

// Retrieve Specific value
console.log(family.Fname);
console.log("------------------------------------------------");

// Add new value in Existing object
family.country = 'India';
console.log(family);
       //or
family['farmer'] = 'Yes'
console.log(family);
console.log("------------------------------------------------");

// Update Exisitng value in object
family.country = "USA";
console.log(family);
console.log("------------------------------------------------");

// Remove or Delete values from object
delete family.farmer;
console.log(family);
console.log("------------------------------------------------");

console.log("----Methods----");
//1. Keys -  It Return All Keys
//2. Values - It Return All values
//3. Entries - It Return key Values pair
//4. Assing - Copies properties from one object to another
//5. freeze - It Prevent to modification like insert, delete, create
//6. Seal -  It Prevent only Add or Remove, but user can modified exsiting data

//1.Keys
console.log("All Keys are:-", Object.keys(family));
console.log("------------------------------------------------");

//2. Values
console.log("All Values are:-", Object.values(family));
console.log("------------------------------------------------");

//3. Entries
console.log("Key Values pair are:- ", Object.entries(family))
console.log("------------------------------------------------");

//4. Assign
const obj11 = { name: 'Alpha',Phone: 6655}
const obj12 = { a:121, b: 123}
console.log("obj11:-", obj11);
console.log("obj12:-", obj12);

var results = Object.assign(obj11, obj12);
console.log(results);

//5. freeze
const obj13 = {a:11, b:12, c:13}
Object.freeze(obj13);
 obj13.d = 14;
 console.log(obj13);

 //6. seal
 const obj14 = {x:11, y:12, z:13}
 Object.seal(obj14);
 console.log(obj14);

 obj14.d = 11;
 console.log(obj14);

  obj14.x = 100;
 console.log(obj14);

 //7. Create
 const abc = {a:12, b:34}
 const pqr = Object.create(abc);
  console.log(abc);
  console.log(pqr);


