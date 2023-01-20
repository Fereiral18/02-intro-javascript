//Arreglos en Js

// const arreglo = new Array(100)
// arreglo.push(1) // para insertar algo al arreglo usar el spread operator
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
const arreglo = [1,2,3,4]

// let arreglo2 = arreglo
// arreglo2.push(5)

const arreglo2 = [...arreglo, 5]

const arreglo3 = arreglo.map(numero=>{
    return numero * 2
})

console.log(arreglo);
console.log(arreglo2)
console.log(arreglo3);

