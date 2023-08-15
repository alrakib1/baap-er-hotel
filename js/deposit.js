// step 1 : add event listener on deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field 
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);
// step-7 clear the deposit field
depositField.value= '';

if(isNaN(newDepositAmount)){
    alert('Please Provide a Valid Number');
    return;
}
// step 3 get current deposit total 
const depositTotalElement = document.getElementById('deposit-total');
const PreviousDepositTotalString = depositTotalElement.innerText;
const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);
// step 4 add numbers to set the total deposit
const currentDepositTotal = PreviousDepositTotal + newDepositAmount;
// set the deposit total amount
depositTotalElement.innerText = currentDepositTotal;
// step 5 : get balance current total 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step 6 calculate total current Balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
// set the balance total
balanceTotalElement.innerText = currentBalanceTotal;

})