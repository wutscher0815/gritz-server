var express =require('express');
var request = require('request');                                                                                                                    
var cors = require('cors')
var app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true })) // for parsing                                                                                       
app.use(express.json()) // for parsing application/json                                                                                                
  var logged=false
app.post('/set_dmx',function(req,res){
  if(!logged){
    console.log(req.body)
    logged=true
  }


    var dataString = 'u=1&d='+req.body.d;

      var options = {
                url: 'http://localhost:9090/set_dmx',
          "headers":{
                      "content-type":"application/x-www-form-urlencoded"
     },
     method: 'POST',
     body: dataString
    };

        function callback(error, response, body) {
                  if (!error && response.statusCode == 200) {
                                      console.log(body);
                                                            }else{
                                                                                console.log(error)
                                                                                                  }
                    }
          request(options, callback);

  res.send('ok');
})
app.use(express.static('gritz-built'))

app.listen(80, () => console.log('App running on port 80'));
