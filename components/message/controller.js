

function addMessage(user, message) {
    // añadir al user a la db

    return new Promise( (resolve, reject) => {

        if (!user || !message) {
            console.error('[messageController] no hay usuario o mensaje');
            return reject('Los datos son incorrectos...');
        } else {
            
            
        }

        const fullMessage = {
                user: user,
                message: message,
                date: new Date(),
            };
            
        console.log(fullMessage);
        
        resolve(fullMessage);
    })

}

module.exports = {
    addMessage,
}
