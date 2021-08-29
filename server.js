require('dotenv').config()

const express = require('express')
const app = express() 
const mongoose = require('mongoose')
 
const uri = process.env.DATABASE_URL;
mongoose.connect(uri)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(3000, () => console.log('Server Started'))