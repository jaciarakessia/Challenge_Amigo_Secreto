
let amigos = [];

// Adiciona o evento de clique ao botão "Adicionar"
document.getElementById("adicionarBtn").addEventListener("click", adicionarAmigo);

function adicionarAmigo() {
    let nomeInput = document.getElementById("nomeAdicionar");
    let nome = nomeInput.value.trim();
   
    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else if (amigos.includes(nome)) { // Verifica se o nome já está na lista
        alert("Esse nome já foi adicionado!");
    } else {
        amigos.push(nome); // Adiciona o nome ao array
        console.log(nome + " foi adicionado à lista de amigos!");
        nomeInput.value = ""; // Limpa o campo de entrada
        atualizarLista(); // Atualiza a lista exibida
    }
}

function sortearAmigo() {
    // 1) Validar que há amigos disponíveis    
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }
     // 2) Gerar um índice aleatório
     let indiceAleatorio = Math.floor(Math.random() * amigos.length);
     // 3) Obter o nome sorteado
     let amigoSorteado = amigos[indiceAleatorio];

     // 4) Mostrar o resultado
     let resultadosDiv = document.getElementById("resultados");
     resultadosDiv.innerHTML = "<h3>Amigo Sorteado:</h3><p>" + amigoSorteado + "</p>";
 }

 function atualizarLista() {
    // 1) Obter o elemento da lista
    let lista = document.getElementById("listaAmigos");
    // 2) Limpar a lista existente
    lista.innerHTML = "";

    // 3) Percorrer o array
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Define o texto do elemento de lista

    // Cria um botão de remover
    let removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";
    removerBtn.onclick = function() {
        amigos.splice(i, 1); // Remove o amigo do array
        atualizarLista(); // Atualiza a lista exibida
    };
    
    li.appendChild(removerBtn); // Adiciona o botão de remover à lista
    lista.appendChild(li); // Adiciona o elemento à lista

   }
}
    function limparCampo() {
    let adicionar = document.getElementById("nomeAdicionar");
    adicionar.value = "";
}

// Adicionando eventos de clique
document.getElementById("adicionarBtn").addEventListener("click", adicionarAmigo);
document.getElementById("sortearBtn").addEventListener("click", sortearAmigo);

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

