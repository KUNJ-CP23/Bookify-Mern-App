// // index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const bookSchema = require('./models/bookSchema');
// //by default node js path
// import path from "path";

// require('dotenv').config();

// Importing ES Modules
import mongoose from "mongoose";
import express from "express";

import cors from "cors";
import bodyParser from "body-parser";
import bookSchema from "./models/bookSchema.js"; // Ensure the file has a `.js` extension
import path from "path";
import dotenv from "dotenv";

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT;

//creating dirname of backend, path.resolve gives the path of backend
const _dirname = path.resolve();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

//1. GetAll
app.get('/', async (req, res) => {
        const book = await bookSchema.find();
        res.send(book);
});

//2. Getting by Id
app.get('/books/:id', async (req, res) => {
        const book = await bookSchema.findOne({id:req.params.id});
        res.send(book);
});

//3. Insert/add/post
app.post('/books', async (req, res) => {
    const book = new bookSchema({...req.body});
        const newBook = await book.save();
        res.send(newBook);
});


//4. Delete
app.delete('/delete/:id', async (req, res) => {
    const book = await bookSchema.deleteOne({id:req.params.id});
    res.send({message: 'Book delete thay gay'});
});

//5. Updating by id
app.put('/update/:id', async (req, res) => {
        const updatedBook = await bookSchema.findOneAndUpdate(
            {id:req.params.id},
            req.body,
            { new : true}
        );
        res.send(updatedBook);
});

//serving the frontend files
app.use(express.static(path.join(_dirname, "/Frontend/dist")));

//serve all files, except the specified path
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
});

//dist has index.html file, helps in npm run build

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

