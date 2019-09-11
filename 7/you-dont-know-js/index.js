
/*
console.log(document); //смотрим документ
console.log('document: ', document.parentElement); // нулл
console.log('document: ', document.children); // все дети document
console.log(document.querySelectorAll('h2')); // все теги с h2 выводим


*/
/*
let getBooks = document.querySelectorAll('.books');
console.log('getBooks: ', getBooks);
let getBook = document.querySelectorAll('.book');
console.log('getBook: ', getBook);


//getBooks[1].removeChild(getBook[1]); // удаляем 3 элемент
//getBooks[0].insertBefore(getBook[1], getBook[0]); // перемещает элемент в конец родителя



getBooks[0].appendChild(getBook[1]); // перемещает элемент в конец родителя
getBooks[0].appendChild(getBook[0]); // перемещает элемент в конец родителя
getBooks[0].appendChild(getBook[4]); // перемещает элемент в конец родителя
getBooks[0].appendChild(getBook[3]); // перемещает элемент в конец родителя
getBooks[0].appendChild(getBook[5]); // перемещает элемент в конец родителя
getBooks[0].appendChild(getBook[2]); // перемещает элемент в конец родителя

let body = document.getElementsByTagName('body')[0]; // заменили back-ground
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


let nameBookNew = document.querySelectorAll('h2'); // меняем текст в h2
nameBookNew[2].textContent = 'Книга 3. this и Прототипы Объектов';
nameBookNew[2].setAttribute('style', 'color: darkkhaki');


let getAdv = document.querySelector('.adv'); // удалили рекламу
document.body.removeChild(getAdv);


let bookTwo = getBook[0].getElementsByTagName('li');
console.log('bookTwo: ', bookTwo);

//getBook[0].insertBefore(bookTwo[5],bookTwo[2]);

getBook[0].appendChild(bookTwo[0]);
getBook[0].appendChild(bookTwo[0]);
getBook[0].appendChild(bookTwo[1]);
getBook[0].appendChild(bookTwo[3]);
getBook[0].appendChild(bookTwo[4]);
getBook[0].appendChild(bookTwo[1]);
getBook[0].appendChild(bookTwo[1]);
getBook[0].appendChild(bookTwo[1]);
getBook[0].appendChild(bookTwo[1]);
getBook[0].appendChild(bookTwo[0]);
getBook[0].appendChild(bookTwo[0]);


let bookFive = getBook[5].getElementsByTagName('li');
console.log('bookFive: ', bookFive);

getBook[5].appendChild(bookFive[0]);
getBook[5].appendChild(bookFive[0]);
getBook[5].appendChild(bookFive[7]);
getBook[5].appendChild(bookFive[1]);
getBook[5].appendChild(bookFive[1]);
getBook[5].appendChild(bookFive[0]);
getBook[5].appendChild(bookFive[1]);
getBook[5].appendChild(bookFive[1]);
getBook[5].appendChild(bookFive[0]);
getBook[5].appendChild(bookFive[0]);
getBook[5].appendChild(bookFive[0]);


let newElem = document.createElement('li');


let bookSix = getBook[2].getElementsByTagName('li');

console.log('bookSix: ', bookSix);

let elemInUl = getBook[2].getElementsByTagName('ul');
newElem.textContent = 'Глава 8: За пределами ES6';

let newElemLi = elemInUl[0].appendChild(newElem);
elemInUl[0].appendChild(bookSix[9]);


*/


let sum = function(a, b){ 
    console.log(this);
    return a + b;
};

let newSum = sum(null,2,3);

newSum();

