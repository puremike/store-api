const mongoose = require('mongoose');

const db = async (url) => {
	try {
		await mongoose
			.connect(url)
			.then(() => console.log('Database Connected Successfully!'));
	} catch (error) {
		console.log('Database Failed to Connect!', error);
	}
};

module.exports = db;
