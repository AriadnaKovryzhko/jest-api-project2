
const service = require('../services/userService');

exports.getUsers = (req, res) => {
  res.json(service.getAll());
};

exports.createUser = (req, res) => {
  const user = service.create(req.body.name);
  res.status(201).json(user);
};
