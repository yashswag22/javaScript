// array
const myarray = [ 0, 2, 3, 4] // it's not compulsory that elements should be of same type.
const array = ["name", "kya"]; 

console.log(myarray[1]); // output => 2
console.log(array); // output => [ 'name', 'kya' ]

const array2 = new  Array(1,2,2,3,4); // another way of decalring array
console.log(array2) // output => [ 1, 2, 2, 3, 4 ]

// methods for array 
// before array2 = 1,2,3,4  
array2.push(100) // it insert element inside the array  -------------- now array2 =  [ 1, 2, 2, 3, 4, 100 ]
console.log(array2) 

// to remove the last element of array 
array2.pop() // now array2 =  [ 1, 2, 2, 3, 4 ]
console.log(array2)

array2.unshift(88) // it adds the element to the starting of array by shifting all other elements to the right.
console.log(array2) // now array2 = [ 88, 1, 2, 2, 3, 4 ]

array2.shift() // it removes the first element of array
console.log(array2) // now array2 = [ 1, 2, 2, 3, 4 ]

// array2.includes(element) // it gives the "true" if it exist in array  and gives "false" if it does not exist in array.
console.log(array2.includes(99))  //  output => false 
console.log(array2.includes(2)) //  output => true 

// array_name.indexof(element)   it gives the index number if it exist in array  and gives -1 if it does not exist in array.
console.log(array2.indexOf(99))  //  output => -1
console.log(array2.indexOf(2)) //  output => 1