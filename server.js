const express = require("express")
const router = require("./routes/todoRoutes")
const app = express()
const dotenv = require("dotenv").config()
const port = process.env.PORT || 3000
app.use(express.json())

app.get("/", (req, res) => res.send("Hello World!"))
app.use("/", router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
