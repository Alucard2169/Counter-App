let reset = document.getElementById("reset");
let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let display = document.getElementById("number");

let count = 0;

function current(){
    display.innerHTML = count;
    if(count >= 0){
        display.style.color = "black";
    }
    else{
        display.style.color = "red";
    }
}

add.addEventListener('click',function(){
    count++;
    current();
});
reset.addEventListener('click',function(){
    count = 0;
    current();
})
subtract.addEventListener('click',function(){
    count--;
    current();
});
