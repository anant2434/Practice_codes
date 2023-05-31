var buf1=Buffer.alloc(400)
var l=buf1.write("Hello world!!!!")
console.log("length:",l)
console.log(l.toString())

buf2=new Buffer("testing")
console.log(buf2.toString())

target=Buffer.alloc(buf2.length)

buf2.copy(target)
console.log(target.toString())