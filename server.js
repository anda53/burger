//==============================================================
//DEPENDANCIES
//==============================================================
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var app = express();
app.use('/static',express.static('public/assets'));
var port = 3000;
var myConnection = require('./config/connection.js'); 
var methodOverride = require('method-override');
var ORM = require('./config/orm');
ORM.selectAll();

// check if insertOne works
// ORM.insertOne('testBurger', false);
// test if updating "devoured" works
// ORM.updateOne(6);
//================================================================
//MIDDLEWARE
//================================================================

app.use(methodOverride('_method'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
// app.use(methodOverride('_method'))
app.set('view engine', 'handlebars');

//=================================================================
//ROUTES
//============================READ=====================================

app.get('/', function(req, res) {
    myConnection.query('SELECT * FROM burgers', function(err, results) {
        if (err) throw error
            //render the index.handlebars template and put in the data from the burgers table
        res.render('index', {
            burgers: results,
            devoured : false
        })

    })

});
//=========================CREATE========================
//ORM.insertOne? 
//I am getting a conflicting method type -cannot post and in network console 'get'
app.post('/newBurger/create', function(req, res){
    myConnection.query('INSERT INTO burgers SET ?', {
        //the req.body needed the name burger_name in order to not be null and work
        burger_name: req.body.burger_name,
        devoured: false
        }, function(err, response){

        if(err)throw err;

        res.redirect('/');

    })

});   

//====================UPDATE===============================

app.put('/update', function(req, res){
    //change devoured state to true for that particular burger
    myConnection.query('UPDATE burgers SET ? WHERE ?', [{devoured:true}, {id: req.body.id}],
        function(error, response){
            if(error) throw error         
        })     
    res.redirect('/');
});
//==================DELETE====================================
app.delete('/delete', function(req,res){
    myConnection.query('DELETE FROM burgers WHERE ?', [{devoured:true}, {id:req.body.id}], function(err, response){
        if(err)throw err;
        res.redirect('/');

    });
});

//======================================================
app.listen(port, function() {
    console.log('App listening on PORT ' + port);
});