const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

//Para guardar imagenes
//options del storage
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        const [name, extension] = file.originalname.split('.');
        cb(null, `${name}-${Date.now()}.${extension}`);
    }
});

const upload = multer({storage: storage})

router.get('/', async (req, res) => {
    const filterMessages = req.query.user || null;
    try {
        const messageList = await controller.getMessages(filterMessages)
        response.success(req, res, messageList, 200);
    } catch (error) {
        response.error(req, res, 'Unexpected error', 500, error);
    }

});

router.put('/', (req, res) => {
    res.send('se modifico 1 mensaje');
});

router.patch('/:id', async (req, res) => {
    try {
        const resp = await controller.updateMassage(req.params.id, req.body.message);
        response.success(req, res, resp, 200);
    } catch (error) {
        response.error(req, res, 'Unexpected error', 500, error);
    }

});

// para trabajar imagenes solo se necesita usar un midleware de express
router.post('/', upload.single('file'), async (req, res) => {
    try {
        
        const body = await controller.addMessage(req.body.chat, req.body.user, req.body.message);
        response.success(req, res, 'Mensaje creado correctamente', 201);

    } catch (error) {
        
        response.error(req, res, 'Informacion invalida', 400, 'Error en el post de controllerMessage' );

    }
});


router.delete('/:id', async (req, res) => {
    try {
        const resp = await controller.deleteMessage(req.params.id);
        if (resp !== null) {
            response.success(req, res, `mensaje ${req.params.id} ha sido eliminado`, 200);
        } else {
            response.success(req, res, `mensaje ya fue eliminado o no existe`, 200);
        }
    } catch (error) {
        response.error(req, res, 'El mensaje no se pudo eliminar', 500, error );
    }
});

module.exports = router;