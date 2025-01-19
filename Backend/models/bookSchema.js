// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     id: {
//         type: String,
//         required: true
//     },
//     bookTitle: {
//         type: String,
//         required: true
//     },
//     bookAuthor: { 
//         type: String,
//         required: true 
//     },
//     bookImage: { 
//         type: String,
//         required: true
//     },
//     bookDetails: { 
//         type: String,
//         default:' '
//     },
// });

// module.exports = mongoose.model('bookSchema', bookSchema,'books');

//above is the old js schema and below is new one

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  bookAuthor: {
    type: String,
    required: true,
  },
  bookImage: {
    type: String,
    required: true,
  },
  bookDetails: {
    type: String,
    default: " ",
  },
});

// Export the model as default
export default mongoose.model("Book", bookSchema, "books");
