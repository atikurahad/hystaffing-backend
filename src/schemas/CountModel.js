const mongoose = require("mongoose");

const countSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
      index: true,
      trim: true,
    },
    count: {
      type: String,
      required: [true, "Count is required"],
      index: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const CountModel = mongoose.model("Count", countSchema);
module.exports =  m;
