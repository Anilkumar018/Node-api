const express = require('express');
const user_router = express.Router();
const user_controller = require('../controller/controller')

user_router.get('/all', user_controller.userGet )

user_router.post('/create', user_controller.userPost)

//exporting router to be used in all other places
module.exports = user_router;

