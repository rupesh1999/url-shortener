const urlExists = require('url-exists');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();
const port = 8000;
let publicPath = path.join(__dirname + "/../public");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));
let post = require("./../route/post.js");
let redirect = require("./../route/new.js");
require("./../config/DB.js");

app.get("/goto/:url(*)", post);

app.get("/new/:shorten" , redirect);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});