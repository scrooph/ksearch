var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ksearch');
exports.mongoose = mongoose;
