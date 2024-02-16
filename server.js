const fs = require ("fs")
const http = require("http")
const port=3000
const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","html")
    fs.readFile("./index.html",(error,data)=>{
     if (error) {
        console.log(error.message)
     }
     else{res.end(data)}
    })
})
   fs.writeFile("welcome.txt","Hello node",(error)=>{
       if (error) {
        res.end(error.message)
     }
       else{console.log("Done!!!!")}
    })

  server.listen(port,()=>{
      console.log("server is ranning")
})