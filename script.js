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


keys.forEach(function(key) {
	key.addEventListener('click', function() {
		display.innerHTML += key.innerText;
	})
});

c.addEventListener('click', () => display.innerHTML = '');

x.addEventListener('click', () => display.innerHTML = display.innerHTML.slice(0, -1));
