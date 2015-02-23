var express = require("express");
var bodyParser = require("body-parser");
var controls = require("./lib/controls/mainController.js");
var _ = require("underscore");

var server = express();

server.set("view engine", "jade");
server.set("port", process.env.PORT || 3000);
server.set("view cache", true);

//Middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(__dirname + "/public"));

//Calling the routes through MVC pattern
if( !_.isUndefined(controls.registerRoutes))
{
  controls.registerRoutes(server);
}else
{
  console.log('main control is undefined');
}

//Starting the server
server.listen(server.get("port"), function() {
  console.log('Express started on http:localhost:' + server.get('port') +
             "; press Cotrl-C to terminate");
});
