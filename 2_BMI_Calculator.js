/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// https://www.geeksforgeeks.org/check-if-given-number-is-perfect-square-in-cpp/amp/?fbclid=IwAR0IPpTG5paQmihX-jjgs-dtALd0BDQUu3p6d7oD2I2GFgZN0X-luZ1HxeA

// var height = parseFloat(5.9);
// var value = (height )^ 2;
// console.log(value);
// var weight = 64;
// var bmi = weight / value;
// console.log(bmi.toFixed(4));

// *************************

const BMI = 19.8;

if (BMI < 18.5) {
    console.log('you are underweight.')
}
else if (BMI <= 24.9) {
    console.log('you are normal.');
}
else if (BMI <= 29.9) {
    console.log('you are overweight.');
}
else {
    console.log('you are obese.');
}