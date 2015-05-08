"use strict";

var movieModel = require("./movie-schema"),
        Movie = function () {
        };

Movie.getAll = function (cb)
{
    movieModel
            .find({})
            .exec(function (err, docs) {
                if (err)
                    throw err;
                cb(docs);
            });
}

Movie.save = function (docs, cb)
{
    movieModel
            .create(docs, function (err) {
                if (err)
                    throw err;
                cb();
            });
}

Movie.get = function (doc,cb)
{
    movieModel
            .find({movie_id:doc})
            .exec(function (err, doc) {
                if (err)
                    throw err;
                cb(doc);
            });
}

Movie.update = function (docs, cb)
{
    movieModel
            .update(docs, function (err) {
                if (err)
                    throw err;
                cb();
            });
}

Movie.delete = function (docs, cb)
{
    
    movieModel
            .find({ movie_id: docs })
            .remove(function (err) {
                if (err)
                    throw err;
                cb();
            });
}


module.exports = Movie;