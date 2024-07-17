const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");



router.post("/create-user",
    [
        body("email").isEmail(),
        body("name").isLength({ min: 5 }).withMessage("Name must be at least 5 characters long"),

        body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")

    ]
    , async (req, res) => {


        // const errors = validatorResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    

        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location
            });


            res.json({ success: true });


        }
        catch (error) {
            console.log(error);
            res.json({ success: false });

        }
    });


module.exports = router;


 