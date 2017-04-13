var express = require('express');
var app = express();
var path = require('path');
var sass = require('node-sass');
/*
sass.render({
   file: 'stuff/style.css',
}, function (error, result) {
   
}); */

app.use(express.static(path.join(__dirname,'')));

app.get('/', function(request, response) {
   response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(process.env.port || 3000, function() {
   if (process.env.port) {
      console.log("App running on port " + process.env.port);
   } else {
      console.log("App running on port 3000.");
   }
} )