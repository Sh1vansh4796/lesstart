const score = 400

const balance = new Number(1005)


console.log(score)

console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2)) //3 decimal places

const num = 1020.554

console.log(num.toPrecision(4))

const paaji = 100000000
console.log(paaji.toLocaleString())
console.log(paaji.toLocaleString('en-IN'))

console.log(Math.round(4.578))
console.log(Math.abs(-4.578))
console.log(Math.ceil(4.578))
console.log(Math.floor(4.578))


console.log(Math.random()) // between 0 and 1
console.log(Math.random()*10)
console.log(Math.random()*10 + 1 ) //to avoid 0.004 type values
console.log(Math.floor(Math.random()*10) + 1)
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


