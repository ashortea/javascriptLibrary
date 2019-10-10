require('dotenv').config();

var express = require('express'); 
var app = express(); 
var user = require('./controllers/usercontrollers')




// app.use('/api/test', function (req, res){
//  res.send("This is data from the /api/test endpoint. It's from the server.");
// });

var test = require('./controllers/testcontroller');
var sequelize = require('./db');

sequelize.sync();//tip pass in force true for resetting tables
app.use(express.json())
app.use(require('./middleware/headers'));

app.use('/test', test)

app.use('/api/user', user);

app.listen(3000, function(){
console.log('App is listenig on 300.')
});  