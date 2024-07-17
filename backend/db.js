const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://santoshsaroj0032:dTlE2ZNxnWhQPALr@cluster0.mkmko1i.mongodb.net/foodie';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Database Connected");

               
        const fetched_data = await mongoose.connection.db.collection("foodItem");
        fetched_data.find({}).toArray(function (err,data) {

            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
            }


        });




    } catch (error) {
        console.error("Database connection error:", error);
    }
};

module.exports = mongoDB;
