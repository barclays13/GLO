let money;

let start = function (){ // вводим месяный доход

    do{       
         money = prompt('Ваш месячный доход? ', 1300);
    } while ( isNaN(money) || money === null  || money === '');
};
start(); 


let appData ={
    budget : money, 
    budgetDay : 0, 
    budgetMonth  : 0, 
    income: {}, //Доход
    addIncome: [],
    expenses: {},//Расход
    addExpenses: [],
    expensesMonth : 0, 
    deposit: true,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission : 8000,
    period : 5,
         asking: function(){

                if(confirm('Есть ли у вас доп зарабаток')){

                    let itemIncome = prompt('Какой у вас дополнительный заработок?', 'такси'); // имя доп заработка
                    let cashIncome;

                    do{       
                         cashIncome = prompt('Cколько в месяц на этом вы зарабатываете', 500); // сумма доп заработка
                    } while ( isNaN(cashIncome) || cashIncome === null  || cashIncome === '');

                    appData.income[itemIncome] = cashIncome;
                }

                let  addExpenses = 0;

                do{       
                   addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Транспорт,     питание, отдых'); // возможные расходы
                   appData.addExpenses = addExpenses.toLowerCase().split(', ');
                    } while ( !isNaN(addExpenses)  || addExpenses === null  || addExpenses=== ' ');
                
                function str(){
                    let arr1 = addExpenses.replace(/(?:^|\s)(\S)/ug, m => m.toUpperCase());
                    let  arr2 = arr1.replace(/ +/g, ' ').trim();
                     let  arr3 = arr2.split(', ');
                     let arr4 = arr3.join(', ');
                    console.log('arr3: ', arr4);
                  }
                  str();
               
                appData.deposit = confirm('Есть ли у вас депозит в банке?');    
                
                 for (let i = 0; i < 2;  i++){
                     let nameExspense = prompt('Какие обязательные ежемесячные расходы у вас есть? ', 'ЖКХ');
                    let exspense;
                    do{
                        exspense = +prompt('Во сколько это обойдется?', 250);
                    }
                      while ( isNaN(exspense) || exspense === null || exspense === ''  )
                        
                       appData.expenses[nameExspense] = exspense;
                    } 
           
    },  
    getInfoDeposit: function(){
        if ( appData.deposit ){

            do{       
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            } while ( isNaN(appData.percentDeposit) || appData.percentDeposit === null  || appData.percentDeposit === '');
                

            do{       
            appData.moneyDeposit = prompt('Сколько денег вы заложили?', 700);
            } while ( isNaN( appData.moneyDeposit) ||  appData.moneyDeposit === null  ||  appData.moneyDeposit === '');


        }
    }, 
    calcSavedMoney: function (){
        return appData.budgetMonth * appData.period;
    }, 
    getExpensesMonth : function (){    //Функция возвращает сумму всех расходов за месяц

        for (let key in appData.expenses){

              appData.expensesMonth +=  +appData.expenses[key];

        }

    }, 
    getBudget : function (){     //Функция возвращает Накопления за месяц

        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budget / 30 );
    
    }, 
    getStatusIncome : function (){ // функция выводит уровень дохода
        if(appData.budgetDay < 0 ){
            console.log('BudgetDay: Что-то пошло не так');
                    return('BudgetDay: Что-то пошло не так');
                    
        } else {      if(appData.budgetDay >= 800){
                            return ('Высокий уровень дохода');    
                        } else if ( 300 <= appData.budgetDay && appData.budgetDay < 800){
                            return ('Средний уровень дохода');
                        } else if ( 0 <= appData.budgetDay && appData.budgetDay < 300 ){
                            return ('Низкий уровень дохода');
                        }
                    }
    }, 
    getTargetMonth : function () { // Функция возвращает за какой период будет достигнута цель
        let MonthsToSave = Math.floor( appData.mission /  appData.budgetMonth ); 
        if (MonthsToSave < 0){
            console.log('Цель не будет достигнута');
        }else{
            console.log('Миссия по накоплению суммы будет выполнена через:', MonthsToSave, 'месяцев');
        }
    
    }

}


appData.asking();
appData.getExpensesMonth ();
appData.getBudget ();
appData.getStatusIncome();
appData.getTargetMonth();
appData.getInfoDeposit ();
for ( let key in appData){
    console.log('Наша программа включает в себя данные: ' + key +  ' - значение: '+ appData[key]);
}

console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney()  );