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



        class AppData {
            
            constructor() {
            
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
            
        }

        
        start (){ // вводим месяный доход 
            console.log(this);
            if ( getSalaryAmount.value === ''){
                getButtonStart.setAttribute('readOnly','true');
                return;
            }

            this.budget = +getSalaryAmount.value;

            this.getExpenses (); 
            this.getIncome();
            this.getExpensesMonth ();
            this.getIncomeMonth(); 
            this.getAdd(this.otherIncome (), this.addIncome );
            this.getAdd(this.otherExpenses (), this.addExpenses );
            this.getNumberPeroid();    
            this.getInfoDeposit();   
            this.getBudget (); 
            this.blockData();  
            this.showResult();
            this.changeBtn();


        } 


        addBlock(){
            let cloneItem = this.getItem[0].cloneNode(true);
            this.getItem[0].parentNode.insertBefore(cloneItem, this.getAddButton);
            this.getItem = document.querySelectorAll(this.item);
            if( this.getItem.length == 3 ){ 
                this.getAddButton.style.display = 'none'; 
            } 

        }

        showResult(){ 

            getBudgetMonthValue.value = this.budgetMonth; 
            getBudgetDayValue.value = this.budgetDay; 
            getExpensesMonthValue.value = this.expensesMonth; 
            getAdditionalExpensesValue.value = this.addExpenses.join(', '); 
            getAdditionalIncomeValue.value = this.addIncome.join(', '); 
            getTargetMonthValue.value = Math.ceil(this.getTargetMonth());
            getIncomePeriodValue.value = this.calcPeriod(); 
            getPeriodSelect.addEventListener("click", ()=>{
                getIncomePeriodValue.value = this.budgetMonth * getPeriodSelect.value; 
            }); 

        }
      
        getInfoDeposit(){ 
            if ( this.deposit ){ 
                    appData.percentDeposit = depositPercent.value; 
                    appData.moneyDeposit = depositAmount.value; 
            }
        }

        otherExpenses() { // поля возможных доходов
            return getAddItionalExpensesItem.value;
            
        } 


        otherIncome() { // поля возможных доходов
            return getAddItionalIncome[0].value +','+ getAddItionalIncome[1].value;

        }

        getAdd (elem1, elem2){  //названия  через ,

            const result = elem1.split(','); 

            result.forEach((item)=>{ 

                item = item.trim(); 
                if ( item !== ''){ 
                    elem2.push(item); 
                } 
            }); 

        }

        calcPeriod (){
            return this.budgetMonth * getPeriodSelect.value; 
        }
        getExpensesMonth (){ //Функция возвращает сумму всех расходов за месяц 
            const _this = this;
            for (let key in this.expenses){ 

                this.expensesMonth += +this.expenses[key]; 

            } 

        }
        getIncomeMonth (){ //Функция возвращает сумму всех доп доходов за месяц за месяц 
            const _this = this;
            for (let key in this.income){ 

                this.incomeMonth += +this.income[key]; 

            } 

        }
        getExpenses() { 

            expensesItems.forEach((item)=>{ 
            let itemExpenses = item.querySelector('.expenses-title').value; 
            let cashExpenses = item.querySelector('.expenses-amount').value; 
            if(itemExpenses !== '' && cashExpenses !== ''){ // !==
                this.expenses[itemExpenses] = +cashExpenses; 
            } 
            }); 
            
        }
        getIncome (){
            getIncomeItem.forEach((item)=>{

                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
  
                if( itemIncome !== '' && cashIncome !== ''){    // !==
    
                    this.income[itemIncome] = cashIncome;
                    
                }
            });
        }
        getBudget (){ //Функция возвращает Накопления за месяц 

            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12 ; 
            this.budgetDay = Math.floor(this.budget / 30 ); 

        }
        getTargetMonth () { // Функция возвращает за какой период будет достигнута цель 
            return getTargetAmount.value / this.budgetMonth ; 

        }
        getNumberPeroid (){ 
            //return this.budgetMonth * this.calcPeriod.value;
            
            const periodAmount = document.querySelector('.period-amount');
            periodAmount.textContent = getPeriodSelect.value; 
            return getPeriodSelect.value;
        }
        blockData (){
            const liAllData = data.querySelectorAll('input');
            liAllData.forEach((item)=>{
                item.setAttribute('readOnly','true');
            });
        }
        changeBtn (){
            getButtonStart.style.display = 'none';

            getButtonCancel.style.display = 'block';

        }
        reset (){

            const inputAll = document.querySelectorAll('input');
            
            inputAll.forEach((item)=>{
                item.value = "";
            });

            const liAllData = data.querySelectorAll('input');

            liAllData.forEach((item)=>{
                item.removeAttribute('readOnly');
            });

            getButtonStart.style.display = 'block';
            getButtonCancel.style.display = 'none';
            getPeriodSelect.value = 0;

        }
        
        depositCheckChange(){
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

                });

            }else{
                depositBank.style.display = 'none';
                depositAmount.style.display = 'none';
                depositAmount.value = '';
                appData.deposit = 'false';
            }
        }

           
        eventListeners (){
            getButtonStart.addEventListener('click', this.start.bind(this)  );
             getAddButtonExpenses.addEventListener('click', this.addBlock.bind({getItem: expensesItems, getAddButton : getAddButtonExpenses, item: ".expenses-items"}));
            getAddButtonIncome.addEventListener('click', this.addBlock.bind({getItem: getIncomeItem, getAddButton : getAddButtonIncome, item: ".income-items"}));      
            getPeriodSelect.addEventListener('click', this.getNumberPeroid);
            getButtonCancel.addEventListener('click', this.reset);    
            depositCheck.addEventListener('change', this.depositCheckChange);
        }

 
 
    }


        const appData = new AppData ();
        appData.eventListeners(); 
