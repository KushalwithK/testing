// function doSomething(a, b) {
//     return new Promise((success, fail) => {
//         let c = a + b;
//         if(isNaN(c)) {
//             fail("The output is not a number")
//         }
//         else {
//             success(c)
//         }
//     })
    
// }

// doSomething(5, "Hello").then((value) => {
//     console.log("The output was number " + value);
// }).catch((reason) => {
//     console.log(reason);
// })

const executeAfter3Seconds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("The promise is resolved")
        }, 3000)
    })
}

executeAfter3Seconds().then((value) => {
    console.log(value);
})

console.log("Code is running");

executeAfter3Seconds().then((value) => {
    console.log("Second value: " + value);
})