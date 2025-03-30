function sayMyName(){
    console.log("walter white bitch")
}
sayMyName()

function add2Num(number1,number2){
    console.log(number1 + number2)
}
add2Num(4,7)
add2Num(4,'a')

//returning value
function add2Numbers(number1,number2){
    let result = number1 + number2;
    return result;
}
const result = add2Numbers(4,8);
console.log(result)

function addToCart(...num1){
    return num1
}
console.log(addToCart(100, 200, 400, 800))

// object and functions
const user = {
    name : "radahn",
    owner : "miquella",
    nickname : "starscrouge"
}
function legendary(anyObject){
    console.log(`his name is ${anyObject.name} and he is called ${anyObject.nickname}`)
}
console.log(legendary(user))

console.log("Vinland saga dekh na Mc")