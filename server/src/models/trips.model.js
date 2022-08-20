const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const TripSchema = new mongoose.Schema({
    trip_id: {type: Number},
    name: String,
    date: Date,
    description: String,
    owner_id:Number,
    user_id_list:[]
});

TripSchema.plugin(AutoIncrement, {id:'trip_id_seq',inc_field: 'trip_id'});
module.exports = mongoose.model("Trip", TripSchema);