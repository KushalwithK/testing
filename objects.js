// const employees = [
//     {
//         name: 'Kushal',
//         lastName: 'lastname',
//         age: 20,
//         designation: 'Web Developer',
//         salary: 15000
//     },
//     {
//         name: 'Anuj',
//         lastName: 'lastname',
//         age: 25,
//         designation: 'Web Developer',
//         salary: 25000
//     },
//     {
//         name: 'Aditya',
//         lastName: 'lastname',
//         age: 30,
//         designation: 'Web Developer',
//         salary: 7000
//     },
//     {
//         name: 'Aditya2',
//         lastName: 'lastname',
//         age: 30,
//         designation: 'Web Developer',
//         salary: 7000
//     },
//     {
//         name: 'Aditya3',
//         lastName: 'lastname',
//         age: 30,
//         designation: 'Web Developer',
//         salary: 7000
//     },
//     {
//         name: 'Aditya4',
//         lastName: 'lastname',
//         age: 30,
//         designation: 'Web Developer',
//         salary: 7000
//     },
// ]

// const mappedEmployees = employees.map((employee) => {
    
//     return {
//         ...employee,
//         salary: employee.salary * 2
//     }
// })

// console.log(mappedEmployees);

// const sum = (a,b, ...numbers) => {
//     let numberSum = a + b
//     numbers.forEach((num) => {
//         numberSum += num
//     })

//     return numberSum
// }

// const numbers = [1,2,3,4,5,6,7]

// console.log(sum(1,2,3,4,5,6,7))

// function evaluateAfter3s(handler, seconds) {
//     setTimeout(handler, seconds * 1000)
// }

// evaluateAfter3s(() => {
//     console.log("Evaluating");
// }, 3)

// const intervalId = setInterval(() => {
//     console.log("Running every 1 second");
// }, 1000)

// setTimeout(() => {
//     clearInterval(intervalId)
// }, 6000)