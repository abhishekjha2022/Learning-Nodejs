const express = require("express");
const { getMessages } = require("../controllers/messsages.controller");

const messagesRouter = express.Router();

messagesRouter.get("/", getMessages);

module.exports = messagesRouter;
