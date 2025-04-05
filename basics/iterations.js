for(let i = 0 ; i<10 ; i+=2){
    console.log(i*3)
}

console.log("while loop now")


let i = 6
while(i>=0){
    let vari = i*4;
    console.log(vari)
    i--;
}
console.log("sekiro bosses")
let bigFour = ["isshin","owl father","real corrupted monk","demon of hatred"]
let itr = 0;
while(itr<bigFour.length){
    console.log(bigFour[itr])
    itr++;
}



//[{},{},{}]
//["","",""]
//for off loop
console.log("forof loop now")

for (const i of bigFour) {
    //console.log(bigFour[i])
    console.log(i)
}

console.log("map using [key] forof ")
//maps 
const map = new Map()
map.set('IN','India')
map.set('UK','United Kingdom')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('IN','India')

console.log(map)
for (const [key] of map) {
    console.log(key)
}
for (const [key,val] of map) {
    console.log(key,"-",val)
}

// note = forof doesnt work on object
console.log("for in for object")

const myObject = {
    ds1 : "dark souls 1",
    ss : "serious sam",
    cod : "Call of Duty",
    pop : "prince of persia"

}

for (const key in myObject) {
    console.log(key,"-----",myObject[key])
}
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