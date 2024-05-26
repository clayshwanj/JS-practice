let minimum = 100;
let maximum = 2000;

function getUserInput() {
  let userInput = document.getElementById("amt").value;

  let withdrawError = document.getElementById("err");

  let withdrawMessage = document.getElementById("withdrawal");

  if (userInput < minimum) {
    console.log(
      "Withdrawal amount is too little. It needs to be more than ",
      minimum
    );

    withdrawError.innerText =
      "Withdrawal amount is too little. It needs to be more than 100!";
    withdrawMessage.innerText = "";
    return;
  } else if (userInput > maximum) {
    console.log(
      "Deposit amount is too much. It needs to be less than ",
      maximum
    );

    withdrawError.innerText =
      "Withdrawal amount is too much. It needs to be less than 2000!";
    withdrawMessage.innerText = "";
    return;
  }

  console.log("The value of amount is: ", userInput);
  console.log("The type of amount is: ", typeof userInput);

  let balanceElement = document.getElementById("bal");

  let balance = balanceElement.innerText;

  console.log("The type of balance is: ", typeof balance);

  balance = parseInt(balance);
  console.log("The type of balance is: ", typeof balance);

  userInput = parseInt(userInput);
  console.log("The type of amount is: ", typeof userInput);

  console.log("The current balance is: ", balance);

  let newBalance = balance - userInput;
  console.log("The new balance is: ", newBalance);

  balanceElement.innerText = newBalance;

  // When userInput is within range
  withdrawMessage.innerText = "Withdraw was successful";
  withdrawError.innerText = "";
}
let withdrawButton = document.getElementById("withdraw");

withdrawButton.addEventListener("click", getUserInput);
