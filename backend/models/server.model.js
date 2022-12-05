const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serverSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  rooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rooms"
    }
  ]
});

const ServerModel = mongoose.model("Server", serverSchema);

module.exports = ServerModel;
