
import {heroes} from '../data/heroes'
// import {heroes, owners} from "../data/heroes";
// // console.log(owners);


export const getHeroeById = (id) =>heroes.find(item=> item.id === id)


// console.log(getHeroesById(2));

//Find no funciona en este caso
//Usar Filter
export const getHeroeByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner)
// console.log(getHeroesByOwner('Marvel'));


