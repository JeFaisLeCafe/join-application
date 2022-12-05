const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  games: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Games"
    }
  ]
});

const RoomModel = mongoose.model("Room", roomSchema);

module.exports = RoomModel;
