// https://github.com/john-smilga/javascript-basic-projects/tree/master/02-counter
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0) value.style.color = "green";
        if(count < 0) value.style.color = "red";
        if(count === 0) value.style.color = "#102a42";
        value.textContent = count;
    })
})