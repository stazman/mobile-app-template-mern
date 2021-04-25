/* eslint-disable no-undef */
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4000;
const path = require('path');

connectDB();

//Middleware allowing use of data in req.body

app.use(express.json({
  extended: false
}));

// app.get('/', (req, res) => res.send('API running'));

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));

//Serve Static Assets in production

if(process.env.NODE_ENV === 'production'){

  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, function(){
  console.log('Server is running on Port ' + PORT);
});