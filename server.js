var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = Number(process.env.PORT || 4000);

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.listen(port, function(){
    console.log('Listening to port: ' + port);
});
