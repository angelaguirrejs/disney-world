const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads',);
    },
    filename: (req, file, cb) => {

        const newName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = file.originalname.split('.').slice(-1);
        cb(null, newName + '.' + ext);
    }
})

const upload = multer({storage});

module.exports = upload;
