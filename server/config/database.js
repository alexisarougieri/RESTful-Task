const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const db = 'tasks';

mongoose.connect(`mongodb://localhost:27017/tasks`, {useNewUrlParser: true, useUnifiedTopology: true});

const models_path = path.join(__dirname, './../models')

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0) {
        require(models_path + "/" + file);
    };
})