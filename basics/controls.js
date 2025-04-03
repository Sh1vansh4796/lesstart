if(2 == "2"){
    console.log("aayein")
}
if(2 === "2"){
    console.log("aw hell nah")
}
else console.log("yup")

let isLoggedIn = true
let isGoogledIn = false

if(isLoggedIn && isGoogledIn) {
    console.log( "good boy")
}
else {
    console.log(" D: ")
}

const month = 3
switch(month){
    case 1 :
        console.log("janbary") 
        break
    case 2:
        console.log("fabrary") 
        break
    case 3:
        console.log("maarch") 
        break
    case 4:
        console.log("aprail") 
        break
    case 5 :
        console.log("maai") 
        break
    case "jun" :
        console.log("jun") 
        break
}


// falsy values 
// if(falsy)
// 0 , "",0 , -0, BigInt 0n , NULL, undefined, NaN

// truthy values
// "0", 'false', " " , function(){} ,[] , {} 

// ternary 
// condition ? true : false
const icetea = 100
icetea < 80 ? console.log("sasta") : console.log("mehenga")
