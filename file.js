var http = require('http');

/* Import File Module */
var fs = require('fs');
const { log } = require('console');

/* 
    #Read files
    #Create files
    #Update files
    #Delete files
    #Rename files
*/


/* http.createServer(function(req,res){
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead('200',{'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080); */

// Append some content in file and if file is not exsits then it will create!!
/* fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
}); */


fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log(file);
    console.log('Saved!');
});
