//desestructuracion de arreglos


const personajes = ['luis', 'crisbell', 'juan']
const [,,p3] = personajes
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llama nombre
//2. Se llamara setNombre

const use = (valor) =>{
    return [valor, ()=>{console.log('hola mundo');
    }]
}

const [nombre, setNombre] = use('goku')

console.log(nombre);
setNombre()


