const mongoose = require("mongoose");

const navbarSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  link: { type: String, required: true },
  isActive: { type: Boolean, default: false }, 
});

const NavbarModel = mongoose.model("Navbar", navbarSchema);
module.exports = NavbarModel;
