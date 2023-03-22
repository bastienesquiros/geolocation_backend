const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	lat: Number,
	long: Number,
	city: String,
	timestamp: Date,
});

const User = mongoose.model('users', userSchema);

module.exports = User;
