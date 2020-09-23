// Referenciando elementos da DOM, que receberão ações do javascript
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

// Pegando e convertendo, para array, as tarefas salvas no localStorage.
// Caso o "var todos" não retorne nada do localStorage, para evitar erros, passamos "|| [];" como uma segunda opção
// de valor para a variável "todos"
var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

// Renderizando as tarefas em tela
function renderTodos() {
  listElement.innerHTML = ""; // Remove todo o conteúdo do listElement, antes da renderização.

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    // criando elemento (link) para excluir o todo
    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    // Retorna a posição da string no array.
    var pos = todos.indexOf(todo);
    // Aplica a função de deletar a tarefa, com a posição no parâmetro, no evento click.
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

// Adicionando tarefas na lista
function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

// Excluindo tarefa da lista
function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

// Salvando tarefas no localStorage, sendo chave e valor no formato string. Não armazena arrays ou objetos.
function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
