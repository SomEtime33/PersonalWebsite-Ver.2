const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');


dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, (err)=> {
    if (err) throw err;
    else {
        return console.log("mongoose is connected");
    }
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);





app.listen("3000", () => {
    console.log("Backend is running")
})