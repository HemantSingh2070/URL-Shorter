const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalURL : {
        type : String,
        required : true,
    },
    shortURL : {
        type : String,
        unique  : true,
    },
    createdby :{
    type : mongoose.SchemaTypes.ObjectId,
    ref : 'user'
    },
    visits : [{
        timestamps : {
            type  :Number,
        }
    }]
})

const URL = mongoose.model('url',urlSchema);

module.exports = {URL};