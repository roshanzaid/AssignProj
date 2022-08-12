import mongoose from "mongoose";
import { BookSchema } from '../model/bookModel.js'

const Book = mongoose.model('Book', BookSchema);

//SAVE BOOK
export const addNewBook = (req, res) => {
    let newBook = new Book(req.body);
    newBook.save((err, Book) => {
        if(err){
            res.send(err);
        }
        res.json(Book);
    });
};

//VIEW ALL BOOKS
export const viewBooks = (req, res) => {
    Book.find({},(err, Book) => {
        if(err){
            res.send(err);
        }
        res.json(Book);
    });
};

//VIEW SINGLE BOOKS
export const viewSingleBook = (req, res) => {
    Book.findById(req.params.BookId,(err, Book) => {
        if(err){
            res.send(err);
        }
        res.json(Book);
    });
};

//UPDATE BOOK
export const updateBook = (req, res) => {
    Book.findOneAndUpdate({_id: req.params.BookId}, req.body, {new: true}, (err, Book) => {
        if(err){
            res.send(err);
        }
        res.json(Book);
    });
};

//REMOVE BOOK
export const removeBook = (req, res) => {
    Book.remove({_id: req.params.BookId}, (err, Book) => {
        if(err){
            res.send(err);
        }
        res.json({message: 'Book is removed!'});
    });
};