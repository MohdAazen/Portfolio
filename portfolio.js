let i = document.getElementById("pi");
i.onmouseenter = function () {
  i.src = "./images/pic3.jpg";
};
i.onmouseleave = function () {
  i.src = "./images/pic1.jpg";
};

// const number = [];
for (let i = 1; i <= 5; i++) {
  let countdownElement = document.getElementById(`number${i}`);
  let upto = countdownElement.innerHTML;
  let timeLeft = 0; // Initial countdown time in seconds

  function updateCountdown() {
    if (timeLeft < upto) {
      if (i == 3) {
        timeLeft++;
        countdownElement.innerText = timeLeft + " Lacs+";
      } else {
        timeLeft++;
        countdownElement.innerText = timeLeft + "+";
      }
    }
  }

  if (upto > 100) {
    setInterval(updateCountdown, 10);
  } else if (upto > 10) {
    setInterval(updateCountdown, 300);
  } else {
    setInterval(updateCountdown, 1000);
  }

  updateCountdown();
}

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    let inpEmail = document.getElementsByClassName('inp-email')[0].value;
    console.log(inpEmail);
    if (inpEmail != "") {
      // Create an invisible link element
      var link = document.createElement("a");
      link.href = "./Sayyed_Mohd_Aazen_Resume.pdf"; // Replace with the path to your PDF file
      link.download = "Sayyed_Mohd_Aazen_Resume.pdf"; // Replace with the desired filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } 
    else {
      alert("Enter the Email first");
    }
  });


  document.getElementById("callButton").addEventListener("click", function() {
    window.location.href = "tel:9867037675"; // Replace with the phone number you want to call
});