const Product = require('../models/product/product.ops.js');

module.exports = {
  async getProducts(req, res) {
    const products = await Product.read();
    res.json(products);
  },

  async updateProduct(req, res, next) {
    try{
      const id = {...req.params};
      const userData = {...req.body};
  
      const result = await Product.update(id, userData);
      res.json(result);
    }catch(error){
      next(error);
    }
  }

}
