const express = require('express');
const {userController} = require('../controllers/index');
const router = express.Router();

// user auth
router.post('/users/register', userController.register);
router.post('/users/login', userController.login);
router.post('/users/changePassword/:userId', userController.changePassword);
router.get('/users/:userId', userController.get);

module.exports = router;