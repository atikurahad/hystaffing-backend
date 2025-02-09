const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
     type: String,
      required: true
     },
  description: {
     type: String,
      required: true 
    },
    img:{
        type:String
    }

});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
