const mongoose = require("mongoose");

const navSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: [true, "Logo is required!"],
      index: true,
      trim: true,
    },
    links: [
      {
        title: {
          type: String,
          required: [true, "Title is required!"],
          index: true,
          trim: true,
        },
        path: {
          type: String,
          required: [true, "Path is required!"],
          index: true,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const NavbarModel = mongoose.model("Navbar", navSchema);
module.exports = NavbarModel;
