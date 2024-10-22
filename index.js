const express= require("express");

let app=express();

app.get("/", (req, res)=> {
    res.send("hello world")
})

const port=3001;
app.listen(port, (error) => {
    if (error){
        console.error ("greska");

    } else{
        console.log(`slusam na portu ${port}`);
    }
})

