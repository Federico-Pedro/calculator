const display = document.querySelector(".display");
const keys = document.querySelectorAll(".btn");
const c = document.querySelector(".c");
const x = document.querySelector(".x");
const equal = document.querySelector(".equal");
const modal = document.getElementById("myModal");
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
      modal.style.display = "block";
      display.innerHTML = result;
      input = result;
    }else {
    display.innerHTML = result;
    }
    input = result;
    
})

function clear(){
    display.innerHTML = '';
    input = '';
};



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}