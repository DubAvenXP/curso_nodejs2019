const Model = require('./model');

function listChats(userId) {
    return new Promise((resolve, reject) => {
        let filter = {};

        if (userId) {
            filter = {
                users: userId
            }
        }

        Model.find(filter)
        .populate('users')
        .exec((err, populated) => {
            if (err) {
                return reject(err);
            }
            resolve(populated);
        });
    }) 
}


function addChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

module.exports = {

    add: addChat,
    list: listChats,

}