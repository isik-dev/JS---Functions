// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)

console.log(result)

// Default arguments 
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area

// total, tipPercent

let tipCalcular = function (total, tipPercent = 0.2) {
    return total * tipPercent
}

let tip = tipCalcular(50, .5)
console.log(tip)