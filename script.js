const number1 = document.getElementById('number1');
console.log({number1})
const screen = document.getElementById('screen');
const add = document.getElementById('add');

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

// console.log(toto.key3); 
// console.log(toto.key5.keyOfKey1);
// console.log(toto.gaozdaz[1]);
// console.log(toto.key6());

number1.addEventListener("click", () => {
    screen.innerText = screen.innerText + number1.innerText;
})

add.addEventListener('click', () => {
    const isEndingByPlus = screen.innerText.endsWith('+');
    // const lastChar = screen.innerText[screen.innerText.length - 1]
    // if (lastChar === '+') {

    // }
    if (isEndingByPlus === false) {
        screen.innerText = screen.innerText + add.innerText;
    }
})

let str = 'bonj';
console.log(str);
console.log(str[1])
console.log(str.charAt(1))
str = str + 'our';
console.log(str)
console.log(str.length)
console.log(str[str.length - 1])
const isEndingByR = str.endsWith('r')
