// trabalho
// faz uma requisição e guarda no local storage
// apresentar em um grid, usar filter e enquanto vai digitando vai altualizando a tabela
// pesquisa por nome --> ou criar um que filtra tudo - ideia passada

// se o usuario é 1 cria uma lista com todas as fotos 1
// consumir 2 ou 3 api -> fetch
// usuario com post com comentario
// usuar map, filter e reduce
// e combinados
// layout importante 
// busca por email
// busca por email do post
// listar usuarios
// listar posts
// qunado clica post aparece todos os comentarios
// quantidade de itens carregados em todos


// mdn documentação
// api conjunto de regras e protocolos 
// fetch serve para fazer/enviar requisições do  http
// get, post

// async await, promise

// jsonplaceholder

// const retorno = fetch('https://jsonplaceholder.typicode.com/posts/1')
// console.log(retorno)

// getall() --> lista []
// getbyid() --: objeto {}

const URL = "https://jsonplaceholder.typicode.com/posts/1"

// fetch(URL)
//     .then((response) => response.json())
//     .then((json) => console.log(json))

async function getData(){
    try {
        const RESPOSTA = await fetch(URL);

        if (!RESPOSTA.ok){
            throw new Error("Erro HTTP" + RESPOSTA.status);
        }

        // chama uma function
    
        const dados = await RESPOSTA.json()
    
        console.log(RESPOSTA)
        
    } catch (error) {
        console.log("Algo deu errado", error)
    }
}

getData()