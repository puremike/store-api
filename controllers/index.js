const indexPage = (req, res) => {
	res.send('<h1>Store API</h1><a href="/products/static">products route</a>');
};

module.exports = indexPage;
