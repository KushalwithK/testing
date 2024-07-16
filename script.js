/*

*/

let employee = [{
    'name': 'Anuj',
    'age': 20,
    designation: 'Lead Web Developer'
}, {
    'name': 'Akhil',
    'age': 25,
    designation: 'Jr. Web Developer',
    joining: '2022'
}]

for(let i = 0; i < employee.length; i++) {
    emp = employee[i]
    console.log(emp.name)
}