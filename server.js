const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const db = require('./db');

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
  .get((req, res) => res.json(db.friends))
  .post((req, res) => {
    const newUserId = db.friends.length + 1;
    db.friends.push({ ...req.body, id: newUserId });
    res.status(201).json(newUserId);
  });

/* run our app */
app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});
