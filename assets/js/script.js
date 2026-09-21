const inputTarefa = document.querySelector('.input-tarefa');
const botaoAdicionar = document.querySelector('.botao-adicionar');
const listaTarefas = document.querySelector('.lista-tarefas');

function criarElementoTarefa() {
    const elementoTarefa = document.createElement('li');
    return elementoTarefa;
}

function adicionarBotaoApagar(elementoTarefa) {
    const spanTexto = document.createElement('span');
    spanTexto.innerText = elementoTarefa.innerText;
    elementoTarefa.innerText = '';
    elementoTarefa.appendChild(spanTexto);

    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    elementoTarefa.appendChild(botaoApagar);
}

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value;
    if (!textoTarefa) return alert('Preencha o campo antes de adicionar!');
    criarTarefaNaLista(textoTarefa);
    salvarTarefas();
    inputTarefa.value = '';
}

function criarTarefaNaLista(textoTarefa) {
    const elementoTarefa = criarElementoTarefa();
    elementoTarefa.innerText = textoTarefa;
    adicionarBotaoApagar(elementoTarefa);
    listaTarefas.appendChild(elementoTarefa);
}

function salvarTarefas() {
    const elementosTarefas = listaTarefas.querySelectorAll('li');
    const tarefas = [];

    for (let elementoTarefa of elementosTarefas) {
        let textoTarefa = elementoTarefa.querySelector('span').innerText.trim();
        tarefas.push(textoTarefa);
    }

    const tarefasJson = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    const listaSalva = JSON.parse(tarefasSalvas) || [];

    for (let textoTarefa of listaSalva) {
        criarTarefaNaLista(textoTarefa);
    }
}

document.addEventListener('keypress', function (evento) {
    if (evento.keyCode === 13) {
        adicionarTarefa();
    }
});

document.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('apagar')) {
        evento.target.parentElement.remove();
        salvarTarefas();
    }
});

botaoAdicionar.addEventListener('click', function () {
    adicionarTarefa();
});

carregarTarefas();