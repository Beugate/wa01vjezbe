const express= require("express");

let app=express();

app.get("/", (req, res)=> {
    res.sendFile(__dirname + '/public/express.html');})


    app.get("/about", (req, res)=> {
        res.sendFile(__dirname + '/public/express2.html');})


        app.get("/users", (req, res)=> {
            res.json(__dirname + '/public/users.json');})






const port=3001;
app.listen(port, (error) => {
    if (error){
        console.error ("greska");

    } else{
        console.log(`slusam na portu ${port}`);
    }
})

