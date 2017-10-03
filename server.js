var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var ROOT = __dirname + "/public";


http.createServer(function(req,res){

    if(!checkAccess(req)){
        res.status = 403;
        res.end("No path!");
        return;
    }

    sendFileSafe(url.parse(req.url).pathname, res);
}).listen(3000);

function  checkAccess (req) {
    return url.parse(req.url, true).query.secret == "o_O";
}

function sendFileSafe(filePath,res){
    try{
        filePath = decodeURIComponent(filePath);
    }catch (e) {
        res.statusCode = 400;
        res.end("Bad Request");
        return;
    }
}