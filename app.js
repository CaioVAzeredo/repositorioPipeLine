// app.js
const http = require('http');
const port = process.env.PORT || 80;

const requestHandler = (request, response) => {
  response.end('TRABALHO DEVSECOPS QUESTAO 2');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
