const promise1 = new Promise(function(resolve,reject){
    // do an async task
    // DB call, N/W calls , cryptography
    setTimeout(() => {
        console.log("async task done");
        resolve()
    }, 1000);
})

promise1.then(()=>{
    console.log("then funtion")
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:'random' , email: 'random@mail'});
    }, 1000 );
})
promise3.then((user)=>{
    console.log('then2 value')
    console.log(user)
})

console.log("")
const promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let err = false;
        if(!err) resolve({username : "langda tyagi" , password : "123"})
        else reject("Something went wrong")

    }, 1000 );
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((use)=>{
    console.log(use);
    
}).catch((err)=>{
    console.log(err)
}).finally(console.log("promise resolved at last probably")
)


const promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let err = false;
        if(!err) resolve({username : "artorius" , password : "123"})
        else reject("Something went wrong")

    }, 1000 );
})


//async await

async function promiseConsume(){
    const response = await promise5
    console.log(response);
    
}
promiseConsume()

// try catch syntax

async function promiseConsume5(){
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log("Error caught:", error);
    }
}

promiseConsume5()