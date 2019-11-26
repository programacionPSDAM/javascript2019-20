const personas = [
    { nombre : 'juan', edad : 23 } , { nombre : 'felipe', edad : 11 } ,
    { nombre : 'juani', edad : 2 } , { nombre : 'ester', edad : 23 } ,
    { nombre : 'luis', edad : 33 } , { nombre : 'julian', edad : 22 } ,
    { nombre : 'carmina', edad : 3 } ,{ nombre :'ignacio', edad : 13 } ,
    { nombre : 'pedro', edad : 38 } , { nombre : 'gervasio', edad : 43 }
 ]

const resultado = personas.filter(persona => persona.edad < 18)
                      .map(persona => persona.edad)
                      .reduce((acumulador, valorActual, index, array) => {
                          return acumulador + valorActual / array.length  
                      }, 0)
console.log(resultado)