var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended : true }));

consign().include('./app/routes')
         .then('./app/dao').into(app);

module.exports = app;
