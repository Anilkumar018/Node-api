const { response } = require('express');
const express = require('express');
const user_router = express.router();

user_router.get('/user/all', (req, res) => {
    //some work!! Some processing!!
    return res.json({
        message : 'ok',
        data : [
            'Anil', 'Sunil', 'Ashwini', 'Atharva'
        ]
    })
})

user_router.post('user/create', (req, res) => {
    return res.json({
        message : 'user is successfully created',
        data : null
    })
})

//exporting router to be used in all other places
module.exports = user_router;

