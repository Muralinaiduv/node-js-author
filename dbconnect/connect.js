const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {dbName: process.env.DB_NAME, useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {
    console.log("mongodb connected")
})

mongoose.connection.on('connected', () => {
    console.log('mongoose connected to db')
})

mongoose.connection.on('error', (err) => {
console.log(err.message);
})

mongoose.connection.on('disconnected', () => {
      console.log("mongoose got disconnected")
})