import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {

  if(req.url === "/") {
    res.end('<h1>Pagina Principal</h1>');
  }

  if(req.url === "/test") {
    res.end('<h1>Pagina de Teste</h1>');
  }

  if(req.url === "/number") {
    res.end(JSON.stringify({user: "Edson", email: "edson@imagineschool.com.br"}));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});