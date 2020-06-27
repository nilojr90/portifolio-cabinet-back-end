const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const{title, url, techs} = request.body;

  const new_repository={id:uuid(),title, url, techs, likes:0}

  repositories.push(new_repository);
  
  response.status(201);
  return response.json(new_repository);
});

app.put("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const {title, url, techs} = request.body;

  const repositoryIndex = repositories.findIndex(repository=>repository.id === id);

  if(repositoryIndex < 0){
    response.status(400);
    return response.json({"error":"Repository not found"});
  }

  const likes = repositories[repositoryIndex].likes;
  const repository={id, title, url, techs, likes};

  repositories[repositoryIndex] = repository; 
  
  response.status(200);
  return response.json(repositories[repositoryIndex]);
});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;

  const repositoryIndex = repositories.findIndex(repository=>repository.id === id);

  if(repositoryIndex < 0){
    response.status(400);
    return response.json({"error":"Repository not found"});
  }

  repositories.splice(repositoryIndex,1);
  
  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;