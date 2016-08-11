// require connection here too 
var connection = require('./connection');
// In the orm.js file, create the methods that will execute
//  the necessary MySQL commands in the controllers. 
//  These are the methods you will need 
// to use in order to retrieve and store data in your database.
var ORM = {
    // return all the burgers in the table
    selectAll: function() {
        connection.query('SELECT * FROM burgers', function(err, db_response) {
            if (err) {
                throw err;
            }
            console.log(db_response);
        })
    },
    // *********From the docs
    // var post  = {id: 1, title: 'Hello MySQL'};
    // var query = connection.query('INSERT INTO posts SET ?', post, function(err, result) {
    // Neat!
    // });
    // console.log(query.sql);
    // *********

    // create a new burger and insert into db
    // bName[String] dev[Bool]
    insertOne: function(bName, dev) {
        // create a attributes Obj that has column names as props and values
        var newBurg = {
            burger_name: bName,
            devoured: dev
        };
        // insert it
        connection.query('INSERT INTO burgers SET ?', newBurg, function(err, db_response) {
            // check results
            console.log('you created a new burger named', bName);
        });
    },
    // change a value on a burger (devoured)
    updateOne: function(burger_id) {
        // retrieve the selected burger
        // retrieve the devoured column
        // UPDATE burgers SET devoured = true WHERE ID = ?
        // create a attributes object that has column names as props and values
        var updatedVals = [true, burger_id];
        // connection.query('UPDATE burgers SET devoured = true WHERE ID = ?')
        connection.query('UPDATE burgers SET devoured = ?  WHERE id = ?', updatedVals, function(err, db_response) {
            console.log("updated query response", db_response);
        });
    }
};
module.exports = ORM;