var express = require('express');

var app = express();
var port = 4000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('Hello');
});

app.listen(port, function(){
    console.log('Listening to port: ' + port);
});
