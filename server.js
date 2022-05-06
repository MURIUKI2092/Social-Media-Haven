const express = require("express");
const app = express ();
const mongoose = require ("mongoose");
port = 5000;
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json())
// const userRoute = require("./routes/users")
const authRoute = require("./routes/Auth")
mongoose.
connect (process.env.MONGO_URL)
.then(console.log("Db connected Successfully"))
.catch((err)=>{
  console.log(err)
})

app.use("/api/v1/users",authRoute)


app.listen({port},()=>{
  console.log("The server is running")
})