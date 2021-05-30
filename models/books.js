const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Book = new Schema (

    {
        title: { type: String},
        authors: { type: Array },
        description: { type: String },
        image: { type: String },
        link: { type: String }
    }
);

module.exports = mongoose.model("Book", Book);;