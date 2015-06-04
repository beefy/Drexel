var mongoose = require('mongoose')
var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var db_url = "mongodb://localhost:27017/researchMe",
    db = mongoose.connect(db_url);

//project schema
var boardSchema = new Schema({
    id: ObjectId,
    text: String,
    date_created: { type: Date, default: Date.now }

})

var board = db.model('board', boardSchema, 'board');

