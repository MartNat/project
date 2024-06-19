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

// Route for handling account creation form submission
app.post('/create_account', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
      // Your account creation logic here
      
      // Example: Assuming a function createUser in a hypothetical database service
      const newUser = await createUser(name, email, password); // Example function
      
      // Assuming createUser returns a newly created user object or throws an error
      if (!newUser) {
          throw new Error('Failed to create user');
      }
      
      // If account creation succeeds
      res.send('Account created successfully. Click <a href="/login">here</a> to sign in.');
  } catch (error) {
      console.error('Error creating account:', error);
      res.status(500).send('Failed to create account. Please try again later.');
  }
});


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
