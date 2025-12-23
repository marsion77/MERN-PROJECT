const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Marison:Marison@cluster0.5f3ypg5.mongodb.net/Sky-Bowl?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB Connected');
  })
  .catch((error) => {
    console.log('Error Detected', error);
  });

module.exports = mongoose.connection;
