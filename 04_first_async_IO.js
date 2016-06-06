var fs = require ('fs')

fs.readFile( process.argv[2], function(err, contents){
  	var newLines = contents.toString().split('\n').length -1
 	  console.log(newLines);
});
