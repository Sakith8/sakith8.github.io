//variables in html elements
const duration = document.getElementById("duration");
const addbut = document.getElementById("Addbutton");
const addfavbut = document.getElementById("AddFavbutton");
const ordfavbut = document.getElementById("OrderFavbutton");
const placebut = document.getElementById("PlaceOrder");
const checkbut = document.getElementById("CheckLoyalty");
let okbut = document.getElementById("ok")
let Gender = document.getElementById("gender");
const fname = document.getElementById("name");
const cnum = document.getElementById("Contactnum");
const email = document.getElementById("email");
const remail = document.getElementById("Remail");
const clear = document.getElementById("clear");
const localadult = document.getElementById("local-adult");
const foreignadult = document.getElementById("foreign-adult");
const localchild = document.getElementById("local-child");
const foreignchild = document.getElementById("foreign-adult");
let table = document.getElementById("table-overall");
let table1 = document.getElementById("table-overall-1");
let submitbtn = document.getElementById("submit");
let alert = document.getElementsByClassName("alert");

const incrementBtns = Array.from(document.getElementsByClassName("increment-btn"));
const decrementBtns = Array.from(document.getElementsByClassName("decrement-btn"));

// Increment Button
incrementBtns.forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.preventDefault()
        const idName = this.dataset.id;
        const outputField = document.getElementById(idName);
        let outputFieldValue = parseInt(outputField.textContent);
        outputFieldValue = outputFieldValue + 1;
        outputField.innerHTML = `${outputFieldValue}`;
    })
})

// Decrement Button
decrementBtns.forEach(btn => {
    btn.addEventListener("click", function (event) {
        const idName = this.dataset.id
        const outputField = document.getElementById(idName)
        let outputFieldValue = parseInt(outputField.textContent);
        if (outputFieldValue > 0) {
            outputFieldValue = outputFieldValue - 1;
            outputField.innerHTML = `${outputFieldValue}`
        }
    })
})

//variables
let totalcost;
let durationPriceForLocal;
let durationPriceForForeign;
const ticketPrices = [1200, 700, 5500, 2700];
const peoplechoice = ["Local Adult", "Foreign Adult", "Local Child", "Foreign Child"];
let adultchild;
let adults1, adults2;
let childs1, childs2;
let cost1, cost2, cost3, cost4;
let loyaltyPoints;
let getLoyalPoints;
let loyalOverall;
let totaltickets;


window.addEventListener("load", function () {

    if (localStorage.getItem('loyaltypoints') > 0) {
        loyalOverall = parseInt(localStorage.getItem("LP"))
    }
    else {
        loyalOverall = 0
    }

})

//displaying number of loyalty points the user has achieved when clicked
checkbut.addEventListener("click", function (event) {
    event.preventDefault();
    if (totaltickets >= 3) {
        loyaltyPoints = totaltickets * 15
    }
    else {
        loyaltyPoints = 0
    }


    localStorage.setItem("LP", loyalOverall)
    localStorage.setItem('loyaltypoints', loyaltyPoints)
    localStorage.getItem("LP", loyalOverall)
    getLoyalPoints = localStorage.getItem('loyaltypoints', loyaltyPoints)

    document.getElementById("Loyal-point").style.display = "block";
    document.getElementById("Loyal-point-back").innerHTML = `<b>${getLoyalPoints} Loyalty points <b><br> has been awarded to you`

})


okbut.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("Loyal-point").style.display = "none"
})

