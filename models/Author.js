const mongoose = require("mongoose")

let Schema = mongoose.Schema

let AuthorSchema = new Schema({
    id: {
        type: Number
    },
    author: {
        type: String
    },
    gender: {
        type: String
    },
    description: {
        type: String
    },
})

module.exports = Author = mongoose.model('authors', AuthorSchema)