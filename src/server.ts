import express from 'express';

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

app.get('/', (request, response) => {
  return response.json({
    message: 'Olá NLW 05!',
  });
});

app.post('/', (request, response) => {
  return response.json({
    message: 'Usuário salvo com sucesso',
  });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
