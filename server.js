const express = require('express');
// const router = require('./components/messages/network');
const router = require('./network/routes');
const db = require('./db')

// app.use('/', (req, res) => {
    //     res.send('Hello world!!!');
    // });
    
var app = express();
app.use(express.json());


//app.use(router);
router(app);

//database connection
const user = 'db_user_nodejs';
const password = 'RIOifQx9zXbhe7Pt';
const database = 'cursonodejs';
const uri = `mongodb+srv://${user}:${password}@cluster0.pjeso.mongodb.net/${database}?retryWrites=true&w=majority`;
db(uri);



app.use('/app', express.static('public'))


app.listen(3000);
console.log('Estoy escuchando por http://localhost:3000');