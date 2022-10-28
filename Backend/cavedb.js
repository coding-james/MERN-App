const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/caves_db", {
    useNewUrlParser: true
}).then(() => console.log("Connected to Caves MongoDB")).catch(err => console.error(err));

// Make a new schema
const caveSchema = new mongoose.Schema({
    caveName: {
        type: String,
        required: true,
    },
    region: {
        type: String,
    },
    gridRef: {
        type: String,
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