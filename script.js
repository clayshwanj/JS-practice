// User to enter some number text on the input field ✔
// Once they click the submit button then the program should check if the amount that has been entered is within the allowed deposit range
// If the amount is within the range, then the balance on the page should update to reflect the deposit
// If the amount is not within the range, then an error should be displayed on the page

// Range is: 20 - 5000

// function callStudent(name) {
//   if (name == "Flavian") {
//     return "Flavian has been summoned";
//   } else if (name == "Frank") {
//     return "Frank has been summoned";
//   } else if (name == "Joyce") {
//     return "Joyce has been summoned";
//   } else {
//     return "Another student has been summoned";
//   }
// }

// console.log(callStudent("Claire"));
let min = 20;
let max = 5000;

function getUserInput() {
  let userInput = document.getElementById("amount").value;

  if (userInput < min) {
    console.log("Deposit amount is too little. It needs to be more than ", min);
    return;
  } else if (userInput > max) {
    console.log("Deposit amount is too much. It needs to be less than ", max);
    return;
  }

  console.log("The value of amount is: ", userInput);
  console.log("The type of amount is: ", typeof userInput);

  let balanceElement = document.getElementById("balance");

  let balance = balanceElement.innerText;

  console.log("The type of balance is: ", typeof balance);

  balance = parseInt(balance);
  console.log("The type of balance is: ", typeof balance);

  userInput = parseInt(userInput);
  console.log("The type of amount is: ", typeof userInput);

  console.log("The current balance is: ", balance);

  let newBalance = balance + userInput;
  console.log("The new balance is: ", newBalance);

  balanceElement.innerText = newBalance;
}

let submitButton = document.getElementById("deposit-btn");

submitButton.addEventListener("click", getUserInput);
