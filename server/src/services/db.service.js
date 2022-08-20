const mongoose = require('mongoose'); //import mongoose module
const dbConfig = require('../configs/db.config');

mongoose.connect(
  `mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.cluster}.pp3gy.mongodb.net/${dbConfig.dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection; //get default connection
db.on('error', console.error.bind(console, 'MongoDB connection error')); //Bind connection to error event
db.once('open', function () {
  console.log('Connected successfully');
});

module.exports = db;
