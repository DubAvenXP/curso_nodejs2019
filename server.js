const express = require('express');
const router = express.Router();
const response = require('./network/response')
// app.use('/', (req, res) => {
    //     res.send('Hello world!!!');
    // });
    
var app = express();
app.use(express.json());
app.use(router);

app.use('/app', express.static('public'))

router.get('/messages', (req, res) => {
    // res.header({
    //     'saludo': 'hola mundo!'
    // })
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inseperado', 500, 'Simulacion de los errores')
    } else {
        response.success(req, res, 'lista de mensajes');
    }
});

router.put('/messages', (req, res) => {
    res.send('se modifico 1 mensaje');
});

router.post('/messages', (req, res) => {
    // res.send('mensaje agregado');
    // res.send('hola ' + req.body.text)
    // res.status(201).send({error: '', body: 'Creado correctamente'});
    response.success(req, res, 'Creado correctamente', 201);
});
//http://localhost:3000/messages?orderBy=id&age=15

router.delete('/messages', (req, res) => {
    // console.log(req.body);
    // console.log(req.query);
    console.log(req.headers);
    // res.send('mensaje eliminado: ' + req.body.text);
    res.send('mensaje eliminado: ');
});

app.listen(3000);
console.log('Estoy escuchando por http://localhost:3000');