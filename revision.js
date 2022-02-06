// for loop
// for (let i = 0; i < 6; i++) {
    
//     console.log(i);  
// }





// function call inside the function and outside the function

// function consoleNumber(i) {
//     console.log(i);
    
//     consoleNumber(i);
// }
// consoleNumber(1);



// difference between i++ and ++i/i+1

// function consoleNumber(i) {
//     console.log(i);
    
//     consoleNumber(i+1);
// }
// consoleNumber(1);





// recursive function

// function consoleNumber(i) {
    
//     if (i > 5) {
//         return;
//     }
//     console.log(i);
//     consoleNumber(i+1);
// }
// consoleNumber(1);


// sum using recursion
 let sum = 0;
 for (let i = 5; i >= 1; i--) {
     sum = sum + i;  
 }
 console.log(sum);