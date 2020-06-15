let screen = document.querySelector('.screen');
let allButtonArray = document.querySelectorAll('button');
let currentText = '';
let equal = document.querySelector('.equals');


function addAllListeners(param){
    for(let i = 0; i < param.length; i++){
        param[i].addEventListener('click', change);
    } 
    equal.addEventListener('click', eVL);
}

addAllListeners(allButtonArray);
console.log(allButtonArray)


function change(param){
    if ( param === undefined ){
        screen.innerHTML = 'Do Math';
    } 
    else{
        currentText = currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }else if(currentText.indexOf('=') >-1){
        eVL(currentText)
    }
    console.log(currentText)
    console.log(eVL(currentText))
}


function eVL(input){
    if(input.indexOf('+') >-1){
        add(input);
    } 
}

function add(param){
   let num = param.split('+');
    return parseInt(num[0]) + parseInt(num[1]);
}
console.log(add('1+5'))

function sub(param){
    let num = param.split('-');
    return parseInt(num[0]) - parseInt(num[1]);
}
console.log(sub('1-5'))

function mult(param){
    let num = param.split('*');
    return parseInt(num[0]) * parseInt(num[1]);
}
console.log(mult('1*5'))

function divide(param){
    let num = param.split('/');
    return parseInt(num[0]) / parseInt(num[1]);
}
console.log(divide('1/5'))
