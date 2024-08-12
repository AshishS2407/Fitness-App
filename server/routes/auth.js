const express = require("express");
const router = express.Router();
const User = require("../models/User");
const verifyToken = require("../middleware/authMiddleware");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// User registration
router.post("/register", async (req, res) => {
  try {
    const { userName, password, email, weight } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username: userName,
      password: hashedPassword,
      email,
      userType: "user", // Set userType to "user"
      weight,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/admin-register", async (req, res) => {
  try {
    const { userName, password, email, weight } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username: userName,
      password: hashedPassword,
      email,
      userType: "admin", // Set userType to "user"
      weight,
    });
    await user.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: "Registration failed" });
  }
});


// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    const user = await User.findOne({ email });
    console.log(user, "user");
    if (!user) {
      return res
        .status(401)
        .json({ error: "Authentication failed- User doesn't exists" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Authentication failed- password doesn't match" });
    }
    const token = jwt.sign(
      { userId: user._id, userType: user.userType, weight:user.weight},
      "your-secret-key",
      {
        expiresIn: "1h",
      }
    );

    res.cookie("Authtoken", token);
    res.json({
      status: true,
      message: "login success",
      token,
      userType: user.userType,
      weight: user.weight
    });
    //  console.log('/login in the bakend res', res)
    return res;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
});



router.put("/update-user-type", verifyToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.userId, // Use the userId from the verified token
      { userType: req.body.newUserType },
      { new: true }
    );
    console.log("test")

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User type updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});


// Logout
router.get("/logout", (req, res) => {
  res.clearCookie("Authtoken");
  res.status(200).send("Logout successful");
  return res;
});

module.exports = router;
