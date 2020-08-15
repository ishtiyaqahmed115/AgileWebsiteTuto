// scrolling Code
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' 
        });

        
    });
});

// Toggle Code

var countOfClicks = 0;
var defaultPricing = "Monthly";
var amountText = document.querySelectorAll(".pricing-amount-text");

var toggleSwitch = document.querySelector("input").addEventListener("click", function(){
    countOfClicks++;
    if(countOfClicks % 2 == 0){
        defaultPricing = "Monthly";
        
        setTimeout(() => {  
            amountText[0].innerHTML = 19.99;
            amountText[1].innerHTML = 24.99;
            amountText[2].innerHTML = 39.99;
        }, 400);
        
        
    }
    else{
        defaultPricing = "Annually";

        setTimeout(() => {
            amountText[0].innerHTML = 199.99;
            amountText[1].innerHTML = 249.99;
            amountText[2].innerHTML = 399.99;
        }, 400);
        
    }
    console.log(defaultPricing);
});
