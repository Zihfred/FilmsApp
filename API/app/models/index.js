const dbConfig = require("../../db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.films = require("./films.model.js")(mongoose);

module.exports = db;
