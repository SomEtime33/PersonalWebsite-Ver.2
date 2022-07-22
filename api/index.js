const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require("multer");


dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, (err)=> {
    if (err) throw err;
    else {
        return console.log("mongoose is connected");
    }
});

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images");
    }, 
    filename:(req, file, cb) => {
        cb(null, "hello.jpeg");
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file has been uploaded");
})


app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);






app.listen("3000", () => {
    console.log("Backend is running")
});