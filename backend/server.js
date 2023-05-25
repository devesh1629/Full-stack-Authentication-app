const express = require('express');
const path = require('path');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
port = 8000;




app.post('/', (req, res) => {

});

app.listen(port, () => {
  console.log(`Server listening on the port:${port}`);
});