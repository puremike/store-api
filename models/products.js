const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const productSchema = new Schema({
	name: {
		type: String,
		required: [true, 'product name must be provided'],
		trim: true,
	},
	price: {
		type: Number,
		required: [true, 'product price must be provided'],
	},
	featured: {
		type: Boolean,
		default: false,
	},
	rating: {
		type: Number,
		default: 4.5,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	company: {
		type: String,
		trim: true,
		required: [true, 'company name must be provided'],
		enum: {
			values: ['ikea', 'liddy', 'caressa', 'marcos'],
			message: '{VALUE} is not a valid company name',
		},
	},
});

module.exports = model('Product', productSchema);
