var express = require('express'); //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality

app.use(express.static(__dirname + '/www'));

var users = [
    { "email": "dummyaccount@gmail.com", "password": "123" },
    { "email": "email1@gmail.com", "password": "456" },
    { "email": "email2@gmail.com", "password": "789" }
]

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);
});

app.post('/login', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    var user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ "valid": true });
    } else {
        res.json({ "valid": false });
    }
})

app.get('/homepage', function (req, res) {
    res.sendFile(__dirname + '/www/homepage.html');
});

app.get('/account', function (req, res) {
    res.sendFile(__dirname + '/www/account.html');
});