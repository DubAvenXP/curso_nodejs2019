const express = require('express');
// const router = require('./components/messages/network');
const router = require('./network/routes');


// app.use('/', (req, res) => {
    //     res.send('Hello world!!!');
    // });
    
var app = express();
app.use(express.json());


//app.use(router);
router(app);


app.use('/app', express.static('public'))


app.listen(3000);
console.log('Estoy escuchando por http://localhost:3000');