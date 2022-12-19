const dname = document.getElementById("name");
let dntamount = document.getElementById("donation-amount");
const fname = document.getElementById("name");
const cardnum = document.getElementById("Cnum");
const cardpin = document.getElementById("pin");
const expirydate = document.getElementById("expiry");
const form = document.getElementById("form");
let sbt = document.getElementById("submit");
let rst = document.getElementById("reset");
let months = document.getElementById("month");
let year = document.getElementById("year");


window.addEventListener("load", ()=> {
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
const setError = (element , message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//setting success message
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}


const validateInputs = () => {
    const card = cardnum.value.trim();
    const cardPin = cardpin.value.trim();
    const fName = fname.value.trim();

    //Card value
    if( card === ''){
        setError('Invalid Input, Enter 16 Digit Number');
    }
    else if(card.length == 16){
        setSuccess(cardnum);

    }
    else{
        setSuccess(cardnum);
    }

    //name
    if(fName === ''){
        setError('Name is Required');
    }
    else{
        setSuccess(fname);
    }

    //CVC/CVC
    if(cardPin ===''){
        setError('Invalid Input, Enter 3 Digit Number');
    }
    else if(cardPin.length==3){
        setSuccess(cardpin);
    }
    else{
        setSuccess(cardpin);
    }
    


} 
