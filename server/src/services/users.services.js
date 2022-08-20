const { response } = require('express');
const userModel = require('../models/users.model');

// async function getUsers() {
//   const users = await userModel.find({});
//   console.log(users)
//   try {
//     return users;
//   } catch (error) {
//     response.status(500).send(error);
//   }
// }

async function getUsers(data) {
  const [filter, findUser] = [...data];
  const users = await userModel.findOne(filter);
  console.log(users)
  try {
    return users;
  } catch (error) {
    response.status(500).send(error);
  }
}

async function addUser(data) {
  const user = new userModel(data);
  try {
    await user.save();
    const message = 'Add new user successfully.';
    return { message, user };
  } catch (error) {
    response.status(500).send(error);
  }
}

async function updateUser(data) {
  // const user = await userModel.findOneAndUpdate({});
  const [filter, updateData] = [...data];
  const updateOperation = await userModel.updateOne(filter, updateData);
  const updateduser = await userModel.findOne(filter);
  try {
    const message = 'Update new user sucessfully.';
    return {message, updateduser};
  } catch (err) {
    response.status(500).send(error);
  }
}

async function removeUser(user_id) {
  const user = await userModel.deleteOne(user_id);
  try {
    const message ="Delete user sucessfully.";
    return {message, user};
  } catch (error) {
    response.status(500).send(error)
  }
}

module.exports = {
  getUsers,
  addUser,
  updateUser,
  removeUser
};
