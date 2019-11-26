const personas = [
    { nombre: 'juan', edad : 23 } , { nombre : 'felipe', edad : 11 } ,
    { nombre: 'juani', edad : 2 } , { nombre : 'ester', edad : 23 } ,
    { nombre: 'luis', edad : 33 } , { nombre : 'julian', edad : 22 } ,
    { nombre: 'carmina: ', edad : 3 } ,{ nombre :'ignacio', edad : 13 } ,
    { nombre: 'pedro', edad : 38 } , { nombre : 'gervasio', edad : 43 }
]

// for (let i = 0; i < personas.length; i++) {
//     console.log(`Nombre: ${personas[i].nombre}, edad: ${personas[i].edad}`)
// }

// personas.forEach(persona => 
//     console.log(`Nombre: ${persona.nombre}, edad: ${persona.edad}`))
// for (let persona in personas) {
//     console.log(`Nombre: ${personas[persona].nombre}, edad: ${personas[persona].edad}`)
// }

for (const persona of personas){
    console.log(`Nombre: ${persona.nombre}, edad: ${persona.edad}`)
}