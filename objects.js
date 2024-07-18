const employees = [
    {
        name: 'Kushal',
        age: 20,
        designation: 'Web Developer',
        salary: 15000
    },
    {
        name: 'Anuj',
        age: 25,
        designation: 'Web Developer',
        salary: 25000
    },
    {
        name: 'Aditya',
        age: 30,
        designation: 'Web Developer',
        salary: 7000
    },
]

// employees.forEach((employee, index) => {
//     let {name, age, designation} = employee
// })

// const sayHello = (callback, timeout) => {
//     setTimeout(callback, timeout)
// }

// function toSayHello() {
//     console.log("Hello world");
// }

// sayHello(toSayHello, 3000)

function sums (...rest) {
    console.log(rest);
    let sum = 0
    rest.forEach((value) => {
        sum += value
    })
    return sum
}

const numArray = [1,2,3,4,5,6,7,8]

console.log(sums(...numArray));