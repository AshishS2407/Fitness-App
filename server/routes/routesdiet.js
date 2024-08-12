const express = require("express");
const router = express.Router();
const dietplans = require ("../models/dietplans")
const verifyToken = require('../middleware/authMiddleware')

router.get("/dietplans", verifyToken, async (req, res) => {
  const details = await dietplans.find({});
  res.json(details);
});

router.get("/dietplans/:id", verifyToken, async (req, res) => {
  const dietplanId = req.params.id;
  const details = await dietplans.findOne({ dietplanId: dietplanId }, { _id: 0 });
  res.json(details);
});

router.post("/dietplans",verifyToken, async (req, res) => {
  try {
    if (req.userType == "admin") {
    const data = req.body;
    console.log(data);
    const result = await dietplans.create(data);
    console.log(result)
    res.status(201).json("Added diet plan successfully");
  }
  } catch (error) {
    console.log(error);
    res.status(500).json("error while adding data");
  }
});

router.put("/dietplans/:id",verifyToken, async (req, res) => {
  const data = req.body;
  const dietplanId = req.params.id;
  try {
    const result = await dietplans.findOneAndUpdate(
      { dietplanId: dietplanId },
      data,
    );
    if (!result) {
      return res.status(404).send("Diet not found");
    }
    res.send("Diet updated successfully");
  } catch (error) {
    res.status(500).send("error updating data");
  }
});

router.delete("/dietplans/:id", verifyToken, async (req, res) => {
  const dietplanId = req.params.id;
  try {
    const result = await dietplans.findOneAndDelete({ dietplanId: dietplanId });
    if (!result) {
      return res.status(404).send("Diet plan not found");
    }
    res.send("Diet plan deleted successfully");
  } catch (error) {
    res.status(500).send("error deleting data");
  }
});

// In your backend file (e.g., dietplans.js or a similar file)
router.get('/gethwdietplans', async (req, res) => {
  try {
      // Fetch and sort diet plans by category "heavy weight loss"
      const heavyWeightLossDietPlans = await dietplans.find({ category: 'heavy weight loss' }).sort({ title: 1 });
      
      // Send the sorted diet plans as a response
      res.status(200).json(heavyWeightLossDietPlans);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// In your backend file (e.g., dietplans.js or a similar file)
router.get('/getlwdietplans', async (req, res) => {
  try {
      // Fetch diet plans by both "light weight gain" and "light weight loss" categories
      const lightWeightGainDietPlans = await dietplans.find({ category: 'light weight gain' }).sort({ title: 1 });
      const lightWeightLossDietPlans = await dietplans.find({ category: 'light weight loss' }).sort({ title: 1 });

      // Combine the results into an object to send as a response
      res.status(200).json({
          gain: lightWeightGainDietPlans,
          loss: lightWeightLossDietPlans,
      });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

router.get('/getmwdietplans', async (req, res) => {
  try {
      const mediumWeightGainDietPlans = await dietplans.find({ category: 'medium weight gain' }).sort({ title: 1 });
      const mediumWeightLossDietPlans = await dietplans.find({ category: 'medium weight loss' }).sort({ title: 1 });

      // Send both sets of sorted articles as a response
      res.status(200).json({
          gain : mediumWeightGainDietPlans,
          loss : mediumWeightLossDietPlans
      });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


module.exports = router;
