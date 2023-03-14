const express = require('express');
const router = express.Router();

const { create }  = require('../../controllers/post-controller.js');
const { signUp , login } = require('../../controllers/user-controller.js');

router.post('/posts' , create);
router.post('/signup', signUp);
router.post('/login' , login);

module.exports = router ;