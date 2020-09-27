const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

//DB Config
const db = require('./config/keys').mongoURI;

//Connect Database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log("Database Connected")})
    .catch((err)=> {console.log(err)})

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')


const app = express();

app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)


app.get('/', (req,res)=> {
    res.send("<h1>Sup</h1>")


})


app.listen(PORT, () => {console.log(`Server up on port ${PORT}`)})