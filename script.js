'use strict';

let money = +prompt("Ваш бюджет на месяц?", 0),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    costs = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howmuch = +prompt("Во сколько обойдется?", 0),
    costs1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howmuch1 = +prompt("Во сколько обойдется?", 0);

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        costs: howmuch,
        costs1: howmuch1
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert("Бюджет на 1 день = " 
+ (appData.moneyData - (appData.expenses.costs + appData.expenses.costs1)) / 30);
