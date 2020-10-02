class App {
  constructor() {
    // Inicializa a variável onde ficarão armazenados os repositórios adicionados
    this.repositories = [];

    // Adiciona a referência para o elemento <form />
    this.formEl = document.getElementById("repo-form");

    // Adiciona a referência para o elemento <ul />
    this.listEl = document.getElementById("repo-list");

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

    this.render();
  }

  // Vai apagar o conteúdo da lista e vai renderizar os itens do zero, percorrendo todo o array
  render() {
    this.listEl.innerHTML = ""; // Apaga contepudo da lista

    // Percorrer o array de repos, sem fazer nenhuma alteração, apenas criando e renderizando os elementos em tela
    this.repositories.forEach((repo) => {
      // Cria elemento <img src={repo.avatar_url} />
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      // Cria elemento <strong>{repo.name}</strong>
      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      // Cria elemento <p>{repo.description}</p>
      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      // Cria elemento <a target="_blank">Acessar</a>
      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.appendChild(document.createTextNode("Acessar"));

      /** Cria elemento
       * <li>
       *    <img src={repo.avatar_url} />
       *    <strong>{repo.name}</strong>
       *    <p>{repo.description}</p>
       *    <a target="_blank">Acessar</a>
       * </li>
       * */

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      // Adc. o listItemEl dentro o ul
      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();
