import express from 'express';

const app = express();
const port = 3000;

const users = [
  {user: "Edson", email: "edson@imagineschool.com.br"},
  {user: "Janon", email: "janon@imagineschool.com.br"},
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('<h1>Pagina de Teste</h1>')
});

app.get('/user', (req, res) => {
  res.send(JSON.stringify(users));
});

app.post('/user', (req, res) => {
  res.send('<h1>Fez o seu primeiro post</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})