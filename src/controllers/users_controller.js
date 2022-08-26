const userOps = require('../models/user/user.ops.js');

module.exports = {
  async createUser(req, res, next) {
    try {
      const userData = { ...req.body };
      const result = await userOps.insert(userData);
      res.json(result);
    } catch (error) {
      next();
    }
  },
};
