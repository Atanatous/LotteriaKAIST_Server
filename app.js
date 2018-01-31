// app.js

// load packages
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

// configure mongoose
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
        console.log("Connected to mongod server");
})
mongoose.connect('mongodb://localhost/database');

// configure app to use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure server port
const port = process.env.PORT || 3000;

// configure router
app.use('/api', require('./routes'));
app.use(express.static(__dirname + '/public'));

// run server
const server = app.listen(port, function() {
        console.log("Express server has started on 'ip 143.248.53.149 / port " + port + "'");
});

