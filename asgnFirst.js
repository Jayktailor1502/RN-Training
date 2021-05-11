// 1st Question
// Write an arrow function that expects an array of integers, 
// and returns the sum of the elements of the array. Use the built-in method reduce on the array argument.


var num = [23,32,72,1,12,41,12];
var sum = num.reduce((total,n) => {
    return total + n;
}, 0);
console.log(sum);

//-------------------------------------------------------------------------------------------

/* 2nd Question
Rewrite the following code by using arrow functions wherever it makes sense to use them:

var Entity = function( name, delay ) { 
  this.name = name; this.delay = delay; 
}; 

Entity.prototype.greet = function() { 
  setTimeout( function() {
	console.log( 'Hi, I am ' + this.name ); }.bind( this ), this.delay ); 
}; 

var java = new Entity( 'Java', 5000 ); 
var cpp = new Entity( 'C++', 30 );

 java.greet();
  cpp.greet();

   Answer -
   Arrow functions can never be used as constructor functions.
   A prototype property does not exist for an arrow function.
*/


 //--------------------------------------------------------------------------------


 /* 3rd Question
 Change the below code such that the second argument of printComment has a default value that's initially 1 , and is incremented by 1 after each call.

function printComment( comment, line ) { 
    console.log( line, comment ); 
}
*/

let i = 1;
function printComment(comment , line = i++){
    console.log(line,comment);
}
printComment("Hello Hi");
printComment("Hello Hi");
printComment("Hello Hi");
printComment("Hello Hi");
printComment("Hello Hi");
printComment("Hello Hi",25);

//--------------------------------------------------------------------------------

/* 4th Question
Create one destructuring expression that declares exactly one variable to retrieve x.A[2]. 

let x = { A: [ 't', 'e', 's', 't' ] };
*/

let x = { 
    A:  [ 't', 'e', 's', 't' ] 
};

let {
    A : [,,item2]
} = x;      
console.log(item2);


//-------------------------------------------------------------------------------


