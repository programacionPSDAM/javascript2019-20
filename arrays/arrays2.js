const randomArray = (length, max) => [...Array(length)]
        .map(() => Math.round(Math.random() * max));

const length = 10
const max    = 100

const arrayRandom = randomArray(length, max)
console.log(arrayRandom)

const MAX = 85

const mayor = arrayRandom.some(elemento => elemento > MAX)
console.log(`Se supera el valor ${MAX}: ${mayor}`)

if ( mayor ) {
        const arrayMayores = arrayRandom.filter(
                elemento => elemento > MAX
        )
        console.log(`Array valores máximos: ${arrayMayores}`)
        const suma = arrayMayores.reduce( (acumulador, valorActual) => {
          return acumulador + valorActual} , 0 )
        console.log(`Valor de la suma del array vale ${suma}`)  
} else {
        console.log(`No hay valores que superen ${MAX}`)
}