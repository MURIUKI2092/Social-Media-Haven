const express = require("express");
const app = express ();
const mongoose = require ("mongoose");
port = 5000;
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json())
// const userRoute = require("./routes/users")
const authRoute = require("./routes/Auth")
const userRoute = require("./routes/users")
const profileRoute = require("./routes/profile")
const followRoute =require("./routes/follow");
const articleRoute = require("./routes/articles")
mongoose.
connect (process.env.MONGO_URL)
.then(console.log("Db connected Successfully"))
.catch((err)=>{
  console.log(err)
})

app.use("/api/v1/users",authRoute);
app.use("/api/v1/users",userRoute);
app.use("/api/v1/profiles",profileRoute);
app.use("/api/v1/profiles/:username/follow",followRoute);
app.use("/api/v1/articles",articleRoute)


app.listen({port},()=>{
  console.log("The server is running")
})