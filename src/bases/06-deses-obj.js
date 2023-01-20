//Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 25,
    clave: 'ironman',
    rango: 'soldado',
}


// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = (usuario) =>{
//     const {edad, clave, nombre} = usuario
//     console.log(edad, clave, nombre);
// }

// retornaPersona(persona);

const use = ({clave, nombre, edad, rango= 'Cap'}) =>{
        
        // console.log(nombre, edad, rango);
        return {
            nombreClave: clave,
            anios: edad,
            latlng:{
                lat: 14.1251,
                lng: -12.010214
            }
        }
    }
    
    // const avenger = useContext(persona)
   

  const { nombreClave, anios, latlng:{lat, lng} } = use(persona)

  console.log(nombreClave, anios);
  console.log(lat, lng);
  
  
   
    

    

