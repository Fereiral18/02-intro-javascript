// const saludar =  function(nombre){
//     return `Hola, ${nombre}`
// }
const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`
}

const saludar3 = (nombre)=>`Hola, ${nombre}`

const saludar4 = () => `Hola mundo`

// console.log(saludar('Hola'));
console.log(saludar2('luis'));
console.log(saludar3('Crisbell'));
console.log(saludar4());

const getUser = () =>({
  
        uid: 'ABC123',
        username : 'El_pape123',
    
})
const user = getUser();
console.log(user);

//Tarea
//1. Transformen a funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
const getUsuarioActivo = (nombre) =>({
        uid: 'AB123',
        username: nombre,
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
