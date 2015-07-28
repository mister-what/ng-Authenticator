var express = require('express');
var cfenv = require('cfenv');
var app = express();
app.use('/', express.static(__dirname + '/public'));
var appEnv = cfenv.getAppEnv();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var urlEncParser = bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Accept, Content-Type");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
  next();
});

app.get('*', function(request, response, next) {
  response.sendFile(__dirname + '/public/index.html');
});

//console.log(JSON.stringify(process.env.VCAP_APP_PORT));

var host = process.env.VCAP_APP_HOST || '0.0.0.0';
var port = process.env.VCAP_APP_PORT || 3000;

app.listen(port, host, function () {
  // print a message when the server starts listening
  console.log("server starting on " + host + ":" + port);
});