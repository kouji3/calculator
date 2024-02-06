const fraction = document.querySelector('#fraction');


const divide = document.querySelector('#division');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const add = document.querySelector('#add');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const delet = document.querySelector('#delete');
const op = document.querySelector('#operations');

const selectedNumber = document.querySelector('#selected-num');
let x = '';
let y = '';
let isMultiplying = false;
let isDividing = false;
let isSumming = false;
let isSubtracting = false;
let isFinished = false;
let result = null; 


const allNumbers = document.querySelectorAll('.buttons > button');
allNumbers.forEach((e) => {
    e.addEventListener('click', () => {
        

        if(e.textContent == '÷' ||  e.textContent == 'x' ||  e.textContent == '-' || e.textContent == '+' ){
            if(isFinished && result != null){
                op.textContent = result;
            }
            op.textContent += ' ' + e.textContent + ' ';
        } 

       

       if( e.textContent != '=' &&  e.textContent != '÷' &&  e.textContent != 'x' &&  e.       textContent != '-' && e.textContent != '+' ){
            op.textContent += e.textContent;
            if(isMultiplying || isDividing || isSubtracting || isSumming){
                y += e.textContent;
                
                isFinished = true;
            } else {
                x += e.textContent;
               
            }
            
            

       }
        
        
    })
})

clear.addEventListener('click', () => {
    x = '';
    y = '';
    result = null;
    selectedNumber.textContent = 0;
    isMultiplying = false;
    isDividing = false;
    isSumming = false;
    isSubtracting = false;
    op.textContent = '';
})

equal.addEventListener('click', () => {
    if(isMultiplying){
       if(isFinished && result != null){
            result = result * parseFloat(y);
            op.textContent += ' ' + equal.textContent + ' ';
            selectedNumber.textContent = result;
            y = '';
       } else {
            result = parseFloat(x) * parseFloat(y);
            op.textContent += ' ' + equal.textContent + ' ';
            selectedNumber.textContent = result;
            y = '';
            
       }
       isMultiplying = false;
    } 
    if(isDividing){
        if(isFinished && result != null){
            result = result / parseFloat(y);
            op.textContent += ' ' + equal.textContent + ' ';
            selectedNumber.textContent = result;
            y = '';
       } else {
            result = parseFloat(x) / parseFloat(y);
            op.textContent += ' ' + equal.textContent + ' ';
            selectedNumber.textContent = result;
            y = '';
       }
       isDividing = false;
    }
    if(isSubtracting){
        if(isFinished && result != null){
            result = result - parseFloat(y);
            op.textContent += ' ' + equal.textContent + ' ';
            selectedNumber.textContent = result;
            y = '';
       } else {
            result = parseFloat(x) - parseFloat(y);
            op.textContent += ' ' + equal.textContent + ' ';
            selectedNumber.textContent = result;
            y = '';
       }
       isSubtracting = false;
    }
    if(isSumming){
        if(isFinished && result != null){
            result = result + parseFloat(y);
            op.textContent += ' ' + equal.textContent + ' ';
            selectedNumber.textContent = result;
            y = '';
       } else {
            result = parseFloat(x) + parseFloat(y);
            op.textContent += ' ' + equal.textContent + ' ';
            selectedNumber.textContent = result;
            y = '';
       }
       isSumming = false;
    }
});

multiply.addEventListener('click', () => {
    isMultiplying = true;
    
});

add.addEventListener('click', () => {
    isSumming = true;
    
});

minus.addEventListener('click', () => {
    isSubtracting = true;
    
});

divide.addEventListener('click', () => {
    isDividing = true;
    
});

fraction.addEventListener('click', () => {

});


