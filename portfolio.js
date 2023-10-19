let i = document.getElementById('pi')
i.onmouseenter = function() {
    i.src = './pic3.jpg'; 
    }
i.onmouseleave=function() {
    i.src = './pic1.jpg'; 
}




// const number = [];
for (let i = 1; i <= 5; i++) {

let countdownElement = document.getElementById(`number${i}`);
let upto = countdownElement.innerHTML;
let timeLeft = 0; // Initial countdown time in seconds

function updateCountdown() {
    if (timeLeft < upto) {
        if(i==3)
        {
            timeLeft++;
            countdownElement.innerText = timeLeft+" Lacs+";
        }
        else{
            timeLeft++;
            countdownElement.innerText = timeLeft+"+";}
        } 
    
}

if(upto > 100)
{
    setInterval(updateCountdown, 10);
}
else if(upto > 10){
    setInterval(updateCountdown, 300);
}
else{
    setInterval(updateCountdown, 1000);
}


updateCountdown();
}

