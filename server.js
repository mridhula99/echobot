const path = require("path");
var express = require("express");

var app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

global.__basedirectory = __dirname;

app.use(express.static(path.join(__basedirectory, "public")));

app.post("/messages", function (req, res) {
    res
      .status(200)
      .json({
        reply: req.body.message
      });
  })

app.listen(port, () => {
  console.log('server is running on port', port);
});