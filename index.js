const express = require('express');
const app = express();
const router = require('./routers/user-router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/info-student', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use('/info', router);

app.listen(3000, () => {
    console.log(`App listening on port ${3000}`);
});