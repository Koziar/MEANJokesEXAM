var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/joke/random', function (req, res, next) {
    res.send({joke: jokes.getRandomJoke()});
});

router.get('/jokes', function (req, res, next) {
    res.send({joke: jokes.allJokes});
});

router.post('/joke', function (req, res, next) {
    var newJoke = req.body.joke;
    jokes.addJoke(newJoke);
    res.send({joke: newJoke});
});

module.exports = router;
