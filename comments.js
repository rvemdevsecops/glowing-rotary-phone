// Create web server and listen to port 3000
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  // Return all comments
  res.send('Return all comments');
});

// Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  // Return one comment
  res.send('Return one comment');
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  // Create new comment
  res.send('Create new comment');
});

// Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  // Update comment
  res.send('Update comment');
});

// Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  // Delete comment
  res.send('Delete comment');
});

// Start web server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

### 3. Create models

```js
// Path: models/comment.js
// Create model for comment
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
