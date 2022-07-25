const screen = document.getElementById('screen');
const add = document.getElementById('add');
const minus = document.getElementById('substract');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const equal = document.getElementById('equal');

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
    document.getElementById('number9'),
    document.getElementById('coma')
];

let operator = '';
const operatorArray = ["+", "-", "/", "*"];


for (let index = 0; index <= numbers.length - 1; index++) {
    numbers[index].addEventListener("click", () => {
        screen.innerText = screen.innerText + numbers[index].innerText;
    })
}

// numbers[0].addEventListener("click", () => {
//     screen.innerText = screen.innerText + numbers[0].innerText;
// })

add.addEventListener('click', () => {
    const isEndingByPlus = screen.innerText.endsWith('+');
    // const lastChar = screen.innerText[screen.innerText.length - 1]
    // if (lastChar === '+') {

    // }
    if (isEndingByPlus === false && operator === '') {
        screen.innerText = screen.innerText + add.innerText;
        operator = add.innerText;
    }
})

minus.addEventListener('click', () => {
    const isEndingByPlus = screen.innerText.endsWith('-');
    if (isEndingByPlus === false && operator === '') {
        screen.innerText = screen.innerText + minus.innerText;
        operator = minus.innerText;
    }
})

multiply.addEventListener('click', () => {
    const isEndingByPlus = screen.innerText.endsWith('-');
    if (isEndingByPlus === false && operator === '') {
        screen.innerText = screen.innerText + multiply.innerText;
        operator = multiply.innerText;
    }
})

divide.addEventListener('click', () => {
    const isEndingByPlus = screen.innerText.endsWith('-');
    if (isEndingByPlus === false && operator === '') {
        screen.innerText = screen.innerText + divide.innerText;
        operator = divide.innerText;
    }
})

equal.addEventListener('click', () => {
    let arrayScreenNumber = screen.innerText.split(operator);
    if (operator === operatorArray[0]) {
        screen.innerText = Number(arrayScreenNumber[0]) + Number(arrayScreenNumber[1]);
    } else if (operator === operatorArray[1]) {
        screen.innerText = Number(arrayScreenNumber[0]) - Number(arrayScreenNumber[1]); 
    } else if (operator === operatorArray[2]) {
        screen.innerText = Number(arrayScreenNumber[0]) / Number(arrayScreenNumber[1]); 
    } else if (operator === operatorArray[3]) {
        screen.innerText = Number(arrayScreenNumber[0]) * Number(arrayScreenNumber[1]); 
    }
    operator = '';
})



// 

// const toto = {
//     key: 'coucou',
//     key2: 3,
//     key3: true,
//     gaozdaz: ['hello', 're'],
//     key5: {
//         keyOfKey1: 're coucou'
//     },
//     key6: () => {
//         console.log('HELLO');
//         return 1;
//     }
// }

// let str = 'bonj';
// console.log(str);
// console.log(str[1])
// console.log(str.charAt(1))
// str = str + 'our';
// console.log(str)
// console.log(str.length)
// console.log(str[str.length - 1])
// const isEndingByR = str.endsWith('r')

// console.log(toto.key3); 
// console.log(toto.key5.keyOfKey1);
// console.log(toto.gaozdaz[1]);
// console.log(toto.key6());

// const arr = [true, false, true, false, true, false];

// if(arr[0] === false) {
//     arr[0] = true
// }

// if (arr[1] === false) {
//     arr[1] = true
// }

// if (1 === 2)
// if (1 > 2)
// if (1 < 2)
// if (1 >= 2)
// if (1 <= 2)

// for (let index = 0; index <= arr.length - 1; index++) {
//     console.log(index);
//     arr[index] = true;
// }

// console.log(arr)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index <= numbers.length - 1; index++) {
//     numbers[index] *= 2;
// }

// console.log(numbers);

const toto = 1;
const titi = 5;

if (toto === 1 && titi === 5) { // AND
    console.log('OK')
}

if (toto === 1 || titi === 4) { // OR
    console.log('OK2')
} 