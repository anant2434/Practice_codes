const http=require("http")
var server=http.createServer(function(req,resp){
    console.log("method:",req.method,"url: ",req.url)
    resp.writeHeader(200,{"content-type":"text/html"})
    resp.write("<h1>HEllo world!!</h1>")
    resp.end("<h3>Welcome to nodejs programming</h3>")
})
server.listen(3003,console.log("server started running on port 3003"))