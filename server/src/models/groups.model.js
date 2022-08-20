const mongoose = require ("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const GroupSchema = new mongoose.Schema({
      group_id: {type: Number},
      group_name: String,
      trip_id: {type: mongoose.Schema.Types.ObjectId, ref: "Trip"},
      item_id: Number,
      total_cost: Number
});

GroupSchema.plugin(AutoIncrement, {id:'group_id_seq',inc_field: 'group_id'});
module.exports = mongoose.model('Group', GroupSchema);