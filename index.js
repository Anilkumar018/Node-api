// const arr = ['anil','roy']
// //console.log(arr);
// for(var user of arr){
//     console.log(arr);
//     console.log(user);
// }

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const __user_router = require('./src/route/user.route');
const __staff_router = require('./src/route/staff.route')
app.use('/user', __user_router);
app.use('/staff', __staff_router)


// app.get('/', (req,res) => {
//     res.send("good morning teacher");
// })

// app.get('/student', (req,res) => {
//     res.send("ohhh, hey children");
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on localhost : ${PORT}`));

const DB_URI = process.env.DB_URI;
console.log(DB_URI);

mongoose.Promise = global.Promise;

const option = {
    socketTimeoutMS : 0,
    keepAlive : true,
    reconnectTries : 30,
    useNewUrlParser : true,
    poolsize : 4
}

mongoose.connect(DB_URI, ).then(() => console.log('DB connected')).catch(err => {console.error(err);
    //process.exit(1);
});


