const mongoose = require("mongoose");
// require('dotenv/config');

const urln = 'mongodb+srv://man:man@cluster0.tycpere.mongodb.net/cred_app?retryWrites=true&w' +
        '=majority&appName=Cluster0'
const upan= 'https://crud-app-pink-sigma.vercel.app';
const cim = 'mongodb://localhost:27017/crud-app'

mongoose
    .connect(cim, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

module.exports = mongoose;