var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = 3004;
app.listen(port, function(){
  console.log('server on port : '+port);
});
