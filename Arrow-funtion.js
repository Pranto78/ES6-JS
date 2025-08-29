

// Function declaration 
function add(num1,num2){
    return num1+num2;
}


// function expression 
const addition = function(num1,num2){
    return num1+num2;

}



// Arrow function =>

    // implicit
    const add2 = (num1 , num2) =>num1 + num2;  
    const multi = (num1 , num2) =>num1 * num2;  
    const divide = (num1 , num2) =>num1 / num2;  


    
const result = add2(13,36);
console.log(result);
const mult = multi(13,36);
console.log(mult);
const div = divide(13,36);
console.log(div.toFixed(2));