//import axios
import axios from 'axois'
//create const with api path
const api = axios.create({
   BASEURL: "https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=",
})
//create const with api key
const key = 'API_KEY'

function searchBooks(params) {
    //build a url with string interpolation where q=+param and use axios to call it
   return axios.get( api + `${key}`)
}

export default searchBooks;