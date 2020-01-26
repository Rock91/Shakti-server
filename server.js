

process.on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
}).on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
});
console.log("Server start ....!",new Date());
/*
    Created by Ashvin on 11/01/20.
*/

//External Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path  = require('path');
const app = express();

//Internal Dependencies **** ronak
Routes = require('./Routes');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static('./views'));
app.set('view engine', 'html');
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
});
/* Using parsing middleware to parse request data */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json())
app.use(Routes);

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log("Server started 3006..........>",new Date())
})