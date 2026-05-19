//type of null is object and all else typeof equates to themselves

//primitive types :-
//7 types : String, Number, Boolean, null, undefined, Symbol


//non-primitive types/Reference type
//Array, Objects, Functions

//js is dynamically typed programming language.

//because variable types are not explicitly declared and are determined by the engine at runtime based on the value assigned to the variable




//***********************
//Stack  (Primitive), heap  (non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
let anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 
userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)