const { Router } = require('express');
const UserController = require('../controllers/users_controller.js');

const app = Router();

app.post('/create', UserController.createUser);

module.exports = app;