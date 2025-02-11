const User = require("../schemas/User");



exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate input fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password, 
    });
    await newUser.save();

    res.status(201).json({
      status: "Success",
      message: "User create successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { email } = req.body;

    let data = await User.findOne({ email });

    if (!data) {
      return res.status(404).json({
        status: "Failed",
        message: "No User Found",
      });
    }

    res.status(200).json({
      status: "Success",
      data: data,

    });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e,
    });
  }
};