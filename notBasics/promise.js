const sing = async ()=>{
    // own error => throw "OH NO"
    return "let the bodies hit the floor"
}
console.log(sing())


// sing().then((data)=>{
//     console.log("resolved with",data)
// })

//promise
sing()
    .then((data) =>{
        console.log("promise resolved with - ",data)
    })
    .catch((err)=>{
        console.log("promise rejected ")
        console.log(err)
    })

const login = async (username,password)=>{
    if(!username || !password) throw "Missing Credentials"
    if(password === 'hairyNigga475') return 'WELCOME'
    throw 'Invalid Password'

}
console.log("")
login('pkmkb','black munde')
    .then((msg)=>{
        console.log('logged in',msg)
    })
    .catch((err)=>{
        console.log("Nope")
        console.log(err)
    })

console.log("")

login('aand force','hairyNigga475')
    .then((msg)=>{
        console.log('logged in',msg)
    })
    .catch((err)=>{
        console.log("Nope")
        console.log(err)
    })    