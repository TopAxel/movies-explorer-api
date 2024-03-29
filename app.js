require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { cors } = require('./middlewares/cors');
const limiter = require('./middlewares/limiter');
const handleErrors = require('./middlewares/handleErrors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

app.use(cors);
app.use(limiter);
app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(handleErrors);

mongoose.connect('mongodb://127.0.0.1:27017/filmsdb');

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
