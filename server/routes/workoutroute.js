const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Workout = require('../models/workout');

const router = express.Router();

const uploadDir = path.join(__dirname, '../videos');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/workout/upload', upload.single('video'), async (req, res) => {
    try {
        const newWorkout = new Workout({
            name: req.body.name,
            address: req.body.address,
            contactNumber: req.body.contactNumber,
            video: {
                filename: req.file.filename,
                originalname: req.file.originalname,
                path: req.file.path,
            },
            category: req.body.category, // Ensure category is saved here
        });

        await newWorkout.save();
        res.json({ message: 'Video uploaded successfully', workoutId: newWorkout._id });
    } catch (error) {
        console.error('Error processing video upload:', error);
        res.status(500).json({ message: 'Error processing video upload' });
    }
});


router.get('/workouts', async (req, res) => {
    try {
        const { category } = req.query;
        const query = category ? { category } : {};
        const workouts = await Workout.find(query);
        const workoutsWithVideoUrl = workouts.map(workout => ({
            ...workout._doc,
            videoUrl: `http://localhost:5000/videos/${workout.video.filename}`
        }));
        res.json(workoutsWithVideoUrl);
    } catch (error) {
        console.error('Error fetching workouts:', error);
        res.status(500).json({ message: 'Error fetching workouts' });
    }
});




module.exports = router;
