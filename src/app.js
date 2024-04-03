const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middlewares
// app.use(morgan('dev'))
// app.use(morgan('combined'))
// app.use(morgan('common'))
// app.use(morgan('short'))
app.use(morgan('tiny'));
app.use(helmet());
app.use(compression()); 

// init db

// init router

const strCompress = 'Random String';
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "First response.",
        metadata: strCompress.repeat(10000)
    })
})
// handling error



module.exports = app;