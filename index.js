const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.hanlder');

const app = express();

const port = 3000;

app.use(express.json());

routerApi(app);

app.use(cors());
app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
