const express = require("express");
const app = express();
const port = 3000;
const mongoDB = require("./db");
// const CreateUser=require("../backend/Routes/CreateUser");
mongoDB();

 
app.get("/", (req, res) => {
    res.send("Hello");
});
app.use(express.json())
app.use("/api",require("./Routes/CreateUser"));


app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
});   