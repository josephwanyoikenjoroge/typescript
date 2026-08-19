var cart = 0;
var showButton = document.getElementById('show');
var display = document.getElementById('display');
showButton.onclick = function () {
    console.log(cart);
    display.textContent = String(cart);
};
var addCart4 = document.getElementById('add4');
addCart4.addEventListener('click', function () {
    cart += 4;
    console.log(cart);
    display.textContent = String(cart);
});
var addCart8 = document.getElementById('add8');
addCart8.onclick = function () {
    cart += 8;
    console.log(cart);
    display.textContent = String(cart);
};
var addCart12 = document.getElementById('add12');
addCart12.onclick = function () {
    cart += 12;
    console.log(cart);
    display.textContent = String(cart);
};
var reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    cart = 0;
    console.log(cart);
    display.textContent = String(cart);
});
