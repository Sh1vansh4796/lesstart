const elden = {
    name:"melania",
    blade:"miquella",

    boss : function(){
        console.log(`I am ${this.name} blade of ${this.blade} and I've never known defeat` )
    }
}
elden.boss()


// arrow function
// () => {}
const metallica = (album1,album2) => {
    
    console.log(album1 + album2)
}
metallica("hell","yeah")

// implicit no return , {} needed
const metal = (album1,album2) => album1 + album2 

console.log(metal("hell","yeah"))

// IIFE immediately invoked function expressions
// to reduce global pollution

// (function chai(){
//     console.log("chai peelo bc");
// })();

// similar to func() ------ (func)()

// writing as arrow

// (() => {
//     console.log("chai peelo bc")
// })();


