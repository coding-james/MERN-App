const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/caves_db", {
    useNewUrlParser: true
}).then(() => console.log("Connected to Caves MongoDB")).catch(err => console.error(err));

// Make a new schema
const caveSchema = new Schema({
    cave: {
        type: String,
        required: true,
    },
    region: {
        type: String,
    },
    gridRef: {
        type: String,
    },
    length: {
        type: Number,
    },
    depth: {
        type: Number,
    },
    water: {
        type: String,
    },
    equipment: [{ type: String }]
});

const caveModel = mongoose.model("cave", caveSchema); //object with att the mongo functions - you use this to interact with the collection
// When creating it automatically plural version of the name e.g. duck becomes ducks

module.exports = {
    caveModel
};