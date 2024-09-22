export let variable = "myvariable";
export const constant = 3;
export const array = [1,2,3,9,8,7];
export function mainFunc(){
    console.log("You have accessed main func");
};
export const adder = (nums) => {
    let total = 0;
    nums.forEach(number => {
        total += number;
    });
    console.log("Total=",total);
}