const mongoose = require("mongoose");
let schema = mongoose.Schema;

const urlSchema = new schema({
    url: {
        type: "string",
        required: true
    },
    shortUrl: {
        type: "string",
        required: true
    }
});

const url = mongoose.model("url" , urlSchema);

module.exports = {
    url
};