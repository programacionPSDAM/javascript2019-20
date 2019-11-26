module.exports = class Persona  {
    constructor (nombre, apellidos, edad, dni, ) {
        this.nombre = nombre
        this.apellidos = this.apellidos
        this.dni    = dni
        this.edad   = edad
    }
    toString() {
        return `PERSONA: ${this.dni}: ${this.apellidos}, $${this.nombre}. Edad: ${this.edad}`
    }
    esMayorEdad() {
        return this.edad >= 18
    }

    static menoresEdad (personas) {
        return personas.filter( persona => !persona.esMayorEdad())
    }
    
}

// const persona1 = new Persona('juan', 'garcía', 25, 'dni1');
// const persona2 = new Persona('juani', 'garcía', 15, 'dni1');
// const persona3 = new Persona('luis', 'garcía', 25, 'dni1');
// const persona4 = new Persona('luisa', 'garcía', 15, 'dni1');

// const array = []
// array.push(persona1)
// array.push(persona2)
// array.push(persona3)
// array.push(persona4)

// console.log(Persona.menoresEdad(array))