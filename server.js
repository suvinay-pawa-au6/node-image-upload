const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
//For parsing data sent to express
//const fileUpload = require("express-fileupload");

//app.use(fileUpload()); // Don't forget this line!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "views")));
//Routes
const upload = require("./routes/api/upload");

//Using the routes
app.use("/upload", upload);

//Listening at port 8080

app.listen(7080, (err) => {
  if (err) return console.log(err);
  console.log("Listening on port");
});
