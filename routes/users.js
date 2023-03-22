var express = require('express');
var router = express.Router();

const User = require('../models/user');

router.post('/save', function (req, res) {
	User.findOne({ lat: req.body.lat, long: req.body.long, city: req.body.city }).then((userData) => {
		if (userData === null) {
			const newUser = new User({
				lat: req.body.lat,
				long: req.body.long,
				city: req.body.city,
				timestamp: req.body.timestamp,
			});
			newUser.save().then(() => {
				console.log('User created!');
				res.json({ result: true });
			});
		} else {
			console.log('User already exists!');
			res.json({ result: false });
		}
	});
});

module.exports = router;
