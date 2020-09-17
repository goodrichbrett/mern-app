const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).populate("todos").then((users) => res.json(users));
}