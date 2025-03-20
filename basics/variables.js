console.log("variables")
let area = "rectangle"
const value = 2523
var newarea = "square" //var not preferred
console.log(value)
console.log(typeof value )
let str1 = "good"
let str2 = " evening"
let str3 = str1 + str2
console.log(str3)
console.log("1" + 2 + 2)
console.log(1+2 + "2")

let name = "artorius" 
let title = "abysswalker" 
console.log(`his name is ${name} and he is called the ${title}`) //using variables `  ${}   `

const names = new String('thunderB0lt')  // declaring string but object

console.log(names[0])
console.log(names.length)
console.log(names.toUpperCase())
console.log(names.indexOf('B'))

var newString = names.substring(0,4)
console.log(newString)
const url = "https://hitesh.com/hitesh&20chaudhary"
console.log(url.replace('&20','-'))