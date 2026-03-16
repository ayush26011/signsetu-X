const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();
const app = express()

app.use(cors())
app.use(express.json())

const authRoutes = require("./routes/authRoutes")

app.use("/api/auth",authRoutes)

app.get("/", (req,res)=>{
    res.send("SignSetu API Running")
})

app.listen(3001, () => {
  console.log("Server running on port 3001")
})

