function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o termo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Se o campo de pesquisa estiver vazio, exibe uma mensagem
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo.</p>";
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada personagem e verifica se o nome ou descrição contém o termo pesquisado
    for (let personagem of personagens) {
        let titulo = personagem.titulo.toLowerCase();
        let descricao = personagem.descricao.toLowerCase();
    
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${personagem.titulo}</a>
            </h2>
            <p class="descricao-meta">${personagem.descricao}</p>
            <a href=${personagem.link} target="_blank">ver video</a>
          </div>
        `;
      }
    }
  
    // Se não houver resultados, exibe uma mensagem
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }