const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());

server.use(cors());

server.use("/",(req,res)=>{
    res.send("working")
})

const PORT = process.argv[2] || 3004;

server.listen(PORT,async ()=>{
    try{
        console.log(`server listening on port ${PORT}`)
    }
    catch(err){
        console.log(err.message);
    }
})
