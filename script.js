let screen = document.querySelector('.screen');
let allButtonArray = document.querySelectorAll('button');
let currentText = '';
let equal = document.querySelector('.equals');


function addAllListeners(param){
    for(let i = 0; i < param.length; i++){
        if(param[i].innerHTML === '='){
            param[i].addEventListener('click', eVL);
        } else if(param[i].innerHTML === 'A/C'){
            param[i].addEventListener('click', allClr);
        } else if(param[i].innerHTML === 'Delete'){
            param[i].addEventListener('click', dlte);
        } else{
             param[i].addEventListener('click', change);
        }
    } 
}
function dlte(){
    console.log(currentText);
    screen.innerHTML = currentText.split('');
    return screen.innerHTML-screen.innerHTML[screen.innerHTML.length-1];
    console.log(currentText.split('').pop());
}

function allClr(){
    screen.innerHTML = '';
    reset();
}

function reset(){
    currentText = '';
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
    }
}


function eVL(){
    console.log(currentText);
    if(currentText.indexOf('+') >-1){
        add(currentText);
    } else if(currentText.indexOf('-') >-1){
        sub(currentText);
    } else if(currentText.indexOf('*') >-1){
        mult(currentText);
    }else if(currentText.indexOf('/') >-1){
        divide(currentText);
    } 
    reset();
}

function add(param){
   let num = param.split('+');
    let add = parseInt(num[0]) + parseInt(num[1]);
    screen.innerHTML = add;
}


function sub(param){
    let num = param.split('-');
    let sub = parseInt(num[0]) - parseInt(num[1]);
    screen.innerHTML = sub;
}


function mult(param){
    let num = param.split('*');
    let mult = parseInt(num[0]) * parseInt(num[1]);
    screen.innerHTML = mult;
}


function divide(param){
    let num = param.split('/');
    let divide = parseInt(num[0]) / parseInt(num[1]);
    screen.innerHTML = divide; 
}

