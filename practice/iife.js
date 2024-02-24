//Immediately Invoked Functions Expressions
(function(name){
    var greet = "hello ";
    console.log(greet+ " "+name);
})('Prafull');

//An IIFE (Immediately Invoked Function Expression) 
//is a JavaScript function that runs as soon as it is defined

//add two numbers 
(function(x,y){
    console.log(x+y);
})(10,25);

//syntax
// (function(){

// })()
