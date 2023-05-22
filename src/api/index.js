const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { memberAccess, restrictedAccess } = require('./controllers/authController');

const commentRoutes = require('./routes/comments.js')
const memberRoutes = require('./routes/members.js');
const memoryRoutes = require('./routes/memories.js');
const bioRoutes = require('./routes/bios.js')
const loginRoutes = require('./routes/login.js');

const app = express();

const filePath = path.join(__dirname, 'public', 'index.html');
console.log(__dirname)

app.get('/client', function(req, res) {
  res.sendFile('this worked',filePath);  
  console.log(filePath)
});

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/comments', commentRoutes)
app.use('/api/members', memberAccess, memberRoutes)
app.use('/api/memories', memoryRoutes)
app.use('/api/bios', bioRoutes)
app.use('/api/login', loginRoutes)
app.use(restrictedAccess);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
    });
  })
  .catch((err) => {
    console.log(err)
  })

//THIS WORKS 
