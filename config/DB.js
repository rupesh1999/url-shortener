var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://rupesh:gokussj10@ds159110.mlab.com:59110/ulr-shortener")
.then(() => console.log("mongodb connected"))
.catch((e) => console.log(e));