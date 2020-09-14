const express = require('express')
const authors = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Author = require("../models/Author")
const { Router } = require('express')
authors.use(cors())

process.env.SECRET_KEY = 'secret'


// books.post('/register', (req, res) => {
//     const bookData = {
//         id: req.body.id,
//         title: req.body.title,
//         author: req.body.author,
//         price: req.body.price,
//         description: req.body.description,
//         release: req.body.release,
//         rating: req.body.rating,
//         tags: req.body.tags
//     }
// })


authors.get('/', async (req,res) => {
    try {
        const authors = await Author.find()
        res.json(authors);
    } catch(err) {
        res.json({message: err})
    }
})

authors.post('/register', async (req,res) => {
        const author = new Author({
            id: req.body.id,
            author: req.body.author,
            gender: req.body.gender,
            description: req.body.description,
        })
        try {
            const savedAuthor = await author.save()
            res.json(savedAuthor)
        }
        catch(error) {
            res.json({message: error})
        }
})

authors.get('/:id', async (req,res) => {
    try{
        const authorById= await Author.find({id: req.params.id})
        console.log(req.params.id)
        res.json(authorById)
    }catch(error) {
        res.json({message: error})
    }

})

authors.delete('/:id', async (req,res) => {
   try {
       const removeBook = await Author.remove({id: req.params.id})
       res.json(removeBook)
   }catch(error) {
       res.json({message: error})
   }
})

authors.put('/:id', async (req,res) => {
    try {
      const updateAuthor = await  Author.updateOne({_id: req.params.id},{$set: {author: req.params.author}})
      res.json(updateAuthor)
    }catch (error) {
        res.json({message: error})
    }
    
})


module.exports = authors