const Book = require ("../models/books.js");

//get all

getBook = asnyc (req, res) => {
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
//delete by id