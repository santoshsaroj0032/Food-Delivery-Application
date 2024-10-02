 const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

<<<<<<< HEAD
const jwtSecret= "@MyNameisSantoshSarojAkgecWithCse@";
=======
const jwtSecret= "@MyNameisSantoshSaroj@"; 
>>>>>>> 13454cdc8b2b11a6065057e05c1ea905aaa172fd
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcryptjs");





router.post("/create-user",
    [
        body("email").isEmail(),
        body("name").isLength({ min: 5 }),
        // .withMessage("Name must be at least 5 characters long"),

        body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")

    ]
    , async (req, res) => {



        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }






        const salt=await bcrypt.genSalt(10);

        const secPassword = await bcrypt.hash(req.body.password , salt);




        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
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






router.post("/login-user",


    [
        body("email").isEmail(),

        body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")

    ]



    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }



        let email = req.body.email;


        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Incorrect Email or Password" });
            }

   

           const pwdComapre= await bcrypt.compare(req.body.password , userData.password);

            if (!pwdComapre) {
                return res.status(400).json({ errors: "Incorrect Email or Password" });

            }


            const data={
                user:{
                    id:userData.id
                }
            }

             const authToken= jwt.sign(data,jwtSecret);


            return res.json({ success: true ,authToken:authToken });


        }
        catch (error) {
            console.log(error);
            res.json({ success: false });

        }
    });

module.exports = router;


