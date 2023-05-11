const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');

const commentRoutes = require('./routes/comments.js')
const memberRoutes = require('./routes/members.js');
const memoryRoutes = require('./routes/memories.js');
const bioRoutes = require('./routes/bios.js')
const loginRoutes = require('./routes/login.js');
const restrictedAccessRoutes = require('./routes/restrictedAccess.js');
const memberAccessRoutes = require('./routes/memberAccess.js');

const app = express();

app.use(cors());



// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));  
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
app.use('/api/members', memberRoutes)
app.use('/api/memories', memoryRoutes)
app.use('/api/bios', bioRoutes)
app.use('/api/login', loginRoutes)
app.use('/api/restrictedAccess', restrictedAccessRoutes);
app.use('/api/memberAccess', memberAccessRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
    });
  })
  .catch((err) => {
    console.log(err)
  })

//THIS WORKS 
