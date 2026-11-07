// localStorage permite guardar algo que não apaga se recarregar a pagina,
// é uma forma de guardade permanente no pc do user
// até que ele escolha limpar esse espaço
// funciona como um dicionario: key: value
// ele só guarda dados em formato de string, array não --> por isso usar Json

const CHAVE = "tasks";
let minha_lista = load();

// carrega os dados já cadastrados
function load() {
    // getItem busca na memoria o valor guagago na key
    const text = localStorage.getItem(CHAVE) ?? "[]";
    // JSON.parse transforma uma sting em Json --> no caso em um array novamente
    return JSON.parse(text);
}

// salva o novo item
function save(tasks) {
    // setItem guarda um valor na key --> (key, valor)
    // JSON.stringify tranforma um array em string --> pq o localSotrage não aceita array
    localStorage.setItem(CHAVE, JSON.stringify(tasks));
}

// pega os elementos para manipular
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("limpar");
const input = document.getElementById("campo");
const list = document.getElementById("lista");

// add os itens na tela
function render() {
    list.innerHTML = "";
    for(const task of minha_lista) {
        list.innerHTML += `<li>${task}</li>`;
    }
}

render();

// add um item
addBtn.addEventListener("click", () => {
    const newTask = input.value;
    minha_lista.push(newTask);
    save(minha_lista);
    input.value = "";
    render();
});

// remove os dados salvos
clearBtn.addEventListener("click", () => {
    minha_lista = [];
    save(minha_lista);
    input.value = "";
    render();
});