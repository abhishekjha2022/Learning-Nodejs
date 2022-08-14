const express = require("express");
const path = require("path");

const friendsRouter = require("./routers/friends.router");
const messagesRouter = require("./routers/messages.router");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`Request completed in ${delta}ms`);
});

app.use("/app", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/friends", friendsRouter);

app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
