let a = 5
let b = 10
let c = 15
let maiorNumero = undefined

if(a > b && a > c ) {
    maiorNumero = a
}
else if(b > a && b > c) {
    maiorNumero = b
}
else if(c > a && c > b) {
    maiorNumero = c
}

console.log(maiorNumero);