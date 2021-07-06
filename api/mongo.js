const mongoose = require('mongoose');

const connectionURL = process.env.MONGODB;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('Connection to the database sucessfully established.'))
  .catch(() => console.log('Could\'nt establish the database connection.'));
