const screen = document.getElementById('screen');
const add = document.getElementById('add');
const minus = document.getElementById('substract');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const equal = document.getElementById('equal');
const reset = document.getElementById('reset');
const coma = document.getElementById('coma');
const numbers = [
    document.getElementById('number0'),
    document.getElementById('number1'),
    document.getElementById('number2'),
    document.getElementById('number3'),
    document.getElementById('number4'),
    document.getElementById('number5'),
    document.getElementById('number6'),
    document.getElementById('number7'),
    document.getElementById('number8'),
    document.getElementById('number9')
];
let clickOnOperator = '';
const operatorArray = ["+", "-", "/", "*"];


for (let index = 0; index <= numbers.length - 1; index++) {
    numbers[index].addEventListener("click", () => {
        screen.innerText = screen.innerText + numbers[index].innerText;
    })
}

reset.addEventListener('click', () => {
    clickOnOperator = '';
    screen.innerText = '';
})

add.addEventListener('click', () => {
    const isEndingByPlus = screen.innerText.endsWith('+');
    // const lastChar = screen.innerText[screen.innerText.length - 1]
    // if (lastChar === '+') {
    // }
    if (isEndingByPlus === false && clickOnOperator === '' && screen.innerText !=='') {
        screen.innerText = screen.innerText + add.innerText;
        clickOnOperator = '+';
    }
})

minus.addEventListener('click', () => {
    const isEndingByPlus = screen.innerText.endsWith('-');
    if (isEndingByPlus === false && clickOnOperator === '' && screen.innerText !=='') {
        screen.innerText = screen.innerText + minus.innerText;
        clickOnOperator = minus.innerText;
    }
})

multiply.addEventListener('click', () => {
    const isEndingByPlus = screen.innerText.endsWith('*');
    if (isEndingByPlus === false && clickOnOperator === '' && screen.innerText !=='') {
        screen.innerText = screen.innerText + multiply.innerText;
        clickOnOperator = multiply.innerText;
    }
})

divide.addEventListener('click', () => {
    const isEndingByPlus = screen.innerText.endsWith('/');
    if (isEndingByPlus === false && clickOnOperator === '' && screen.innerText !=='') {
        screen.innerText = screen.innerText + divide.innerText;
        clickOnOperator = divide.innerText;
    }
})

coma.addEventListener('click', () => {
    const lastChar = screen.innerText[screen.innerText.length -1];
    console.log(lastChar);
    console.log(Number(lastChar));
    if (!Number(lastChar) || screen.innerText === '') {
        return;
    }

    if (clickOnOperator === '' && screen.innerText.includes(".")) {
        return;
    }

    if (clickOnOperator !== '') {
        const arrayScreenNumber = screen.innerText.split(clickOnOperator);
        if (arrayScreenNumber[1].includes(".") === true ) {
            return;
        }
    } 
    screen.innerText = screen.innerText + coma.innerText;

}) 

equal.addEventListener('click', () => {
    let arrayScreenNumber = screen.innerText.split(clickOnOperator);
    if (clickOnOperator === operatorArray[0]) {
        screen.innerText = Number(arrayScreenNumber[0]) + Number(arrayScreenNumber[1]);
    } else if (clickOnOperator === operatorArray[1]) {
        screen.innerText = Number(arrayScreenNumber[0]) - Number(arrayScreenNumber[1]); 
    } else if (clickOnOperator === operatorArray[2]) {
        screen.innerText = Number(arrayScreenNumber[0]) / Number(arrayScreenNumber[1]); 
    } else if (clickOnOperator === operatorArray[3]) {
        screen.innerText = Number(arrayScreenNumber[0]) * Number(arrayScreenNumber[1]); 
    }
    clickOnOperator = '';
})

// let str = 'bonj';
// console.log(str);
// console.log(str[1])
// console.log(str.charAt(1))
// str = str + 'our';
// console.log(str)
// console.log(str.length)
// console.log(str[str.length - 1])
// const isEndingByR = str.endsWith('r')

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index <= numbers.length - 1; index++) {
//     numbers[index] *= 2;
// }