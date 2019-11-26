const validarFormatoDNI = (dni) => /^[0-9]{8}[A-Z]$/.test(dni.toUpperCase())

module.exports.validarLetra = (dni) => {
    if (validarFormatoDNI(dni)){
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKET'
        const letra  = dni.slice(dni.length - 1).toUpperCase()
        let numero = dni.slice(0, dni.length -1) * 1
        numero = numero % 23
        const letraReal = letras.substring(numero, numero+1);
        return letra === letraReal
    }
    return false
}



