const db = require('mongoose');


//connection
db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('[db] conectada con exito');
        })
        .catch((e) => {
            console.error('hubo un error con la conexion a la DB');
            console.error(e);
        });
}

module.exports = connect;

