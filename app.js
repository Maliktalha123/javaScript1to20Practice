// print 1 to 10
for (var i = 1; i <= 10; i++) {
  document.write(` ${i},`);
}
// Even Numbers 
document.write(`<h2>Even Numbers :</h2>`);
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(` ${i},`);
  }
}
// Odd Numbers 
document.write(`<h2>Odd Numbers :</h2>`);
for (var i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    document.write(` ${i},`);
  }
}
// Factorial 
const number = 5;
var factorial = 1;
for (var i = 1; i <= number; i++) {
  factorial *= i;
}
document.write(`<br/><h2> The factorial of ${number} is: ${factorial}</h2>`);
// Table of 7 
document.write(`<h2>Table of 7</h2>`)

var multipliedNumber =7;
for(var i=1 ; i<=10;i++){
    document.write(` ${multipliedNumber} x ${i} = ${multipliedNumber*i} ,`)
}
// Square of Numbers from 1 to 10
document.write(`<h2>Square of Numbers 1 to 10</h2>`)
for(var i = 1;i <=10;i++){
    document.write(` ${i*i},`)
}

var numbersArray =[3,7,2,9,5];
var simpleNumber =10000000000;
for (var i = 0;i<numbersArray.length;i++){
    if( numbersArray[i]< simpleNumber){
        simpleNumber = numbersArray[i]
    }
}
document.write(`<h2>The smallest numbers is : ${simpleNumber}</h2>`);