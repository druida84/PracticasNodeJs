"use strict";

var movieModel = require("../models/movie-model"),
        ControllerMovie = function () {
        };

ControllerMovie.error404 = function (req, res, next)
{
    var error = new Error();
    error.status = 404;

    var locals = {
        title: "ERROR 404",
        description: "RECURSO NO ENCONTRADO",
        error: error
    }

    res.render("error", locals);
}

ControllerMovie.getAll = function (req, res, next)
{
    movieModel.getAll(function (docs) {
        var locals = {
            title: "Lista de Películas",
            data: docs
        };

        res.render("index", locals);
    });
}

ControllerMovie.add = function (req, res, next)
{
    res.render("add-form", {title: "Agregar Película"});
}

ControllerMovie.save = function (req, res, next)
{
    var movie = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        release_year: req.body.release_year,
        rating: req.body.rating,
        image: req.body.image
    };

    console.log(movie);

    movieModel.save(movie, function () {
        res.redirect("/");
    });
}

ControllerMovie.get = function (req, res, next)
{
    var movie_id = req.params.movie_id;
    console.log(movie_id);

    movieModel.get(movie_id, function (doc) {
        var locals = {
            title: "Editar Película",
            data: doc
        };

        res.render("edit-form", locals);
    });
}

ControllerMovie.update = function (req, res, next)
{
    var movie = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        release_year: req.body.release_year,
        rating: req.body.rating,
        image: req.body.image
    };

    console.log(movie);

    movieModel.update(movie, function () {
        res.redirect("/");
    });
}

ControllerMovie.delete = function (req, res, next)
{
    var movie_id = req.params.movie_id;
    console.log(movie_id);

    movieModel.delete(movie_id, function (err) {
            res.redirect("/");
    });
}


module.exports = ControllerMovie;