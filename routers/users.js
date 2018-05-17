var express = require('express');

var users = express.Router();

users.get('/users', function(req, res) {
    res.send('users');
});

users.get('/users/test', function(req, res) {
    res.send('test');
});

module.exports = users;