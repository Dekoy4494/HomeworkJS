let btnStart = document.getElementById('start'),
    budgetVal = document.getElementsByClassName('budget-value')[0],
    dayBudgetVal = document.getElementsByClassName('daybudget-value')[0],
    lvl = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],
    allBtns = document.getElementsByTagName('button'),

    expensesInput = document.getElementsByClassName('expenses-item'),
    btnExpenses = document.getElementsByTagName('button')[0],
    btnOptionalExp = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2],
    optionalExpItem = document.querySelectorAll('.optionalexpenses-item'),
    inputIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;

btnExpenses.disabled = true;
btnOptionalExp.disabled = true;
btnCount.disabled = true;


btnStart.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetVal.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    btnExpenses.disabled = false;
    btnOptionalExp.disabled = false;
    btnCount.disabled = false;
});

btnExpenses.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesInput.length; i++) {
        let a = expensesInput[i].value,
            b = expensesInput[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('все получилось!');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expenses.textContent = sum;
});


btnOptionalExp.addEventListener('click', function () {
    for (let i = 0; i < optionalExpItem.length; i++) {
        let opt = optionalExpItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnCount.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expenses.textContent) / 30).toFixed();
        dayBudgetVal.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            lvl.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            lvl.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            lvl.textContent = "Высокий уровень достатка";
        } else {
            lvl.textContent = "Прозошла ошибка";
        }
    } else {
        dayBudgetVal.textContent = "Произошла ошибка!"
    }
});

inputIncome.addEventListener('input', function () {
    let items = inputIncome.value;
    appData.income = items.split(', ');
    income.textContent = appData.income;
});

checkbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);


    }
});



let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};