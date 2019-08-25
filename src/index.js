const money = 1300 ;
const income = 'рабство';
const  addExpenses = 'Еда, Расходы по дому, Развлечения';
const deposit = false;
const mission = 6000;
const period = 10;
let budgetDay;

console.log(typeof money); //выводим тип данных переменной
console.log(typeof income); //выводим тип данных переменной
console.log(typeof deposit); //выводим тип данных переменной

console.log('Длина переменной income: ', income.length ); // Длина строки

console.log('Период ', period ,' месяцев.'); // вывод текста + переменная
console.log('Цель зработать ', mission ,' бел.руб.'); // вывод текста + переменная

//console.log(addExpenses.charAt(7)); // выводит символ 1
//console.log(addExpenses[0]); // выводит символ 1
//console.log(addExpenses.substring(6)); // выводит с и до конца
//console.log(addExpenses.substring(5, 10)); // выводит с и до какого
//console.log(addExpenses.slice(6)); // Выводит все после 6 символа
//console.log(addExpenses.slice(-11)); // Выводит послдних 11 символов
//console.log(addExpenses.substr(10, 4)); // Выводит с какого и сколько
//console.log(addExpenses.indexOf(',')); //индекс символа в данной строке
//console.log(addExpenses.replace('Еда', 'Продукты питания')); //заменяет еда на продукты питания в строке
console.log(addExpenses.toLowerCase()); //нижний регистр
console.log(addExpenses.split(',')); //разбить строку массив по ,
let cchengeExpenses = addExpenses.toLowerCase(); // сохраняем строку в нижнем регистре
console.log(cchengeExpenses.split(',')); //разбить строку массив по ,
// console.log(addExpenses.toUpperCase()); //верхний регистр регистр

budgetDay = money / 30;
console.log(budgetDay); // Вывод бюджета на 1 день
//console.log(budgetDay = money / 30);

console.log('Доп задание ко 2 уроку');

const num = '266219';
const num1 = num[0];
const num2 = num[1];
const num3 = num[2];
const num4 = num[3];
const num5 = num[4];
const num6 = num[5];

console.log(num);
multiplication =  num1 * num2 * num3 * num4 * num5 * num6; 
console.log('Произведение всех чисел, числа 266219: ', multiplication);

let multiplication3 = multiplication ** 3;
const multiplication4 = String(multiplication3);
console.log(multiplication4.substr(0,2));