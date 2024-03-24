let text = document.getElementById("text")
let count = 0;
function sum(){
    count++;
    text.innerText = count;

}

function reset(){
count = 0;
text.innerText = 0; 
}