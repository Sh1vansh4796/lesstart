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