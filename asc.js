const fs=require("fs")
fs.readFile("hello.html",function(err,data){
    if (err){
        console.log("error occured",err)
    }
    else{
        console.log(data.toString())
    }
})

fs.readFile("add class.html",function(err,data){
    if(err){
        console.log("error occured",err)
    }
    else{
        console.log(data.toString())
    }
})

console.log("before readfilesync")
var d1=fs.readFileSync("desc.txt")
console.log(d1.toString())
console.log("after readfilesync")