let money;

let start = function (){ // вводим месяный доход

    do{       
        money = prompt('Ваш месячный доход? ', 1300);
      
    } while ( isNaN(money) || money === null  || money=== '');
    return money;
};




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
                 appData.addExpenses = addExpenses.split(",");
                 appData.deposit = confirm('Есть ли у вас депозит в банке?');    

                let expansName;

                 for (let i = 0; i < 2;  i++){

                    let exspense = undefined;

                    if (i === 0){
                        expansName = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'Бензин');
                      while ( isNaN(exspense) || exspense === null || exspense === '' ){
                        exspense = +prompt('Во сколько это обойдется?', 250);
                       }
                       appData.expenses[expansName] = exspense;
                    }  if (i === 1){
                        expansName = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'ЖКХ');
                      while ( isNaN(exspense) || exspense === null || exspense === ''  ){
                        exspense = +prompt('Во сколько это обойдется?', 250);
                       }
                       appData.expenses[expansName] = exspense;
                    } 
                    }   
                 
    } 

};

appData.budget = start(); //выводим месячный доходд с проверкой на число
//appData['budget'] = money;

appData.asking();




appData.getExpensesMonth = function(){    //Функция возвращает сумму всех расходов за месяц
   let sum = 0;
for (let key in appData.expenses){

    sum +=  appData.expenses[key];

}
    appData.expensesMonth = sum ;
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
    }else{
        console.log('Миссия по накоплению суммы будет выполнена через:', MonthsToSave, 'месяцев');
    }

}

let resultGetAccumulatedMonth = getBudget(money); //

appData.getTargetMonth();
appData.getStatusIncome();

for ( let key in appData){
    console.log('Наша программа включает в себя данные:', key, 'значение', appData[key]);
}

//console.log(Object.keys(appData)); // всего свойст в объекте  
