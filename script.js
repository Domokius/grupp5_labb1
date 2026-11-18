const myButton = document.querySelector("#myButton");
let clicks = 0;
myButton.addEventListener("click", function(){ clicks++; alert(`Du har klickat på knappen ${clicks} gånger.`)})