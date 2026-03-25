const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-Tarefas");


// criando listas vazia
let tarefas = [];

// criar uma função
function salvarTarefas() {
    /* 
    localStorage -> armazenamento local do navegador
    setItem -> salva no armazenamento o conteúdo recebido
    JSON.stringify(tarefas) -> pega a lista de tarefas, converte para texto (string) e armazena esse texto.
    
    */
   localStorage.setItem("tarefas", JSON.stringify(tarefas));

}

// função para mostrar tarefas na tela
function mostrarTarefas() {
   
   listaTarefas.innerHTML= "";

   for (let i= 0; i < tarefas.length; i++) {
       const li = document.createElement("li");
       li.innerText = tarefas[i];
   }

}
