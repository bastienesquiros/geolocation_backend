const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:ujlbZqtgUjAib0aQ@cluster0.jz55cpx.mongodb.net/geotracker';

mongoose
	.connect(connectionString, { connectTimeoutMS: 2000 })
	.then(() => console.log('Database connection established!'))
	.catch((error) => console.error(error));
