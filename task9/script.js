'use strict';
let money,
    time,
    costs,
    howmuch;

function start() {
    money = +prompt("Ваш бюджет на месяц?", 0);
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }
}

start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            costs = prompt("Введите обязательную статью расходов в этом месяце", "");
            howmuch = +prompt("Во сколько обойдется?", 0);

            if (typeof (costs) === 'string' && typeof (costs) != null && typeof (howmuch) != null &&
                costs != '' && howmuch != '' && costs.length < 50) {
                console.log("done");
                appData.expenses[costs] = howmuch;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.moneyData / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            costs = prompt("Статья необязательных расходов?", "");

            if (typeof (costs) === 'string' && typeof (costs) != null && costs != '' && costs.length < 50) {
                console.log("done");
                appData.optionalExpenses[i] = costs;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = null;

        do {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        while (typeof (items) !== 'string' || typeof (items) == null || items == '');

        appData.income = items.split(', ');
        appData.income.push(prompt("Может что то еще?"));
        appData.income.sort();

        appData.income.forEach(function (item, i, arr) {
            alert("Сбособы доп.заработка: " + (i + 1) + ". " + item);
        });
    }
};

function getAppData() {
    console.log("Наша программа включает в себя данные: ");
    for (let key in appData) {
        console.log(key + ":" + appData[key]);
    }
}

getAppData();