const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Abhishek",
  },
  {
    id: 1,
    name: "Binod",
  },
  {
    id: 2,
    name: "Prabesh",
  },
];

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Sorry you got no friend :)>" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
