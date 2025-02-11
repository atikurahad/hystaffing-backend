const ReviewModel = require("../schemas/ReviewModel");

exports.createReview = async (req, res) => {
  try {
    const { title, designation, review } = req.body;

    if (!title || !designation || !review) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newReview = new ReviewModel({
      title,
      designation,
      review,
    });

    await newReview.save();

    res.status(201).json({
      status: "Success",
      message: "Review create successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};

exports.getReview = async (req, res) => {
  const { title } = req.body;
  let data = await User.findOne({ title });
  try {
    if (data > 0) {
      res.status(200).json({
        status: "Success",
        message: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
    });
  }
};
