var http = require('http');
var url = process.argv[2];

// performs HTTP GET request to a URL (first command-line argument)
// write the string contents of each'data' event from the response to anew line on the console

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  // call with utf8 to emit strings rather than the standard node buffer objects that uyou have to convert explicitly to strings
  response.on('error', function (err) {
    console.error(err);
  });
  response.on('data', function (data) {
    console.log(data);
  });
});

// ** Official Solution **
// var http = require('http')  
       
//      http.get(process.argv[2], function (response) {  
//        response.setEncoding('utf8')  
//        response.on('data', console.log)  
//        response.on('error', console.error)  
//      }).on('error', console.error)