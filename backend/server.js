const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const authRouter = require('./route/auth');
const classifyRouter = require('./route/classify');

app.use('/auth', authRouter);
app.use('/classify', classifyRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})
