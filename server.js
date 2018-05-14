const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;

app.listen(port, function () {
	console.log('app is running');
});

app.get('/', function (req, res) {
	fs.readFile(__dirname + '/public/pages/home.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/about', function (req, res) {
	fs.readFile(__dirname + '/public/pages/about.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/team', function (req, res) {
	fs.readFile(__dirname + '/public/pages/team.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/blog', function (req, res) {
	fs.readFile(__dirname + '/public/pages/blog.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/post', function (req, res) {
	fs.readFile(__dirname + '/public/pages/post.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/courses', function (req, res) {
	fs.readFile(__dirname + '/public/pages/courses.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/course', function (req, res) {
	fs.readFile(__dirname + '/public/pages/course.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/register', function (req, res) {
	fs.readFile(__dirname + '/public/pages/register.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.use(express.static(__dirname + '/public'));