const produtos = [
  {
    nome: "Caneta Azul",
    preco: 2.50,
    categoria: "Escrita",
    estoque: 50
  },
  {
    nome: "Lápis HB",
    preco: 1.50,
    categoria: "Escrita",
    estoque: 100
  },
  {
    nome: "Caneta Vermelha",
    preco: 2.50,
    categoria: "Escrita",
    estoque: 30
  },
  {
    nome: "Marca-texto",
    preco: 4.00,
    categoria: "Escrita",
    estoque: 25
  },
  {
    nome: "Caderno 10 Matérias",
    preco: 25.90,
    categoria: "Material Escolar",
    estoque: 20
  },
  {
    nome: "Borracha Branca",
    preco: 1.00,
    categoria: "Material Escolar",
    estoque: 80
  },
  {
    nome: "Régua 30cm",
    preco: 3.50,
    categoria: "Material Escolar",
    estoque: 40
  },
  {
    nome: "Apontador",
    preco: 2.00,
    categoria: "Material Escolar",
    estoque: 60
  }
];

const nums = [3,7,2]

// map opera em cima de um vetor e retorna novo vetor do mesmo tamanho
const dobro = nums.map(n => n*2)
// console.log(dobro)

// foreach retorna undefined
// nums.forEach(p => console.log(p*2))

const novo = [1,2,3].forEach(n => n*2)
// console.log(novo)


const listas = produtos.map((p) => p.nome)
// console.log(listas)

const comDesconto = produtos.map((p) => 
({
    nome: p.nome,
    preco: p.preco *0.9

})
)

// console.log(comDesconto)

// const local_ = localStorage.setItem('produtos-desconto', JSON.stringify(comDesconto))

// {} é um bloco de codigo, só sai de dentro se tiver um return  ou ser objeto
const x = [2,3,4].map(n => {return n * 2})
// console.log(x)

// constante é com letra maiuscula
// classe é com a primeira letra maiuscula


const y = [2,3,4,5,6,7,8].filter(n => n > 5)

// const y = [2,3,4,5,6,7,8].filter(n => map(p => p*2))
// console.log(y)

const notas = [7,8,9,8,7]
// reduce (acc, n) => operacao, valor inicial
const soma = notas.reduce((acc, n) => acc + n, 0)

// console.log(soma)

const itens = produtos.reduce((acc, n) => (acc+ n.estoque), 0)

console.log(itens)
