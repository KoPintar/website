const express = require('express');
const dotenv = require('dotenv').config();
var path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/reset_password/:token', (req, res) => {
	const { token } = req.params;
	res.render('reset_password', { token });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
