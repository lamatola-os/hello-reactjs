var express = require('express');
var app = express();
var path=require('path');

app.use(express.static(__dirname + '/src/client'))

app.get( '/', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'src/client', 'index.html' ));
  });

app.listen(8080, () => console.log('listening...'))
