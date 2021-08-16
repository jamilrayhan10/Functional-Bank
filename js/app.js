// get amount value
function getInputValue(inputId) {
  const inputAmount = document.getElementById(inputId);
  const newAmount = parseFloat(inputAmount.value);
  // clear
  inputAmount.value = "";
  return newAmount;
}

function updetTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const newTotalElement = parseFloat(totalElement.innerText);
  // set deposit main amount
  const addMainAmount = newTotalElement + amount;
  totalElement.innerText = addMainAmount;
}

function getCurrentBalance() {
  const balanceAmount = document.getElementById("balance-amount");
  const newBalanceAmount = parseFloat(balanceAmount.innerText);
  return newBalanceAmount;
}

function updetAmount(amount, isAdd) {
  const balanceAmount = document.getElementById("balance-amount");
  const newBalanceAmount = parseFloat(balanceAmount.innerText);
  if (isAdd == true) {
    const totalBalance = newBalanceAmount + amount;
    balanceAmount.innerText = totalBalance;
  } else {
    const totalBalance = newBalanceAmount - amount;
    balanceAmount.innerText = totalBalance;
  }
}
// deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDeposit = getInputValue("deposit-input");
  if (newDeposit > 0) {
    updetTotalField("deposit-amount", newDeposit);
    updetAmount(newDeposit, true);
  }
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawInput = getInputValue("withdraw-input");
  const currentBalance = getCurrentBalance();

  if (newWithdrawInput > 0 && newWithdrawInput <= currentBalance) {
    updetTotalField("withdraw-amount", newWithdrawInput);
    updetAmount(newWithdrawInput, false);
  }
  if (newWithdrawInput > currentBalance) {
    alert("apnar taka nai!!");
  }
});
