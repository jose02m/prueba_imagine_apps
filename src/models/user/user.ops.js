const User = require('./user.js');

module.exports = {
  async insert(userData) {
    const user = new User(userData);
    const result = user.save();
    return result;
  },
};