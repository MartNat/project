const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse URL-encoded data (for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the login form
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
  const { name, password, user_type } = req.body;
  console.log(`Name: ${name}, Password: ${password}, User Type: ${user_type}`);
  // Add your login logic here
  res.send(`Logged in as ${user_type}`);
});

// Route for the create account form
app.get('/create_account', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'create_account.html'));
});

app.post('/create_account', (req, res) => {
  const { name, email, phone, interest, password } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Interest: ${interest}, Password: ${password}`);
  // Add your account creation logic here
  res.send('Account created successfully');
});

// Route for the index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Search route (this can be expanded to search a database or other data source)
app.post('/search', (req, res) => {
  const { query } = req.body;
  console.log(`Search query: ${query}`);
  // Add your search logic here
  const searchResults = [`Result 1 for ${query}`, `Result 2 for ${query}`];
  res.json({ results: searchResults });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
