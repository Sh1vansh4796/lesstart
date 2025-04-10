console.log("")
console.log("foreach = higher order loop")
//foreach

const arr = ["c++","python","ruby","javascript","java"]
arr.forEach(function (val) {
    console.log(val)
})

console.log("")
console.log("using arrow function foreach")

arr.forEach( (val,idx,arrays) => {
    console.log(val,idx,arrays)
})


//obj in arr
console.log("very important obj in array")
console.log("")
const objarr = [
    {
         boss : "artorius the abysswalker",
         area : "anor londo",
         mc : "chosen undead"
    },
    {
         boss : "slvae knight gael",
         area : "irithril of the boreal valley",
         mc : "ashen one"
    },
    {
         boss : "Isshin the sword saint",
         area : "fountainhead palace",
         mc : "wolf"
    }

]
console.log("array ka object ka item")

objarr.forEach((item) =>{
    console.log(item.boss)
})


