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
const Blog =require('./models/blog');

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
    //Etape1
    console.log('Here Function addBLog');

    // let url = req.protocol + '://' + req.get('host');
    // console.log("body", req.body);
    // Blog.findOne({ type: req.body.type}).then(
    //     (doc) => {
    //         if (doc) {
    //             res.status(200).json({
    //                 message: "Product already exist"
    //             })

    //         } else {

                let blog = new Blog({
                    authorName: req.body.authorName,
                    title: req.body.title,
                    content: req.body.content,
                    upvote:"req.body.upvote",
                    downvote:req.body.downvote

                });

                //Etape2
                blog.save();

                //Etape3
                res.status(200).json({
                    message: 'Blog added with  success'
                })

           


            }
        
    )

//get all blogs
app.get('/api/allBlogs', (req, res) => {
        console.log("Here in function get All Blogs");
    
        //Etape 1
        Blog.find((err, docs) => {
            if (err) {
                console.log("Error in DB");
            } else {
                //Success
                res.status(200).json({
                    blogs: docs
                })
            }
        })
    
    })

//get blog by id 
app.get('/api/allBlogs/:id', (req, res) =>{
    console.log('Here in Function get blog by ID');

    let id = req.params.id;
    console.log('id Blog by id', id);

    Product.findOne({_id : id}).then(
        (doc) => {
            console.log('finded Blog', doc);
            res.status(200).json({
                blog:doc
            })
        }
    )
})

//edit blog upvote and downvote

app.put('/api/allBlogs/:id', (req,res) =>{
    console.log("here in function edit blog");
    
    let blog = {
        _id :req.body._id,
        authorName: req.body.authorName,
        title: req.body.title,
        content: req.body.content,
        upvote:req.body.upvote,
        downvote:req.body.downvote
    
    };
    Blog.updateOne({_id : req.body._id},blog).then(
    (result)=>{
    
        console.log("result update", result);
        res.status(200).json({
            message : "edited with success"
        });
    }
    
    
    )
    } )


// //search filter full text  


// app.post('/api/searchBlog', (req, res) => {
//     console.log('here in search blog',);

//     //etape 1 : recuperation of value 
//     let searchValue = req.body.searchValue;

//     console.log("searchValue", searchValue);

//     //etape 2 : search 

//     Blog.find({
//         $or: [
//             { authorName: {$regex: `.*${searchValue}` }},
//             { title: {$regex: `.*${searchValue}` }},
//             { content: {$regex: `.*${searchValue}` }},
//         ]
//     }).then(
//         (docs) => {
//             if (docs) {
//                 console.log("result", docs);
//                 res.status(200).json({
//                     chefs: docs
//                 })

//             }
//         }

//     )


// })

//Export App
module.exports = app;
