const express = require("express");
const mongoose = require("mongoose");

let router = express.Router();
let { url } = require("./../model/url.js");

router.get("/new/:shorten" , (req , res) => {
    let shortenUrl = req.params.shorten;
    url.find({"shortUrl" : shortenUrl}).then(data => {
        res.redirect(data[0].url);
    }).catch(err => console.log(err));
});

module.exports = router;