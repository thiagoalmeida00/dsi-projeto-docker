# Projeto Node.js + Vue.js + MongoDB - Docker e Docker Compose

Este é um projeto que utiliza as seguintes tecnologias:

- **Node.js**: Plataforma para execução de código JavaScript no lado do servidor.
- **Vue.js**: Framework progressivo para construção de interfaces de usuário.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **Docker**: Plataforma de contêinerização para facilitar o empacotamento e distribuição de aplicativos.
- **Docker Compose**: Ferramenta para definir e executar aplicativos Docker multi-container.

## Como Executar o Projeto

Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema.

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/thiagoalmeida00/dsi-projeto-docker.git
    ```

2. **Navegue até o diretório do projeto referente ao serviço de backend (local do arquivo docker-compose.yml):**

    ```bash
    cd ..\collab-back
    ```

3. **Configurando as variáveis de ambiente:**

    Crie um arquivo `.env` na pasta raiz do projeto, seguindo o modelo disponibilizado na pasta **collab-back**,
    para setar as `variáveis de ambiente` necessárias para rodar a aplicação.

4. **Execute o Docker Compose para construir e iniciar os contêineres:**

    ```bash
    docker-compose up -d
    ```

    Isso iniciará os serviços necessários, e seu aplicativo estará disponível em [http://localhost](http://localhost).

5. **Collection Postman para testes do backend x banco de dados:**

   Na pasta `files` do projeto **collab-back** usar o arquivo 'Collab Studio.postman_collection.json' para testar
   chamadas das apis diretamente para o banco de dados via Postman.

## Requisitos do Projeto

- Projeto utiliza microsserviços (banco de dados, backend e frontend);
- Arquitetura de desenvolvimento dos projetos contempla a separação em módulos/camadas (dados, lógica, apresentação);
- Utilização de containers docker;
- Orquestrador de containers docker compose;
- Comunicação entre serviços do tipo restful (apiRest);
- Parametrizações permitem o multi-stage docker files quando do build isolado das imagens docker para cada serviço.

## Equipe

Este projeto foi desenvolvido por:
- **Genildo Júnior**
- **Lucas Lago**
- **Thiago Leandro Almeida**
