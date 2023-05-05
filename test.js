// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// //connect to db
// mongoose.connect(process.env.MONGO_URI, 
//   {
//     useNewUrlParser: true
//   }
//   )
//   .then(() => {
//     //listen for requests
//     app.listen(process.env.PORT, () => {
//       console.log('listening on port', process.env.PORT)
//     });
//   })
//   .catch((err) => {
//     console.log(err)
//   })

//   const app = express();

//   app.get('/', function(req, res) {
//     res.sendFile(path.join(_dirname, '/index.html'))
//   });

//   app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

//   app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// const mainRoutes = require("./routes/main");
// app.use(mainRoutes);
  