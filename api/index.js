const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const {
  memberAccess,
  restrictedAccess,
} = require("./controllers/authController");

const memberRoutes = require("./routes/members.js");
const memoryRoutes = require("./routes/memories.js");
const loginRoutes = require("./routes/login.js");
const reunionRoutes = require("./routes/reunions.js");
const nextReunionRoutes = require('./routes/nextReunions.js')
const joinRoutes = require("./routes/join.js");
const registrationRoutes = require('./routes/registrations.js');

const app = express();

// app.use(express.static(path.join(__dirname, "js")));  //DID NOT WORK
app.use(express.static(path.join(__dirname, "../client/build")))

const filePath = path.join(__dirname, "public", "index.html");
console.log(__dirname);

// app.get("/client", function (req, res) {
//   res.sendFile("this worked", filePath);
//   console.log(filePath);
// });



// USE THIS??? FOR RENDER DEPLOYMENT????
// if (process.env.NODE_ENV === 'production') {
//   //*Set static folder up in production
//   app.use(express.static('client/build'));

//   app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
// }l

app.use((req, res, next) => {
  console.log('line 30')
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

app.use("/api/members", memberAccess, memberRoutes);
app.use("/api/memories", memberAccess, memoryRoutes);
app.use("/api/reunions", memberAccess, reunionRoutes);
app.use("/api/nextReunions", memberAccess, nextReunionRoutes);
app.use('/api/registrations', memberAccess, registrationRoutes);
app.use("/api/join", joinRoutes);
app.use("/api/login", loginRoutes);


// if (process.env.MODE==="production") {
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build", "index.html"))
//   })
// }

app.use(restrictedAccess);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
