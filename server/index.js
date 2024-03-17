const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection setup
mongoose
    .connect('mongodb+srv://man:man@cluster0.tycpere.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

// Allow all origins to access the API endpoints
app.use(cors());

app.use(express.json());

// Include your routes file
const createCrudRoute = require('./routes/createRoutes');
app.use('/api', createCrudRoute);

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});













// // const express = require ("express");
// // const app = express()

// // app.use("/",(req,res)=>{
// //     res.send("server is running");
// // });

// // app.listen(5000,console.log("server is up"))

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// // require("dotenv/config");
// const app = express();

// // Allow all origins to access the API endpoints
// app.use(cors());

// app.use(express.json());

// const db = require('../db');

// const createCrudRoute = require('../routes/createRoutes');

// app.use(bodyParser.json());
// app.use('/api', createCrudRoute);

// // const port = process.env.PORT || 3000;
// // app.listen(port, () => {
// //     console.log(`Port is running on - http://localhost:${port}`);
// // });
// app.listen(3000,console.log("server is up"))