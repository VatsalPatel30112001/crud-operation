const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const uri = "mongodb://localhost:hari/narnarayan";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
const schema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
});
const model = mongoose.model("krishn", schema);

//home page

app.get("/hari", (req, res) => {
  res.send("jay narayan");
});
app.get("/read", (req, res) => {
  res.render(app.use(__dirname, "read.js"));
});

//saving data to mongodb

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

//finding all data

app.get("/hari/find", (req, res) => {
  model
    .find()
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
    });
});

//finding particular data using id

// app.get('/hari/find/:id',(req,res)=>{
//   model.findById(req.params.id)
//   .then(data=>res.json(data))
//   .catch(console.log('something went wrong in finding'))
// })

//updating particular data using id

// app.post('/hari/update/:_id',(req,res)=>{
//   model.findByIdAndUpdate(req.params,{name:req.body.name,phone:req.body.phone},(err,docs)=>{
//     if(err){console.log(err)}
//     else{console.log(docs)}
//   })
//   .catch(err=>res.json(err))
// })

//deleting particular data using id

// app.get('/hari/delete/:id',(req,res)=>{
//   model.findByIdAndDelete(req.params.id)
//   .then(()=>{res.json('deleted')})
//   .catch(console.log('something went wrong in deleting'))
// })

//finding particular data using name

app.get("/hari/find/:name", (req, res) => {
  const query = { name: req.params.name };
  console.log(req.params.name);
  const projection = {
    name: 1,
    phone: 1,
    _id: 0,
  };
  model
    .findOne(query, projection)
    .then((data) => res.send(data), console.log(query, projection))
    .catch((err) => console.log(err));
});

//updating particular data using name

app.post("/hari/update/:name", (req, res) => {
  const query = { name: req.params.name };
  model
    .findOneAndUpdate(query, req.body)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//deleting particular data using name

app.get("/hari/delete/:name", (req, res) => {
  const query = { name: req.params.name };
  model
    .findOneAndDelete(query)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.listen(80);
