/**----------Reuseable - function to get number values----------*/
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

/**----------Reuseable - function to get only values----------*/
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

/**----------Reuseable - function to get innerText----------*/
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

/**----------Reuseable - function to set innerText----------*/
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;

}

/**----------Reuseable - function to togging----------*/
function handleToggle (id){
  const forms = document.getElementsByClassName("form")

  for(const form of forms){
    form.style.display = 'none';
  }
  document.getElementById(id).style.display = "block";
}



//add money feature start......
validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // const bank = document.getElementById("bank").value;

    const bank = getInputValue("banK");

    // const accountNumber = document.getElementById("account-number").value;
    const accountNumber = getInputValue("account-number");

    // const amount = parseInt(document.getElementById("add-amount").value);
    const amount = getInputValueNumber("add-amount");

    // const pinNumber = parseInt(document.getElementById("add-pin").value);
    const pinNumber = getInputValueNumber("add-pin");

    // const availableBalance = parseInt(
    //   document.getElementById("available-balance").innerText
    // );
    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11 || accountNumber.length > 11) {
      alert("Invalid Account Number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Invalid Pin Number");
      return;
    }

    const totaNewAvailableBalance = amount + availableBalance;

    // document.getElementById("available-balance").innerText =
    //   totaNewAvailableBalance;
    setInnerText(totaNewAvailableBalance);
  });

// cash out money feature
const cashOutValidPin = 1234;
document
  .getElementById("withrar-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // const amount = parseInt(document.getElementById("withdrow-amount").value);

    const amount = getInputValueNumber("withdrow-amount");

    // const availableBalance = parseInt(
    //   document.getElementById("available-balance").innerText
    // );
    const availableBalance = getInnerText("available-balance");

    // const cashOutNumber = document.getElementById("cash-out-number").value;
    const cashOutNumber = getInputValue("cash-out-number");

    // const cashOutPin = parseInt(document.getElementById("cash-out-pin").value);

    const cashOutPin = getInputValueNumber("cash-out-pin");

    if (cashOutNumber.length < 11 || cashOutNumber.length > 11) {
      alert("Invalid Account Number");
      return;
    }

    if (cashOutPin !== cashOutValidPin) {
      alert("Invalid Pin Number");
      return;
    }

    const totaNewAvailableBalance = availableBalance - amount;
    // document.getElementById("available-balance").innerText =
    //   totaNewAvailableBalance;
    setInnerText(totaNewAvailableBalance);
  });



// toggling feature start.....

// document.getElementById('add-button').addEventListener('click',function(event){
//   event.preventDefault();
//   const forms = document.getElementsByClassName("form")

//   for(const form of forms){
//     form.style.display = 'none';
//   }
//   document.getElementById("add-money-parent").style.display = "block";
// })

document.getElementById("add-button").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form")

  // for(const form of forms){
  //   form.style.display = 'none';
  // }
  // document.getElementById("add-money-parent").style.display = "block";
  handleToggle ("add-money-parent");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
  //   const forms = document.getElementsByClassName("form")

  // for(const form of forms){
  //   form.style.display = 'none';
  // }
  // document.getElementById("cash-out-parent").style.display = "block";
  handleToggle ("cash-out-parent")
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
  //   const forms = document.getElementsByClassName("form")

  // for(const form of forms){
  //   form.style.display = 'none';
  // }
  // document.getElementById("transfer-money-parent").style.display = "block";
  handleToggle ("transfer-money-parent")
  });

  document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
  //   const forms = document.getElementsByClassName("form")

  // for(const form of forms){
  //   form.style.display = 'none';
  // }
  // document.getElementById("get-bonus-parent").style.display = "block";
  handleToggle ("get-bonus-parent")
  });

  document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
  //   const forms = document.getElementsByClassName("form")

  // for(const form of forms){
  //   form.style.display = 'none';
  // }
  // document.getElementById("pay-bill-parent").style.display = "block";
  handleToggle ("pay-bill-parent")
  
  });

  document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
  //   const forms = document.getElementsByClassName("form")

  // for(const form of forms){
  //   form.style.display = 'none';
  // }
  // document.getElementById("transaction-history-parent").style.display = "block";
   handleToggle ("transaction-history-parent")
  });
