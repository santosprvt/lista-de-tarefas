# Lista de Tarefas

Uma lista de tarefas simples feita com HTML, CSS e JavaScript puro.

## Funcionalidades

- Adição de novas tarefas pelo campo de texto ou pela tecla Enter
- Remoção individual de tarefas pelo botão "Apagar"
- Persistência das tarefas no navegador usando `localStorage`
- Carregamento automático das tarefas salvas ao abrir a página

## Como usar

1. Baixe ou clone os arquivos do projeto.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Digite o texto da tarefa no campo de entrada e clique em "Adicionar" (ou pressione Enter).
4. Clique em "Apagar" ao lado de uma tarefa para removê-la da lista.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (manipulação de DOM, eventos, `localStorage`)

## Como funciona

Cada tarefa adicionada é criada como um elemento `<li>` contendo um `<span>` com o texto digitado e um botão de apagar. A cada adição ou remoção, a função `salvarTarefas` percorre todos os itens da lista e grava o conteúdo como JSON na `localStorage`, sob a chave `tarefas`. Ao carregar a página, `carregarTarefas` lê esse JSON e reconstrói a lista automaticamente.
