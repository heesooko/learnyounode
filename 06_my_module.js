function myModule(dirName, fileExt, callback) {

  try {
    var fs = require('fs');

    fs.readdir(dirName, function (err, data) {

      if (err) {
        return callback(err);
      }else {
        var allFiles = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].split(".")[1] === fileExt){
            allFiles.push(data[i]);
          };
        };
        return callback(null, allFiles);
      };
    });
  }

  catch(err) {
    return callback(err);
  };

};

module.exports = myModule;

// Official Solution
// var fs = require('fs')  
//      var path = require('path')  
       
//      module.exports = function (dir, filterStr, callback) {  
       
//        fs.readdir(dir, function (err, list) {  
//          if (err)  
//            return callback(err)  
       
//          list = list.filter(function (file) {  
//            return path.extname(file) === '.' + filterStr  
//          })  
       
//          callback(null, list)  
//        })  
//      }