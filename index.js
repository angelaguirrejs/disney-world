const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.hanlder');
const fileUpload = require('express-fileupload');

const app = express();

const port = 3000;

// Middlewares

app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads/temp/',
    createParentPath: true
}))
require('./utils/auth');

//Routes

routerApi(app);

// Middlewares

app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
