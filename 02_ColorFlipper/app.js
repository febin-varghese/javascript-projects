//https://github.com/john-smilga/javascript-basic-projects/tree/master/01-color-flipper
const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function colorFlipper(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

btn.addEventListener('click', colorFlipper);
