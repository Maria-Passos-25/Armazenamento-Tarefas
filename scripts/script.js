const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-Tarefas");
const botaoRemoverTudo = document.getElementById("botao-remover-tudo");

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
  
       const botaoConcluido = document.createElement("button");
        botaoConcluido.innerText = "";
        botaoConcluido.className = "botao-concluido";

         botaoConcluido.addEventListener("click", () => {
             botaoConcluido.innerText = "✅";
         })

        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "🗑️";
        botaoRemover.className = "botao-remover";

         botaoRemover.addEventListener("click", () => {
         removerTarefas(i);
         })

        
    
    li.appendChild(botaoRemover);
    li.appendChild(botaoConcluido);
    listaTarefas.appendChild(li);
  
 }

}


function concluirTarefas(posicaoTarefa) {
    // splice -> (posição inicial e a quantidade de itens)
    //tarefas.splice(posicaoTarefa, 1);
    

    //depois de remover, chama a função de salvar no localStorage
    salvarTarefas();

    //mostra as tarefas atualizadas, sem as que foram removidas.
    mostrarTarefas();
}

function removerTarefas(posicaoTarefa) {
    // splice -> (posição inicial e a quantidade de itens)
    tarefas.splice(posicaoTarefa, 1);

    //depois de remover, chama a função de salvar no localStorage
    salvarTarefas();

    //mostra as tarefas atualizadas, sem as que foram removidas.
    mostrarTarefas();
}




// função para adicionar tarefas
function adicionarTarefas() {
    const valorTarefa = inputTarefa.value;

    if(valorTarefa === "") {
        alert("Digite uma tarefa!");
        return; //não deixa que a tarefa vazia apareça na tela
    }

    tarefas.push(valorTarefa); // adiciona a tarefa digitada dentro do array
    inputTarefa.value = "";

    salvarTarefas();
    mostrarTarefas();

    
}

//função para carregar tarefas salvas no localStorage
    function carregarTarefas() {
        // pega as tarefas e armazena na varuavel 'tarefasSalvas'
        const TarefasSalvas = localStorage.getItem("tarefas");

        // se existir alguma coisa dentro de tarefas salvas
        // então converte a tarefa e mostra na tela.

        if(TarefasSalvas){
            // transforma o texto em array novamente
            tarefas = JSON.parse(TarefasSalvas); 
            mostrarTarefas();
        }
    }

    botaoAdicionar.addEventListener("click", adicionarTarefas);
    carregarTarefas();


// Ação para o "botaoAdicionar" ser ativado quando eu clicar no botão enter do teclado

// quando apertar qualquer tecla no input
inputTarefa.addEventListener("keydown", function(event) {

    // se a tecla for Enter
    if (event.key === "Enter") {

        // faz a mesma coisa que clicar no botão (adiciona a tarefa)
        adicionarTarefas();
    }
});




// função para remover todas as tarefas
function removerTodasTarefas() {
    tarefas = [];           // limpa o array de tarefas
     mostrarTarefas();       // atualiza a tela
}

// adiciona o evento de clique
botaoRemoverTudo.addEventListener("click", removerTodasTarefas);

