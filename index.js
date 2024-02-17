const express = require("express");
 require('dotenv').config()
const app = express();
const port = process.env.PORT || 4000;


app.get("/" , (req, res) => {
    res.send(process.env.MYNAME)
});

app.get("/about" , (req, res) => {
    res.send("about")
});

app.listen(port , () => {
    console.log(port)
})