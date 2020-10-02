import api from "./api";

class App {
  constructor() {
    // Inicializa a variável onde ficarão armazenados os repositórios adicionados
    this.repositories = [];

    // Adiciona a referência para o elemento <form />
    this.formEl = document.getElementById("repo-form");

    // Adiciona a referência para o elemento <input /> para pegarmos o valor dele
    this.inputEl = document.querySelector("input[name=repository]");

    // Adiciona a referência para o elemento <ul />
    this.listEl = document.getElementById("repo-list");

    // Instancia a função registerHandlers da classe App
    this.registerHandlers();
  }

  // Função para registrar os eventos
  registerHandlers() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
  }

  // Função para exibir a mensagem de loading
  setLoading(loading = true) {
    // Se loading for true, cria um novo elemento em tela.
    if (loading === true) {
      // Cria o elemento <span id="loading">Carregando..</span>
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando.."));
      loadingEl.setAttribute("id", "loading");

      // adiciona o elemento dentro do <form />
      this.formEl.appendChild(loadingEl);
    } else {
      // Se loading for false, apaga o elemento criado acima, da tela
      document.getElementById("loading").remove();
    }
  }

  // Função para adicionar repositórios na variável repositories
  async addRepository(event) {
    event.preventDefault();

    // Pega o valor do input
    const repoInput = this.inputEl.value;

    // Verifica se há valor pra pegar, se não houver, para de executar a função
    if (repoInput.length === 0) return;

    // Aciona a função de loading antes da busca, à api, ser realizada, com o valor padrão.
    this.setLoading();

    // Se houver tenta a busca na api do github
    try {
      const response = await api.get(`/repos/${repoInput}`);

      // Retorna os valores indicados dna desestruturação de response.data, do repositório buscado
      const {
        name,
        description,
        html_url,
        owner: { avatar_url },
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });

      // Apaga o conteúdo do input após renderizar o repositório em tela
      this.inputEl.value = "";

      // Chama a função render
      this.render();
    } catch (err) {
      // Se não conseguir fazer a buscar exibe mensagem de erro
      alert("O repositório não existe! Verifique o nome digitado no campo.");
    }

    // Se deu certo ou se deu errado, no final da busca define loading como false para remover o loadingEl da tela
    this.setLoading(false);
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

      // Cria elemento <a target="_blank" href={repo.html_url}>Acessar</a>
      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
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
