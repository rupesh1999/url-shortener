const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const urlExists = require("url-exists");

let { url } = require("./../model/url.js");

router.get("/goto/:url(*)", (req, res) => {
    var url = req.params.url;
    urlExists(url, function (err, exists) {
        if (exists) {
            console.log(url);
            res.send({
                "URL": url,
                "shortened Url": 1
            });
        } else {
            console.log(url);
            res.send({
                error: "Invalid Url Entered"
            });
        }
    });

});

module.exports = router;