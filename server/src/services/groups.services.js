const { response } = require('express');
const groupModel = require('../models/groups.model');
// const { request } = require('express');

async function getGroups() {
  const groups = await groupModel.find({});
  try {
    return groups;
  } catch (error) {
    response.status(500).send(error);
  }
}

async function addGroup(data) {
  const group = new groupModel(data);
  try {
    await group.save();
    const message = 'Add new group successfully.';
    return { message, group };
  } catch (error) {
    response.status(500).send(error);
  }
}

async function updateGroup(data) {
  const [filter, updateData] = [...data];
  const updateOperation = await groupModel.updateOne(filter, updateData);
  const updatedGroup = await groupModel.findOne(filter);
  try {
    const message = 'Update new group sucessfully.';
    return { message, updatedGroup };
  } catch (err) {
    response.status(500).send(error);
  }
}

async function removeGroup(group_id) {
  // const group = await groupModel.findOneAndDelete({})
  // console.log('group_id', group_id);
  // const group = await groupModel.deleteOne({ group_id: group_id });
  const group = await groupModel.deleteOne(group_id);
  try {
    const message ="Delete group sucessfully.";
    return {message, group};
  } catch (error) {
    response.status(500).send(error);
  }
}

module.exports = {
  getGroups,
  addGroup,
  updateGroup,
  removeGroup,
};
