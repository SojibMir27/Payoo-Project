// login button functionlity
/** auto reload fixed 2 ways
 * 1 => .addEventListener("click", function (event) {
    event.preventDefault
    console.log('login successfully')
});
 * 2 => button er moddhe type = 'button'
*/

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = 1234;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);
    // console.log(mobileNumberValueConverted,pinNumberValueConverted);

    if (
      mobileNumberValueConverted === mobileNumber &&
      pinNumberValueConverted === pinNumber
    ) {
      // console.log('match')
      window.location.href = "./home.html";
    } else {
      alert("Invalid Credentials!");
    }
  });
