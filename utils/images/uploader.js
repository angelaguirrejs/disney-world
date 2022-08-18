const path = require('path');
const boom = require('@hapi/boom');
const { v4: uuidv4 } = require('uuid');

const allowedExt = [
    'jpg',
    'jpeg',
    'png'
];

function imageUploader({ image }, folder = '') {

    return new Promise((resolve, reject) => {

        const splitedName = image.name.split('.');
        const extensionFile = splitedName[splitedName.length - 1];

        if(!allowedExt.includes(extensionFile)) {
            reject(boom.badData(`Type of file not allowed. Try sending: ${allowedExt}`));
        }

        const finalName = uuidv4() + '.' + extensionFile;

        uploadPath = path.join(__dirname, `../../uploads/${folder}/${finalName}`);


        image.mv(uploadPath, error => {
            if (error) {
                reject(boom.badImplementation('It was an error, try again later'));
            }
        });

        resolve(finalName);
    });
}

module.exports = {
    imageUploader
};


