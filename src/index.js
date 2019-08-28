'use strict';


let money;
const mission = 6000;
const period = 10;
const income = 'рабство';
let ExpensesMonth;
let accumulatedMonth;
let MonthsToSave;
let budgetDay;
let amountOfExpenses1;
let amountOfExpenses2;
let costsMonth1;
let costsMonth2;



let  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Транспорт, питание, отдых').split(","); // возможные расходы
let deposit = confirm('Есть ли у вас депозит в банке?'); 


let start = function (){ // вводим месяный доход

    do{       
        money = +prompt('Ваш месячный доход? ', 1300); 
        console.log('Ваш месячный доход:',money);
        return money;
    } while ( isNaN(money) );
        
     
}

let mone = start();






let getExpensesMonth = function(){    //Функция возвращает сумму всех расходов за месяц
    let sum = 0;

    for (let i = 0; i < 2;  i++){

        if (i === 0){

            costsMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Авто, питание, оплата счетов');
        } if (i === 1){

            costsMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Шопинг, развелечения...');
        }
         
        sum += +prompt('Во сколько это обойдется?', 250);
            
            while( isNaN(sum) ){
                sum += +prompt('Во сколько это обойдется?', 250);               
            }    
        
    }
    return sum;
    
   
}

let expensesAmount = getExpensesMonth(); //  В переменной все expensesAmount находятся все расходы
console.log('Расходы в месяц', expensesAmount);


let getBudgetDay = function(x){
    budgetDay = Math.floor(x / 30 );
    console.log('budgetDay: ', budgetDay);
    return budgetDay;
    
}

getBudgetDay(mone);


let getStatusIncome = function(){
    
    if(budgetDay < 0 ){
            console.log('Что-то пошло не так');
    }else{      if(budgetDay >= 800){
                return ('Высокий уровень дохода');    
                } else if ( 300 <= budgetDay && budgetDay < 800){
                 return ('Средний уровень дохода');
                  } else if ( 0 <= budgetDay && budgetDay < 300 ){
                   return ('Низкий уровень дохода');
                 } else {
                   return ('Что то пошло не так');
    }
}
};





function getAccumulatedMonth(x){ //Функция возвращает Накопления за месяц
    accumulatedMonth = x - expensesAmount; 
    return ('Доход за месяц состовляет:', accumulatedMonth);
}

function getTargetMonth(){ // Функция возвращает за какой период будет достигнута цель
    MonthsToSave = Math.floor ( mission / expensesAmount ); 
    console.log('Cрок достижения цели в месяцах (значение округлить в меньшую сторону',MonthsToSave);
    //return ('Миссия по накоплению суммы будет выполнена через:', MonthsToSave, 'месяцев');
}


getAccumulatedMonth();
getTargetMonth();
getStatusIncome();



/*








let showTypeof = function(data) {
    console.log('Переменная', data, typeof (data));
} 











showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log('Уровень дохода в день:', getStatusIncome());





*/

