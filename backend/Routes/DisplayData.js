const express = require("express");
const router = express.Router();




router.post("/foodData", (req, res) => {
    try {
        console.log(global.foodItem);
        res.send([global.foodItem ]);
    } catch (error) {
        console.error(error.message);
        res.send("Server error");
    }
})



module.exports = router;