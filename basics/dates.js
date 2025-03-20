let myDate = new Date
console.log(myDate)
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString)

let myCreatedDate = new Date(2023,3,12)
console.log(myCreatedDate.toString())

let myTimes = Date.now()

console.log(myTimes)
console.log(Math.floor((myTimes)/1000))
