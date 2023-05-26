const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on the port: ${PORT}`);
  });
  console.log("Connected to database");
})
.catch((e) => {
  console.log(e);
})

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.get("/", (req, res) => {
  res.status(201).json({"name":"Devesh", "age": 23})
})
