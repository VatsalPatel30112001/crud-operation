const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const uri = "mongodb://localhost:hari/narnarayan";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
app.use(bodyparser.json());
const cors = require("cors");
app.use(express.urlencoded());
const schema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
});
const model = mongoose.model("krishn", schema);
app.use(cors());
app.post("/hari", (req, res) => {
  console.log(req.body);
  const data = new model(req.body);
  data
    .save()
    .then(() => {
      console.log("jay shree swaminarayan");
      res.send("jay shree swaminarayan");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen(80);
