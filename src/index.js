let money;

let start = function (){ // вводим месяный доход

    do{       
        money = prompt('Ваш месячный доход? ', 1300);
      
    } while ( isNaN(money) || money === null  || money=== '')
    return money;
};

start(); //выводим месячный доходд с проверкой на число
console.log('Ваш месячный доход',money);


let appData ={
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission : 8000,
    period : 10,
    budget : 0, 
    budgetDay : 0, 
    budgetMonth  : 0, 
    expensesMonth : 0, 
        asking: function(){
                 let  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Транспорт, питание, отдых'); // возможные расходы
                 appData.addExpenses = addExpenses.toLowerCase.split(",");
                 appData.deposit = confirm('Есть ли у вас депозит в банке?'); 

                 
                 
    } 

};


appData['budget'] = money;

let expenses1,
     expenses2;



appData.getExpensesMonth = function(){    //Функция возвращает сумму всех расходов за месяц
   
    let sum = 0;

    for (let i = 0; i < 2;  i++){

        if (i === 0){

             expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Авто, питание, оплата счетов');
        } if (i === 1){

            expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Шопинг, развелечения...');
        }
        

        appData.expenses = undefined;

        while (isNaN(appData.expenses)){
            appData.expenses = +prompt('Во сколько это обойдется?', 250);
        }
        sum += appData.expenses;
    }
    return sum;    

};
let expensesMonth = appData.getExpensesMonth ();


console.log('Все расходы: ', expensesMonth);







appData.getBudget = getBudget;
function getBudget(income){ //Функция возвращает Накопления за месяц

    let getBudgetDay = function(x){
        let  budgetDay = Math.floor(x / 30 );
         return budgetDay;
     };
     let resultGetBudgetDay = getBudgetDay(money);

     appData.getStatusIncome = function(){
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

    
    let accumulatedMonth = income - expensesMonth; 
    return ('Доход за месяц состовляет:', accumulatedMonth);
}



appData.getTargetMonth = function (){ // Функция возвращает за какой период будет достигнута цель
    let MonthsToSave = Math.floor( appData.mission / resultGetAccumulatedMonth ); 
    if (MonthsToSave < 0){
        console.log('Цель не будет достигнута');
    }else
    console.log('Миссия по накоплению суммы будет выполнена через:', MonthsToSave, 'месяцев');
}

let resultGetAccumulatedMonth = getBudget(money); //

appData.getTargetMonth();
appData.getStatusIncome();

for ( let key in appData){
    console.log('Наша программа включает в себя данные:', key, 'значение', appData[key]);
}

//console.log(Object.keys(appData)); // всего свойст в объекте  
