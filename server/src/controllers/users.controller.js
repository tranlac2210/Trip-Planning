const usersServices = require('../services/users.services');

async function get(req, res, next) {
  try {
    res.json(await usersServices.getUsers());
  } catch (err) {
    console.error(`Error while pulling all users`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await usersServices.addUser(req.body));
  } catch (err) {
    console.error(`Error while adding a new user`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await usersServices.updateUser(req.body));
  } catch (err) {
    console.error(`Error while updating a user`);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await usersServices.removeUser(req.body))
  } catch (err) {
    console.error(`Error while removing a user`);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};
