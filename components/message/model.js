const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'chats'
    },
    user: {
        type: Schema.ObjectId,
        //nombre de la collection
        ref: 'users',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date
});

const model = mongoose.model('messages', mySchema);
module.exports = model;