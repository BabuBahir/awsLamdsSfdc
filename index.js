var bodyParser = require('body-parser');
var express = require('express'),
app     = express(),
port    = process.env.PORT || 8080;

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/someRoute", function(req, res) {
    console.log(req.body);
    res.send({ status: 'SUCCESS' });
});

  
app.listen(port);


console.log("running on "+ port);