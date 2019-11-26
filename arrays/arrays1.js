const array1 = [ 0, 1, 2 ]
console.log('array1 ' , array1)
console.log('type of array1 ' , typeof( array1 ))

array1[0] = 10
console.log('array1 ' , array1)
const array2 = []
let array3 = array1
console.log('array1 ' , array1)
console.log('array2 ' , array2)
console.log('array3 ' , array3)
console.log('array1 === array3', array1 === array3)
array3 = array2
console.log('array1 === array3', array1 === array3)
array1 = array2