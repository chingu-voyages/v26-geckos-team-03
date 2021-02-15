const mongoose = require('mongoose');

const mongoPath =
	'mongodb+srv://birdyart:birdyart123@cluster0.8e8un.mongodb.net/Cluster0?retryWrites=true&w=majority';

module.exports = async () => {
	await mongoose.connect(
		'mongodb+srv://birdyart:birdyart123@cluster0.8e8un.mongodb.net/Cluster0?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		},
	);
	return mongoose;
};
