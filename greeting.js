function getType(type) {
    let greeting = "Good";
    if (type === 1) {
        greeting = "Great"
    } else if (type === 2) {
        greeting = "Super"
    }
    return greeting
}

function getGreeting(type, time_of_day, name) {
    returnType = getType(type);
    let message = returnType + " " + time_of_day + " " + name;
    return message
}

let greeting = getGreeting(2, 'morning', 'Eddie')
console.log(greeting)
