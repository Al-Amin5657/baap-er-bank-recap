document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawFieldElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawFieldElement.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const totalWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = totalWithdrawAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
   
    const totalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = totalBalance;
})