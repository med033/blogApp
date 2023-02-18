//Import express
const express = require('express');
//Import model Product
const Product = require('./models/blog');
//Import Body-Parser
const bodyParser = require('body-parser');

// import mongoose
const mongoose = require('mongoose');

//Instance express in App
const app = express();



//import model Blog
const Blog = require('./models/blog');

// Connect to Data Base
mongoose.connect('mongodb://localhost:27017/BlogDB', { useNewUrlParser: true, useUnifiedTopology: true });


//Body-Parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/***************************************************/

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//********************************************************************************************************* */


//Add blog
app.post('/api/addBlog', (req, res) => {
    let blog = new Blog({
        authorName: req.body.authorName,
        title: req.body.title,
        content: req.body.content,
        upvote: "req.body.upvote",
        downvote: req.body.downvote
    });
    blog.save();
    res.status(200).json({
        message: 'Blog added with  success'
    })
})

//get all blogs
app.get('/api/allBlogs', (res) => {
    Blog.find((err, docs) => {
        if (err) {
            console.log("Error in DB");
        } else {
            res.status(200).json({
                blogs: docs
            })
        }
    })
})

//get blog by id 
app.get('/api/allBlogs/:id', (req, res) => {
    let id = req.params.id;
    Product.findOne({ _id: id }).then(
        (doc) => {
            console.log('finded Blog', doc);
            res.status(200).json({
                blog: doc
            })
        }
    )
})

//edit blog upvote and downvote

app.put('/api/allBlogs/:id', (req, res) => {
    let blog = {
        _id: req.body._id,
        authorName: req.body.authorName,
        title: req.body.title,
        content: req.body.content,
        upvote: req.body.upvote,
        downvote: req.body.downvote
    };
    Blog.updateOne({ _id: req.body._id }, blog).then(
        (result) => {
            res.status(200).json({
                message: "edited with success"
            });
        }
    )
})

//Export App
module.exports = app;
