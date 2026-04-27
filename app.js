import express from 'express'


const filmes = [
  { id: 1, nome: "Homem Aranha Longe de Casa", genero: "Ficção científica" },
  { id: 2, nome: "Filme 2", genero: "Genero 2" },
  { id: 2, nome: "Filme 3", genero: "Genero 3" },
];


const app = express(); // Inicializa a aplicação




// Habilita o servidor a entender dados em formato JSON
app.use(express.json());




// Define uma rota do tipo GET no endereço /home
app.get('/home', (request, response) => {
    return response.send("Bem-vindo à nossa API!");
});




// Faz o servidor "escutar" requisições na porta 3333
app.listen(3333, () => console.log("Servidor rodando na porta 3333" + "\n" + "http://localhost:3333"));
