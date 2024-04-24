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
   


equal.addEventListener('click',() => {
    result = eval(input);
    if (result === Infinity){
        display.innerHTML = 'ERROR!';
    }else {
    display.innerHTML = result;
    }
    input = result;
    
})

function clear(){
    display.innerHTML = '';
    input = '';
};
