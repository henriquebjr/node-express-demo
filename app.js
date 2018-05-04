var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

var friends = ["Sheik", "Tufão"];

app.get("/friends", (req, res) => {
    res.render("friends", {friends: friends});
});

app.post("/friends", (req, res) => {
    var newFriend = req.body.name;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Running on port " + process.env.PORT);
});

