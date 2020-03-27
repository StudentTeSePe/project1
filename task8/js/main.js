'use strict'

let buttonBeginCount = document.getElementById('start'),
    budgetvalue = document.getElementsByClassName('budget-value')[0],
    daybudgetvalue = document.getElementsByClassName('daybudget-value')[0],
    levelvalue = document.getElementsByClassName('level-value')[0],
    expensesvalue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesvalue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomevalue = document.getElementsByClassName('income-value')[0],
    monthsavingsvalue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsvalue = document.getElementsByClassName('yearsavings-value')[0],
    expensesitem = document.getElementsByClassName('expenses-item'),

    btnexpensesitem = document.getElementsByTagName('button')[0],
    btnoptionalexpenses = document.getElementsByTagName('button')[1],
    btcountbudget = document.getElementsByTagName('button')[2],
    itemoptionalexpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseincome = document.querySelector('.choose-income'),
    chsavings = document.querySelector('#savings'),
    choosesum = document.querySelector('.choose-sum'),
    choosepercent = document.querySelector('.choose-percent'),
    yearvalue = document.querySelector('.year-value'),
    monthvalue = document.querySelector('.month-value'),
    dayvalue = document.querySelector('.day-value');

let money, time;
btnexpensesitem.disabled = true;
btnoptionalexpenses.disabled = true;
btcountbudget.disabled = true;

buttonBeginCount.addEventListener('click', function () {

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", 0);

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }

    appData.budget = money;
    appData.timeData = time;
    budgetvalue.textContent = money.toFixed();
    yearvalue.value = new Date(Date.parse(time)).getFullYear();
    monthvalue.value = new Date(Date.parse(time)).getMonth();
    dayvalue.value = new Date(Date.parse(time)).getDay();

    btnexpensesitem.disabled = false;
    btnoptionalexpenses.disabled = false;
    btcountbudget.disabled = false;
});

btnexpensesitem.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesitem.length; i++) {
        let costs = expensesitem[i].value,
            //prompt("Введите обязательную статью расходов в этом месяце", "");
            howmuch = expensesitem[++i].value;
        //+prompt("Во сколько обойдется?", 0);

        if (typeof (costs) === 'string' && typeof (costs) != null && typeof (howmuch) != null &&
            costs != '' && howmuch != '' && costs.length < 50) {
            appData.expenses[costs] = howmuch;
            sum += +howmuch;
        } else {
            i--;
        }
    }

    expensesvalue.textContent = sum;
});

btnoptionalexpenses.addEventListener('click', function () {
    for (let i = 0; i < itemoptionalexpenses.length; i++) {
        let costs = itemoptionalexpenses[i].value;
        //prompt("Статья необязательных расходов?", "");
        if (typeof (costs) === 'string' && typeof (costs) != null && costs != '' && costs.length < 50) {
            appData.optionalExpenses[i] = costs;
            optionalexpensesvalue.textContent += appData.optionalExpenses[i] + ' ';
        }
    }
});

btcountbudget.addEventListener('click', function () {

    if (appData.budget != undefined) {

        let sumday = 0;

        for (let item in appData.expenses) {
            sumday += +appData.expenses[item];
        }

        appData.moneyPerDay = ((appData.budget - sumday) / 30).toFixed();
        daybudgetvalue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelvalue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelvalue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelvalue.textContent = "Высокий уровень достатка";
        } else {
            levelvalue.textContent = "Произошла ошибка";
        }
    }
    else {
        daybudgetvalue.textContent = "Произошла ошибка";
    }

});

chooseincome.addEventListener('input', function() {
    let items = chooseincome.value;
    appData.income = items.split(', ');
    incomevalue.textContent = appData.income;
});

chsavings.addEventListener('click', function() {
    if (appData.savings == true)
    {
        appData.savings = false;
         
    } else {
        appData.savings = true;
    }
});

choosesum.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +choosesum.value,
            percent = +choosepercent.value;
        
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsvalue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsvalue.textContent = appData.yearIncome.toFixed(1);
    }

});

choosepercent.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +choosesum.value,
            percent = +choosepercent.value;
        
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsvalue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsvalue.textContent = appData.yearIncome.toFixed(1);
        
    }

});


let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};





//# sourceURL= script.js