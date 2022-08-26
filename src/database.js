const mongoose = require('mongoose');

mongoose
  .connect('mongodb://0.0.0.0:27017/test-imagine', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Db is connected'))
  .catch((err) => console.log(err));
