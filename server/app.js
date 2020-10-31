const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3001;
const TronWeb = require('tronweb');
const mongoose  = require('mongoose');
const path          = require('path');
const config    = require('./config/config');

app.use(bodyParser.json({limit: '100mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

var uploadsDir = './public/';
app.use(express.static(path.join(__dirname, "public")));
app.use("public",express.static(path.join(__dirname, "public")));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(
        config.dbUrl,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.log(err);
    });

const cors = require('cors');
app.options('*', cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const routes    = require('./routes/routes');
app.use('/', routes);

server.listen(port, function () {
  console.log('Server listening on : %d', port);
})





