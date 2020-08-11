const mongoose = require('mongoose');
const DATABASE_CONNECTION = 'mongodb://mongo/test';
var users = mongoose.Schema({
    name:String,
    age:Number
});
User = exports.User = mongoose.model('User',users);
exports.initializeMongo = function()
{

    mongoose.connect(DATABASE_CONNECTION);
    console.log('Trying to Connect to ' + DATABASE_CONNECTION);
    var db = mongoose.connection;
    db.on('error',console.error.bind(console,'Connection error'));
    db.once('open',function()
    {
        console.log('connected');
        addRandomUser();
    });
}
var addRandomUser = function()
{
    var user1 = new User(
        {
            name:'Saral',
            age:22
        }
    );
    var user2 = new User(
        {
            name:"Gagan",
            age:22
        }
    )
    user1.save(function (err,fluffy)
    {
        if(err) return console.error(err);
        console.log("Save completed");

    });
    user2.save(function (err,fluffy)
    {
        if(err) return console.error(err);
        console.log("Save completed");

    });
}
