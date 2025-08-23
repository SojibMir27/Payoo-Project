// document
//   .getElementById("add-money-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     // console.log("click add money");

//     const bank = document.getElementById("bank").value;
//     const accountNumber = document.getElementById("account-number").value;
//     const amount = parseInt(document.getElementById("add-amount").value);
//     const pin = document.getElementById("add-pin").value;

//     const availableBalance = parseInt(document.getElementById('available-balance').innerText);

//     const totaNewAvailableBalance = amount + availableBalance;
//     document.getElementById('available-balance').innerText = totaNewAvailableBalance;

//     console.log(bank, accountNumber, amount, pin, availableBalance, );

//   });

/**----------Reuseable - function to get number values----------*/

function getInputValueNumber(id) {
  const inputFieldValueNumber = parseInt(document.getElementById(id).value);
     console.log(inputFieldValueNumber);
//   return inputFieldValueNumber;
}
/**----------Reuseable - function to get only values----------*/
function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}

/**----------Reuseable - function to get innerText----------*/
function getInnerText(id) {
  const elementValueNumber = parseInt(document.getElementById(id).innerText);
  return elementValueNumber;
}

/**----------Reuseable - function to set innerText----------*/
function setInnerText(value) {
  const totaNewAvailableBalance = (document.getElementById(
    available - balance
  ).totaNewAvailableBalance.innerText = totaNewAvailableBalance);

  // return totaNewAvailableBalance;
}

//add money feature recape
validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = document.getElementById("bank").value;
    //const bank = getInputValue("bank");

    const accountNumber = document.getElementById("account-number").value;

     const amount = parseInt(document.getElementById("add-amount").value);
    //const amount = getInputValueNumber("add-amount");

    const pinNumber= parseInt(document.getElementById("add-pin").value);
    //const pinNumber = getInputValueNumber("add-pin");

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    //const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11 || accountNumber.length > 11) {
      alert("Invalid Account Number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Invalid Pin Number");
      return;
    }

    const totaNewAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText =
      totaNewAvailableBalance;
    // setInnerText(totaNewAvailableBalance);
  });

//add money feature start..............
/** const validPin = 1234;
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pin = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("please provied your valid 11 digit number");
      return;
    }

    if (pin !== validPin) {
      alert("Please provide your valid pin");
      return;
    }

    const totaNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totaNewAvailableBalance;
  }); */

// cash out money feature
const cashOutValidPin = 1234;
document
  .getElementById("withrar-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

     const amount = parseInt(document.getElementById("withdrow-amount").value);

   // const amount = getInputValueNumber("withdrow-amount");


    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    //const availableBalance = getInnerText("available-balance");

     const cashOutNumber = document.getElementById('cash-out-number').value;
    // const cashOutNumber = getInputValueNumber("cash-out-number");

     const cashOutPin= parseInt(document.getElementById("cash-out-pin").value);
    //const cashOutPin = getInputValueNumber("cash-out-pin");

    if (cashOutNumber.length < 11 || cashOutNumber.length > 11) {
      alert("Invalid Account Number");
      return;
    }

    if (cashOutPin !== cashOutValidPin) {
      alert("Invalid Pin Number");
      return;
    }

    const totaNewAvailableBalance = availableBalance - amount;
    document.getElementById("available-balance").innerText =
      totaNewAvailableBalance;
  });

// toggling feature
// document.getElementById("add-button").addEventListener("click", function () {
//   document.getElementById("cash-out-parent").style.display = "none";

//   document.getElementById("add-money-parent").style.display = "block";
// });

// document
//   .getElementById("cash-out-button")
//   .addEventListener("click", function () {
//     document.getElementById("add-money-parent").style.display = "none";

//     document.getElementById("cash-out-parent").style.display = "block";
//   });

// toggling feature recape
document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "block";

  document.getElementById("cash-out-parent").style.display = "none";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "block";

    document.getElementById("add-money-parent").style.display = "none";
  });
