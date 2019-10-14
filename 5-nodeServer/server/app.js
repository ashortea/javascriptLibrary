require('dotenv').config();

var express = require('express'); 
var app = express(); 
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontrollers');
var sequelize = require('./db');

sequelize.sync();//tip pass in force true for resetting tables
app.use(express.json());
app.use(require('./middleware/headers'));


///Exposed Routes
app.use('/test', test);
app.use('/api/user', user);

//Protected Routes
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.listen(3000, function(){
console.log('App is listenig on 300.')
});  