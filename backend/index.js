const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const path = require('path')

// parse application/x-www-form-encoded and application/json
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

//allow cors
var cors = require('cors')
app.use(cors())

//routes
const users = require('./routes/users')
const vaccineSites = require('./routes/vaccineSites')

//connect to mongoose
const mongoose = require("mongoose")
mongoose.connect(
    "mongodb+srv://testuser:test123@cluster0.mbd3f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
)

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("connected to db")
})

app.get("/", (req, res) => {
    res.send("hello")
})

app.use('/users', users)

app.use('/vaccineSites', vaccineSites)

const webScrapeVaccineSitesForZip = require('./utilities/webscrape')
webScrapeVaccineSitesForZip("10002")

app.listen(port, () => console.log("listening at port", port))
