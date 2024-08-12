const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const routes = require("./routes/routes");
const routesdiet = require("./routes/routesdiet");
const auth = require('./routes/auth');
const path = require ("path")
const messageRoutes = require('./routes/messageRoutes'); // Import the message routes
const workoutRoutes = require('./routes/workoutroute')

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/", auth);
app.use("/", routes);
app.use("/", routesdiet);
app.use("/", messageRoutes); // Use the message routes
app.use("/", workoutRoutes)
// Correctly serving static files from the 'public' folder
app.use('/videos', express.static(path.join(__dirname, 'videos')));




const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect("mongodb://mongodb:27017/kuis");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
