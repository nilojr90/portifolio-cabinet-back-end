# Portfolio Cabinet 🗃

Aplicação back-end para armazenar repositórios do seu portfólio,  que permite a criação, listagem, atualização e remoção dos  repositórios, e também  permite que os repositórios possam receber  "likes" 👍.

Feito como exercício do curso "GoStack". 


## 💾Instalação

1. Clone o repositório  ```git clone {URL_DO_REPOSITORIO}```
2. Execute o comando ```yarn```  na pasta do projeto clonado para instalar todas as dependências.

## 🗃Funções
- Listar: 
  **GET** /repositories
- Inserir: 
  **POST** /repositories 
```json
{
	"title": "DesafioNode.js",
	"url": "http: //github.com/...",
	"techs": ["Node.js"]
}
```
- Alterar: 
  **PUT** /repositories:id  (com o objeto atualizado no corpo da requisição)
- Remover:  
  **DELETE** /repositories:id
- Like: 
  **POST** /repositories/:id/like

## 📑Licença
[MIT] (http://escolhaumalicenca.com.br/licencas/mit/)

