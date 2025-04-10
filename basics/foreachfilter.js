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


// for each doesnt return values

const myNumms = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myNumms.filter((nums) => nums>=5 ))

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myNums.filter((nums) => {
    return nums>5
} ))

//maps
console.log("maps here")
console.log(myNumms.map((nums) => nums*10))

//filter + map

const ans = myNumms.filter((numb) => numb>5)
                    .map((nums) => nums*10)
                    .map((num) => num+1)
                    .filter((nums) => nums<90)
console.log(ans)