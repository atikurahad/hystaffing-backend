const mongoose = require('mongoose')

const reviewSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required!"],
        index: true,
        trim: true,
    },
    designation:{
        type:String,
        required:[true,"Designation is required!"],
        index: true,
        trim: true,
    },

},{timestamps:true,versionKey:false})


const ReviewModel =("review",reviewSchema);
module.exports = ReviewModel;