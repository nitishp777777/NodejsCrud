const mongoose = require('mongoose');
const asyncHandler = require("./middleware/asynchandler");

module.exports =  asyncHandler(async() => {
    const connectionParams = {
        useNewUrlParser:true,
        //useCreateIndex:true,
        useUnifiedTopology:true,
        //useFindAndModify:false
    };

    const connection = await mongoose.connect(process.env.DB,connectionParams);
    connection
        ? console.log("Connected to database"):
        console.log("Could Not Connect to Database");
})