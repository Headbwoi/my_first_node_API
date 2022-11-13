const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/todoRoutes")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 3000

mongoose.connect("mongodb://localhost:27017/todo-database")

const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("connected successfully "))

app.use(express.json())

app.get("/", (req, res) => res.send("Hello World!"))
app.use("/", router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
