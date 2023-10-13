const http = require ("http")


http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain"});

if(req.url=="/"){
    res.end ("Este es el home")
}
else if (req.url=="/conocenos"){
    res.end("Aca va a ir la vista de conocenos")
}else {
    res.writeHead(404,{"content-Type":"text/plain"});
    res.end("error 404")
}


}).listen (3030,"localhost")

