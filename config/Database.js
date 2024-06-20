const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://dipeshmehta2000:dipesh2000@cluster0.otmh6hd.mongodb.net/");
    console.log("MOngodb Atlas Connected");
}

module.exports = db;