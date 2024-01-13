 let mydata = new Date();
 console.log(mydata)
 console.log(typeof mydata) // object
 console.log(mydata.toString()); // Sat Jan 13 2024 10:29:30 GMT+0000 (Coordinated Universal Time)
 console.log(mydata.toDateString()) // Sat Jan 13 2024
 console.log(mydata.toISOString()); // 2024-01-13T10:29:30.067Z
 console.log(mydata.toISOString()) // 2024-01-13T10:29:30.067Z
 console.log(mydata.toLocaleDateString()) // 1/13/2024

// ********** in java script month start with 0 *************
 //let myCreatedDate = new Date(2023, 1, 23);
 //console.log(myCreatedDate.toDateString());  // output => Thu Feb 23 2023


 let myNewCreatedDate = new Date(2024, 0, 21, 3, 1); 
 console.log(myNewCreatedDate.toLocaleString()); //  output => 1/21/2024, 3:01:00 AM

 let myCreatedDate = new Date("01-22-2024"); // "22-01-2024" is invalid formate.
 console.log(myCreatedDate);

// -------------- time stamp in js ---------------------
let mytimestamp = Date.now();
console.log(mytimestamp); // output => 1705143440955 it is the milli second calculated from  January 1, 1970 till now.

console.log(myCreatedDate.getTime()); // output => 1705881600000 it is the milli second calculated form January 1, 1970 till 01-22-2024. 

console.log(Date.now()/1000); //1705143758.071(output) converting the milli second into second but the problem is ki ye decimal me hai.
console.log(Math.floor(Date.now()/1000)); // it will round it off, which will help in comparison

// the are some more methods :- 
let newDate = new Date();
console.log(newDate.getDay()) // output => 6 (as it's saturday today)
console.log(newDate.getMonth()) // output => 0 (as it's january now)
console.log(newDate.getDate()) // output => 13 (As it's 13th jan today)
// there are many more get... method for date.


//                                       we can customise the toLocaleString() :- 

newDate.toLocaleString('abs', {
    weekday: "short",
    date: "IN"
})
console.log(newDate)

