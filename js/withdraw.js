// step1 : add event listener on withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2:
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step-7 clear the input field
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please Provide a valid Number");
    return;
  }
  // step-3: get previous withdraw total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-5: get the previous balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Do not have enough money to withdraw");
    return;
  }
  // step-4: new total withdraw amount
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;
  // step 6 calculate total current Balance
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  // set the balance total
  balanceTotalElement.innerText = newBalanceTotal;
});
