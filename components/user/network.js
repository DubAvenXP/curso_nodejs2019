const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', async (req, res) => {
    try {
        const userList = await controller.getUsers();
        response.success(req, res, userList, 200);
    } catch (error) {
        response.error(req, res, 'Error interno', 500, 'Error al obtener la lista de usuarios' );
    }
})

router.post('/', async (req, res) => {
    try {
        const resp = await controller.addUser(req.body.name);
        response.success(req, res, resp, 201);
    } catch (error) {
        response.error(req, res, 'Informacion invalida', 500, 'Error en el post de controllerUser' );
    }
});



module.exports = router