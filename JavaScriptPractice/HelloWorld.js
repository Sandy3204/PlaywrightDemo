console.log("Hello, World!");

//WAP to get sqaure of all even values and cube of odd value from an array

var arr3 = [4, 6, 7, 2, 3, 17,25];

    for(var i = 0; i < arr3.length; i++) {
        if(arr3[i]  % 2 == 0) {
            console.log("Sqaure of Even value is:-")
             console.log(arr3[i] * arr3[i]);
        } else {
            console.log("Cube of Odd value is:-")
             console.log(arr3[i] * arr3[i] * arr3[i]);
        }
 }