const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = 9001;

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/database');
require('./server/config/routes')(app);


app.listen(PORT, function(){
    console.log(`Full MEAN on port ${PORT}`);
})