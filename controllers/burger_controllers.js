var express = require('express');
var methodOverride = require('method-override');
var router = express.Router();
var burgers = require('../models/burger.js');


//create the router at the end of your file

// Get function to render everything held in the burger database

// router.get('/',function(req,res){
// 	console.log("Route Hit");
// 	// call selectAll function with the paramater CB function
// 	burgers.selectAll(function(data){
// 		var food = {burgers:data};
// 		console.log(food);
// 		res.render("index",food);
// 	});
// });







//export it at end of your file
module.exports = router;