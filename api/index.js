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
const nextReunionRoutes = require("./routes/nextReunions.js");
const joinRoutes = require("./routes/join.js");

const app = express();


// //ENABLE WHEN BACK TO PRODUCTION ENVIRONMENT!
// app.get("/*", function (req, res) {
//   res.sendFile("this worked", filePath);
//   console.log(filePath);
// });

app.use((req, res, next) => {
  console.log("line 30");
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

//FOR DEBUGGING
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

app.use("/api/members", memberAccess, memberRoutes);
app.use("/api/memories", memberAccess, memoryRoutes);
app.use("/api/reunions", memberAccess, reunionRoutes);
app.use("/api/nextReunions", memberAccess, nextReunionRoutes);
app.use("/api/join", joinRoutes);
app.use("/api/login", loginRoutes);

//USE WHEN IN PRODUCTION
if (process.env.MODE === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

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
