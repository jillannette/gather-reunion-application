require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const memberRoutes = require('./routes/members.js');

//express app
const app = express();

//add middleware (allows for complex endpoints)
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/members', memberRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT)
    });
  })
  .catch((err) => {
    console.log(err)
  })


