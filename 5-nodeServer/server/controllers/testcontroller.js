// var express = require('express');//1
// var router = express.Router(); //2

// //3   //4  //5            //6
// router.get('/', function (req, res) {
//     //7
//     res.send('Hey!!! This is a test route!');
// });

// router.get('/about', function (req, res){
//     res.send('This ia an about route')
// });

// //pass an object
// router.get('/contact', function (req, res){
//     res.send({user: "kenn", email: "kenn@beastmode.com"});
// });
// //pass in an array
// router.get('/project', function (req, res){
//     res.send(['Project 1', 'Project 2']);
// });
// //pass in an array of objects
// router.get('/mycontacts', function (req, res){
//     res.send([
//         {user:"quicy", email: "kenn@beastmode.com"},
//         {user: "aaron", email: "aaron@beastmode.com"},
//         {user: "quincy", email: "quincy@beastmode.com"},
//         {user: "tom", email: "tom@beatmode.com"}
//     ]);
// });



// module.exports = router;

////////
var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');
//Controller Method # 1: Simple Response
router.post('/one', function(req, res){
    res.send("Got a post request.")
});
///Controller Method #2 : Persisting Data

router.post('/two', function(req, res){
    var testData = "test data for endpoint two ";
    TestModel
    .create({testdata: testData
    }).then(dataFromDatabase =>{
        res.send("Test two went through!")
    })
    
});

//Controller Methods #3: req body

router.post('/three', function(req, res){
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test three went through!")
    
});


//Step 4- use this with Postman
router.post('/four', function(req, res){
    var testData =  req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(){
            res.send("Test 4 went through!");
        }
    );
});



///Route 5: Return data in a Promise

router.post('/five', function(req, res){
    var testData =  req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(data){
            res.send(data);
        }

    );
});

// Route 6: Return response as JSON


router.post('/six', function(req, res){
    var testData =  req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(testdata){
            res.json({
                testdata: testdata
            });
        }

    );
});


///Route 7: Handle errors

router.post('/seven', function(req, res){
    console.log(req.body)
    var testData = req.body.testdata.item
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata){
            res.json({
                testdata: testdata
        });
        },
        function createError(err) {
            res.send(500, err.message);
        }

    );
});


///GET: Get simple message from server

router.get('/helloclient', function(req, res){
    res.send('This is a message form the server to the client.')
})

///GET:  /one

router.get('/one', function(req, res){

    TestModel
    .findAll({
        attributes:['id', 'testdata']
    })
    .then(
        function findAllSuccess(data){
            console.log("Controller data:", data);
            res.json(data);
        },
        function findAllError(err){
            res.send(500, err.message);
        }

    );
});

module.exports = router;