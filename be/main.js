var express = require('express')
var app = express();
var router = express.Router();
var fs = require('fs');

app.set('views', './');
app.use(express.static(__dirname + '../fe' +'/public'));

app.listen(3303, function() {
    console.log('Server start');
});

app.get('/',function (req, res) {
    fs.readFile('../fe/test.html',function(error,data) {
        if(error) {
            console.log(error);
        }else {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        }
    });
});