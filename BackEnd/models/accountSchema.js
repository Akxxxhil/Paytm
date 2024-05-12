const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userName: {
    type:String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Account", accountSchema);
