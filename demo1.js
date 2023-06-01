const http=require("http")
const url=require("url")
const fs=require("fs")
const  m1=require("./add_node.js")

const server=http.createServer(function(req,resp){
    var q=url.parse(req.url,true)
    resp.writeHeader(200,{"content-type":"text/html"})
    switch(q.pathname){
        case "/form":
            var rs=fs.createReadStream("./public/form.html")
            rs.pipe(resp)
            break;
        
        case "/submit-data":
            console.log(q)
            if(q.query.btn==="add"){
                var num1=parseInt(q.query.num1)
                var num2=parseInt(q.query.num2)
                var ans=m1.addition(num1,num2)
                resp.write("<h3>Addition : "+ans+"</h3>")
            } 
             else
             {
                var num1=parseInt(q.query.num1)
                var ans=m1.factorial(num1)
                resp.write("<h3>Factorial:"+ans+"</h3>")
             }
            resp.end()
            break;
            
            
        default:
            resp.write("some other page")
            resp.end("use/form url")
    }
    
})


server.listen(3002,function(){
    console.log("server is running at port 3002")
})


