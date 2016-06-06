var fs = require ('fs')

fs.readdir(process.argv[2], function(err,contents){
  for (var i = 0; i < contents.length; i++){
    if (contents[i].split(".")[1] === process.argv[3]){
    console.log(contents[i])};
  };
});

