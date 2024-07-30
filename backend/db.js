// const mongoose = require("mongoose");

// const mongoURI = 'mongodb+srv://santoshsaroj0032:dTlE2ZNxnWhQPALr@cluster0.mkmko1i.mongodb.net/foodie';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI);
//         console.log("Database Connected");

               
//         const fetched_data = await mongoose.connection.db.collection("foodItem");
//         fetched_data.find({}).toArray(function (err,data) {

//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 global.foodItem=data;
//                 // console.log(global.foodItem);
//             }


//         });




//     } catch (error) {
//         console.error("Database connection error:", error);
//     }
// };

// module.exports = mongoDB;


const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://santoshsaroj0032:dTlE2ZNxnWhQPALr@cluster0.mkmko1i.mongodb.net/foodie';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Database Connected");

        const foodItemCollection = mongoose.connection.db.collection("foodItem");
        const foodItems = await foodItemCollection.find({}).toArray();

        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
        const foodCategories = await foodCategoryCollection.find({}).toArray();

        global.foodItems = foodItems;
        global.foodCategories = foodCategories;

        console.log("Food Items:", global.foodItems);
        console.log("Food Categories:", global.foodCategories);

    } catch (error) {
        console.error("Database connection error:", error);
    }
};

module.exports = mongoDB;
