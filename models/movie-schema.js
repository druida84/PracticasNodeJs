"use strict";

var mongoose = require("mongoose"),
	conf = require("./db-conf"),
	Schema = mongoose.Schema,
	movieSchema = new Schema({
		movie_id:"string",
		title:"string",
		release_year:"string",
		rating:"string",
		image:"string"
	}),
	Movie = mongoose.model("Movie",movieSchema);

mongoose.connect("mongodb://"+conf.mongoDB.host+"/"+conf.mongoDB.database);

module.exports = Movie;