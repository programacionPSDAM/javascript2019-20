var array = ['pato', 'ganzo', 'pollo']
var a = array[0]
var b = array[1]
var c = array[2]
console.log(a, b, c)
var [a, b, c ] = array
console.log(a, b, c)

///////////////////////
const objeto = {
    a: 'casa',
    b: 'apartamento'
}
var {a, b} = objeto
console.log(a, b)
///////////////////////

const url = "https://developer.mozilla.org/en-US/Web/JavaScript";
const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
const [, protocol, fullhost, fullpath] = parsedURL;
console.log(protocol, fullhost, fullpath);

//////////////////////////
let numeros = [4, 16, 25, 2, 45, 8];
let numeroMayor = Math.max(...numeros);
console.log(numeroMayor); // NaN

/////////////////////////////
const array1 = [1, 2]
const array2 = [...array1, 3, 4]
console.log(array2)

/////////////////////////////
const obj1 = {a: 'a', b: 'b'};
const obj2 = {c: 'c', ...obj1};
console.log(obj2)
