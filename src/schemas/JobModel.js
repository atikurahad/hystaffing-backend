const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required !"],
      index: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Title is required !"],
      index: true,
      trim: true,
    },
    img: {
      type: String,
      required: [true, "Title is required !"],
      index: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const JobModel = mongoose.model("Job", jobSchema);
module.exports = JobModel;
