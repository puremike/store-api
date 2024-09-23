require('dotenv').config();
const db = require('./db/db');
const productsJSON = require('./products.json');
const productSchema = require('./models/products');

const populateDB = async () => {
	try {
		await db(process.env.MONGODB_URI);
		await productSchema.deleteMany(); //delete all existing products
		await productSchema.create(productsJSON);
		console.log('Population successful');
		process.exit(0);
	} catch (error) {
		console.log('Error populating database', error);
		process.exit(1);
	}
};

populateDB();
