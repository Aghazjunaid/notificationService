const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    to: {type: String},
    from: {type: String},
    payload: {type: Object},
    status: {type: String},
},{timestamps: true});

module.exports = mongoose.model("Notification",NotificationSchema)