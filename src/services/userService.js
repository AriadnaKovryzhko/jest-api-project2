
let users = [];
let id = 1;

exports.getAll = () => users;

exports.create = (name) => {
  const user = { id: id++, name };
  users.push(user);
  return user;
};

exports._reset = () => {
  users = [];
  id = 1;
};
