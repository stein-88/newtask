const { novofetch } = require('./utils')
//token de acesso fixo
const getToken = async () => {
    const finalobj = {
        url: 'https://sandbox.globechain.com/api/get-token/',
        dado: {
            email: 'cristian@globechain.com',
            password: 'cristiancristian',
            api_key: 'Naomp6lALFu475Ucin-EywAjEGGb0updCtlx4g4tYX4'
        },
        ispost: true
    }
    const chamando = await novofetch(finalobj)
    return chamando.access
}
//pegando só url
const getwurl = async () => {
    const finalobj = {
        url: 'https://sandbox.globechain.com/api/'
    }
    const chamando = await novofetch(finalobj)
    return chamando
}

//pegando url e autorização

const getwauto = async (param, url) => {
    if (!param || !url) return null
    const finalobj = {
        url,
        cabeca: {
            headers: {
                "Authorization": `Bearer ${param}`,
                "Content-Type": "application/json"
            }
        }
    }
    const chamando = await novofetch(finalobj)
    return chamando
}

const init = async () => {
    const token = await getToken()
    const category = await getwauto(token, 'https://sandbox.globechain.com/api/category/')
    console.log('**************************************************categorias**************************************************')
    console.log(category)
    const products = await getwauto(token, 'https://sandbox.globechain.com/api/products/')
    console.log('**************************************************produtos**************************************************')
    console.log(products)
    const comurl = await getwurl()
    console.log('**************************************************root**************************************************')
    console.log(comurl)
}

init()





/* 
17-12-2021
pontos de melhoria

refatorar (criar e melhorar depois)

função
parametros
fazer função no limbo sme pegar resultado
deconstrução de objeto 
deconstrução de array
spread
*/













//module.exports = init()
//method para todas as url que consta na globechain
//pegar um unico... ta na documentação, tem link tem q ta aq kk

/* caminhos
{
    "https://sandbox.globechain.com/api/": {
        "gettoken": "https://sandbox.globechain.com/api/get-token/"
        "products": "https://sandbox.globechain.com/api/products/",
        "category": "https://sandbox.globechain.com/api/category/": [
            "https://sandbox.globechain.com/api/category/?page=2/",
            "https://sandbox.globechain.com/api/category/135c7bd7-d44a-498c-b4dc-e9b0ef4e19c8/",
        ],
        "supplier": "https://sandbox.globechain.com/api/supplier/": [
            https://sandbox.globechain.com/api/supplier/929bf419-464a-4ce2-91ab-5bcff2959a0/
        ],
    }
}
*/

/* 
algo inteligente seria talvez
pegar o resultado do api usar de base para acessar os proximos links retornado
esse links precisam de autenticação, ja tenho pronto.
de acordo com o resultado eu acesso o proximo link e assim vai
e acesso cada produto


problemas:
Cada vez que gero um token vai sair do bolso de alguém
recursivo é fora de cogitação
Eu não estou entendendo muita coisa/ quase nada mesmo lendo a documentação
a função novofetch faz uma coisa q eu não absorvi a ideia, ex do trecho: 
const header = cabeca || {}
response = await axios.get(url, {...header})
*/








