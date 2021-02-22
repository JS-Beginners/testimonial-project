// NOTE:- No Need to use this code file
// This code file writes the json data to the json file
// which we have to use for our client side
// this file will only execute using node js
//_________________________________________________________________________

// Import file system
const fs = require('fs');
// initialize an empty array for adding customers data
const customers = [];
// create a customer constructor 
function Customer(img, name, text){
    this.img = img;
    this.name = name;
    this.text = text;
}

// creating new customer using customer constructor
const createCustomer = (img,name, text)=>{
    let fullimg = `./img/customer-${img}.jpg`;
    let customer = new Customer(fullimg, name, text);
    // stringify data for json
    let jsondata = JSON.stringify(customer);
    // pushing data to the array
    customers.push(jsondata);
}

// adding customers 
createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

console.log(customers);
// writing data to the json file
fs.writeFile('data.json', customers, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})



