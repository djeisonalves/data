// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Nome do arquivo JSON
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000; // Usa a variável de ambiente PORT

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
