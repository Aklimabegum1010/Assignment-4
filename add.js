function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

const buttons = document.querySelectorAll(".my-button-class");
function changeButtonColor(button) {
    button.style.backgroundColor = "green";

}
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
        changeButtonColor(button)
    });
}


const myButtonClass = document.getElementsByClassName('my-button-class');
for (const btn of myButtonClass) {
    btn.addEventListener('click', function (event) {
        const seat = event.target.parentNode.childNodes[3].innerText;

        const economoy = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[1].innerText;


        const taka = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[3].innerText;


        // console.log(event.target.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[3].innerText)

const selectedCartContainer = document.getElementById('selected-cart-container');

const div = document.createElement('div');
div.classList.add('flex');
div.classList.add('justify-between');

const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
p1.innerText = seat;
p2.innerText = economoy;
p3.innerText = taka;

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
selectedCartContainer.appendChild(div)






    })
}








// const takaSection = getConvertedValue('taka-section');
// const seatSec =  getConvertedValue('seat-sec');
// const classSec =  getConvertedValue('class-sec');
// const priceSec =  getConvertedValue('price-sec');

function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}
// const result = getConvertedValue();
// console.log(result)







function next() {
    hideElementById('main-section');
    showElementById('last-section')
}

















// function handelKeybordClick(event) {
//     console.log(event.key)
// }
// document.addEventListener('click', handelKeybordClick);
// const myButtons = document.getElementsByClassName('my-button-class');
// for(const button of myButtons){
//     button.addEventListener("click", function(){
//         changeButtonColor(button)
//     });
// }

