/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2){
    return number1 - number2;
}

let subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);

}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}

const multiplyNumbers = (multiplyNumber1, multiplyNumber2) => {
     multiplyNumber1 = Number(document.querySelector('#factor1').value);
     multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);

}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

let divideNumbers = function(){
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);

}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

/* let subtotal = Number(document.querySelector('#subtotal').value);*/

console.log('2jskdjfls')


function applyDiscount(){
    
    let membershipCheckbox = document.getElementById('member');
    let subtotalAmount = Number(document.querySelector('#subtotal').value);
    console.log(subtotalAmount);
    let totalAmountSelector = Number(document.querySelector('#total').value);
    let totalReturn = document.querySelector('#total');
    
    if(membershipCheckbox.checked) {
        let discount = 0.15 * subtotalAmount;
        let discountedAmount = subtotalAmount - discount;
        totalReturn.innerHTML = discountedAmount;
        
    }else(
        totalReturn.innerHTML = subtotalAmount
    )
}

let totalButton = document.querySelector('#getTotal').addEventListener('click', applyDiscount);




/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
arrayElement = document.querySelector('#array');
arrayElement.innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 != 0);


/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 == 0);

/* Output Sum of Org. Array */

let reducedArray = numbersArray.reduce((sum, number) => sum + number, 0).toString();
console.log(reducedArray)
let arraySum = document.getElementById('sumOfArray').innerHTML = reducedArray;



/* Output Multiplied by 2 Array */


multipliedArray = document.querySelector('#multiplied');
multipliedArray.innerHTML = numbersArray.map(number => number * 2);


/* Output Sum of Multiplied by 2 Array */

// let reducedMultipliedArray = multipliedArray.reduce((sum, number) => sum + number);
// document.querySelector('#sumOfMultiplied').innerHTML = reducedMultipliedArray;

// document.querySelector('sumOfMultiplied').innerHTML = numbersArray.reduce((sum) => sum + numbersArray.map(number => number *2), 0);

let doubledArray = numbersArray.map(number => number * 2);
let reducedDoubledArray = doubledArray.reduce((sum, number) => sum + number, 0);

let SumOfDoubledArray = document.querySelector('#sumOfMultiplied').innerHTML = reducedDoubledArray;
