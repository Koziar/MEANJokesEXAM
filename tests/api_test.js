var request = require("request");

var testOfPost = {
    url: "http://localhost:3000/api/joke",
    method: "POST",
    json: true,
    body: {joke: "This is a test joke. HaHaHaHaHa!!!"}
};

// POST test joke from above ^
request(testOfPost, function (error, res, body) { // Here I test the post method.
    console.log("Test af post: " + body.joke); //Assume the service returns the new Joke
});

// GET random
request("http://localhost:3000/api/joke/random", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var randomJoke = JSON.parse(body);
        console.log("Test of getting a random joke: " + randomJoke.joke); // Show the HTML for the random joke homepage.
    }
});

// GET all
request("http://localhost:3000/api/jokes", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var allJokes = JSON.parse(body);               // we have to define that it is json format in order to use the body, and thereby remove the {}
        console.log("Test of getting all jokes: " + allJokes.joke); // Show the HTML for all the joke homepage.
    }
});
