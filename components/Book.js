import React, { Component } from "react";
import API from "../utils/GoogleBooksAPI";

class Book extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {

        }

    }

    render () {
        return (
            <div>Book Component</div>
        )
    }


}
export default Book;