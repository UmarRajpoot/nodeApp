const express = require("express");

const app = express();

const port = 5000;

app.get('/',(req,res) => {
    // console.log("All Setup");
    res.end("My Node App");
});

app.listen(port,() => {
    console.log("App is Listening on Port");
});
