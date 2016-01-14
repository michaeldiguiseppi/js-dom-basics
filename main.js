console.log("Sanity check!");

var firstParagraph = document.getElementById('main');

console.log(firstParagraph);

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

var allListItems = document.getElementsByTagName('li');
console.log(allListItems);


for (var i = 0; i < allListItems.length; i++) {
    console.log(allListItems[i]);
};


var evenElements = document.getElementsByClassName('even');
console.log(evenElements);

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement);

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement);

var main = document.querySelector('#main');
console.log(main);

var firstOddElement2 = document.querySelector('.odd');
console.log(firstOddElement2);

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);


