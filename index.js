const http = require('http');
const url = require('url');
const fs = require('fs');
const Port = 8080;

http.createServer(function (req, res) {

try{
let path = url.parse(req.url, true);

console.log(path.pathname);
if(path.pathname == "/images"){
fs.readdir("./images", function(err, data){
if(err){
console.log(err);
}else{
res.writeHead(res.statusCode.toString(), {"Content-Type":"text/javascript"});
res.write(`["${data.join(`","`)}"]`);
return res.end();
}

});
}else{
fs.readFile(`./${path.pathname}`, function(err, data){

if(err){
console.log(err);
res.writeHead(res.statusCode.toString(), {"Content-Type":"text/html"});
res.write("<h1>Error: File not found</h1>");
return res.end();
}else{
if(path.pathname.includes("html")){
var type = "text/html";
}else if(path.pathname.includes("css")){
var type = "text/css";
}else if(path.pathname.includes(".js")){
var type = "text/javascript";
}else if(path.pathname.includes(".ico")){

var type = "image/svg"

}else{
var type = "image/jpeg"
}
res.writeHead(res.statusCode.toString(), {"Content-Type":`${type}`});
res.write(data);
return res.end();
}

});

}

}catch(err){

console.log(err);

}

}).listen(Port, () => console.log(`Listening on port ${Port}...`));
