const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data (for forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route for handling login form submission
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(`Email: ${email}, Password: ${password}`);
  
  // Add your login logic here
  // For simplicity, assuming the login is always successful
  res.redirect('/'); // Redirect to the main page after successful login
});

/*Route for handling account creation form submission
app.post('/create_account', (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  
  // Add your account creation logic here
  // For simplicity, assuming the account creation is always successful
  res.redirect('/login'); // Redirect to the login page after account creation
});*/

// Search route
app.post('/search', (req, res) => {
  const { query } = req.body;
  console.log(`Search query: ${query}`);
  
  // Add your search logic here
  res.json({ results: [`Result 1 for ${query}`, `Result 2 for ${query}`] });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
