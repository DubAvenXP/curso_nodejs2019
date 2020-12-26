const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.get('/', (req, res) => {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inseperado', 500, 'Simulacion de los errores')
    } else {
        response.success(req, res, 'lista de mensajes');
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