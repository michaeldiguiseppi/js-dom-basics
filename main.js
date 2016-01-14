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

for (var i = 0; i < allListItems.length; i++) {
    console.log(allListItems[i].innerText = i + 1);
}

console.log(allListItems);

document.getElementById('main').style.backgroundColor = "goldenrod";


var img = document.createElement('img');
img.src = "http://placebear.com/300/300";

var p = document.getElementById('main');
p.appendChild(img);

var li = document.createElement('li');
console.log(li);

var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(li);

li.className = "even";

getSingleElement.appendChild(li);

console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepended bitch!";
anotherListElement.className = "even";
console.log(anotherListElement);

getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);

var yetAnotherListElement = document.createElement('li');
yetAnotherListElement.innerText = "prepended another one";
yetAnotherListElement.className = "odd";

getSingleElement.insertBefore(yetAnotherListElement, getSingleElement.firstChild);



for (var i = 0; i < document.querySelectorAll('.even').length; i++) {
    document.querySelectorAll('.even')[i].style.color = "red";
};

for (var i = 0; i < document.querySelectorAll('.odd').length; i++) {
    document.querySelectorAll('.odd')[i].style.color = "blue";
};









