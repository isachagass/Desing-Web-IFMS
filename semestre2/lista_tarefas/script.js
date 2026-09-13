const input_add = document.querySelector("#input-add")
const bt_add = document.querySelector("#bt-add")
const ul = document.querySelector("#lista")

let add_li = ()=> {
     let valor = input_add.value
    if(valor == ""){
        return;
    }
    
    let novo_li = document.createElement('li')

    let novo_checkbox = document.createElement('input')
    novo_checkbox.type = "checkbox"
    novo_checkbox.name = "checkbox"
    novo_checkbox.classList.add("input-checkbox")

    novo_checkbox.addEventListener('change', (event)=>{
        novo_li.classList.toggle("concluido")
    })

    let novo_texto = document.createElement('span')
    novo_texto.classList.add("txt_tarefa")
    novo_texto.innerText = valor

    let novo_span = document.createElement('span')
    novo_span.classList.add("material-symbols-outlined", "icon-delete")
    novo_span.innerText = "delete"

    novo_span.addEventListener('click', ()=>{
        novo_li.remove()
    })

    novo_li.appendChild(novo_checkbox)
    novo_li.appendChild(novo_texto)
    novo_li.appendChild(novo_span)

    ul.appendChild(novo_li)

    input_add.value = ""
}

bt_add.addEventListener('click', add_li)
input_add.addEventListener('keydown', (event)=>{
    if (event.key == 'Enter'){
        add_li()
    }
})