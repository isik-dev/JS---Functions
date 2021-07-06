// Global Scope - converter, result32, result68
  // Local Scope - fahdegree, celdegree
    // Local Scope - isFreezing
    
let converter = function (fahdegree) {
    let celdegree = (fahdegree - 32) * 5/9
    
    if (celdegree <= 0) {
        let isFreezing = true
    }

    return celdegree

}

result32 = converter(32)
result68 = converter(68)



console.log(result32)
console.log(result68)