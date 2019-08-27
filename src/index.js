'use strict';

//lesson2

const income = 'рабство';


const mission = 6000;
const period = 10;

/*console.log(typeof money); //выводим тип данных переменной
console.log(typeof income); //выводим тип данных переменной
console.log(typeof deposit); //выводим тип данных переменной

console.log('Длина переменной income: ', income.length ); // Длина строки

console.log('Период ', period ,' месяцев.'); // вывод текста + переменная
console.log('Цель зработать ', mission ,' бел.руб.'); // вывод текста + переменная

console.log(addExpenses.charAt(7)); // выводит символ 1
console.log(addExpenses[0]); // выводит символ 1
console.log(addExpenses.substring(6)); // выводит с и до конца
console.log(addExpenses.substring(5, 10)); // выводит с и до какого
console.log(addExpenses.slice(6)); // Выводит все после 6 символа
console.log(addExpenses.slice(-11)); // Выводит послдних 11 символов
console.log(addExpenses.substr(10, 4)); // Выводит с какого и сколько
console.log(addExpenses.indexOf(',')); //индекс символа в данной строке
console.log(addExpenses.replace('Еда', 'Продукты питания')); //заменяет еда на продукты питания в строке
console.log(addExpenses.toLowerCase()); //нижний регистр
console.log(addExpenses.split(',')); //разбить строку массив по ,
let cchengeExpenses = addExpenses.toLowerCase(); // сохраняем строку в нижнем регистре
console.log(cchengeExpenses.split(',')); //разбить строку массив по ,
console.log(addExpenses.toUpperCase()); //верхний регистр регистр
//console.log(budgetDay = money / 30);
//end lesson 2
*/


let money = +prompt('Ваш месячный доход? ', 1300); // месечный доход, вводим

let  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Транспорт, питание, отдых').split(","); // возможные расходы
//console.log('Расходы= ', addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?'); 





let ExpensesMonth;
let accumulatedMonth;
let MonthsToSave;
let budgetDay;

let costsMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Авто, питание, оплата счетов'); 
let amountOfExpenses1 = +prompt('Во сколько это обойдется?', 250);
let costsMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Шопинг, развелечения...');
let amountOfExpenses2 = +prompt('Во сколько это обойдется?', 250);

function getExpensesMonth(){            //Функция возвращает сумму всех расходов за месяц
    
    ExpensesMonth = amountOfExpenses1 + amountOfExpenses2 ;
    return ('Расходы в месяц состовляют:', ExpensesMonth);
}



function getAccumulatedMonth(){ //Функция возвращает Накопления за месяц
    accumulatedMonth = money - ExpensesMonth; 
    return ('Доход за месяц состовляет:', accumulatedMonth);
}

function getTargetMonth(){ // Функция возвращает за какой период будет достигнута цель
    MonthsToSave = Math.floor ( mission / ExpensesMonth ); 
    console.log('Cрок достижения цели в месяцах (значение округлить в меньшую сторону',MonthsToSave);
    //return ('Миссия по накоплению суммы будет выполнена через:', MonthsToSave, 'месяцев');
}


let getBudgetDay = function(){
    budgetDay = Math.floor(money / 30 );
  //  console.log('Бюджен на 1 день : ', budgetDay); // Вывод бюджета на 1 день
}


let showTypeof = function(data) {
    console.log('Переменная', data, typeof (data));
} 




let getStatusIncome = function(){

    if(budgetDay >= 800){
        return ('Высокий уровень дохода');    
    } else if ( 300 <= budgetDay && budgetDay < 800){
        return ('Средний уровень дохода');
    } else if ( 0 <= budgetDay && budgetDay < 300 ){
        return ('Низкий уровень дохода');
    } else {
        return ('Что то пошло не так');
    }
};

getExpensesMonth(); 
getAccumulatedMonth();
getTargetMonth();
getBudgetDay();

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log('Уровень дохода в день:', getStatusIncome());







