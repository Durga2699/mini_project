const mongoose = require('mongoose');
const { Schema } = mongoose;
const AluminiSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    verified:{type:Boolean,default:false},
    data_of_alumini: {
        type: Object,
        required: true
    }
    
});

module.exports = Alumini = mongoose.model('alumini', AluminiSchema);