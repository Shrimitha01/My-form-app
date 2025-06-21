const express = require('express');
const path= require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public'))); 
// Home page form
app.get('/', (req, res) => {
    res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { username, email } = req.body;
    res.render('results', { username, email });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});