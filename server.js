var express = require('express');
var app = express();
var path=require('path');

var port=8080
app.use(express.static(__dirname + '/src/client'))

app.get( '/', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'src/client', 'index.html' ));
  });

app.get( '/chat', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'src/client', 'chat.html' ));
  });

app.listen(port, () => console.log('listening on localhost:' + port))
