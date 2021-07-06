// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = (stScore, totScore) => {
    if (typeof totScore !== 'number' || typeof stScore !== 'number') {
        throw Error('Argument must be a number')
    } 
    const score = (stScore / totScore) * 100
    let mark = ''
    if (score >= 90) {
        mark = 'A'
    } else if (score >= 80) {
        mark = 'B'
    } else if (score >= 70) {
        mark = 'C'
    } else if (score >= 60) {
        mark = 'D'
    } else {
        mark = 'F'
    } 
    return `You got a ${mark} (${score}%)!`
}

try {
    const result = gradeCalc('', 100)
    console.log(result)
} catch (e) {
    console.log(e.message);
}
