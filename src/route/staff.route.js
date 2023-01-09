const express = require('express')
const http_formatter = require('../util/formatter')
const staff_router = express.Router()

staff_router.get('/any', (req,res) => {
    // const {token} = request.body
    // if(token !== 'staff') {
    // return res.json(http_formatter(null, 'user not authorised', false))
    // }

    return res.json({
        message : "ok",
        data : ['abc', 'def', 'ghi']
    })
})

module.exports = staff_router