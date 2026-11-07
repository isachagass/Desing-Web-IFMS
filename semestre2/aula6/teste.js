// localStorage sobreescreve o ultimo comando
localStorage.setItem("theme", "dark"); //cria a chave theme com o value dark
localStorage.setItem("theme", "ambar"); // pega a chave theme e coloca o value ambar

// pegar o valor guardado na key
const theme = localStorage.getItem("theme"); // guarda ambar
const x = localStorage.getItem("no"); // key não definida --> guarda null


const tasks = ["estudar", "revisar"];
// guarda o array em formato de json(string) na key
localStorage.setItem("tasks", JSON.stringify(tasks));
// pega o value da key e transforma em array novamente
const tasks_recovered = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks_recovered);