const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Friend = require('./models/Friend');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/friends', {
  useNewUrlParser: true
});

/* constants */
const PORT = process.env.PORT || 3001;

/* */
const app = express();

/* set-up middlewares */
app.use(morgan('dev')); // logging
app.use(bodyparser.json()); // parsing json data in request body
if (process.env.NODE_ENV === 'production') {
  // serve static files from frontend build output in prodcution
  app.use(express.static('frontend/build'));
}

/* route handlers */
app.get('/api/ping', (req, res) => res.send('pong'));

app
  .route('/api/friends')
  .get(async (req, res) => {
    const friends = await Friend.find();
    res.json(friends);
  })
  .post(async (req, res) => {
    const response = Friend.create(req.body);
    res.status(201).json(response);
  });

/* run our app */
app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});
