const activo =  true

// let mensaje = ''

// if(!activo){
//     mensaje = activo;
// }else {
//     mensaje = inactivo
// }

const mensaje = (activo) ? 'activo' : 'inactivo'
const mensaje1 = (!activo) ? 'activo' : 'null'

const mensaje2 = !activo && 'activo'

console.log(mensaje);
console.log(mensaje1);
console.log(mensaje2);
