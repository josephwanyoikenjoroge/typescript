const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;
const displayButton = document.getElementById('displayButton') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLParagraphElement;

displayButton.addEventListener('click', ()=> {
    const value1: number = Number(input1.value);
    const value2: number = Number(input2.value);

    const result:Boolean = value1===value2;
    display.textContent = String(result);
})