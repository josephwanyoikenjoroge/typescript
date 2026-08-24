let cart: number = 0;
let showButton = document.getElementById('show') as HTMLButtonElement;
let display = document.getElementById('display') as HTMLElement;


showButton.onclick = () => {
    console.log(cart);
    display.textContent = String(cart);
}

let addCart4 = document.getElementById('add4') as HTMLButtonElement;
addCart4.addEventListener('click', () => {
    cart+=4;
    console.log(cart);
    display.textContent = String(cart);
})
const addCart8 = document.getElementById('add8') as HTMLButtonElement;
addCart8.onclick = () => {
    cart+=8;
    console.log(cart);
    display.textContent = String(cart);
}
const addCart12 = document.getElementById('add12') as HTMLButtonElement;
addCart12.onclick = () => {
    cart+=12;
    console.log(cart);
    display.textContent = String(cart);
}
const reset = document.getElementById('reset') as HTMLButtonElement;
reset.addEventListener('click', () => {
    cart = 0;
    console.log(cart);
    display.textContent = String(cart); 
})
   

