const productSchema = require('../models/products');

const getAllProductsStatic = async (req, res) => {
	// const products= await productSchema.find().sort('name price'); //return sorted products: sort using name and price
	// const products = await productSchema.find().select('name price'); //returned selected products displaying only name and price
	// const products = await productSchema.find().limit(10).skip(2); // will skip the first two products and return the next 10 prioducts
	const products = await productSchema.find(); //return all products
	return res.status(200).json({nbHits: products.length, products});
};

const getAllProducts = async (req, res) => {
	const {name, featured, company, sort, field, numericfilters} = req.query;
	const queryObject = {};

	if (name) {
		queryObject.name = {$regex: name, $options: 'i'};
	}

	if (company) {
		queryObject.company = company.toLowerCase();
	}

	if (featured) {
		queryObject.featured = featured === 'true' ? true : false;
	}

	if (numericfilters) {
		// an operatorMap that mongodb understands
		const operatorMap = {
			'<': '$lt',
			'<=': '$lte',
			'>': '$gt',
			'>=': '$gte',
			'=': '$eq',
		};

		const regex = /\b(<|>|>=|=|<|<=)\b/g;
		let filters = numericfilters.replace(
			regex,
			(match) => `-${operatorMap[match]}-`
		);
		// console.log('filters=', filters);
		const options = ['price', 'rating'];
		filters = filters.split(',').forEach((item) => {
			const [field, operator, value] = item.split('-');
			if (options.includes(field)) {
				queryObject[field] = {
					[operator]: Number(value),
				};
			}
		});
	}

	let results = productSchema.find(queryObject);

	if (sort) {
		const sortList = sort.split(',').join(' ');
		results = results.sort(sortList);
	}
	if (field) {
		const fieldList = field.split(',').join(' ');
		results = results.select(fieldList);
	}

	// Pagination
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 10;
	const skip = (page - 1) * limit;

	results = results.skip(skip).limit(limit);

	const products = await results;

	console.log(req.query);
	console.log(queryObject);
	return res.status(200).json({nbHits: products.length, products});
};

module.exports = {getAllProductsStatic, getAllProducts};
