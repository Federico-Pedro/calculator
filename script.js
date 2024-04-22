let num1;
let num2;
let operator;

function add(a, b){
    return a + b;
};

function substract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    if (b === 0){
        return 'ERROR!';
    } else{
    return a / b;
    }
};



const display = document.querySelector(".display");
const keys = document.querySelectorAll(".btn");
const c = document.querySelector(".c");
const x = document.querySelector(".x");
const equal = document.querySelector(".equal");
let input = "";
let result = "";

keys.forEach(function(key) {
    
	key.addEventListener('click', function() {
		input += key.innerText;
        display.innerHTML = input;
	})
});

c.addEventListener('click', () => clear());


x.addEventListener('click', () => {
    input = input.slice(0, -1);
    display.innerHTML = input;
});
   
function cut(input){
    input = input.split('+');
    num1 = input[0];
    num2 = input[1];
}

equal.addEventListener('click',() => {
    result = eval(input);
    display.innerHTML = result;
    input = result; 
})

function clear(){
    display.innerHTML = '';
    input = '';
};
