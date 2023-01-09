const http_formatter = require('../util/formatter')

const userGet = (req, res) => {
    //some work!! Some processing!!
    return res.json(http_formatter(
            ['Anil', 'Sunil', 'Ashwini', 'Atharva']
    ))
}

const userPost = (req, res) => {
    return res.json(http_formatter(null,'user is successfully created'))
}

module.exports = {userGet, userPost}