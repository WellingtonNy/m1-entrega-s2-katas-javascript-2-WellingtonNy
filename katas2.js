// comece a criar a sua função add na linha abaixo
function add(num1,num2){
    return num1+num2
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');




// comece a criar a sua função multiply na linha abaixo
function multiply(num1,num2){
let resultado = 0
for(let i=0; i<num2; i=add(i,1)){
    resultado = add(resultado,num1)   
}
return resultado
}
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');




// comece a criar a sua função power na linha abaixo
function power(x,n){
    let resultado = 1
    for(let i=0; i<n; i=add(i,1)){
        resultado = multiply(x,resultado)
    }
    return resultado
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');




// comece a criar a sua função factorial na linha abaixo
function factorial(x){
    let resultado = x
    for(let i=1; i<x; i=add(i,1)){
        resultado = multiply(resultado,i)  
    }
    return resultado
    }
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
