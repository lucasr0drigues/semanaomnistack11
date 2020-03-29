const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * tipo de parametros:
 * 
 * rota: caminho completo
 * recurso: o que vem após a barra
 * 
 * query params: parametros nomeados enviados na rota após o caractere "?" (serve para filtros, paginacao) /// request.query para pegar os query
 * route params: parametros utilizados para identificar recursos (ex: users/:id => users/1 => "usuario 1") - request.params /// request.params para pegar os params
 * request body: corpo da requisição, utilizado para criar ou alterar recursos   - request.query /// request.body para pegar o body
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index ); 
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/** routes.post('/ongs', async (request,response) => {
    //const data = request.body;
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    //console.log(data);

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id}); 
});**/

module.exports = routes;


