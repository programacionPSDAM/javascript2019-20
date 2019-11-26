module.exports = class Persona {
    constructor (nombre, apellidos, email, genero) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.email = email
        this.genero = genero
    }

    toString() {
        return `${this.apellidos}, ${this.nombre}`
    }
    static obtenerPersonasPorGenero(coleccion, genero) {
        let contador = 0
        for (let i = 0; i < coleccion.length ; i++){
            if (coleccion[i].genero === genero){
                contador++
            }
        }
        return contador
    }
    static obtnerPersonasEmpiezanPor(coleccion, letra){
        const coleccionEmpieza = []
        for (let i = 0; i < coleccion.length ; i++){
            if (coleccion[i].nombre.toLowerCase().startsWith(letra.toLowerCase())){
                coleccionEmpieza.push(coleccion[i])
            }
        }
        return coleccionEmpieza
    }
    static obtnerPersonasEmailAcaba(coleccion, dominio){
        const coleccionAcaba = []
        for (let i = 0; i < coleccion.length ; i++){
            if (coleccion[i].email.endsWith(dominio)){
                coleccionAcaba.push(coleccion[i])
            }
        }
        return coleccionAcaba.length
    }
    static obtenerNumeroPersonaPorDominio(coleccion, dominio){
       return coleccion.filter(persona => persona.email.endsWith(dominio))
                       .length
    }
    // static obtenerNumeroPersonaPorDominio(coleccion, dominio){
    //     return coleccion.map( elemento => elemento.email )
    //         .filter(email => email.endsWith(dominio))
    //         .length
    // }

}
//console.log(module)
// const persona = new Persona('juan', 'garcía garcía', 'correo@local.es', 'male')
// console.log(persona)
// console.log(persona.toString())
// console.log(`${persona.apellidos}, ${persona.nombre}`)
