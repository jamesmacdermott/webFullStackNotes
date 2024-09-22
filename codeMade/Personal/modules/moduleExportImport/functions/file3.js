import { addFunction } from "./file4.js";
console.log("working");
const mainFunction = function(){
    console.log("lets add");
    let num1 = 3;
    let num2 = 4;
    console.log(addFunction(num1,num2));
};
mainFunction();