//add to order button to show current order
addbut.addEventListener("click", addToOrder);
function addToOrder(event) {
    event.preventDefault()
    const DurationChoice = duration.options[duration.selectedIndex].value;
    const numberOfLocalAdult = parseInt(document.getElementById("num-in-dec").innerText);
    const numberOfForeignAdult = parseInt(document.getElementById("num-in-dec1").innerText);
    const numberOfLocalChildren = parseInt(document.getElementById("num-in-dec2").innerText);
    const numberOfForeignChildren = parseInt(document.getElementById("num-in-dec3").innerText);

    //displaying of duration

    if (DurationChoice == "3 Hours") {
        durationPriceForLocal = 0.00;
        durationPriceForForeign = 0.00;

    }
    else if (DurationChoice == "Half Day") {
        durationPriceForLocal = 350.00;
        durationPriceForForeign = 450.00;

    }
    else if (DurationChoice == "Full Day") {
        durationPriceForLocal = 600.00;
        durationPriceForForeign = 800.00;

    }

    if (numberOfLocalAdult > 1) {
        adults1 = `${peoplechoice[0]} - ${numberOfLocalAdult}`;

    }
    else if (numberOfForeignAdult > 1) {
        adults2 = `${peoplechoice[1]} - ${numberOfForeignAdult}`;

    }
    else if (numberOfLocalChildren > 1) {
        childs1 = `${peoplechoice[2]} - ${numberOfLocalChildren}`;

    }
    else if (numberOfForeignChildren > 1) {
        childs2 = `${peoplechoice[3]} - ${numberOfForeignChildren}`;

    }


    if (numberOfLocalAdult || numberOfForeignAdult || numberOfLocalChildren || numberOfForeignChildren) {
        adultchild = `${peoplechoice[0]} - ${numberOfLocalAdult}<br>
        ${peoplechoice[1]} - ${numberOfForeignAdult}<br> 
        ${peoplechoice[2]} - ${numberOfLocalChildren}<br>
        ${peoplechoice[3]} - ${numberOfForeignChildren}`

    }

    totalcost = (numberOfLocalAdult * ticketPrices[0] + numberOfLocalChildren * ticketPrices[1])
        + (numberOfLocalAdult + numberOfLocalChildren) * durationPriceForLocal
        + (numberOfForeignAdult * ticketPrices[2] + numberOfForeignChildren * ticketPrices[3])
        + (numberOfLocalAdult + numberOfForeignChildren) * durationPriceForForeign;



    //summary in overall table
    table.innerHTML =
        `<tr>
    <th>Ticket Purchased</th>
    <th>Duration</th>
    <th>Cost</th>
    </tr>
    <tr>		    
	<td>${adultchild}</td>
	<td>${DurationChoice}</td>
	<td>${totalcost.toFixed(2)}</td>
	</tr>`

}

//place order button

placebut.addEventListener('click', (e) => {
    e.preventDefault();

    const numberOfLocalAdult = parseInt(document.getElementById("num-in-dec").innerText);
    const numberOfForeignAdult = parseInt(document.getElementById("num-in-dec1").innerText);
    const numberOfLocalChildren = parseInt(document.getElementById("num-in-dec2").innerText);
    const numberOfForeignChildren = parseInt(document.getElementById("num-in-dec3").innerText);

    totaltickets = numberOfLocalAdult + numberOfForeignAdult + numberOfLocalChildren + numberOfForeignChildren;

    table.innerHTML =
        `<tr>
    <th>Ticket Purchased</th>
    <th>Duration</th>
    <th>Cost</th>
    </tr>`

    if (numberOfLocalAdult > 1) {
        record1 = peoplechoice[0]

    }
    else if (numberOfForeignAdult > 1) {
        record2 = peoplechoice[1]

    }
    else if (numberOfLocalChildren > 1) {
        record3 = peoplechoice[2]

    }
    else if (numberOfForeignChildren > 1) {
        record4 = peoplechoice[3]

    }

    table1.innerHTML =
        `
    <tr>
    <td>Total Tickets Purchased</td> 
    <td>Total Cost</td>
    </tr>
    <tr>
    <td>${totaltickets} </td>
    <td>${totalcost} </td>
    </tr>
    <tr>
    `
}
)

//clear button
clear.addEventListener('click', (e) => {
    e.preventDefault();
    table.innerHTML =
    `<tr>		    
	<th>Ticket Purchased</th>
    <th>Duration</th>
    <th>Cost</th>
	</tr>`

    table1.innerHTML =
    `
    <tr>
    <td>Total Tickets Purchased</td> 
    <td>Total Cost</td>
    </tr>	
    `
})

//submit button
submitbtn.addEventListener('submit' , (e)=>{
    e.preventDefault();
    let name = fname.value;
    let contactnum = cnum.value;
    let Email = email.value;

    alert.innerText=`
    Your Order has been confirmed ${name}.<br>
    Your transaction order number<br>
     will be send to ${contactnum} and ${Email}
    `

})





