const customerImage = document.querySelector('#customer-img');
const customerName = document.querySelector('#customer-name');
const customerText = document.querySelector('#customer-text');
const buttons = document.querySelectorAll('.btn');
let index = 0;

// create a function that takes button-name and customers array as agruments
// and interact to the DOM 
const buttonWork = (button, customers) => {
    button.addEventListener('click', function (e) {
        if (e.target.parentElement.classList.contains('prevBtn')) {
            if (index === 0) {
                index = customers.length
            }
            index--
            customerImage.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
        if (e.target.parentElement.classList.contains('nextBtn')) {
            index++
            if (index === customers.length) {
                index = 0
            }
            customerImage.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
    })
}

// Fetch data from json file 
fetch('js/data.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        let customers = data;
        buttons.forEach((button) => {
            buttonWork(button, customers);
        })
    })
    .catch((err) => {
        console.log(err);
    })


