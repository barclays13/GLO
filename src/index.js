'use strict';
let getButtonStart = document.getElementById('start'); //Получить кнопку "Рассчитать" через id 
let getButtoncCancel = document.getElementById('cancel'); //Получить кнопку "Сбросить" через id 
let getAddButtonIncome = document.getElementsByTagName('button')[0]; // получили "+" Income 
let getAddButtonExpenses = document.getElementsByTagName('button')[1]; // получили "+" Expenses 
let getCheckDeposit = document.querySelector('#deposit-check'); //получить чекбокс по id через querySelector 
let getAddItionalIncome = document.querySelectorAll('.additional_income-item'); //Получить поля для ввода возможных доходов 
let getBudgetDayValue = document.querySelector('.budget_day-value'); // Получили input Дневной бюджет 
let getBudgetMonthValue = document.querySelector('.budget_month-value'); // Получили input Месячный бюджет 
let getExpensesMonthValue = document.querySelector('.expenses_month-value');// Получили input Расход за месяц 
let getAdditionalIncomeValue = document.querySelector('.additional_income-value');// Получили input Возможные доходы 
let getAdditionalExpensesValue = document.querySelector('.additional_expenses-value');// Получили input Возможные расходы 
let getIncomePeriodValue = document.querySelector('.income_period-value');// Получили input Накопления за период 
let getTargetMonthValue = document.querySelector('.target_month-value');// Получили input Срок достижения цели в месяцах 
let getSalaryAmount = document.querySelector('.salary-amount');// Получили input Месячный доход 
let expensesItems = document.querySelectorAll(".expenses-items");
let getIncomeTitle = document.querySelector('.income-title');// Получили input Дополнительный доход - Наинменование 
let getExpensesTitle = document.querySelector('.expenses-title');// Получили input Обязательные расходы - Наинменование 
let getExpensesAmount = document.querySelector('.expenses-amount');// Получили input Обязательные расходы - Сумма 
let getAddItionalExpensesItem = document.querySelector('.additional_expenses-item');// Получили input Возможные расходы (перечислите через запятую) 
let getTargetAmount = document.querySelector('.target-amount');// Получили input Цель-сумма 
let getPeriodSelect = document.querySelector('.period-select');// Получили input Период расчета 
let getIncomeItem = document.querySelectorAll('.income-items');
let data = document.querySelector('.data');
let btnAll = document.querySelectorAll('button');



    let appData ={ 
        budget :0, 
        budgetDay : 0, 
        budgetMonth : 0, 
        income: {}, //Доход 
        addIncome: [], 
        incomeMonth: 0,
        expenses: {},//Расход 
        addExpenses: [], 
        expensesMonth : 0, 
        deposit: true, 
        percentDeposit: 0, 
        moneyDeposit: 0, 
                    start : function (){ // вводим месяный доход 

                        if ( getSalaryAmount.value === ''){
                            getButtonStart.setAttribute('readOnly','true');
                            return;
                        }
                    
                    appData.budget = +getSalaryAmount.value;


                    appData.getExpenses (); 
                    appData.getIncome();
                    appData.getExpensesMonth ();
                    appData.getIncomeMonth(); 
                    appData.getAddExpenses(); 
                    appData.getAddIncome(); 
                    appData.getNumberPeroid();            
                    appData.getBudget (); 
                    appData.blockData();  
                    appData.showResult();
                    appData.changeBtn();


                } ,


            /* 
            appData.getStatusIncome(); 
            appData.getInfoDeposit (); 
            */ 
            
            
            addExpensesBlock : function () { 
                let cloneExpensesItem = expensesItems[0].cloneNode(true); //
                expensesItems[0].parentNode.insertBefore(cloneExpensesItem,getAddButtonExpenses); 
                expensesItems = document.querySelectorAll(".expenses-items"); 

                if( expensesItems.length == 3 ){ 
                    getAddButtonExpenses.style.display = 'none'; 
                } 
            }, 
            addIncomeBlock : function (){
                let cloneIncomeItem = getIncomeItem[0].cloneNode(true);
                getIncomeItem[0].parentNode.insertBefore(cloneIncomeItem, getAddButtonIncome);
                getIncomeItem = document.querySelectorAll('.income-items');

                if( getIncomeItem.length == 3 ){ 
                    getAddButtonIncome.style.display = 'none'; 
                } 

            },
            showResult : function(){ 

                getBudgetMonthValue.value = this.budgetMonth; 
                getBudgetDayValue.value = this.budgetDay; 
                getExpensesMonthValue.value = this.expensesMonth; 
                getAdditionalExpensesValue.value = this.addExpenses.join(', '); 
                getAdditionalIncomeValue.value = this.addIncome.join(', '); 
                getTargetMonthValue.value = Math.ceil(this.getTargetMonth());
                getIncomePeriodValue.value = this.calcPeriod(); 
                getPeriodSelect.addEventListener("click", function(){
                    getIncomePeriodValue.value = appData.budgetMonth * getPeriodSelect.value; 
                }); 

            }, 
            getInfoDeposit: function(){ 
            if ( appData.deposit ){ 

                do{ 
                    appData.percentDeposit = prompt('Какой годовой процент?', 10); 
                } while ( isNaN(appData.percentDeposit) || appData.percentDeposit === null || appData.percentDeposit === ''); 


                do{ 
                    appData.moneyDeposit = prompt('Сколько денег вы заложили?', 700); 
                } while ( isNaN( appData.moneyDeposit) || appData.moneyDeposit === null || appData.moneyDeposit === ''); 

                } 
            }, 
            getAddExpenses : function(){ 
                let addExpenses = getAddItionalExpensesItem.value.split(','); 
                addExpenses.forEach(function(item){ 
                    item = item.trim(); 
                    if ( item !== ''){ 
                        appData.addExpenses.push(item); 
                    } 
                }); 
            }, 
            getAddIncome : function() {
                getAddItionalIncome.forEach(function(item){
                    let itemValue = item.value.trim();
                    if(item.value !== ''){
                        appData.addIncome.push(itemValue);
                    }

                });

            }, 
            calcPeriod: function (){                
                return this.budgetMonth * getPeriodSelect.value; 
            }, 
            getExpensesMonth : function (){ //Функция возвращает сумму всех расходов за месяц 

                for (let key in this.expenses){ 

                    this.expensesMonth += +this.expenses[key]; 

                } 

            }, 
            getIncomeMonth : function (){ //Функция возвращает сумму всех доп доходов за месяц за месяц 

                for (let key in this.income){ 

                    this.incomeMonth += +this.income[key]; 

                } 

            }, 
            getExpenses : function() { 
 
                expensesItems.forEach(function(item){ 
                let itemExpenses = item.querySelector('.expenses-title').value; 
                let cashExpenses = item.querySelector('.expenses-amount').value; 
                if(itemExpenses !== '' && cashExpenses !== ''){ 
                    appData.expenses[itemExpenses] = cashExpenses; 
                } 
                }); 
                
            }, 
            getIncome : function (){
                getIncomeItem.forEach(function(item){

                    let itemIncome = item.querySelector('.income-title').value;
                    let cashIncome = item.querySelector('.income-amount').value;
                    if( itemIncome !== '' && cashIncome !== ''){
                        appData.income[itemIncome] = cashIncome;
                        
                    }
                });
            },
            getBudget : function (){ //Функция возвращает Накопления за месяц 
     
                this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth; 
                this.budgetDay = Math.floor(this.budget / 30 ); 
 
            }, /*
            getStatusIncome : function (){ // функция выводит уровень дохода 
                if(appData.budgetDay < 0 ){ 
                console.log('BudgetDay: Что-то пошло не так'); 
                return('BudgetDay: Что-то пошло не так'); 

                } else { if(appData.budgetDay >= 800){ 
                return ('Высокий уровень дохода'); 
                } else if ( 300 <= appData.budgetDay && appData.budgetDay < 800){ 
                return ('Средний уровень дохода'); 
                } else if ( 0 <= appData.budgetDay && appData.budgetDay < 300 ){ 
                return ('Низкий уровень дохода'); 
                } 
                } 
            }, */
            getTargetMonth : function () { // Функция возвращает за какой период будет достигнута цель 
                return getTargetAmount.value / this.budgetMonth ; 

            },
            getNumberPeroid : function(){
                let periodAmount = document.querySelector('.period-amount');
                periodAmount.textContent = getPeriodSelect.value; 
                return getPeriodSelect.value;
            },
            blockData : function(){
                let liAllData = data.querySelectorAll('input');
                liAllData.forEach(function(item){
                    item.setAttribute('readOnly','true');
                });
            },
            changeBtn : function(){
                getButtonStart.style.display = 'none';
                getButtoncCancel.style.display = 'block';
            }

        };


        appData.start.apply(appData);
    

        getButtonStart.addEventListener('click', appData.start);
        getAddButtonExpenses.addEventListener('click', appData.addExpensesBlock);
        getAddButtonIncome.addEventListener('click', appData.addIncomeBlock);
        getPeriodSelect.addEventListener('click', appData.getNumberPeroid);
        getButtonStart.addEventListener('click', appData.start);
        
    

        /* 
        for ( let key in appData){ 
        console.log('Наша программа включает в себя данные: ' + key + ' - значение: '+ appData[key]); 
        } 
        */