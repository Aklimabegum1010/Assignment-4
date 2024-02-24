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



        

        const selectedCartContainer = document.getElementById('selected-cart-container');

        event.target.setAttribute('disabled', false)
event.target.parentNode.childNode


        const firstSeatCount = getConvertedValue('add-seat');
        if (firstSeatCount + 1 > 4) {
            alert('limit four');
            return;
        }


        const addSeat = getConvertedValue('add-seat')
        document.getElementById('add-seat').innerText = addSeat + 1;

        const seatsLeft = getConvertedValue('8-seats-left')
        document.getElementById('8-seats-left').innerText = seatsLeft - 1;





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

        allTotalCost(taka);
        allGrandTotal()

    })
}


function allGrandTotal(events) {
    const totalCost = getConvertedValue('total-cost');
    if (events == undefined) {
        document.getElementById('grand-total').innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode == 'NEW15') {
            const discount = totalCost * 15 / 100;
            const newDiscount = parseInt(discount);
            // console.log(newDiscount);

            document.getElementById('grand-total').innerText = totalCost - newDiscount;


        }
        else if (couponCode == 'NEW 20') {
            const discount = totalCost * 20 / 100;
            const newDiscount = parseInt(discount);

            document.getElementById('grand-total').innerText = totalCost - newDiscount;
        }

    }


}

function allTotalCost(value) {
    const totalCost = getConvertedValue('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
}


function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}


function next() {
    hideElementById('main-section');
    showElementById('last-section')
}


















