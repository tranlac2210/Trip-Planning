const groupsServices = require('../services/groups.services');

async function get(req, res, next) {
  try {
    res.json(await groupsServices.getGroups());
  } catch (err) {
    console.error(`Error while pulling all groups`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await groupsServices.addGroup(req.body));
  } catch (err) {
    console.error(`Error while adding a new group`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await groupsServices.updateGroup(req.body));
  } catch (err) {
    console.error(`Error while updating a group`);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    // res.json(await groupsServices.removeGroup(req.params.group_id));
    res.json(await groupsServices.removeGroup(req.body));
  } catch (err) {
    console.error(`Error while removing a group`);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
};
