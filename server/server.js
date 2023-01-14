const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');
const keys = require('./configs/keys');
require('dotenv').config();

// parse application/json
app.use(bodyParser.json())

//mongo atlas config
let uri = keys.staging.MONGODB_URI;
if (process.env.NODE_ENV === 'production') {
    uri = process.env.MONGODB_URI_PROD;
}
//mongo atlas config
mongoose.connect(encodeURI(uri), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//add application router
app.use(router);

//static routing config
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on ${port}!`);
});