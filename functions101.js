// Function - input (argument), code, output (return value)
 
let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value3 = square(3)
let value10 = square(10)

console.log(value3)
console.log(value10)

// Challenge area

// convert fahrenheittocelsius
let converter = function (fahdegree) {
    let celdegree = (fahdegree - 32) * 5/9
    return celdegree
}
// call a couple of times (32 -> 0) (68 -> 20)
result32 = converter(32)
result68 = converter(68)
// print the converted values
console.log(result32)
console.log(result68)