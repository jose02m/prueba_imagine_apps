const Product = require('./product.js');

module.exports = {
  async read(){
    const result = await Product.find().populate("user");
    return result;
  },

  async update(userId, userData) {
    const result = await Product.updateOne(userId, userData);
    return result;
  },
};