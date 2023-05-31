const fs=require("fs")
data=fs.readFileSync("desc.txt")
console.log(data.toString())