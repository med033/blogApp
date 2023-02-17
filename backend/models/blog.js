const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    authorName: String,
    title: String,
    content: String,
 p
  
    

});

const blog = mongoose.model('Blog', blogSchema);

module.exports = blog;
