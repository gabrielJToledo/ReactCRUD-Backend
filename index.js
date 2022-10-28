const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./infrastructures/mongodb')(app)
require('./config/routes')(app)

app.listen(4002, () => console.log('Backend sendo executado na porta 4002'))