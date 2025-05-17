//constructors used = singleton

const sym = Symbol("ibu hatela")

//object literals

const user = {
    name : "tatya bichu",
    age : 134,
    location : "hogwards",
    email : "u serious ?",
    [sym] : "uska naam"
}

console.log(user.name)
console.log(user["name"])
console.log(user[sym])

user.email="shivansh4796@gmail.com"
// freezing

//Object.freeze(user)
//user.email="hmmmmmmmmmmmmmmmmmmmm"
console.log(user)

//connecting obj with func

user.greeting = function(){
    console.log("greetings");
}
user.greetingTwo = function(){
    console.log(`hello ${user.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());


//methods 

const maths = {
    multiply : (x,y) =>{
        return x*y;
    },
    add : (x,y) =>{
        return x+y;
    },
    sub : (x,y) =>{
        return x-y;
        }
}