myArr = [1, 2 ,3 ,4]
// used for shopping carts in ecommerce
//accumulator,currentvalue

//myarr.reduce(() => {} , 0)
const myTotal = myArr.reduce(function(acc,curr){
    console.log(`acc : ${acc} and now curr: ${curr}`)
    return acc + 2*curr
}, 5) //inital value

console.log(myTotal)


const soulsValue = [
    {
        boss : "tauras demon",
        souls : 5000
    },
    {
        boss : "gaping dragon",
        souls : 20000
    },
    {
        boss : "ornstein and smough",
        souls : 25000
    },
    {
        boss : "gwyndolyn",
        souls : 30000
    },
    {
        boss : "manus",
        souls : 50000
    },
    {
        boss : "Artorius",
        souls : 45000
    }

]
console.log("total boss souls")
console.log(soulsValue.reduce((total, curr) => total + curr.souls, 10000));
