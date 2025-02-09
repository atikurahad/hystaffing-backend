const express = require('express')
const app = express()

//importing security middlewares
const dotenv = require('dotenv')
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const { rateLimit } = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const router = require('./src/routes/api');

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 1000,
    standardHeaders: "draft-7",
    legacyHeaders: false,

});


app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(limiter);
app.use(cors())
app.use(express.json({extended:"100Mb"}));
app.use(express.urlencoded({extended:"100Mb"}));
app.use(cookieParser())


//implementation of routes
app.use("/api/v1", router);

//env file

dotenv.config()

//implementation if undefined route
app.use("*", (req, res) => {
    res.status(404).json({
        status:"404 Not Found" ,
         message:"No Url Available"
        });
});


module.exports = app;