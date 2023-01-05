// const arr = ['anil','roy']
// //console.log(arr);
// for(var user of arr){
//     console.log(arr);
//     console.log(user);
// }

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const __user_router = require('.src/route/user.route');
app.use('/user', __user_router);

// app.get('/', (req,res) => {
//     res.send("good morning teacher");
// })

// app.get('/student', (req,res) => {
//     res.send("ohhh, hey children");
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on localhost : ${PORT}`));


