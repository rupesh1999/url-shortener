const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const urlExists = require("url-exists");
let length;

let { url } = require("./../model/url.js");

router.get("/goto/:url(*)", (req, res) => {
    var URL = req.params.url;
    urlExists(URL, function (err, exists) {
        if (exists) {
            console.log(URL);
        
            let count = url.find().count({} , (err , data) => {
                url.findOne({"url" : URL})
                .then(doccument => {
                    if(doccument === null) {
                        let obj = {
                            "url": URL,
                            "shortUrl": data + 1
                        };
                        new url(obj).save().then((item) => {
                            console.log(item);
                            res.json(item);
                        }).catch(err => console.log(err));
                    }else {
                        res.send(doccument);
                    }
                }).catch(err => console.log(err));
            });
        } else {
            console.log(URL);
            res.send({
                error: "Invalid Url Entered"
            });
        }
    });

});

module.exports = router;