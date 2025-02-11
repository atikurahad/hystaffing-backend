// const mongoose = require('mongoose')

// const reviewSchema =  new mongoose.Schema({
//     title:{
//         type:String,
//         required:[true,"Title is required!"],
//         index: true,
//         trim: true,
//     },
//     designation:{
//         type:String,
//         required:[true,"Designation is required!"],
//         index: true,
//         trim: true,
//     },
//     review:{
//         type:String,
//         required:[true,"Review is required!"],
//         index: true,
//         trim: true,
//     },

// },{timestamps:true,versionKey:false})

// const ReviewModel =("Review",reviewSchema);
// module.exports = ReviewModel;

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    designation: { type: String, required: true },
    review: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;