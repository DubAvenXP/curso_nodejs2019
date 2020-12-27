const e = require('express');
const store = require('./store');

function addMessage(chat, user, message) {
    // añadir al user a la db

    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] no hay usuario o mensaje');
            return reject('Los datos son incorrectos...');
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
        };

        store.add(fullMessage);
        resolve(fullMessage);
    });
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

function updateMassage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            return reject('Invalid data');
        }
        const result = await store.updateText(id, message);
        resolve(result);
    });
}

function deleteMessage(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            return reject('Parametros o id invalidos');
        }

        if (await store.exists(id)) {
            try {
                const result = await store.remove(id);
                resolve(result);
            } catch (error) {
                reject(e);
            }
        } else {
            resolve(null);
        }
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMassage,
    deleteMessage,
};
