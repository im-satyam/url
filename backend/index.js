const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require('./config/db');
dotenv.config();
const app = express()
const port = 3000
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', require('./routes/urlRouter'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
