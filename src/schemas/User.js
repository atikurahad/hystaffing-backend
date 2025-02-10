const mongoose = require("mongoose");
const { index } = require("./ReviewModel");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      index: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      index: true,
      trim: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
