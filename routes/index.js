var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {userName: req.session.userName});
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/joke', function (req, res, next) {
    if (req.session.jokeCount) { // count visits of this page
        req.session.jokeCount++;
    }
    else {
        req.session.jokeCount = 1;
    }
    res.render('randomJoke', {randomJ: jokes.getRandomJoke()});
});

router.get('/jokes', function (req, res, next) {
    if (req.session.jokeCount) {
        req.session.jokeCount++;
    }
    else {
        req.session.jokeCount = 1;
    }
    res.render('allJokes', {allJ: jokes.allJokes});
});

router.get('/addJoke', function (req, res, next) {
    if (req.session.jokeCount) {
        req.session.jokeCount++;
    }
    else {
        req.session.jokeCount = 1;
    }
    res.render('addJoke');
});

router.post('/storeJoke', function (req, res, next) {
    var newJoke = req.body.writejoke;
    jokes.addJoke(newJoke);
    res.redirect('/addJoke')
});

module.exports = router;
