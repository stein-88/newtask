const axios = require('axios')

const venda = (param) => {
    if (!param) return null
    const stellar = 1.8
    return param * stellar
}

const compra = (param) => {
    if (!param) return null
    const stellar = 1.8
    return param / stellar
}

const sub = (param1, param2) => {
    if (!param1 || !param2 || (isNaN(param1) && isNaN(param2))) return null
    return param1 - param2
}

const triangulo = (param1, param2, param3) => {
    if (!param1 || !param2 || !param3) return 'Preciso de tres parametros'
    if (isNaN(param1) || isNaN(param2) || isNaN(param3)) return 'Nao eh um triangulo'
    const n1 = Number(param1)
    const n2 = Number(param2)
    const n3 = Number(param3)
    if (n1 === n2 && n2 === n3) return 'Triângulo Equilátero'
    if ((n1 !== n2 && n2 === n3) || (n1 === n2 && n2 !== n3) || (n1 === n3 && n1 !== n2)) return 'Triângulo Isósceles'
    return 'Triângulo Escaleno'
}

const mmInteger = (p1, p2, p3) => {
    if ((!Number.isInteger(p1)) || (!Number.isInteger(p2)) || (!Number.isInteger(p3))) return 'inclua 3 numeros inteiros'
    const treta = [p1, p2, p3].sort((a, b) => { return a - b })
    return `Esse é o maior: ${treta[0]} Esse é o menor: ${treta[2]}`
}

const senhaUser = (pass) => {
    if (!pass) return 'Senha eh obrigatorio'
    if (pass === 'adminadmin1234') return 'ACESSO PERMITIDO'
    return 'ACESSO NEGADO'
}

const mynewFunction = (fVal, sVal) => {
    if (!fVal || !sVal)
        return 'Error: Not a number bitch'
    return {
        ambosSaoNumeros: !isNaN(fVal) && !isNaN(sVal),
        ambosSaoTypoNumeros: typeof fVal === 'number' && typeof sVal === 'number',
        multiPlyToString: (fVal * sVal).toString(),
        sumPounds2Decimals: `€ ${(fVal + sVal).toFixed(2)}`,
        divideToprecision: Number.isInteger(fVal / sVal) ? 'Number is integer' : (fVal / sVal).toPrecision(3),
        divideToInteger: !isNaN(Number.parseInt(fVal / sVal)) ? Number.parseInt(fVal / sVal) : Number.NaN,
    }
}

const novofetch = async (obj) => {
    if (!obj) return null
    const { url, dado, ispost, cabeca } = obj
    const header = cabeca || {}
    if (!url) return null
    try {
        let response
        if (ispost) {
            response = await axios.post(url, dado)
        } else {
            response = await axios.get(url, {...header})
        }
        return response.data
    } catch (er) {
        console.log(er)
        return er.response.data
    }
}


module.exports = {
    venda,
    compra,
    sub,
    triangulo,
    mmInteger,
    senhaUser,
    mynewFunction,
    novofetch
}