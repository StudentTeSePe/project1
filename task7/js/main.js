'use strict'

let buttonBeginCount = document.getElementById('start'),
    budgetvalue = document.getElementsByClassName('budget-value'),
    daybudgetvalue = document.getElementsByClassName('daybudget-value'),
    levelvalue = document.getElementsByClassName('level-value'),
    expensesvalue = document.getElementsByClassName('expenses-value'),
    optionalexpensesvalue = document.getElementsByClassName('optionalexpenses-value'),
    incomevalue = document.getElementsByClassName('income-value'),
    monthsavingsvalue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsvalue = document.getElementsByClassName('yearsavings-value'),
    expensesitem = document.getElementsByClassName('expenses-item'),
    btnexpensesitem = document.getElementsByTagName('button')[0],
    btnoptionalexpenses = document.getElementsByTagName('button')[1],
    itemoptionalexpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseincome = document.querySelector('.choose-income'),
    chsavings = document.getElementById('savings'),
    choosesum = document.querySelector('.choose-sum'),
    choosepercent = document.querySelector('.choose-percent'),
    yearvalue = document.querySelector('.year-value'),
    monthvalue = document.querySelector('.month-value'),
    dayvalue = document.querySelector('.day-value');

//# sourceURL= script.js