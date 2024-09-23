const errorhandler = (err, req, res, next) => {
	let status = err.statusCode || 500;
	let message = err.message || 'Something went wrong';

	console.log(err);
	return res.status(status).json({
		status: 'Error',
		message: message,
	});
};

module.exports = errorhandler;
