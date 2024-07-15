const express = require("express");
const app = express();
const port = 3000;
const mongoDB = require("./db");
mongoDB();


app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
});   