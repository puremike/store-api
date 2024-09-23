const indexPage = (req, res) => {
	res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
};

module.exports = indexPage;
