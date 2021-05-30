const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require("./db/index.js")

const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))