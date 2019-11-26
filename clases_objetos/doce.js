var objeto1 = {ciudad : 'jaén'}
objeto1.nombre = 'felisa'
objeto1['edad'] = 25
console.log(objeto1)
// console.log(typeof(objeto1))
Object.prototype.comunidad = 'Andalucı́a'
var objeto2 = {ciudad : 'linares'}
objeto2.nombre = 'rómulo'
objeto2['edad'] = 25
console.log(objeto2)
console.log(objeto1)
console.log(objeto2.comunidad)
console.log(objeto1.comunidad)