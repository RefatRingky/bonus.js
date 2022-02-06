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

function consoleNumber(i) {
    console.log(i);
    
    consoleNumber(i+1);
}
consoleNumber(1);