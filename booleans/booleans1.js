var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var displayButton = document.getElementById('displayButton');
var display = document.getElementById('display');
displayButton.addEventListener('click', function () {
    var value1 = Number(input1.value);
    var value2 = Number(input2.value);
    var result = value1 === value2;
    display.textContent = String(result);
});
