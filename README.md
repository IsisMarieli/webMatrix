# Pesquisador de Personagens de Matrix - Imersão DEV com Gemini

## Descrição
Este projeto web é um simples buscador de personagens do universo Matrix. Ao digitar o nome de um personagem no campo de pesquisa, a aplicação busca por correspondências no título e descrição dos personagens armazenados em um banco de dados local (arquivo `dados.js`) e exibe os resultados relevantes, incluindo o título do personagem, uma breve descrição e um link para um vídeo relacionado.

## Como Utilizar
**1.** - Abra o arquivo index.html em um navegador
   - Digite o nome do personagem que você deseja pesquisar no campo de pesquisa.
   - Clique no botão "Pesquisar".
**2. Tecnologias Utilizadas**
HTML: Estrutura básica da página.
CSS: Estilização da página.
JavaScript: Lógica da aplicação, incluindo a função de pesquisa.
**3.Estrutura de Arquivos**
img: pasta de imagem.
index.html: Arquivo principal da página, responsável pela estrutura HTML.
style.css: Arquivo de estilos CSS, responsável pela aparência visual da página.
dados.js: Arquivo JavaScript contendo os dados dos personagens (título, descrição e link).
app.js: Arquivo JavaScript contendo a lógica da aplicação, como a função de pesquisa e a manipulação do DOM.
**4. Funcionamento**
Pesquisa: Ao digitar um termo e clicar em "Pesquisar", a aplicação percorre o array de personagens em dados.js e verifica se o termo digitado está presente no título ou na descrição de cada personagem.
Exibição de Resultados: Os personagens que correspondem à pesquisa são exibidos na seção "resultados-pesquisa", com o título, descrição e link para o vídeo.
