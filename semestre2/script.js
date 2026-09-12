const bt_mais = document.querySelector("#bt-mais")
const bt_menos = document.querySelector("#bt-menos")

const result = document.querySelector("#result")
let valor = 0

bt_mais.addEventListener('click', ()=>{
    valor ++
    // template literals = usar a craze e chamar a variavel
    result.textContent = `Cliquei ${valor}x`
})

bt_menos.addEventListener('click', ()=>{
    if(valor == 0){
        return;
    }
    valor --
    result.textContent = `Cliquei ${valor}x`
})

const bt_add = document.querySelector("#bt-add")
const result_ul = document.querySelector("#result-ul")
const input = document.querySelector("#nome")

const add_item = () => {
    // colocar a function aqui e chamar a varaiavel no addEvent

    item = input.value
    if(item === ""){
        return
    }
    li = document.createElement("li")
    li.textContent = item

    const remove = document.createElement("span")
    remove.textContent = "x"
    remove.style.cursor = "pointer"
    remove.style.color = "red"

    remove.addEventListener('click', () =>{
        li.remove()
    })

    li.appendChild(remove)

    
    result_ul.append(li)

    // limpar o valor do input
    input.value = ""
}


let lista = []

bt_add.addEventListener('click', add_item)


input.addEventListener('keydown', (event) =>{
    if (event.key == 'Enter'){
        add_item()
    }
})