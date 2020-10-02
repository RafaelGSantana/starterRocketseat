class App {
  constructor() {
    // Inicializa a variável onde ficarão armazenados os repositórios adicionados
    this.repositories = [];

    // Adiciona a referência para o elemento do <form />
    this.formEl = document.getElementById("repo-form");

    // Instancia a função registerHandlers da classe App
    this.registerHandlers();
  }

  // Função para registrar os eventos
  registerHandlers() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
  }

  // Função para adicionar repositórios na variável repositories
  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: "rocketseat.com.br",
      description: "Tire sua ideia do papel e dê vida à sua startup",
      avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
      html_url: "http://github.com/rocketseat/rocketseat.com.br",
    });

    console.log(this.repositories);
  }
}

new App();
