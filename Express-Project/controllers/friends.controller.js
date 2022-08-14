const { friends } = require("../Model/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Not able to validate request",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);
  return res.status(201).json(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

function findFriend(req, res) {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Sorry you got no friend :)>" });
  }
}
module.exports = {
  postFriends,
  getFriends,
  findFriend,
};
