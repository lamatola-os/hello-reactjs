var express = require('express');
var app = express();
var path=require('path');
var axios=require('axios');

var port=3000
app.use(express.static(__dirname + '/src/client'))

app.get( '/', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'src/client', 'index.html' ));
  });

app.get( '/chat', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'src/client', 'chat.html' ));
  });

initialise = () => {
    let data = axios.get('http://localhost:8080/chat/init', { headers:
       {
         'x-correlation-id': '12',
         'x-version': '1.0',
         'x-api-key': 'api-secret'
       }
    })
      .then(response => {
        console.log('response1: ' + response.data.message);
        return response.data
      })
      .catch(error => {
        console.log(error);
        return error;
      });

      return data;
};

init = () => {
	return Promise.resolve({correlationId: 1, message: 'welcome'})
}

app.get( '/chat/init', ( req, res ) => {
    init().then(json => {
      console.log('response2: ' + json.message);
      res.send({'correlationId': json.correlationId, 'message': json.message});
    });
});

app.listen(port, () => console.log('listening on localhost:' + port))
