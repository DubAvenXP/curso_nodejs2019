const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.get('/', async (req, res) => {
    try {
        const messageList = await controller.getMessages()
        response.success(req, res, messageList, 200);
    } catch (error) {
        response.error(req, res, 'Unexpected error', 500, error)
    }

});

router.put('/', (req, res) => {
    res.send('se modifico 1 mensaje');
});



router.post('/', async (req, res) => {
    try {
        
        const body = await controller.addMessage(req.body.user, req.body.message);
        response.success(req, res, 'Mensaje creado correctamente', 201);

    } catch (error) {
        
        response.error(req, res, 'Informacion invalida', 400, 'Error en el post de controller' )

    }
});


router.delete('/', (req, res) => {
    console.log(req.headers);
    res.send('mensaje eliminado: ');
});

module.exports = router;