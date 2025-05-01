const express = require('express');
const cors = require('cors');
const mongoConnect = require('./config/db');
const indexRouter = require('./routes/index');
const { mongo } = require('mongoose');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
mongoConnect();
app.use(express.static('public'));
app.use('/', indexRouter);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});