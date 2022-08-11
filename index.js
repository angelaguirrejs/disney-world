const express = require('express');
const passport = require('passport');
const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.hanlder');

const app = express();

const port = 3000;

// Middlewares

app.use(express.json());
app.use(cors());
require('./utils/auth');

//Routes

routerApi(app);

app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
