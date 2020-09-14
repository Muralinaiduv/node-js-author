var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const morgan = require('morgan')
var port = process.env.PORT || 4000
var app = express()

require('dotenv').config()
require('./dbconnect/connect')

app.use(morgan('dev'));


app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))


var router = require('./routes/Author')

app.get('/', (req, res) => {
    res.send("murali")
})

app.use('/author', router)

app.listen(port, function() {
    console.log("server is running on port:" + port)
})