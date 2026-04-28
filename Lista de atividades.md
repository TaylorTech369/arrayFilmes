# Atividade 01: Catálogo de Filmes (GET)
Objetivo: Listar dados armazenados em um array.

Crie um array chamado filmes contendo objetos com id, titulo e genero. Crie uma rota GET /filmes que retorne a lista completa de filmes cadastrados.

Dica: Inicie o array com pelo menos 3 filmes para testar a visualização inicial.



# Atividade 02: Filtro por Categoria (Query Params)
Objetivo: Filtrar elementos de um array.

Crie uma rota GET /filmes/genero. Ela deve receber um Query Param chamado nome e retornar apenas os filmes que pertencem a esse gênero específico.

Lógica: Use o método filmes.filter(f => f.genero === nome) para realizar a busca.



# Atividade 03: Cadastro de Clientes (POST)
Objetivo: Inserir novos objetos em um array via Body.

Crie uma rota POST /clientes. O cliente deve enviar nome e email. O servidor deve gerar um ID automático e adicionar esse novo cliente ao array clientes.

Importante: Retorne o status 201 (Created) e o objeto do cliente recém-criado.



# Atividade 04: Validação de Duplicidade (POST + Lógica)
Objetivo: Impedir cadastros duplicados.

Na rota de cadastro de clientes, antes de salvar, verifique se o email enviado já existe no array. Se existir, retorne status 400 e a mensagem: "Este email já está cadastrado".



# Atividade 05: Busca por ID (Route Params)
Objetivo: Localizar um item único no "banco de dados".

Crie uma rota GET /clientes/:id. O servidor deve percorrer o array de clientes e retornar apenas as informações do cliente que possui o ID correspondente.

Dica: Se o ID não for encontrado, retorne uma mensagem de erro com status 404.