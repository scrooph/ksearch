var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MovieSchema = new Schema({
name : String
});
var Movie = mongodb.mongoose.model("Movie", MovieSchema);

module.exports = Movie;
