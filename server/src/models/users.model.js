const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema({
    user_id: {type: Number},
    user_name: {type: String, required: true},
    user_email: {type: String, requied: true, unique: true},
    password: {type: String, required: true},
    is_active: {type: Boolean, default: true}
});

UserSchema.plugin(AutoIncrement, {id:'user_id_seq',inc_field: 'user_id'});
module.exports = mongoose.model("User", UserSchema);