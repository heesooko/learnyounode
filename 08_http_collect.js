var bl = require('bl')
var http = require('http')

// http.get(process.argv[2], function(response){
//   console.log(response.setEncoding('utf8'));
//   response.on('data', function(data){
//     console.log(data.length);
//     console.log(data);
//     }
//   })
// })

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))  
})

