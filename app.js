const express = require("express");
const app = express();
const fileUpload = require('express-fileupload')
const connectDb = require('./db/connectDb')
const dotenv = require('dotenv')
const api = require("./routes/api");
const cookieParser = require("cookie-parser");


// token get
app.use(cookieParser());

// tempfiles Uploaderz
app.use(fileUpload({useTempFiles:true}))
// data get
app.use(express.json())

dotenv.config({
    path: '.env'
})


connectDb();

// route.load
app.use("/api", api);





app.listen(process.env.PORT, () =>{console.log(`Localhost:${process.env.PORT}`)
})
