const express = require("express");
const {
  postFriends,
  getFriends,
  findFriend,
} = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

friendsRouter.post("/", postFriends);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendId", findFriend);

module.exports = friendsRouter;
