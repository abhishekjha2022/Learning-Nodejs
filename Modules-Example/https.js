const { send } = require("./request.js");
const { read } = require("./response.js");

function request(url, data) {
  send(url, data);
  return read();
}

console.log(request("https://google.com", "hello"));
