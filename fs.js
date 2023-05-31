const fs=require("fs")
fs.exists("hello.html",function(flag){
    if(flag){
        console.log("exists")
        fs.stat("hello.html",function(err,status){
            if(err){
                console.log("error occured")
            }
            console.log(status)
        })
    }
    else{
        console.log("not exixts")
    }
})