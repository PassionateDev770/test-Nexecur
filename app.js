const request = require("request");
const http = require("http");
const host = 'localhost';
const port = 8000;

request({
    url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=1ae05bf455889732d22a514be882b6db",
    json : true
}, (err, response, body) => {
    console.log(JSON.stringify(body));
    console.log(JSON.stringify(body.weather));
    
});

//server
const fs = require('fs').promises;
const requestListener = function (req, res) {
    fs.readFile(__dirname + "/weather.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};