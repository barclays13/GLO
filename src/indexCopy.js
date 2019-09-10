'use sctrict'

let sum = function(a,b){
    return a+b;
}
let newSum = sum.bind(null, 2,3)
