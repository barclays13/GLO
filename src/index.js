'use strict';

let income = 2;

let mission = 4;
let period = 5;


let money = +prompt('Ваш месячный дроход? ', 700); // Пользователь вводит месячный доход и мы его преобразуев в числ тип

let  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Транспорт, питание, отдых').split(","); 
console.log('Расходы= ', addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?'); 

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

let costsMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Авто, питание, оплата счетов'); 
let amountOfExpenses1 = +prompt('Во сколько это обойдется?', 400);
let costsMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Шопинг, развелечения...');
let amountOfExpenses2 = +prompt('Во сколько это обойдется?', 300);

let budgetMonth = money - amountOfExpenses1 - amountOfExpenses2; //Доход за месяц
console.log('Доход за месяц: ', budgetMonth); 
