var http = require('http');

/* require url module */
//var url = require('url');


/* import module */
// var dt   = require('./myfirstmodule'); 

http.createServer(function(req, res){
    res.writeHead('200',{'Content-Type':'text/html'});

    /* call imported module function */
    //res.write("This is my first module => "+ dt.myDateTime());

    /* Print something */
    // res.write('Hello world');

    /* for getting url */
    //res.write(req.url);
    
    /* for getting url query parameters */
    //var q = url.parse(req.url, true).query;
    // var txt = ((q.year) ?? 'year param not available') + " " + ((q.month) ?? 'month param not available');


    res.end();
}).listen(8080);