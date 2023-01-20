const persona = {
     nombre : 'luis',
     apellido : 'fereira',
     edad : 25,
     direccion:{
        ciudad : 'New York',
        zip: 552154563213,
        lat: 14.2525,
        lgn: 15.2541
     }
}
const persona2 = {...persona}
persona2.nombre = 'Crisbell'

console.log(persona);
console.log(persona2);



