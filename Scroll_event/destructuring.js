'use strict';

// desctucturing array
const arr = [1, 2, 3, 4, 6];
const [first, , thirth] = arr;

console.log(first, thirth);

// desctructuring objects
const user = {
    name: 'Jonas',
    email: 'jonas@gmail.com',
    userAddress: {
        address: 'via del corso',
        zip: 2387
    },
    getFullInfo: function({name: firstName, userAddress: addressUser}) {
        console.log(firstName, addressUser);
    }
}

// Descructuring nested objects
const {name: firstName, userAddress: {address: user_address, zip: zipCode}} = user;
console.log(firstName, user_address, zipCode);
user.getFullInfo(user);