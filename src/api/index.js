require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
//changing variable from memberRoutes, memoryRoutes to members, users
const members = require('./routes/members.js');
const memories = require('./routes/memories.js');

//express app
const app = express();

//add middleware (allows for complex endpoints)
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
//changing from '/api/members', memberRoutes to '/api/members, members
//changing from '/api/memories', memoryRoutes to '/api/memories, memories
app.use('/api/members', members)
app.use('/api/memories', memories)

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


