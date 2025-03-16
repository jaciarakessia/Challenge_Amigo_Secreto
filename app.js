
let amigos = [];
let sorteados = [];

function exibirLista(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let addcionar = document.querySelector('input').value;
    if (addcionar == '') {
        alert('Digite um nome!');
    } else {
        amigos.push(addcionar); // Adiciona o amigo ao array
        exibirLista('ul', amigos); // Atualiza a lista exibida
        atualizarLista(); // Atualiza a lista na interface
        console.log(amigos); // Limpa o campo de entrada
        limparCampo();
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
     
     // 4) Obter o elemento para mostrar o resultado
     let resultadosDiv = document.getElementById("resultados"); // Insira aqui
 
     // 5) Mostrar o resultado
     resultadosDiv.innerHTML = "<h3>Amigo Sorteado:</h3><p>" + amigoSorteado + "</p>";
 }

function atualizarLista() {
    // 1) Obter o elemento da lista
    let lista = document.getElementById("listaAmigos");
    // 2) Limpar a lista existente
    lista.innerHTML = "";
    // 3) Percorrer o array
    for (let i = 0; i < amigos.length; i++) {
        // 4) Adicionar elementos à lista
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Define o texto do elemento de lista
        lista.appendChild(li); // Adiciona o elemento à lista
    function limparCampo(){
        let addcionar = document.querySelector('input');
        addcionar.value = "";
        }
   }
 }
