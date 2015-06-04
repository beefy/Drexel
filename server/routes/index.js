var mongoose = require("mongoose");
var board = mongoose.model('board');

exports.getPosts = function (req, res) {

    board.find({}, function (err, gotPosts) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(gotPosts);
        }
    });
}

exports.makePost = function (req, res) {
    var board = new board({
        text: req.body.post_text
    });

    board.save(function () {
        res.send("Saved post: " + req.body.post_text)
    });
};