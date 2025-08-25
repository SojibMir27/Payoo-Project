const validPin = 1234;
const transactionDataAll = [];
/**----------Reuseable - function to get input number values----------*/
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
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

/**----------Reuseable - function to toggle buttons----------*/
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

/**--------add money feature start----------*/

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

    if(amount <= 0){
      alert('Invalid Amount')
      return;
    }

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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionDataAll.push(data);
    console.log(transactionDataAll);
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

    if(amount <=0 || amount > availableBalance){
      alert('Apnar Balance Kom');
      return;
    }

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

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    transactionDataAll.push(data);
    console.log(transactionDataAll);
  });

document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";

    for (const data of transactionDataAll) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div
            class="bg-white mt-3 p-3 rounded-xl flex justify-between items-center"
          >
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" alt="" />
              </div>
              <div class="ml-3">
                <h1 class='font-bold'>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
      `;

      transactionContainer.appendChild(div);
    }
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
  handleToggle("add-money-parent");

  // const formBtns = document.getElementsByClassName("form-btn");

  // for (const btn of formBtns) {
  //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //   btn.classList.add("border-gray-300");
  // }
  // document.getElementById("add-button").classList.remove("border-gray-300");
  // document
  //   .getElementById("add-button")
  //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

  handleButtonToggle("add-button");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    // const formBtns = document.getElementsByClassName("form-btn");

    // for (const btn of formBtns) {
    //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    //   btn.classList.add("border-gray-300");
    // }
    // document
    //   .getElementById("cash-out-button")
    //   .classList.remove("border-gray-300");
    // document
    //   .getElementById("cash-out-button")
    //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

    handleButtonToggle("cash-out-button");

    //   const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //   form.style.display = 'none';
    // }
    // document.getElementById("cash-out-parent").style.display = "block";
    handleToggle("cash-out-parent");
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    // const formBtns = document.getElementsByClassName("form-btn");

    // for (const btn of formBtns) {
    //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    //   btn.classList.add("border-gray-300");
    // }
    // document
    //   .getElementById("transfer-button")
    //   .classList.remove("border-gray-300");
    // document
    //   .getElementById("transfer-button")
    //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

    handleButtonToggle("transfer-button");

    //   const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //   form.style.display = 'none';
    // }
    // document.getElementById("transfer-money-parent").style.display = "block";
    handleToggle("transfer-money-parent");
  });

document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    // const formBtns = document.getElementsByClassName("form-btn");

    // for (const btn of formBtns) {
    //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    //   btn.classList.add("border-gray-300");
    // }
    // document
    //   .getElementById("get-bonus-button")
    //   .classList.remove("border-gray-300");
    // document
    //   .getElementById("get-bonus-button")
    //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

    handleButtonToggle("get-bonus-button");

    //   const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //   form.style.display = 'none';
    // }
    // document.getElementById("get-bonus-parent").style.display = "block";
    handleToggle("get-bonus-parent");
  });

document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    // const formBtns = document.getElementsByClassName("form-btn");

    // for (const btn of formBtns) {
    //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    //   btn.classList.add("border-gray-300");
    // }
    // document
    //   .getElementById("pay-bill-button")
    //   .classList.remove("border-gray-300");
    // document
    //   .getElementById("pay-bill-button")
    //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

    handleButtonToggle("pay-bill-button");

    //   const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //   form.style.display = 'none';
    // }
    // document.getElementById("pay-bill-parent").style.display = "block";
    handleToggle("pay-bill-parent");
  });

document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    // const formBtns = document.getElementsByClassName("form-btn");

    // for (const btn of formBtns) {
    //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    //   btn.classList.add("border-gray-300");
    // }
    // document
    //   .getElementById("transaction-button")
    //   .classList.remove("border-gray-300");
    // document
    //   .getElementById("transaction-button")
    //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

    handleButtonToggle("transaction-button");

    //   const forms = document.getElementsByClassName("form")

    // for(const form of forms){
    //   form.style.display = 'none';
    // }
    // document.getElementById("transaction-history-parent").style.display = "block";
    handleToggle("transaction-history-parent");
  });
