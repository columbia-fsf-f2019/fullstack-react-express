const mongoose = require('mongoose');
const { Schema } = mongoose;

const FriendSchema = new Schema({
  name: String,
  image: String,
  occupation: String,
  location: String
});

module.exports = mongoose.model('friend', FriendSchema);
