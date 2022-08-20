const tripsServices = require('../services/trips.services');

async function get(req, res, next) {
  try {
    res.json(await tripsServices.getTrips());
  } catch (err) {
    console.error(`Error while pulling all trips`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await tripsServices.addTrip(req.body));
  } catch (err) {
    console.error(`Error while adding a new trip`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await tripsServices.updateTrip(req.body));
  } catch (err) {
    console.error(`Error while updating a trip`);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await tripsServices.removeTrip(req.body))
  } catch (err) {
    console.error(`Error while removing a trip`);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};
