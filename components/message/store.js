const db = require('mongoose');
const Model = require('./model')

const user = 'db_user_nodejs';
const password = 'RIOifQx9zXbhe7Pt';
const database = 'cursonodejs';
const uri = `mongodb+srv://${user}:${password}@cluster0.pjeso.mongodb.net/${database}?retryWrites=true&w=majority`

//connection 
db.Promise = global.Promise;
db.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('[db] conectada con exito');
})
.catch((e => {
    console.error('hubo un error con la conexion a la DB');
    console.error(e);
}));


function addMessage(message) {
    const myMessage = new Model(message)
    myMessage.save();
}

async function getMessage() {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    
    add: addMessage,
    list: getMessage

}
