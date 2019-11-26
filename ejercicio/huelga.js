const fs = require('fs')
const Persona = require('./persona')

if ( !process.argv[2] ) {
    console.log(`Falta argumento...`)
    process.exit(1)
}

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
   if (err) {
       console.log(`No existe el archivo`)
       process.exit(2)
   }
   const lineas = data.split('\n') 
   const personas = []
   for (let i = 1; i < lineas.length -1; i ++){
       let campos = lineas[i].split(',')
       const persona = new Persona(campos[0], campos[1], campos[2], campos[3])
       personas.push(persona)
   }
   let genero = 'Fema'
   let letra  = 'z'
   console.log(`Nº persona con género ${genero} es ${Persona.obtenerPersonasPorGenero(personas, genero)}   `)
   let personasNombre = Persona.obtnerPersonasEmpiezanPor(personas, letra)
   for (let i = 0; i < personasNombre.length; i++){
       console.log(personasNombre[i].nombre)
   }
   console.log(Persona.obtnerPersonasEmailAcaba(personas, '.com'))
   console.log(Persona.obtenerNumeroPersonaPorDominio(personas, '.com'))


})

//console.log(module)
//const persona = new Persona('juan', 'garcía garcía', 'correo@local.es', 'male')
// console.log(persona)
// console.log(persona.toString())
// console.log(`${persona.apellidos}, ${persona.nombre}`)

