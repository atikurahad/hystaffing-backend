const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("../schemas/User");

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate input fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//LogIn Route

router.post("/login", async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    if (user && user.length > 0) {
      const matchPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (matchPassword) {
        // Generate JWT token
        const token = jwt.sign(
          {
            id: newUser._id,

            email: newUser.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.status(200).json({
          "Access Token": token,
          Message: "LogIn successfull",
        });
      } else {
        res.status(401).json({
          Error: "Authentication Error",
        });
      }
    } else {
      res.status(401).json({
        Error: "Authentication Error",
      });
    }
  } catch {
    res.status(401).json({
      Error: "Authentication Error",
    });
  }
});

router.post('/navbar',async(req,res)=>{
      
})

module.exports = router;
