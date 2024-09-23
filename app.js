require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const notFoundPage = require('./middlewares/notfoundpage');
const errorHandler = require('./middlewares/errorhandler');
const app = express();
const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');

const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(cors());

//Routes

app.use('/api/v1', indexRouter);
app.use('/api/v1/products', productRouter);

//NotFound Page
app.use(notFoundPage);

// ErrorHandler Middleware
app.use(errorHandler);

// Connect DB and Server
const start = () => {
	db(process.env.MONGODB_URI);
	app.listen(PORT, () => {
		console.log(`App is serving on http://localhost:${PORT}`);
	});
};

start();
