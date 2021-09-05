'use strict';

let message = 'Hello';
const date = new Date();
const day = date.getDay();
const month = date.getMonth()+1;
const year = date.getFullYear();

function doSomething() {
    const userName = 'Alex';
    const age = 21;
    console.log(`Hello my name is ${userName}, i have ${age} years old`);
}

const doAnotherThing = () => {
    const sayHello = `${message} everyone, today is ${day}-${month}-${year}`;
    console.log(sayHello);
};

doSomething();
doAnotherThing();




