import express, { response } from 'express'


const filmes = [
  { id: 1, nome: "Homem Aranha Longe de Casa", genero: "Ficção científica" },
  { id: 2, nome: "Filme2", genero: "genero2" },
  { id: 4, nome: "Filme4", genero: "genero2" },
  { id: 3, nome: "Filme3", genero: "genero3" },
];

const clientes = [
  { id: 1, nome: "João", email: "Masculino" },
  { id: 2, nome: "José", email: "Masculino" },
  { id: 3, nome: "Jack", email: "Masculino" },
  { id: 4, nome: "Jose", email: "Masculino" },
  { id: 5, nome: "Miow", email: "Masculino" },

];




const app = express(); // Inicializa a aplicação




// Habilita o servidor a entender dados em formato JSON
app.use(express.json());

app.get('/filmes', (request, response) => {
  return response.send(filmes)
})

app.get('/filmes/:genero', (request, response) => {
  const genero = request.params.genero
  const filmesFiltrado = filmes.filter(f => f.genero.toLowerCase() === genero.toLowerCase())
  return response.send(filmesFiltrado)
})

// Define uma rota do tipo GET no endereço /home
app.get('/filmes/genero', (request, response) => {

  filmes.filter(f => f.genero === nome)

  return response.send(filmes);
});






app.get('/clientes', (request, response) => {
  return response.send(clientes)
})

app.post('/clientes', (request, response) => {
  const emailExiste = clientes.some(clientes => clientes.email === request.body.email)
  
  if (emailExiste) {
    return response.status(400).send({ error: "nao pode ter o mesmo email, gg" })
  }

  const NovoCliente = {
    id: clientes.length + 1,
    nome: request.body.nome,
    email: request.body.email
  }
  
  clientes.push(NovoCliente)
  response.status(201).send(NovoCliente)
})

app.get('/clientes/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const clienteSelecionado = clientes.find(cliente => cliente.id === id)

    if(!clienteSelecionado) {
    return response.status(404).send("Erro com status 404")
  }

  return response.send(clienteSelecionado)

})
// Faz o servidor "escutar" requisições na porta 3333
app.listen(3333, () => console.log("Servidor rodando na porta 3333" + "\n" + "http://localhost:3333/filmes/genero"));
