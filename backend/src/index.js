const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // segurança

app.use(express.json()); // informando para o express que as requisicoes serao feitas em json

app.use(routes);

/**
 * npm - instalar pacote
 * npx - executar pacote
 */



app.listen(3333);
