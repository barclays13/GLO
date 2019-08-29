


const mission = 6000;
const period = 10;
const income = 'рабство';
let accumulatedMonth;
let MonthsToSave;
let budgetDay;
let amountOfExpenses1;
let amountOfExpenses2;
let costsMonth1;
let costsMonth2;
let Expenses;
let money;
let  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Транспорт, питание, отдых').split(","); // возможные расходы
let deposit = confirm('Есть ли у вас депозит в банке?'); 


let start = function (){ // вводим месяный доход

    do{       
        money = prompt('Ваш месячный доход? ', 1300);
      
    } while ( isNaN(money) || money === null  || money=== '')

};                                                                                                                                                       

let resultMoney = start(); //выводим месячный доходд с проверкой на число
console.log('Ваш месячный доход', resultMoney);

/*

let getExpensesMonth = function(){    //Функция возвращает сумму всех расходов за месяц
   
    let sum = 0;

    for (let i = 0; i < 2;  i++){

        if (i === 0){

            costsMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Авто, питание, оплата счетов');
        } if (i === 1){

            costsMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Шопинг, развелечения...');
        }
        

        Expenses = undefined;

        while (isNaN(Expenses)){
            Expenses = +prompt('Во сколько это обойдется?', 250);
        }
        sum += Expenses;
    }
    return sum;    
}

let resultGetExpensesMonth = getExpensesMonth(); //  В переменной все resultGetExpensesMonth находятся все расходы

console.log('Все расходы: ', resultGetExpensesMonth);


let getBudgetDay = function(x){
    budgetDay = Math.floor(x / 30 );
    return budgetDay;
}
let resultGetBudgetDay = getBudgetDay(resultMoney);



let getStatusIncome = function(){
    if(resultGetBudgetDay < 0 ){
                 console.log('BudgetDay: Что-то пошло не так');
    }else{      if(resultGetBudgetDay >= 800){
                    console.log ('Высокий уровень дохода');    
                } else if ( 300 <= resultGetBudgetDay && resultGetBudgetDay < 800){
                    console.log ('Средний уровень дохода');
                  } else if ( 0 <= resultGetBudgetDay && resultGetBudgetDay < 300 ){
                    console.log ('Низкий уровень дохода');
                 }
    }
};

function getAccumulatedMonth(income){ //Функция возвращает Накопления за месяц
    accumulatedMonth = income - resultGetExpensesMonth; 
    return ('Доход за месяц состовляет:', accumulatedMonth);
}

function getTargetMonth(){ // Функция возвращает за какой период будет достигнута цель
    MonthsToSave = Math.floor( mission / ResultGetAccumulatedMonth ); 
    if (MonthsToSave < 0){
        console.log('Цель не будет достигнута');
    }else
    console.log('Миссия по накоплению суммы будет выполнена через:', MonthsToSave, 'месяцев');
}


let ResultGetAccumulatedMonth = getAccumulatedMonth(resultMoney);
getTargetMonth();
getStatusIncome();


let showTypeof = function(data) {
    console.log('Переменная', data, typeof (data));
} 

showTypeof(money);
showTypeof(income);
showTypeof(deposit);
*/
