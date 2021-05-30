const Book = require ("../../models/books.js");
const express = require("express");

//get all
const getBooks = async (req, res) => {
    await Book.find({}, (err, books) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!books.length) {
            return res
            .status(404)
            .json({success: false, error: `Books not found`})
        }
        return res.status(200).json({ success: true, data: books })
    }).catch(err => console.log(err))
};

//update
const saveBook = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a book',
        })
    }
    const book = new Book(body);

    if (!book) {
        return res.status(400).json({ success: false, error: 'Failed to save' })
    }

    book
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: book._id,
                message: 'Book saved to collection',
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({
                error,
                message: 'Book not saved to collection',
            })
        })
}

//delete by id
const deleteBook = async (req, res) => {
    await Book.findOneAndDelete({ _id: req.params.id }, (err, book) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!book) {
            return res
                .status(404)
                .json({ success: false, erro: `Book not found` })
        }
        return res.status(200).json({ success: true, data: book })
    }).catch(err => console.log(err))
}

const router = express.Router()

router.post('/books', saveBook)
router.delete('/books/:id', deleteBook)
router.get('/books', getBooks)

module.exports = router