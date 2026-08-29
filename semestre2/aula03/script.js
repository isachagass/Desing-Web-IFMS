// array.[array.length - 1] ---> pega o ultimo elemento da lista
// unshift(elemento) --> add no inicio
// shift() ----> remove do inicio

// indexOf(elemneto) -> retorna a posição do elemento, se nao houver -1
// includes(elemento)  --> true ou false de há aqule elemento
// join(" , ") -> formata o array, junta os elementos em string

// let lista = [-1,-3,6,43,5]

// lista.push(100)
// console.log(lista)

// lista.unshift(0)
// console.log(lista)

// lista.shift()
// console.log(lista)

// lista.pop()
// console.log(lista)

// console.log(lista.indexOf(-3))

// console.log(lista.includes(10))
// console.log(lista.includes(43))

// console.log(lista.join(" , "))


// const alunos = {
//     nome: "isa",
//     idade: 19
//     // depositar(valor) --> add functions como atributos
// };
// alunos.altura = 1.59
// console.log(alunos)
// delete alunos.idade; // delete um atributo
// console.log(alunos)

// Object.keys(nome)
// Object.(nome)


// DOM : estrura organizada para manipular o html

// devolve a primeira ocorrencia de true - id, class, elemento html
// document.querySelector("")  // . class-primeiro #id
// document.querySelectorAll("")  // . class-todos os elemtnos 

const title = document.querySelector("#title");
const li_clas = document.querySelector(".item");
const ul_item = document.querySelector("ul");
const ul_li = document.querySelector("ul li");

// console.log(title)
// console.log(li_clas)
// console.log(ul_item)
// console.log(ul_li)

const itens = document.querySelectorAll(".itenss")

// console.log(itens)

// for (const item of itens){
//     console.log(item.textContent);
// }

// const by_id = document.getElementById("title")
// console.log(by_id)

title.textContent = "oi isa";
li_clas.innerHTML = "<strong>aaaaa</strong>"; // risco de segurança de importar coisas vindo do usuario -- ele mandar a mensagem de algo arriscado- sqlinjection
console.log(title)