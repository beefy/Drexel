var mongoose = require("mongoose");
var boardObject = mongoose.model('board');

exports.getPosts = function (req, res) {

    boardObject.find({}, function (err, gotPosts) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(gotPosts);
        }
    });
}

exports.makePost = function (req, res) {
    var board = new boardObject({
        text: req.body.post_text
    });

    board.save(function () {
        res.send("Saved post: " + req.body.post_text)
    });
}

    //exports.makePost = function (req, res) {
    //    board.save({
    //        text: req.body.post_text
    //    }, function (error, docs) {
    //        res.redirect('/')
    //    })
    //};