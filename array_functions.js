const name = () => {

}

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
    {
        name: 'Mukesh',
        age: 25,
        designation: 'Web Developer',
        salary: 10000
    },
    {
        name: 'Sharukh',
        age: 18,
        designation: 'Web Developer',
        salary: 8000
    },
]

// const mappedEmployees = employees.map((employee) => {
//     return {
//         ...employee,
//         salary: 0
//     }
// })

const nums = [1,2,3,4,5,6]

const greaterThanThree = nums.filter((num) => {
    const secondNum = num * 2
    return secondNum <= nums[nums.length - 1]
})

console.log(greaterThanThree);

// console.log(anotherNum);
// const empName = employees.map((employee) => {
//     return employee.name
// })

// console.log(empName);

// employees.forEach(function (employee) {
//     console.log(employee.name);
// })

// const filteredEmployee = employees.find((employee) => employee.salary < 10000)

// console.log(filteredEmployee);
