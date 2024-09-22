import * as utilitiesModule from "./utilities.js";
const main = () => {
    console.log("Lets get all the variables, functions and more from utilities!");

    // Access variables
    console.log(utilitiesModule.variable);   // Output: "myvariable"
    console.log(utilitiesModule.constant);   // Output: 3
    console.log(utilitiesModule.array);      // Output: [1, 2, 3, 9, 8, 7]

    // Call functions
    utilitiesModule.mainFunc();              // Output: "You have accessed main func"
    utilitiesModule.adder([1,2,3]);  // Output: "Total=30"
};

// Call the main function
main();