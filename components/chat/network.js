const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', async (req, res) => {
    try {
        const resp = await controller.addChat(req.body.users);
        response.success(req, res, resp, 200);
    } catch (error) {
        response.error(req, res, 'Informacion invalida', 500, 'Error en el post de controllerChat' );

    }
});

router.get('/:userId', async (req, res) => {
    try {
        console.log(req.params.userId);
        const chats = await controller.listChats(req.params.userId);
        response.success(req, res, chats, 200);
    } catch (error) {
        response.error(req, res, 'Error interno', 500, 'Error al obtener los chats en controllerChat' );
    }
});


module.exports = router;