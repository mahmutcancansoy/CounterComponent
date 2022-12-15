let decreaseBtn = document.getElementById("decrease_button");
let increaseBtn = document.getElementById("increment_button");
let counter = document.getElementById("number");
let counterBar = document.getElementById("counter_bar");
let messageToast = document.getElementById("toast");
let count = 0;


decreaseBtn.onclick = function () {
    if (count > 0) {
        count--;
        counter.innerHTML = count ;
        heightReduction();
        updateColor();
    }
};

increaseBtn.onclick = function (){
    if (count<100){
        count ++;
        counter.innerHTML = count;
        heightRaise();
        updateColor();
        messageBox();
    }
};

function updateColor() {
     if (count < 50) {
         counter_bar.style.background = "linear-gradient(180deg, #E43854 0%, #F65A73 100%)";
     }
     else if ( count < 75 ) {
         counter_bar.style.background = "linear-gradient(180deg, #FEA352 0%, #E96C50 100%)";
     }
     else {
         counter_bar.style.background = "linear-gradient(180deg, #12B480 0%, #58CEA9 100%)";
     }
 }
function heightRaise(){
    counterBar.style.height = (parseInt(counterBar.offsetHeight) + 2.7)+"px";
}
function heightReduction (){
    counter_bar.style.height = (parseInt(counter_bar.offsetHeight) - 2.7)+"px";
}
function messageBox(){
    if(count == 100 ){

        messageToast.classList.add("toast--visibility")
    }
}