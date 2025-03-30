//singleton or constructor
const tinderUser = new Object()


tinderUser.id = "22je0912"
tinderUser.name = "Shivansh"
tinderUser.isLogged = false

console.log(tinderUser)

const normalUser = {
    email : "hairynigga69@gmail.com",
    fullname : {
        user : {
            firstname : "Shivansh",
            lastname : "Gilhotra"
        }
    }
}
console.log(normalUser.fullname.user.firstname)

// concatenation waala kaam

const obj3 = Object.assign({},tinderUser,normalUser) //{} dena is a good habit as {} is base object mhi denge to obj1 will be
console.log(obj3)

// much better
const obj4 = {...tinderUser,...normalUser}
console.log(obj4)

//obj + array

const userArr = [
    {name : "shivansh",ID : 912},{name : "shivansh",ID : 914}
    ,{name : "shivansh",ID : 915},{name : "shivansh",ID : 919}
    ,{name : "shivansh",ID : 916}
]
console.log(userArr[2].ID)

console.log(Object.keys(tinderUser)) // gives an array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//de-structuring
const course = {
    coursename : "chunin exams",
    teacher : "Hatake Kakashi",
    price : 106
}

const {coursename : exam} = course
console.log(exam)


// bina naam object = jason
// {
//     "name" : "shivansh",
//     "serial" : "22je0912"
// }
