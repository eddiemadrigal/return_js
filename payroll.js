// https://www.youtube.com/watch?v=05QZMe793tk

// Erika worked 40 for the week and gets paid 45 an hour
// She then goes to pick up her check and it's not available
// after showing her copy of her time worked, she gets a check
// Erika => front desk => manager => payroll
// no taxes

function frontDesk(name, hourlyPay, hoursWorked) {
    pay = hourlyPay * hoursWorked
    return manager(pay, name)
}

function manager(pay, name) {
    return payroll(name, pay)
}

function payroll(name, pay) {
    let text = "";
    if (name === "Erika" && pay > 0) {
        text = "Here is " + name + "'s check for $" + pay; 
    } else {
        text = "No person with " + name + " works here. Zero pay!";
    }
    return text
}

let ErikaPay = frontDesk("Erika", 45, 40);
console.log(ErikaPay);
