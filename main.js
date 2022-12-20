const dname = document.getElementById("name1");
const add1 = document.getElementById("address1");
let dntamount = document.getElementById("donation-amount");
const fname = document.getElementById("fname");
const cardnum = document.getElementById("Cnum");
const cardpin = document.getElementById("pin");
const expirydate = document.getElementById("expiry");
const form = document.getElementById("form");
let sbt = document.getElementById("submit");
let rst = document.getElementById("reset");
let months = document.getElementById("month");
let year = document.getElementById("year");


window.addEventListener("load", () => {
    dntamount.value = "1000";
    month.value = "Dec";
    year.value = "2022";
})

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();

}
)

//setting Error message
const setError = (element, message) => {
    const inputControl = element.parentElement;
    inputControl.appendChild(document.createElement("p")).setAttribute("class", "error")
    inputControl.querySelector(".error").innerHTML = message;
    // const errorDisplay = inputControl.querySelector(".error")

    // errorDisplay.innerText = message;
    // inputControl.classList.add('error');
    // inputControl.classList.remove('success');
}

//setting success message
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    if (inputControl.querySelector(".error") != null) {
        inputControl.removeChild(inputControl.querySelector(".error"))
        inputControl.appendChild(document.createElement("p")).setAttribute("class", "success");
        inputControl.querySelector(".success").innerHTML = ``;
    }
    // errorDisplay.innerText = '';
    // inputControl.classList.add('success');
    // inputControl.classList.remove('error');

}


const validateInputs = () => {

    const Add1 = add3.value.trim();
    const Dname = dname.value.trim();
    const card = cardnum.value.trim();
    const cardPin = cardpin.value.trim();
    const fName = fname.value.trim();
}

//Card value
sbt.addEventListener('click', () => {

    const Add1 = add1.value.trim();
    const Dname = dname.value.trim();
    const card = cardnum.value.trim();
    const cardPin = cardpin.value.trim();
    const fName = fname.value.trim();

    //name in donate
    if (Dname == '') {
        setError(dname, 'Name is Required');
    }
    else {
        setSuccess(dname);

    }

    //adress lines
    if (Add1 == '') {
        setError(add1, 'Enter address line');
    }
    else {
        setSuccess(dname);

    }

    //card details
    if (card === '') {
        setError(cardnum, 'Invalid Input, Enter 16 Digit Number');
    }
    else if (card.length == 16) {
        setSuccess(cardnum);

    }
    else {
        setSuccess(cardnum);
    }
    console.log(fName)
    //name
    if (fName == '' || fName == null || fName == undefined) {
        setError(fname, 'Name is Required');
    }
    else {
        setSuccess(fname);
    }

    //CVC/CVC
    if (cardPin === '') {
        setError(cardpin, 'Invalid Input, Enter 3 Digit Number');
    }
    else if (cardPin.length == 3) {
        setSuccess(cardpin);
    }
    else {
        setSuccess(cardpin);
    }

}
)
