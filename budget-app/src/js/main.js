let btnStart = document.getElementById('start'),
    budgetVal = document.getElementsByClassName('budget-value'),
    dayBudgetVal = document.getElementsByClassName('daybudget-value'),
    lvl = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expennses-value'),
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),
    expensesInput = document.getElementsByClassName('expenses-item'),
    btns = document.getElementsByTagName('button'),
    btnExpenses = btns[0],
    btnOptionalExp = btns[1],
    btnCount = btns[2],
    inputOptionalExp = document.querySelectorAll('input.expenses-item'),
    inputIncome = document.querySelector('#income'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    
