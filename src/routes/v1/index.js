const express = require('express');
const router = express.Router();

const { create }  = require('../../controllers/post-controller.js');


router.post('/posts' , create);

module.exports = router ;