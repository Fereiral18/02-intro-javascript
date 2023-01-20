const nombre = 'luis'
const apellido = 'fereira'

const nombreCompleto = `Hola mundo soy ${nombre} ${apellido} ${1 + 1}`

console.log(nombreCompleto);

function getSaludo(nombre) {
return 'hola' + nombre;
}

console.log(`Este es un texto: ${getSaludo( nombre )}`);


