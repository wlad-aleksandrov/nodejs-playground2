var request = require("request");
var fs = require("fs");
var zlib = require("zlib");

//request("http://www.google.com/").pipe(fs.createWriteStream("google.html"));
request("http://www.google.com/").pipe(zlib.createGzip()).pipe(fs.createWriteStream("google.gzip"));

console.log(process.title);