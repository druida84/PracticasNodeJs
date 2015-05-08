"use strict";

var app = require("./app");

var server = app.listen(app.get("port"),function (){
	console.log("Iniciando Express en el puerto 3000");
});