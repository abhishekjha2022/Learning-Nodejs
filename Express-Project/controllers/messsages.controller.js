const path = require("path");
function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "avisek.png"));
}

module.exports = {
  getMessages,
};
