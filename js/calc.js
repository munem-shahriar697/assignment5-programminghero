

document.getElementById('calc-btn').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income-amount').value);
    const food = parseFloat(document.getElementById('food-amount').value);
    const rent = parseFloat(document.getElementById('rent-amount').value);
    const cloth = parseFloat(document.getElementById('cloth-amount').value);
    //console.log(income);

    const totalExpense = food + rent + cloth;
    const totalBalance = income - totalExpense;
    //console.log(totalExpense);

    if (totalExpense > income) {
        document.getElementById('expense-update').innerText = "Your expense is higher than income";
        document.getElementById('balance-update').innerText = "";
    }
    else {
        document.getElementById('expense-update').innerText = "Total Expenses: " + totalExpense;
        document.getElementById('balance-update').innerText = "Total Balance: " + totalBalance;
    }

    document.getElementById('save-btn').addEventListener('click', function () {
        const save = parseFloat(document.getElementById('save-amount').value);
        const saveAmount = (income / 100) * save;
        if (save > 100) {
            document.getElementById('save-update').innerText = "Saving cannot be over 100%";
            document.getElementById('rem-balance').innerText = "";
        }
        else if (saveAmount > totalBalance) {
            document.getElementById('save-update').innerText = "Saving cannot be larger than your current balance";
            document.getElementById('rem-balance').innerText = "";
        }
        else {
            document.getElementById('save-update').innerText = "Saving Amount: " + saveAmount;
            document.getElementById('rem-balance').innerText = "Remaining Balance: " + (totalBalance - saveAmount);
        }
    })
})