const { response } = require('express');
const tripModel = require('../models/trips.model');

async function getTrips() {
  const trips = await tripModel.find({});
  try {
    return trips;
  } catch (error) {
    response.status(500).send(error);
  }
}

async function addTrip(data) {
  const trip = new tripModel(data);
  try {
    await trip.save();
    const message = 'Add new trip successfully.';
    return { message, trip };
  } catch (error) {
    response.status(500).send(error);
  }
}

async function updateTrip(data) {
  // const trip = await tripModel.findOneAndUpdate({});
  const [filter, updateData] = [...data];
  const updateOperation = await tripModel.updateOne(filter, updateData);
  const updatedTrip = await tripModel.findOne(filter);
  try {
    const message = 'Update new trip sucessfully.';
    return {message, updatedTrip};
  } catch (err) {
    response.status(500).send(error);
  }
}

async function removeTrip(trip_id) {
  const trip = await tripModel.deleteOne(trip_id);
  try {
    const message ="Delete trip sucessfully.";
    return {message, trip};
  } catch (error) {
    response.status(500).send(error)
  }
}

module.exports = {
  getTrips,
  addTrip,
  updateTrip,
  removeTrip
};
