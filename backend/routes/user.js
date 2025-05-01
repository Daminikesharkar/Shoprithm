const express = require('express');
const userController = require('../controllers/user');
const authentication = require('../middleware/authenticate');

const router = express.Router();

router.post('/signUp', userController.signUp);
router.post('/signIn',userController.signIn);

router.get('/currentUser', authentication.authenticate, userController.currentUser);

module.exports = router;