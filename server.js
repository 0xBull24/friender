const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/app/public')));

// Start Server
app.listen(PORT, ()=> {
  console.log(`Friender is now started and listening on port ${PORT}`);
  console.log(path.join(__filename));
});

// Routes
require('./app/routing/htmlRoutes')(app);