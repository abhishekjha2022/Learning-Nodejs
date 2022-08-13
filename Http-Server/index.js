const http = require("http");

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
const server = http.createServer((req, res) => {
  const items = req.url.split("/");
  if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const friendIndex = +items[2];
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello</li>");
    res.write("<li>Hy</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("<html>");
    res.end();
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.end("hey hey");
  }
});

server.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
