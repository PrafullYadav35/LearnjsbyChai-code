// practise string methods 
let intro = `i am Prafull kumar yadav from ghazipur. i am living in lucknow`;
// return true is value match
// console.log(intro.includes("Lucknow"));

//match method

// console.log(intro.match('i am living'));


// eval ()  allows to written code in string will be evaluted
// console.log(eval("\n5+10*2"));

//replace()
let parichay = intro.replace("lucknow","Ghazipur");
// console.log(parichay);

// search() search for the pattern in a string and return index position of match
console.log(intro.search("yadav"));

// escape()
let schar = escape("i am founder of _");
// console.log(schar);

let password = encodeURI("I am billionre ");
console.log(password);