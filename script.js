document.addEventListener("DOMContentLoaded", function() {
    const numbers = document.querySelectorAll(".numbers li");
    const button = document.querySelector(".submit button");
    const thankYouContainer = document.querySelector(".thank-you-container")
    const rating = document.querySelector(".thank-you-container h3");
    let previousNumber = null;

    numbers.forEach(function(number) {
        number.addEventListener("click", function(){
            clickedNumber = this.textContent.trim();
            rating.textContent = `You selected ${clickedNumber} out of 5`;
            if (previousNumber !== null) {
                previousNumber.style.backgroundColor = "";
            }

            this.style.backgroundColor = "hsl(25, 97%, 53%)";

            previousNumber = this;
        });
    });

    button.addEventListener("click", function(){
        thankYouContainer.style.display = 'block';
    })
});







