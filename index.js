const app = require("./app");
const connectDB = require("./config/db");




//database connection
connectDB()

//server
app.listen(5050,()=>{
    console.log("App is running 🔥5050🔥");
})
