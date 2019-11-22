'use strict';

let money = +prompt("Ваш бюджет на месяц?", 0),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    costs,
    howmuch;

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    costs = prompt("Введите обязательную статью расходов в этом месяце", "");
    howmuch = +prompt("Во сколько обойдется?", 0);

    if (typeof (costs) === 'string' && typeof(costs) != null && typeof(howmuch) != null
    && costs != '' && howmuch != '' && costs.length < 50) {
        console.log("done");
        appData.expenses[costs] = howmuch;
    } else {
        i--;
    }
};

/*
let i = 0;

while (i < 2) {
    costs = prompt("Введите обязательную статью расходов в этом месяце", "");
    howmuch = +prompt("Во сколько обойдется?", 0);

    if (typeof (costs) === 'string' && typeof(costs) != null && typeof(howmuch) != null
    && costs != '' && howmuch != '' && costs.length < 50) {
        console.log("done");
        appData.expenses[costs] = howmuch;
    } else {
        i--;
    }

    i++;
}

do  {
    i++;

    costs = prompt("Введите обязательную статью расходов в этом месяце", "");
    howmuch = +prompt("Во сколько обойдется?", 0);

    if (typeof (costs) === 'string' && typeof(costs) != null && typeof(howmuch) != null
    && costs != '' && howmuch != '' && costs.length < 50) {
        console.log("done");
        appData.expenses[costs] = howmuch;
    } else {
        i--;
    }

} while(i < 2);
*/

appData.moneyPerDay = appData.moneyData / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}