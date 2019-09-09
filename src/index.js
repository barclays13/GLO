'use strict';
const getButtonStart = document.getElementById('start'); //Получить кнопку "Рассчитать" через id 
const getButtonCancel = document.getElementById('cancel'); //Получить кнопку "Сбросить" через id 
const getAddButtonIncome = document.getElementsByTagName('button')[0]; // получили "+" Income 
const getAddButtonExpenses = document.getElementsByTagName('button')[1]; // получили "+" Expenses 
const getCheckDeposit = document.querySelector('#deposit-check'); //получить чекбокс по id через querySelector 
const getAddItionalIncome = document.querySelectorAll('.additional_income-item'); //Получить поля для ввода возможных доходов 
const getBudgetDayValue = document.querySelector('.budget_day-value'); // Получили input Дневной бюджет 
const getBudgetMonthValue = document.querySelector('.budget_month-value'); // Получили input Месячный бюджет 
const getExpensesMonthValue = document.querySelector('.expenses_month-value');// Получили input Расход за месяц 
const getAdditionalIncomeValue = document.querySelector('.additional_income-value');// Получили input Возможные доходы 
const getAdditionalExpensesValue = document.querySelector('.additional_expenses-value');// Получили input Возможные расходы 
const getIncomePeriodValue = document.querySelector('.income_period-value');// Получили input Накопления за период 
const getTargetMonthValue = document.querySelector('.target_month-value');// Получили input Срок достижения цели в месяцах 
const getSalaryAmount = document.querySelector('.salary-amount');// Получили input Месячный доход 
const expensesItems = document.querySelectorAll(".expenses-items");
const getIncomeTitle = document.querySelector('.income-title');// Получили input Дополнительный доход - Наинменование 
const getExpensesTitle = document.querySelector('.expenses-title');// Получили input Обязательные расходы - Наинменование 
const getExpensesAmount = document.querySelector('.expenses-amount');// Получили input Обязательные расходы - Сумма 
const getPeriodSelect = document.querySelector('.period-select');// Получили input Период расчета 
const getAddItionalExpensesItem = document.querySelector('.additional_expenses-item');// Получили input Возможные расходы (перечислите через запятую) 
const getTargetAmount = document.querySelector('.target-amount');// Получили input Цель-сумма 
const getIncomeItem = document.querySelectorAll('.income-items');
const data = document.querySelector('.data');
const btnAll = document.querySelectorAll('button');
const depositCheck = document.getElementById('deposit-check');
const depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');
    console.log('depositPercent: ', depositPercent);
    console.log('depositAmount: ', depositAmount);
    console.log('depositBank: ', depositBank);



        const AppData = function () {
            
            this.budget = 0; 
            this.budgetDay =  0; 
            this.budgetMonth =  0; 
            this.income = {}; //Доход 
            this.addIncome = []; 
            this.incomeMonth = 0;
            this.expenses = {};//Расход 
            this.addExpenses = []; 
            this.expensesMonth = 0; 
            this.deposit = true;
            this.percentDeposit = 0;
            this.moneyDeposit = 0; 
            
        };

        
        AppData.prototype.start =function (){ // вводим месяный доход 

            if ( getSalaryAmount.value === ''){
                getButtonStart.setAttribute('readOnly','true');
                return;
            }

            this.budget = +getSalaryAmount.value;

            this.getExpenses (); 
            this.getIncome();
            this.getExpensesMonth ();
            this.getIncomeMonth(); 
            this.getAddExpenses(); 
            this.getAddIncome();
            this.getNumberPeroid();    
            this.getInfoDeposit();   
            this.getBudget (); 
            this.blockData();  
            this.showResult();
            this.changeBtn();


        } ;

        AppData.prototype.addExpensesBlock = function () { 
            let cloneExpensesItem = expensesItems[0].cloneNode(true); //
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem,getAddButtonExpenses); 
            expensesItems = document.querySelectorAll(".expenses-items"); 

            if( expensesItems.length == 3 ){ 
                getAddButtonExpenses.style.display = 'none';    
            } 
        }; 

        AppData.prototype.addIncomeBlock = function (){
            let cloneIncomeItem = getIncomeItem[0].cloneNode(true);
            getIncomeItem[0].parentNode.insertBefore(cloneIncomeItem, getAddButtonIncome);
            getIncomeItem = document.querySelectorAll('.income-items');

            if( getIncomeItem.length == 3 ){ 
                getAddButtonIncome.style.display = 'none'; 
            } 

        };
        AppData.prototype.showResult = function(){ 
            const _this = this;
            getBudgetMonthValue.value = this.budgetMonth; 
            getBudgetDayValue.value = this.budgetDay; 
            getExpensesMonthValue.value = this.expensesMonth; 
            console.log(appData);
            getAdditionalExpensesValue.value = this.addExpenses.join(', '); 
            getAdditionalIncomeValue.value = this.addIncome.join(', '); 
            getTargetMonthValue.value = Math.ceil(this.getTargetMonth());
            getIncomePeriodValue.value = this.calcPeriod(); 
            getPeriodSelect.addEventListener("click", function(){
                getIncomePeriodValue.value = _this.budgetMonth * getPeriodSelect.value; 
            }); 

        }; 
      
        AppData.prototype.getInfoDeposit= function(){ 
            if ( this.deposit ){ 
                    appData.percentDeposit = depositPercent.value; 
                    appData.moneyDeposit = depositAmount.value; 
            }
        }; 
     
        AppData.prototype.getAddExpenses = function(){ 
            const _this = this;
            let addExpenses = getAddItionalExpensesItem.value.split(','); 
            addExpenses.forEach(function(item){ 
                item = item.trim(); 
                if ( item !== ''){ 
                    _this.addExpenses.push(item); 
                } 
            }); 
        }; 
        AppData.prototype.getAddIncome = function() {
            const _this = this;
            getAddItionalIncome.forEach(function(item){
                let itemValue = item.value.trim();
                if(item.value !== ''){
                    _this.addIncome.push(itemValue);
                }

            });

        }; 
        AppData.prototype.calcPeriod= function (){
            return this.budgetMonth * getPeriodSelect.value; 
        }; 
        AppData.prototype.getExpensesMonth = function (){ //Функция возвращает сумму всех расходов за месяц 
            const _this = this;
            for (let key in this.expenses){ 

                this.expensesMonth += +this.expenses[key]; 

            } 

        }; 
        AppData.prototype.getIncomeMonth = function (){ //Функция возвращает сумму всех доп доходов за месяц за месяц 
            const _this = this;
            for (let key in this.income){ 

                this.incomeMonth += +this.income[key]; 

            } 

        }; 
        AppData.prototype.getExpenses = function() { 

            const _this = this;

            expensesItems.forEach(function(item){ 
            let itemExpenses = item.querySelector('.expenses-title').value; 
            let cashExpenses = item.querySelector('.expenses-amount').value; 
            if(itemExpenses !== '' && cashExpenses !== ''){ // !==
                _this.expenses[itemExpenses] = +cashExpenses; 
            } 
            }); 
            
        }; 
        AppData.prototype.getIncome = function (){
            const _this = this;
            getIncomeItem.forEach(function(item){

                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
  
                if( itemIncome !== '' && cashIncome !== ''){    // !==
    
                    _this.income[itemIncome] = cashIncome;
                    
                }
            });
        };
        AppData.prototype.getBudget = function (){ //Функция возвращает Накопления за месяц 

            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12 ; 
            this.budgetDay = Math.floor(this.budget / 30 ); 

        }; 
        AppData.prototype.getTargetMonth = function () { // Функция возвращает за какой период будет достигнута цель 
            return getTargetAmount.value / this.budgetMonth ; 

        };
        AppData.prototype.getNumberPeroid = function(){ 
            //return this.budgetMonth * this.calcPeriod.value;
            
            let periodAmount = document.querySelector('.period-amount');
            periodAmount.textContent = getPeriodSelect.value; 
            return getPeriodSelect.value;
        };
        AppData.prototype.blockData = function(){
            let liAllData = data.querySelectorAll('input');
            liAllData.forEach(function(item){
                item.setAttribute('readOnly','true');
            });
        };
        AppData.prototype.changeBtn = function(){
            getButtonStart.style.display = 'none';

            getButtonCancel.style.display = 'block';

        };
        AppData.prototype.reset = function(){

            let inputAll = document.querySelectorAll('input');
            
            inputAll.forEach(function(item){
                item.value = "";
            });

            let liAllData = data.querySelectorAll('input');

            liAllData.forEach(function(item){
                item.removeAttribute('readOnly');
            });

            getButtonStart.style.display = 'block';
            getButtonCancel.style.display = 'none';

        };
           
        AppData.prototype.eventListeners = function (){
            console.log(this);
            getButtonStart.addEventListener('click', this.start.bind(this));
            getAddButtonExpenses.addEventListener('click', this.addExpensesBlock);
            getAddButtonIncome.addEventListener('click', this.addIncomeBlock);
            getPeriodSelect.addEventListener('click', this.getNumberPeroid);
            getButtonCancel.addEventListener('click', this.reset);    
            
        };
 
 
        console.log('depositCheck: ', depositCheck);

        depositCheck.addEventListener('change', function(){
            if(depositCheck.checked ){
                depositBank.style.display = 'inline-block';
                depositAmount.style.display = 'inline-block';
                appData.deposit = 'true';
                depositBank.addEventListener('change', function(){
                    let selectIndex = this.options[this.selectedIndex].value;
                        if(selectIndex === 'other'){
                            depositPercent.style.display = 'inline-block';
                            depositPercent.value = '';
                            depositPercent.removeAttribute('disabled');
                        }else{
                            depositPercent.style.display = 'none';
                            depositPercent.value = selectIndex;        
                        }
                    console.log('this: ', this.options[this.selectedIndex].value);

                });

            }else{
                depositBank.style.display = 'none';
                depositAmount.style.display = 'none';
                depositAmount.value = '';
                appData.deposit = 'false';
            }

        });



        const appData = new AppData ();

        appData.eventListeners();
    
/* 
        getButtonStart.addEventListener('click', appData.start.bind(appData));
        getAddButtonExpenses.addEventListener('click', appData.addExpensesBlock);
        getAddButtonIncome.addEventListener('click', appData.addIncomeBlock);
        getPeriodSelect.addEventListener('click', appData.getNumberPeroid);
        getButtonCancel.addEventListener('click', appData.reset);         */