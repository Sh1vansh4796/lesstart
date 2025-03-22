const arr = [0, 1, 3, 4, 8, 9]
console.log(arr)
console.log(arr[2])
arr.pop()
arr.push(5)
console.log(arr)

const newarr = arr.join()
console.log(newarr)

console.log(arr.slice(2,5))
console.log(arr.splice(2,5))
console.log(arr)
const new2 = arr.splice(2,5)
console.log(new2)
console.log(arr)

const x1 = [1 , 2 , 3 , 4 , 5]
const x2 = [6 , 7 , 8 , 9 , 10]
const x3 = [11 , 12 ,13 ,14 ,15]

const final = x1.concat(x2,x3)
console.log(final)

const pakka_final = [...x1 , ...x2 , ...x3]
console.log(pakka_final)

const combined = [1 , 2 , 3 , [4 , 5 , 6], 7 , [6 , 7] , [4 , 5]]

const isbaar_pakka_final = combined.flat(7)
console.log(isbaar_pakka_final)

// convert to array using from 
// to check if an array isArray

console.log(Array.from("this was a string"))

//Array.of 
const a1 = 20
const a2 = 30
const a3 = 30
console.log(Array.of(a1,a2,a3))