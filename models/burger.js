var orm = require ('./orm.js');
//cannot access orm file

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
//look over this code again and comment everything
var burger = {
    selectAll: function (cb) {
      orm.selectAll('burgers', function (res) {
        cb(res);
      });
    },
    // cols and vals are arrays
    insertOne: function (cols, vals, cb) {
      orm.insertOne('burgers', cols, vals,  function (res) {
        cb(res);
      });
    },
    updateOne: function (objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, function (res) {
        cb(res);
      });
    }
}











module.exports = burger;



