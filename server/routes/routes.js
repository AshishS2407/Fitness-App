const express = require("express");
const router = express.Router();
const articles = require("../models/articles")
const verifyToken = require('../middleware/authMiddleware')

router.get("/articles", verifyToken, async (req, res) => {
  const details = await articles.find({});
  res.json(details);
});

router.get("/articles/:id", verifyToken, async (req, res) => {
  const articleId = req.params.id;
  const details = await articles.findOne({ articleId: articleId }, { _id: 0 });
  res.json(details);
});

router.post("/articles", verifyToken,async (req, res) => {
  try {
    if (req.userType == "admin") {
    const data = req.body;
    console.log(data);
    const result = await articles.create(data);
    console.log(result)
    res.status(201).json("Added article successfully");
  }
  } catch (error) {
    console.log(error);
    res.status(500).json("error while adding data");
  }
});

router.put("/articles/:id", verifyToken, async (req, res) => {
  const data = req.body;
  const articleId = req.params.id;
  try {
    const result = await articles.findOneAndUpdate(
      { articleId: articleId },
      data,
    );
    if (!result) {
      return res.status(404).send("Article not found");
    }
    res.send("Article updated successfully");
  } catch (error) {
    res.status(500).send("error updating data");
  }
});

router.delete("/articles/:id", verifyToken, async (req, res) => {
  const articleId = req.params.id;
  try {
    const result = await articles.findOneAndDelete({ articleId: articleId });
    if (!result) {
      return res.status(404).send("Article not found");
    }
    res.send("Article deleted successfully");
  } catch (error) {
    res.status(500).send("error deleting data");
  }
});


router.get('/getlwarticles', async (req, res) => {
  try {
      // Fetch articles by both "light weight gain" and "light weight loss" categories
      const lightweightGainArticles = await articles.find({ category: 'light weight gain' }).sort({ title: 1 });
      const lightweightLossArticles = await articles.find({ category: 'light weight loss' }).sort({ title: 1 });

      // Combine the results into an object to send as a response
      res.status(200).json({
          gain: lightweightGainArticles,
          loss: lightweightLossArticles,
      });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

router.get('/getmwarticles', async (req, res) => {
  try {
      const mediumWeightGainArticles = await articles.find({ category: 'medium weight gain' }).sort({ title: 1 });
      const mediumWeightLossArticles = await articles.find({ category: 'medium weight loss' }).sort({ title: 1 });

      // Send both sets of sorted articles as a response
      res.status(200).json({
          gain : mediumWeightGainArticles,
          loss : mediumWeightLossArticles
      });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

router.get('/gethwarticles', async (req, res) => {
  try {
      // Fetch and sort articles by category "heavy weight loss"
      const heavyWeightLossArticles = await articles.find({ category: 'heavy weight loss' }).sort({ title: 1 });
      
      // Send the sorted articles as a response
      res.status(200).json({ heavyWeightLossArticles });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});





module.exports = router;
