const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  comment: String,
  victoryTeam: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users"
    }
  ],
  defeatTeam: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users"
    }
  ]
});

const GameModel = mongoose.model("Game", gameSchema);

module.exports = GameModel;
