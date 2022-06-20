const model = require("../models/friends.model")

function getFriends(req, res) {
    res.json(model);
}

function getFriendsById (req, res) {
    const friendId = Number(req.params.friendId);
    // console.log(friendId)
    const friend = model[friendId]
    // console.log(friend)
    if (friend) {
        res.status(200).json(friend);
    }
    else {
        res.status(404).json({
            error: "no friend is found!"
        })
    }

}

function postFriends(req, res) {
    if (!req.body.name || !req.body.id) {
        return res.status(400).json({
            error: "Syntax is invalid!"
        });
    }
    const friend = {
        name: req.body.name,
        id: req.body.id
    }
    model.push(friend)
    res.json(friend);
}

module.exports = {
    getFriends,
    getFriendsById,
    postFriends
}