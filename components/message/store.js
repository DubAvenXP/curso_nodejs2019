const Model = require('./model');

// Esta seria como la capa DAO
function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
    
        if (filterUser !== null) {
            filter = { user: filterUser };
        }
    
        Model.find(filter)
        .populate('user')
        .exec((err, populated) => {
            if (err) {
                return reject(err);
            }
            resolve(populated);
        });

    })
    //validar si viene algun filtro
}

async function updateText(id, message) {
    //buscar el mensaje
    // const foundMessage = await Model.findOne({
    //     _id: id
    // });
    //actualizarlo y volverlo a guardar
    // foundMessage.message = message;
    // const newMessage = await foundMessage.save();
    // return newMessage;

    const updatedMessage = await Model.findByIdAndUpdate({ _id: id }, { message }, { new: true });

    return updatedMessage;
}

async function removeMessage(id) {
    return Model.deleteOne({
        _id: id,
    });
}

async function existsMessage(id) {
    const exist = await Model.exists({
        _id: id,
    });
    return exist;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage,
    exists: existsMessage,
};
