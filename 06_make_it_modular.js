var module = require('./06_my_module.js');

module(process.argv[2], process.argv[3], function(err, data){
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  };
}); 

// Official Solution
// var filterFn = require('./06_my_module.js')  
//      var dir = process.argv[2]  
//      var filterStr = process.argv[3]  
       
//      filterFn(dir, filterStr, function (err, list) {  
//        if (err)  
//          return console.error('There was an error:', err)  
       
//        list.forEach(function (file) {  
//          console.log(file)  
//        })  
//      })