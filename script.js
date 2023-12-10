const flipperBtn = document.getElementsByTagName('button');
let hex = "";
let hexLetters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "E",
    "F"
]

let randomNum = (arrLength) => {
    arrLength = parseInt(arrLength)
    return Math.floor(Math.random() * arrLength)
}

let randomHexGenerator = () => {
    let hex = `${hexLetters[randomNum(hexLetters.length)]}${hexLetters[randomNum(hexLetters.length)]}${hexLetters[randomNum(hexLetters.length)]}${hexLetters[randomNum(hexLetters.length)]}${hexLetters[randomNum(hexLetters.length)]}${hexLetters[randomNum(hexLetters.length)]}`;
    console.log(hex)
    return "#" + hex
}

let colorFlip = ()=>{
    hex = randomHexGenerator();
    document.body.style.backgroundColor = hex;
    document.querySelector('.colorText').innerHTML = hex;
}

       